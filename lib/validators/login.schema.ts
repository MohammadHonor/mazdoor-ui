import z from 'zod';

export const loginSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email('Enter a valied email address'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be atleast 6 character' }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
