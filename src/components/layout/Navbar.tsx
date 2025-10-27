import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../../lib/constants'
import Button from '../ui/Button'
import { FaSeedling, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    // 1. Navbar utama sekarang transparan dan 'sticky'
    //    Kita tambahkan padding 'py-4' untuk memberi ruang
    <nav className="sticky top-0 z-50 w-full py-4 transition-all duration-300">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* 2. Logo di Kiri (teks gelap, seperti di PDF) */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <FaSeedling className="h-8 w-auto text-brand-green-medium" />
            <span className="text-2xl font-bold text-brand-green-dark">Terra</span>
          </Link>

          {/* 3. INI BAGIAN UTAMA YANG DIUBAH: Navigasi Desktop (Pill) */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center gap-x-2 rounded-full bg-gray-200/50 px-3 py-2 shadow-lg backdrop-blur-lg border border-transparent">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    `rounded-full px-5 py-2 text-base font-medium transition-colors ${
                      isActive
                        // Gaya 'Home' yang aktif (lebih gelap/bold)
                        ? 'text-brand-green-dark font-semibold' 
                        // Gaya 'About Us', 'Program', dll. (non-aktif)
                        : 'text-gray-600 hover:text-brand-green-dark'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* 4. Tombol di Kanan (seperti di PDF) */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" href="/donate">Donate Us</Button>
            <Button variant="solid" href="/login">Login</Button>
          </div>

          {/* 5. Tombol Hamburger (Mobile) - dibuat sedikit transparan juga */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 bg-transparent backdrop-blur-sm"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 6. Menu Mobile (diberi efek glassmorphism juga) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full mt-3">
          <div className="mx-4 rounded-lg bg-transparent shadow-lg backdrop-blur-md ring-1 ring-black/5">
            <div className="space-y-1 px-4 pt-2 pb-3">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-base font-medium ${
                      isActive
                        ? 'bg-brand-green-light/20 text-brand-green-dark'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-brand-green-dark'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="border-t border-green-500 pt-4 pb-2 flex flex-col gap-3">
                <Button variant="outline" href="/donate" isFullWidth>Donate Us</Button>
                <Button variant="solid" href="/login" isFullWidth>Login</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar