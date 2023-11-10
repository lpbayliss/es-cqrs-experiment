import { z } from 'zod';

export const createMembershipInputSchema = z.object({
  name: z.string(),
});

export type CreateMembershipInput = z.infer<typeof createMembershipInputSchema>;
