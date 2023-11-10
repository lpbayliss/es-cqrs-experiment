import { z } from 'zod';
import { balanceAggregateSchema } from './balance.aggregate.js';

export const membershipAggregateSchema = z.object({
  id: z.string(),
  type: z.literal('MEMBERSHIP'),
  balance: balanceAggregateSchema,
});

export type MembershipAggregate = z.infer<typeof membershipAggregateSchema>;
