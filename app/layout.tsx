import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'

const noto = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'THOUGHTNEST',
  description:
    'A place to share your thoughts and ideas. A place to learn and grow. A place to connect with others.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
