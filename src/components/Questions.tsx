'use client';
import { sendConsultationResults } from "@/functions/sendConsultationRequest"
import { useRef, useTransition } from "react";
import { Controller, useForm } from "react-hook-form"
import '@/blocks/questions.scss'
export const dynamic = 'error'

type Data = {
  name: string,
  phone: string
}

function formatPhoneNumber(value: string) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 9)}`;
}

export default function Questions() {
  const { register, formState: {errors}, reset, handleSubmit } = useForm<Data>()
  const [isPending, startTransition] = useTransition()
  
  const formSubmit = (formData: Data) => {
    formData.phone = formData.phone.replace(/(^8|7|\+7)/, '')
    startTransition(() => sendConsultationResults({
      name: formData.name,
      phone: Number(formData.phone)
    }))
    reset()
  }

  const ref = useRef()

  return (
    <section className="questions">
      <form onSubmit={handleSubmit(formSubmit)} className="questions__form">
        <div className="questions__info">
          <h2 className="questions__title">Остались вопросы?</h2>
          <p className="questions__description">Оставьте заявку и&nbsp;мы с вами свяжемся</p>
        </div>
        <fieldset className="questions__fields">
          <label>
            <input type="text" className="questions__input" placeholder="Имя" {...register("name", {required: 'Это обязательное поле', minLength: 2, maxLength: 40})} />
            <span className="questions__input-error">{errors?.name && String(errors.name.message)}</span>
          </label>
          <label>
            <input type="tel" className="questions__input" placeholder="Номер телефона" {...register("phone", {required: 'Это обязательное поле', pattern: {
              value: /(^8|7|\+7)\d{10}/,
              message: 'Введите корректный номер'
            }})} />
            <span className="questions__input-error">{errors?.phone && String(errors.phone.message)}</span>
          </label>
        </fieldset>
        <button className="questions__submit" type="submit">{isPending ? 'Отправка' : 'Отправить'}</button>
      </form>
    </section>
  )
}