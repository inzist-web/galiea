import React from 'react'
import '@/blocks/prefooter.scss'
import map from '@/images/map.png'
import Image from 'next/image'

export default function PreFooter() {
  return (
    <section className="prefooter">
      <a href="https://yandex.ru/maps/-/C-xuUvc" target="_blank" className="prefooter__map">
        <Image src={map} alt="карта" className="prefooter__image" />
      </a>
      <div className="prefooter__content">
        <div className="prefooter__wrapper">
          <h2 className="prefooter__title">Где мы находимся?</h2>
          <p className="prefooter__text">Санкт-Петербург, Кронштадт, пр.&nbsp;Ленина, д.&nbsp;16, оф.&nbsp;335</p>
        </div>
        <a href="https://yandex.ru/maps/-/C-xuUvc" className="prefooter__link" target="_blank">Открыть в Картах</a>
      </div>
    </section>
  )
}
