import Image from "next/image";

import '@/blocks/services.scss'

export default function Services() {
  return (
    <section className="services">
      <div className="services__wrapper-services">
        <Image src="" alt="" className="services__image" />
        <div className="services__service">
          <h2 className="services__heading">Бухгалтерские услуги:</h2>
          <ul className="services__wrapper-text">
            <img src="" alt="" className="services__text-image" />
            <li className="services__text"><img src="/icons/calculator.svg" alt="калькулятор" className="services__icon"/> постановка и ведение бухгалтерского и налогового учета</li>
            <li className="services__text"><img src="/icons/receiptsearch.svg" alt="калькулятор" className="services__icon"/> анализ состояния бухгалтерского и налогового учета, приведение его в соответствии с Положением о ведении бухгалтерского учета и Налоговым кодексом</li>
            <li className="services__text"><img src="/icons/walletmoney.svg" alt="калькулятор" className="services__icon"/> составление ликвидационных балансов</li>
            <li className="services__text"><img src="/icons/documentcopy.svg" alt="калькулятор" className="services__icon"/> ведение отдельных разделов бухгалтерии: заработная плата, кадры</li>
            <li className="services__text"><img src="/icons/homehashtag.svg" alt="калькулятор" className="services__icon"/> постановка и ведение бухгалтерского учета для организаций, ведущих деятельность в сфере строительства, занимающихся производством</li>
            <li className="services__text"><img src="/icons/refreshcircle.svg" alt="калькулятор" className="services__icon"/> восстановление бухгалтерского учёта, проведение аудита</li>
          </ul>
        </div>
      </div>
      <div className="services__wrapper-services">
        <Image src="" alt="" className="services__image" />
        <div className="services__service">
          <h2 className="services__heading">Юридические услуги:</h2>
          <ul className="services__wrapper-text">
            <li className="services__text"><img src="/icons/documenttext.svg" alt="калькулятор" className="services__icon"/> регистрация юр. лиц, ИП, внесение изменений в учредительные документы, а также изменения иных сведений, подлежащие государственной регистрации</li>
            <li className="services__text"><img src="/icons/shieldcross.svg" alt="калькулятор" className="services__icon"/> реорганизация и ликвидация юр. лиц, прекращение деятельности ИП</li>
            <li className="services__text"><img src="/icons/profile2user.svg" alt="калькулятор" className="services__icon"/> представительство и защита интересов организаций</li>
            <li className="services__text"><img src="/icons/dollarsquare.svg" alt="калькулятор" className="services__icon"/> правовое сопровождение финансово-хозяйственной деятельности</li>
            <li className="services__text"><img src="/icons/book1.svg" alt="калькулятор" className="services__icon"/> разработка локальных нормативных актов организации</li>
            <li className="services__text"><img src="/icons/profilecircle.svg" alt="калькулятор" className="services__icon"/> юридическое консультирование по широкому кругу вопросов</li>
          </ul>
        </div>
      </div>
      <div className="services__wrapper-services">
        <Image src="" alt="" className="services__image" />
        <div className="services__service">
          <h2 className="services__heading">Налоговое консультирование:</h2>
          <ul className="services__wrapper-text">
            <li className="services__text"><img src="/icons/receiptsearch.svg" alt="калькулятор" className="services__icon"/> подготовка организации к налоговой проверке</li>
            <li className="services__text"><img src="/icons/documentcopy.svg" alt="калькулятор" className="services__icon"/> консультации по отражению показателей финансово-хозяйственной деятельности при заполнении декларации по налогу на прибыль, отчета о прибылях и убытках, бухгалтерского баланса</li>
            <li className="services__text"><img src="/icons/profile2user.svg" alt="калькулятор" className="services__icon"/> представительство интересов и оказание помощи в решении спорных ситуаций налоговых инспекциях, фондах</li>
          </ul>
        </div>
      </div>
    </section>
  )
}