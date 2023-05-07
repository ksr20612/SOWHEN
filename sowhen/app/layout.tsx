import './globals.css'
import { Inter } from 'next/font/google'
import { ServerStyleSheet } from "styled-components";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'So When?',
  description: 'so when are we gonna meet?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kor">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
