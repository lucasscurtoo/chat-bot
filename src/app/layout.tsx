import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/SideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatBot.AI',
  description:
    'Chatbot is here to help you out with your developer questions, go ahead and ask me some questions!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} w-screen h-screen flex`}>
        <SideBar />
        {children}
      </body>
    </html>
  )
}

