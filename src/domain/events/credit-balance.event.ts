import { z } from 'zod';

export const creditBalanceEventSchema = z.object({
  type: z.literal('CREDIT_BALANCE'),
  data: z.object({
    member_id: z.string().nonempty(),
    delta: z.number().positive(),
  }),
});

export type CreditBalanceEvent = z.infer<typeof creditBalanceEventSchema>;
