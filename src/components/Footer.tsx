import React from 'react'
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Link href="/" className='footer__link'>
          <img src="" alt="" className="footer__logo" />
          <h2 className="footer__name">Галиэя</h2>
        </Link>
        <p className="footer__text">Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.</p>
        <p className="footer__text">© Skyrev Theme 2020</p>
      </div>
      <div className="footer__wrapper">
        <h2 className="footer__heading">Company</h2>
        <Link href="/" className='footer__link'>
          <p className="link-text">Test</p>
        </Link>
      </div>
      <div className="footer__wrapper">
        <h2 className="footer__heading">Services</h2>
        <Link href="/" className='footer__link'>
          <p className="link-text">Test</p>
        </Link>
      </div>
      <div className="footer__wrapper">
        <h2 className="footer__heading">Resources</h2>
        <Link href="/" className='footer__link'>
          <p className="link-text">Test</p>
        </Link>
      </div>
      <div className="footer__wrapper">
        <div className="footer__link-wrapper">
          <Link href="/" className="footer__link">
            <img src="" alt="" className="footer__link-icon" />
          </Link>
          <Link href="/" className="footer__link">
            <img src="" alt="" className="footer__link-icon" />
          </Link>
          <Link href="/" className="footer__link">
            <img src="" alt="" className="footer__link-icon" />
          </Link>
          <Link href="/" className="footer__link">
            <img src="" alt="" className="footer__link-icon" />
          </Link>
        </div>
        
      </div>
    </footer>
  )
}