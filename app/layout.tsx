import Nav from '@/components/nav'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ryan Guzzwell',
  description: 'My personal website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/r.png"></link>
      </head>
      <body>
      <Nav>
          {children}
      </Nav>
      </body>
    </html>
  )
}
