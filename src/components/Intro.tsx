import Link from "next/link";

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro__content">
        <h1 className="intro__header">Бухгалтерская компания «Галиэя»</h1>
        <p className="intro__text">Качественное и надежное бухгалтерское обслуживание, которое позволит вам не отвлекаться от любимого дела</p>
        <Link href="/" className="intro__link">
          <p className="header__link-text">Связаться</p>
          <img src="" alt="" className="header__link-icon"/>
        </Link>
      </div>
      <div className="intro__image-wrapper">
        <h2 className="intro__image-text">Ваше спокойствие — наша забота</h2>
      </div>
    </section>
  )
}