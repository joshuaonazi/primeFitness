import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks } from '../data'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-black text-green-700 tracking-tight">
            PRIME <span className="text-gray-900">FITNESS</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              
                <a href={link.href}
                className="text-gray-700 font-medium hover:text-green-700 transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          
            <a href="#pricing"
            className="bg-green-700 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-green-800 transition-colors duration-200">
            Join Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-lg px-6 pb-6 pt-4"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                
                  <a href={link.href}
                  className="text-gray-700 font-medium hover:text-green-700 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
            <a href="#pricing"
            className="mt-4 block text-center bg-green-700 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-green-800 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}>
                
            Join Now
          </a>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar