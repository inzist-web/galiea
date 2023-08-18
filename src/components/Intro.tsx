import Link from "next/link"
import Image from 'next/image'
import '@/blocks/intro.scss'
import office from '@/images/office.png'
import writing from '@/images/writing.png'
import bridge from '@/images/bridge.png'

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro__content">
        <h1 className="intro__header">Бухгалтерская компания «Галиэя»</h1>
        <p className="intro__text">Качественное и надежное бухгалтерское обслуживание, которое позволит вам не отвлекаться от любимого дела</p>
        <a href="#questions" className="intro__link">
          <p className="intro__link-text">Связаться</p>
          <img src="./icons/send.svg" alt="" className="intro__link-icon"/>
        </a>
      </div>
      <div className="intro__composition-container">
        <div className="intro__image-composition">
          <img src="./intro-bg.svg" alt="" className="intro__background" />
          <h2 className="intro__image-text">Ваше спокойствие — наша забота</h2>
          <img src="./logo.svg" alt="логотип" className="intro__logo" />
          <Image src={office} alt="" className="intro__image_position_top" />
          <Image src={writing} alt="" className="intro__image_position_left" />
          <Image src={bridge} alt="" className="intro__image_position_right" />
        </div>
      </div>
    </section>
  )
}