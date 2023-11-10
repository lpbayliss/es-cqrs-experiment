import { z } from 'zod';

export const createBalanceEventSchema = z.object({
  type: z.literal('CREATE_BALANCE'),
  data: z.object({
    membershipId: z.string(),
    amount: z.number().nonnegative(),
  }),
});

export type CreateBalanceEvent = z.infer<typeof createBalanceEventSchema>;
