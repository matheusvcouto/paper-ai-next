import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'
import { dark, neobrutalism } from '@clerk/themes';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR} appearance={{ 
      elements: { 
        formButtonPrimary: 'bg-blue-500 hover:bg-blue-600', 
        card: 'rounded-lg overflow-hidden', 
        scrollBox: 'rounded-sm',
        userButtonTrigger: 'rounded-lg scale-110', avatarBox: 'rounded-lg'
      }
    }}>
      <html lang="en">
        <body className={`${inter.variable} font-inter `}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
