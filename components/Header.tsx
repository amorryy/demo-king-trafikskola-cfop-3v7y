'use client';

import { useState } from 'react'
import { Menu, X, Phone, Car } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const navLinks = [
    { href: '/', label: 'Hem' },
    { href: '/tjanster', label: 'Tjänster' },
    { href: '/om-oss', label: 'Om oss' },
    { href: '/kontakt', label: 'Kontakt' }
  ]
  
  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="https://kingtrafikskola.se/wp-content/themes/kennedy/img/design/logo.png?v1"
              alt="King Trafikskola Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                  pathname === link.href ? 'text-blue-600 border-b-2 border-blue-600' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:08-603 85 85" 
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>08-603 85 85</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors ${
                    pathname === link.href ? 'text-blue-600' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="tel:08-603 85 85" 
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>08-603 85 85</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}