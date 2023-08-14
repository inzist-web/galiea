import type { Metadata } from 'next'  
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/blocks/page.scss'
import '@/vendor/fonts.scss'

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
    <html lang="ru" style={{scrollBehavior: 'smooth'}}>
      <body className="page">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
