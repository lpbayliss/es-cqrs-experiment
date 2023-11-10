import { z } from 'zod';
import { contract } from './index.js';

export const membershipsContract = contract.router(
  {
    createMembership: {
      method: 'PUT',
      path: '/memberships',
      responses: {
        202: z.object({ meta: z.object({}).nullable() }),
      },
      body: z.object({ name: z.string() }),
    },
    // fetchMembership: {
    //   method: 'GET',
    //   path: '/memberships/:id',
    //   responses: {
    //     202: z.array(
    //       z.object({ id: z.string(), name: z.string(), balance: z.string() }),
    //     ),
    //   },
    // },
    // creditMembershipBalance: {
    //   method: 'PUT',
    //   path: '/memberships/balance',
    //   responses: {
    //     202: z.array(z.object({ id: z.string(), name: z.string() })),
    //   },
    //   body: z.object({ name: z.string() }),
    // },
    // debitMembershipBalance: {
    //   method: 'PUT',
    //   path: '/memberships/balance',
    //   responses: {
    //     202: z.array(z.object({ id: z.string(), name: z.string() })),
    //   },
    //   body: z.object({ name: z.string() }),
    // },
  },
  {
    pathPrefix: '/api',
  },
);
