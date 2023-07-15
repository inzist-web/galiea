import '@/blocks/services.scss'

export default function Services() {
  return (
    <section className="services">
      <div className="services__wrapper-services">
        <img src="" alt="" className="services__image" />
        <div className="services__service">
          <h2 className="services__heading">Бухгалтерские услуги:</h2>
          <div className="services__wrapper-text">
            <img src="" alt="" className="services__text-image" />
            <p className="services__text">постановка и ведение бухгалтерского и налогового учета</p>
            <p className="services__text">анализ состояния бухгалтерского и налогового учета, приведение его в соответствии с Положением о ведении бухгалтерского учета и Налоговым кодексом</p>
            <p className="services__text">составление ликвидационных балансов</p>
            <p className="services__text">ведение отдельных разделов бухгалтерии: заработная плата, кадры</p>
            <p className="services__text">постановка и ведение бухгалтерского учета для организаций, ведущих деятельность в сфере строительства, занимающихся производством</p>
            <p className="services__text">восстановление бухгалтерского учёта, проведение аудита</p>
          </div>
        </div>
      </div>
      <div className="services__wrapper-services">
        <div className="services__service">
          <h2 className="services__heading">Юридические услуги:</h2>
          <div className="services__wrapper-text">
            <img src="" alt="" className="services__text-image" />
            <p className="services__text">регистрация юр. лиц, ИП, внесение изменений в учредительные документы, а также изменения иных сведений, подлежащие государственной регистрации</p>
            <p className="services__text">реорганизация и ликвидация юр. лиц, прекращение деятельности ИП</p>
            <p className="services__text">представительство и защита интересов организаций</p>
            <p className="services__text">правовое сопровождение финансово-хозяйственной деятельности</p>
            <p className="services__text">разработка локальных нормативных актов организации</p>
            <p className="services__text">юридическое консультирование по широкому кругу вопросов</p>
          </div>
        <img src="" alt="" className="services__image" />
        </div>
      </div>
      <div className="services__wrapper-services">
        <img src="" alt="" className="services__image" />
        <div className="services__service">
          <h2 className="services__heading">Налоговое консультирование:</h2>
          <div className="services__wrapper-text">
            <img src="" alt="" className="services__text-image" />
            <p className="services__text">подготовка организации к налоговой проверке</p>
            <p className="services__text">консультации по отражению показателей финансово-хозяйственной деятельности при заполнении декларации по налогу на прибыль, отчета о прибылях и убытках, бухгалтерского баланса</p>
            <p className="services__text">представительство интересов и оказание помощи в решении спорных ситуаций налоговых инспекциях, фондах</p>
          </div>
        </div>
      </div>
    </section>
  )
}