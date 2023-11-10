import Queue from 'bee-queue';
import configService from './config.service.js';
import { createClient } from 'redis';

const sharedConfig = {
  redis: createClient({
    url: configService.redisUrl,
  }),
};

export const DomainQueue = new Queue('domain-events', sharedConfig);
export const IntegrationQueue = new Queue('integration-events', sharedConfig);
