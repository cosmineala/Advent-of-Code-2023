import type { Metadata } from 'next'
import { Inter, Source_Code_Pro } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Header'

const inter = Inter({ subsets: ['latin'] })
const sourceCodePro = Source_Code_Pro({ subsets: [] })

export const metadata: Metadata = {
  title: 'AoC 23 solved by Cosmin Capisizu',
  description: 'Advent of code 2023 olved by Cosmin Capisizu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.className} bg-[#0f0f23]`}>
        <Header />
        <div className='container mx-auto' >
          {children}
        </div>
      </body>
    </html>
  )
}
