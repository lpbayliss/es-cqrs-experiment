import { FastifyBaseLogger } from 'fastify';
import Queue from 'bee-queue';
import { CreateMembershipInput } from '../inputs/create-membership.input.js';
import { CreateMembershipEvent } from '../../domain/events/create-membership.event.js';

export const makeCreateMembershipUseCase = (
  logger: FastifyBaseLogger,
  domainQueue: Queue<CreateMembershipEvent>,
) => {
  // do things
  const execute = (input: CreateMembershipInput) => {
    logger.info({ input }, 'Create membership use case called');

    const event: CreateMembershipEvent = {
      type: 'CREATE_MEMBERSHIP',
      data: {
        name: input.name,
      },
    };
    logger.info({ event }, 'Create membership event created');

    domainQueue.createJob(event).save();
    logger.info('Create membership event published');

    return true;
  };

  return {
    execute,
  };
};
