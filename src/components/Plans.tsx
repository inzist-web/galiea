import Image from 'next/image'
import '@/blocks/plans.scss'
import blueFolder from '@/images/blue-folder.png'
import darkFolder from '@/images/dark-folder.png'
import lightFolder from '@/images/light-folder.png'
import wideFolder from '@/images/wide-folder.png'

export default function Plans() {
  return (
    <section className="plans" id="plans">
      <h2 className="plans__heading">Тарифы:</h2>
      <div className="plans__wrapper-cards">
        <div className="plans__card">
          <h3 className="plans__card-heading">ООО на УСН*</h3>
          <Image src={darkFolder} alt="" className="plans__image" draggable="false" />
          <div className="plans__content-wrapper">
            <p className="plans__text">*упрощенная система налогообложения для ООО — один из вариантов налогообложения для небольших фирм</p>
            <p className="plans__price">от <span className="plans__price_theme_bold">5000₽</span> в мес.</p>
          </div>
        </div>
        <div className="plans__card">
          <h3 className="plans__card-heading">ООО на ОСН*</h3>
          <Image src={blueFolder} alt="" className="plans__image" draggable="false" />
          <div className="plans__content-wrapper">
            <p className="plans__text">*общая система налогообложения — базовый режим для предпринимателей и компаний, заложенная в налоговом кодексе РФ</p>
            <p className="plans__price">от <span className="plans__price_theme_bold">7000₽</span> в мес.</p>
          </div>
        </div>
        <div className="plans__card">
          <h3 className="plans__card-heading">ИП*</h3>
          <Image src={lightFolder} alt="" className="plans__image" draggable="false" />
          <div className="plans__content-wrapper">
            <p className="plans__text">*постоянный сбор и анализ информации из документов об активах и обязательствах, доходах и расходах индивидуального предпринимателя</p>
            <p className="plans__price">от <span className="plans__price_theme_bold">3000₽</span> в квартал</p>
          </div>
        </div>
        <div className="plans__card plans__card_wide">
          <div className="plans__card-wrapper">
            <h3 className="plans__card-heading plans__card-heading_wide">Регистрация ООО&nbsp;и&nbsp;ИП с&nbsp;открытием счета</h3>
            <p className="plans__price plans__price_theme_blue plans__price_theme_bold">3500₽</p>
          </div>
          <Image src={wideFolder} alt="" className="plans__image plans__image_wide" draggable="false" />
        </div>
        <div className="plans__card plans__card_theme_blue">
          <p className="plans__text plans__text_theme_blue">В каждом тарифе все пени и штрафы по нашей вине оплачиваем мы!</p>
        </div>
      </div>
    </section>
  )
}