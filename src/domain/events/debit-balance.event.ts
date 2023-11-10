import { z } from 'zod';

export const debitBalanceEventSchema = z.object({
  type: z.literal('CREDIT_BALANCE'),
  data: z.object({
    member_id: z.string().nonempty(),
    delta: z.number().negative(),
  }),
});

export type DebitBalanceEvent = z.infer<typeof debitBalanceEventSchema>;
