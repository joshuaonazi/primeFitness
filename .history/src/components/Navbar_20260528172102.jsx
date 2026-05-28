import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks } from '../data'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) setMenuOpen(false)
    }

    handleResize() // Initialize on mount
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50, transition: 'all 0.3s ease', backgroundColor: scrolled || menuOpen ? '#ffffff' : 'transparent', boxShadow: scrolled || menuOpen ? '0 4px 20px rgba(0,0,0,0.05)' : 'none', padding: scrolled ? '1rem 0' : '1.5rem 0' }}>
      <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem' }}>
        
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#15803d', letterSpacing: '-0.025em' }}>
            PRIME <span style={{ color: scrolled || menuOpen ? '#111827' : '#ffffff' }}>FITNESS</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <ul style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} style={{ color: scrolled ? '#374151' : '#ffffff', fontWeight: '600', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#15803d'} onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? '#374151' : '#ffffff'}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        {!isMobile && (
          <div>
            <a href="#pricing" style={{ backgroundColor: '#15803d', color: '#ffffff', padding: '0.8rem 1.8rem', borderRadius: '9999px', fontWeight: '700', fontSize: '1rem', textDecoration: 'none', boxShadow: '0 4px 15px rgba(21,128,61,0.2)' }}>Join Now</a>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <button style={{ background: 'none', border: 'none', color: scrolled || menuOpen ? '#111827' : '#ffffff', fontSize: '2rem', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb', padding: '1rem 1.5rem 1.5rem', overflow: 'hidden' }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', listStyle: 'none', margin: '0 0 1.5rem 0', padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} style={{ color: '#111827', fontWeight: '700', fontSize: '1.1rem', textDecoration: 'none', display: 'block' }} onClick={() => setMenuOpen(false)}>{link.label}</a>
                </li>
              ))}
            </ul>
            <a href="#pricing" style={{ display: 'block', textAlign: 'center', backgroundColor: '#15803d', color: '#ffffff', padding: '1rem', borderRadius: '9999px', fontWeight: '700', fontSize: '1.1rem', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>Join Now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar