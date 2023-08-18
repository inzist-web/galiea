import Link from "next/link"
import '@/blocks/header.scss'

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="header__logo">
        <img draggable="false" src="/logo.svg" alt="логотип" className="header__icon" />
        <h2 className="header__name">Галиэя</h2>
      </Link>
      <nav className="header__navbar">
        <a href="#about" className="header__link header__link_active">О&nbsp;нас</a>
        <a href="#services" className="header__link">Услуги</a>
        <a href="#plans" className="header__link">Тарифы</a>
        <a href="#footer" className="header__link">Контакты</a>
      </nav>
    </header>
  )
}
