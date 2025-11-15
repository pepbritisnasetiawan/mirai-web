// components/Navbar.tsx

import Link from 'next/link'
// Kita akan butuh ikon keranjang, misalnya dari 'lucide-react'
import { ShoppingBag } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="py-6 px-8">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo (Kiri) */}
        <Link href="/" className="font-serif text-3xl font-bold text-charcoal">
          MIRAI
        </Link>

        {/* Navigasi (Tengah) */}
        <ul className="flex gap-8">
          <li>
            <Link href="/shop" className="text-lg hover:text-gold transition-colors">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/stories" className="text-lg hover:text-gold transition-colors">
              Stories
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg hover:text-gold transition-colors">
              About
            </Link>
          </li>
        </ul>

        {/* Keranjang (Kanan) */}
        <button className="relative hover:text-gold transition-colors">
          <ShoppingBag size={24} />
          {/* Nanti kita bisa tambahkan jumlah item di sini */}
          <span className="absolute -top-2 -right-2 bg-gold text-cream text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0 
          </span>
        </button>

      </nav>
    </header>
  )
}

export default Navbar