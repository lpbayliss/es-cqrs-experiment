import { db } from '../database/index.js';
import { logger } from '../services/logger.service.js';
import { DomainQueue } from '../services/queue.service.js';
import { makeDomainEventWorker } from './domain-event.worker.js';

export const initWorkers = () => {
  makeDomainEventWorker(logger, DomainQueue, db);
};
