import { initServer } from '@ts-rest/fastify';
import { createMembershipUseCase } from '../application/use-cases/index.js';
import { membershipsContract } from '../contracts/memberships.contract.js';

export const membershipsRouter = initServer().router(membershipsContract, {
  createMembership: async ({ body }) => {
    const result = createMembershipUseCase.execute(body);
    return {
      status: result ? 202 : 500,
      body: { meta: null },
    };
  },
});
