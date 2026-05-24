import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Bana Artist | Handcrafted Pencil & Charcoal Portraits',
  description: 'Transform your memories into timeless handcrafted art. Personalized pencil and charcoal portraits by Bana Artist. 500+ happy clients. 4.9 rating. Order on WhatsApp.',
  generator: 'v0.app',
  keywords: 'portrait artist, pencil sketch, charcoal portrait, commission artist, handmade art, portrait drawing, custom portraits',
  authors: [{ name: 'Bana Artist' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: '/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-background">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

