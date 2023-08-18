'use client'
import '@/blocks/confirmation.scss'
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom'

export default function Confirmation({ isOpen }: {isOpen: boolean}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  return mounted ? createPortal(
    <section className={`confirmation ${!isOpen && 'hidden'}`}>
      <div className="confirmation__card">
        <h2 className="confirmation__title">Заявка принята</h2>
        <img draggable="false" src="/icons/checkmark.svg" alt="принято" className="confirmation__checkmark" />
      </div>
    </section>,
    document.body
  ) : null
}