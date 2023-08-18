'use client';
// import { sendConsultationResults } from "@/functions/sendConsultationRequest"
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form"
import '@/blocks/questions.scss'
import Confirmation from "./Confirmation";
export const dynamic = 'error'

type Data = {
  name: string,
  phone: string
}

export default function Questions() {
  const { register, formState: {errors}, reset, handleSubmit } = useForm<Data>()
  const [isPending, startTransition] = useTransition()

  const [success, setSuccess] = useState(false)
  
  // const formSubmit = (formData: Data) => {
  //   formData.phone = formData.phone.replace(/(^8|7|\+7)/, '')
  //   startTransition(() => {sendConsultationResults({
  //     name: formData.name,
  //     phone: Number(formData.phone)
  //   }).then(success => {
  //     setSuccess(success);
  //     setTimeout(() => {setSuccess(false)}, 2500)
  //   })})
  //   reset()
  // }

  return (
    <section className="questions" id="questions">
      <form onSubmit={() => {setSuccess(success); setTimeout(() => {setSuccess(false)}, 2500)}} className="questions__form">
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
      <Confirmation isOpen={success} />
    </section>
  )
}