import { logger } from '../../services/logger.service.js';
import { makeCreateMembershipUseCase } from './create-membership.use-case.js';

export const createMembershipUseCase = makeCreateMembershipUseCase(
  logger.child({ useCase: 'createMembership' }),
);
