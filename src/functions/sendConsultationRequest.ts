'use server';
type CustomerData = {
  name: string,
  phone: number
}

export const sendConsultationResults = async ({name, phone}: CustomerData) => {
  if (/\d/.test(String(phone)))
  console.log(`Заявка на сайте:
  Имя: ${name}
  Телефон: +7${phone}`)
}