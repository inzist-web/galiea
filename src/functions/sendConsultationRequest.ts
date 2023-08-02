'use server';

import { z, ZodSchema } from 'zod'

type CustomerData = {
  name: string,
  phone: number
}

const CustomerDataScheme: ZodSchema<CustomerData> = z.object({
  name: z.string().max(24).min(3),
  phone: z.number().min(1000000000).max(9999999999)
})

export const sendConsultationResults = async (userData: CustomerData) => {
  if (CustomerDataScheme.safeParse(userData).success)
  console.log(`Заявка на сайте:
  Имя: ${userData.name}
  Телефон: +7${userData.phone}`)
  else console.log("Ты, ян")
}