// src/components/layout/Footer.tsx

import { Link } from 'react-router-dom'
import { FaSeedling } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#3C6300] text-gray-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Kolom 1: Logo & Slogan */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <FaSeedling className="h-8 w-auto text-white" />
              <span className="text-3xl font-bold text-white">Terra</span>
            </Link>
            <p className="text-lg text-gray-300">
              Turn intention into impact. Preserve the earth, together.
            </p>
          </div>

          {/* Kolom 2: Main Menu */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Main Menu</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-brand-green-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-green-light transition-colors">About Us</Link></li>
              <li><Link to="/program" className="hover:text-brand-green-light transition-colors">Program</Link></li>
              <li><Link to="/event" className="hover:text-brand-green-light transition-colors">Event</Link></li>
              <li><Link to="/article" className="hover:text-brand-green-light transition-colors">Article</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Program */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Program</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-brand-green-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-green-light transition-colors">About Us</Link></li>
              <li><Link to="/program" className="hover:text-brand-green-light transition-colors">Program</Link></li>
              <li><Link to="/donate" className="hover:text-brand-green-light transition-colors">Donate Us</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-brand-green-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-green-light transition-colors">About Us</Link></li>
              <li><Link to="/program" className="hover:text-brand-green-light transition-colors">Program</Link></li>
            </ul>
          </div>

        </div>

        {/* Bagian Copyright (Garis Pemisah & Teks) */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Terra. All rights reserved</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer