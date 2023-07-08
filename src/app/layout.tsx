import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juicy Dashboard',
  description: 'Monitore todos os seus projetos criativos em uma experiência mágica e suculenta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
