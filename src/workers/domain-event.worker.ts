import Queue from 'bee-queue';
import { DomainEvents } from '../domain/events/index.js';
import { FastifyBaseLogger } from 'fastify';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from '../database/schema.js';
import { v4 } from 'uuid';
import { CreateBalanceEvent } from '../domain/events/create-balance.event.js';

export const makeDomainEventWorker = (
  logger: FastifyBaseLogger,
  domainQueue: Queue<DomainEvents>,
  db: PostgresJsDatabase<typeof schema>,
) => {
  domainQueue.process(async (job) => {
    logger.info({ event: job.data }, 'Domain event received');

    // Handle event
    switch (job.data.type) {
      case 'CREATE_MEMBERSHIP': {
        const membershipId = v4();

        await db
          .insert(schema.events)
          .values({
            aggregateId: membershipId,
            type: job.data.type,
            data: job.data.data,
          })
          .execute();
        logger.info({ event: job.data }, 'Event saved to store');

        const event: CreateBalanceEvent = {
          type: 'CREATE_BALANCE',
          data: {
            membershipId: membershipId,
            amount: 0,
          },
        };
        logger.info({ event }, 'Create balance event created');

        domainQueue.createJob(event).save();
        logger.info('Create balance event published');

        return;
      }
      case 'CREATE_BALANCE': {
        // Save event to event store
        await db
          .insert(schema.events)
          .values({
            aggregateId: job.data.data.membershipId,
            type: job.data.type,
            data: job.data.data,
          })
          .execute();
        logger.info({ event: job.data }, 'Event saved to store');

        return;
      }
      default:
        return;
    }
  });
};
