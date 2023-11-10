import { FastifyBaseLogger } from 'fastify';
import { CreateMembershipInput } from '../inputs/create-membership.input.js';

export const makeCreateMembershipUseCase = (logger: FastifyBaseLogger) => {
  // do things
  const execute = (input: CreateMembershipInput) => {
    logger.info('Creating membership', { input });
    return true;
  };

  return {
    execute,
  };
};
