import * as z from 'zod'

export const SignUpValidation = z.object({
  name: z.string().min(2, { message: 'Too short' }),
  username: z.string().min(2, { message: 'Too short' }).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password mast be at least 8 characters' }),
})
