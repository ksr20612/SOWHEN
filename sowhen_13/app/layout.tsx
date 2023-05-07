import Header from 'components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'So When?',
  description: '그래서 우리 언제 만날건데?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kor">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
