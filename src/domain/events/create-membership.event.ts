import { z } from 'zod';

export const createMembershipEventSchema = z.object({
  type: z.literal('CREATE_MEMBERSHIP'),
  data: z.object({
    name: z.string().nonempty(),
  }),
});

export type CreateMembershipEvent = z.infer<typeof createMembershipEventSchema>;
