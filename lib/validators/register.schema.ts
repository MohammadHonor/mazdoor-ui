import z from 'zod';

export const registerSchema = z
  .object({
    userName: z.string({ required_error: 'Username is required' }).min(5, { message: 'name is required' }),
    email: z.string({ required_error: 'Email is required' }).email('Enter a valied email address'),
    password: z
      .string({ required_error: 'Password is required' })
      .min(6, { message: 'Password must be atleast 6 character' }),
    confirmPassword: z.string({ required_error: 'Password is required' }),
    role: z.enum(['Owner', 'Worker'], {
      required_error: 'Role is required',
    }),
    profession: z.enum(['Architecture', 'Labour', 'Carpenter', 'Electrician', 'Plumber'], {
      required_error: 'Profession is required',
    }),
    mobileNumber: z.string({ required_error: 'Mobile number is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
