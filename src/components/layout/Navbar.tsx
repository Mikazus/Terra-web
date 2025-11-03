import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NAV_LINKS } from '../../lib/constants'
import Button from '../ui/Button'
import { FaBars, FaTimes } from 'react-icons/fa'
import IconSvg from '../../images/icon.svg'


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      // Smooth scroll to anchor
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to page
      navigate(href)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    // 1. Navbar utama sekarang transparan dan 'sticky'
    //    Kita tambahkan padding 'py-4' untuk memberi ruang
    <nav className="fixed top-0 z-50 w-full py-4 transition-all duration-300">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* 2. Logo di Kiri (teks gelap, seperti di PDF) */}
          <Link to="/" className="shrink-0 flex items-center gap-2">
            <img src={IconSvg} alt="Terra Icon" className="h-8 w-auto" />
            <span className="text-2xl font-bold text-white ">Terra</span>
          </Link>

          {/* 3. INI BAGIAN UTAMA YANG DIUBAH: Navigasi Desktop (Pill) */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center gap-x-2 rounded-full bg-gray-200/50 px-3 py-2 shadow-lg backdrop-blur-md border border-transparent">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="rounded-full px-4 py-1.5 text-base font-medium transition-colors text-gray-600 hover:text-brand-green-dark cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* 4. Tombol di Kanan (seperti di PDF) */}
          <div className="hidden md:flex items-center gap-3 ">
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
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-brand-green-dark cursor-pointer"
                >
                  {link.label}
                </a>
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