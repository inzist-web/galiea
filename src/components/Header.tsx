import Link from "next/link"
import '@/blocks/header.scss'

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="header__logo">
        <img src="/logo.svg" alt="логотип" className="header__icon" />
        <h2 className="header__name">Галиэя</h2>
      </Link>
      <nav className="header__navbar">
        <Link href="/" className="header__link header__link_active">О&nbsp;нас</Link>
        <Link href="/" className="header__link">Услуги</Link>
        <Link href="/" className="header__link">Тарифы</Link>
        <Link href="/" className="header__link">Контакты</Link>
      </nav>
    </header>
  )
}
