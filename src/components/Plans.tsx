export default function Plans() {
  return (
    <section className="plans">
      <h2 className="plans__heading">Тарифы:</h2>
      <div className="plans__wrapper-cards">
        <div className="plans__card">
          <h2 className="plans__heading">ООО на УСН*</h2>
          <img src="" alt="" className="plans__image" />
          <div className="plans__content-wrapper">
            <p className="plans__text">*упрощенная система налогообложения для ООО — один из вариантов налогообложения для небольших фирм</p>
            <p className="plans__price">от <span className="plans__price_theme_bold">5000₽</span> в мес.</p>
          </div>
        </div>
        <div className="plans__card">
          <h2 className="plans__heading">ООО на ОСН*</h2>
          <img src="" alt="" className="plans__image" />
          <div className="plans__content-wrapper">
            <p className="plans__text">*общая система налогообложения — базовый режим для предпринимателей и компаний, заложенная в налоговом кодексе РФ</p>
            <p className="plans__price">от <span className="plans__price_theme_bold">7000₽</span> в мес.</p>
          </div>
        </div>
        <div className="plans__card">
          <h2 className="plans__heading">ИП*</h2>
          <img src="" alt="" className="plans__image" />
          <div className="plans__content-wrapper">
            <p className="plans__text">*постоянный сбор и анализ информации из документов об активах и обязательствах, доходах и расходах индивидуального предпринимателя</p>
            <p className="plans__price">от <span className="plans__price_theme_bold">3000₽</span> в квартал</p>
          </div>
        </div>
        <div className="plans__card">
          <div className="plans__card-wrapper">
            <h2 className="plans__heading">Регистрация ООО и ИП с открытием счета</h2>
            <p className="plans__price plans__price_theme_blue">3500₽</p>
          </div>
          <img src="" alt="" className="plans__image" />
        </div>
        <div className="plans__card">
          <p className="plans__text plans__text_theme_blue">В каждом тарифе все пени и штрафы по нашей вине оплачиваем мы!</p>
        </div>
      </div>
    </section>
  )
}