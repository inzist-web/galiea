'use server';

import { Telegraf } from 'telegraf';
import { z, ZodSchema } from 'zod'

type CustomerData = {
  name: string,
  phone: number
}

const bot = new Telegraf(process.env.TOKEN!)

const CustomerDataScheme: ZodSchema<CustomerData> = z.object({
  name: z.string().max(24).min(3),
  phone: z.number().min(1000000000).max(9999999999)
})

export const sendConsultationResults = async (userData: CustomerData) => {
  if (CustomerDataScheme.safeParse(userData).success)
  bot.telegram.sendMessage(String(process.env.USER_ID!), `Заявка на сайте:
  Имя: ${userData.name}
  Телефон: +7${userData.phone}`).catch(err => console.log(err))
  else return 'Ошибка, неверные данные'
}