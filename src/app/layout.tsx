import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, Great_Vibes } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Her Sacred Fire — A 10-Week Journey of Transformation',
    template: '%s | Her Sacred Fire',
  },
  description:
    'A 10-week sacred container for neurodivergent women navigating perimenopause. Reclaim your fire. Reconnect with yourself.',
  metadataBase: new URL('https://hersacredfire.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hersacredfire.com',
    siteName: 'Her Sacred Fire',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${greatVibes.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
