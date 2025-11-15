// app/layout.tsx

import type { Metadata } from 'next'
// Impor font dari Google
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar' // Kita akan buat ini

// Konfigurasi font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Menetapkan CSS variable
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cormorant', // Menetapkan CSS variable
})

export const metadata: Metadata = {
  title: 'Mirai Pastry - Seni dalam Setiap Gigitan',
  description: 'Temukan koleksi pastry dan cake artisan premium dari Mirai.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      {/* Menerapkan kedua font dan background 'cream' kita.
        'font-sans' akan menjadi default (Inter)
      */}
      <body className={`${inter.variable} ${cormorant.variable} font-sans bg-cream text-charcoal`}>
        <Navbar /> {/* Menampilkan Navbar di setiap halaman */}
        <main>
          {children}
        </main>
        {/* Footer akan ditambahkan di sini nanti */}
      </body>
    </html>
  )
}