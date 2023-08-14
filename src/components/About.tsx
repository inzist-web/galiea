import '@/blocks/about.scss'
import Image from 'next/image'
import aboutOffice from '@/images/about-office.png'
import house from '@/images/house.png'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__wrapper-points">
        <div className="about__point">
          <h2 className="about__point-header about__point-header_active">Не&nbsp;затратно</h2>
          <p className="about__point-text">Мы дешевле главбуха!</p>
          <div className="about__horizontal-line_wide"></div>
        </div>
        <div className="about__vertical-line"></div>
        <div className="about__point">
          <h2 className="about__point-header">Удобно</h2>
          <p className="about__point-text">Мы ориентированы на Ваши желания! Вас ничего не будет отвлекать от вашего дела.</p>
        </div>
        <div className="about__vertical-line"></div>
        <div className="about__point">
          <h2 className="about__point-header">Надёжно</h2>
          <p className="about__point-text">Мы сотрудничаем с нашими клиентами многие годы! Вам не о чем будет переживать.</p>
        </div>
      </div>
      <div className="about__wrapper-content">
        <div className="about__image-wrapper">
          <div className="about__image-text-wrapper">
            <h2 className="about__image-text">О нас</h2>
            <Image src={aboutOffice} alt='' className='about__image about__image_type_office' />
            <Image src={house} alt='' className='about__image about__image_type_house' />
            <img src="/about-bg.svg" alt="" className="about__background" />
          </div>
        </div>
        <div className="about__wrapper-about">
          <h2 className="about__heading">«Галиэя» надежный партнер малого и среднего бизнеса.</h2>
          <p className="about__text">Мы предлагаем высокое качество услуг, честные цены, конфиденциальность, максимально индивидуальный подход. Мы стремимся, чтобы каждый клиент остался доволен качеством проделанной нами работы.</p>
          <div className="about__advantages">
            <div className="about__advantage">
              <h2 className="about__advantage-heading">10+</h2>
              <div className="about__horizontal-line"></div>
              <p className="about__advantage-text">Лет<br /> на&nbsp;рынке</p>
            </div>
            <div className="about__advantage">
              <h2 className="about__advantage-heading">100%</h2>
              <div className="about__horizontal-line"></div>
              <p className="about__advantage-text">Довольных клиентов</p>
            </div>
            <div className="about__advantage">
              <h2 className="about__advantage-heading">10</h2>
              <div className="about__horizontal-line"></div>
              <p className="about__advantage-text">Банков клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}