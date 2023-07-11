import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/blocks/page.scss'

export const metadata: Metadata = {
  title: 'Бухгалтерская компания "Галиэя"',
  description: 'Официальный сайт бухгалтерской компании Галиэя',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="page">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
