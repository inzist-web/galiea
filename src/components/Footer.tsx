import Link from "next/link"
import '@/blocks/footer.scss'


export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__wrapper">
        <div className="footer__info-paragraph">
          <Link href="/" className='footer__logo'>
            <img draggable="false" src="/logo.svg" alt="логотип" className="footer__icon" />
            <h2 className="footer__name">Галиэя</h2>
          </Link>
          <p className="footer__text">ООО "Бухгалтерская компания "Галиэя"</p>
        </div>
        <div className="footer__info">
          <div className="footer__info-paragraph">
            <h2 className="footer__heading">Где мы Находимся?</h2>
            <a href="geo:59.99682100547382,29.76744394790065" className='footer__link'>
              Санкт-Петербург, Кронштадт, пр. Ленина, д. 16, оф. 335
            </a>
          </div>
          <div className="footer__info-paragraph">
            <h2 className="footer__heading">часы работы</h2>
            <span className='footer__link'>
              пн-пт с 9.00 до 17.00 без обеда
            </span>
          </div>
          <div className="footer__info-paragraph">
            <h2 className="footer__heading">контакты</h2>
            <a href="tel:89217754801" className='footer__link'>
              8-921-775-4801
            </a>
            <a href="tel:89500264727" className='footer__link'>
              8-950-026-4727
            </a>
          </div>
        </div>
      </div>
      <a href="https://inzist.ru" target="_blank" className="footer__copyright">
        разработка и дизайн сайта
        <img draggable="false" src="/inzist.svg" alt="Inzist - web разработка" className="footer__copyright-image" />
      </a>
    </footer>
  )
}