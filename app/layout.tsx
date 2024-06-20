import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/navbar/Navbar'
import Footer from '@/components/shared/footer/Footer'
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SportNet',
  description: 'An Athlete Crowdfunding and Betting platform on Starknet',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main
          className="  bg-[#000023] mx-auto relative text-white mix-blend-soft-light"
          style={{ backgroundImage: 'url(/assets/images/texture-2.png)' }}
        >
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
