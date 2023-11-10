import { z } from 'zod';

export const balanceAggregateSchema = z.object({
  id: z.string(),
  type: z.literal('BALANCE'),
  memberId: z.string(),
  balance: z.string(),
});

export type BalanceAggregate = z.infer<typeof balanceAggregateSchema>;
