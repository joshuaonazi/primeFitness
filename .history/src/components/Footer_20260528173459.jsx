import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { navLinks } from '../data'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111827', color: '#ffffff', padding: '5rem 0 2rem' }}>
      <div className="section-container">

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', marginBottom: '4rem' }}>

          {/* Brand */}
          <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: '900', color: '#15803d', letterSpacing: '-0.025em' }}>PRIME <span style={{ color: '#ffffff' }}>FITNESS</span></span>
            <p style={{ color: '#9ca3af', marginTop: '1rem', lineHeight: '1.8', fontSize: '1rem' }}>
              Transforming lives through fitness, nutrition and community. Join us and become the best version of yourself.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="#" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#1f2937', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', textDecoration: 'none' }}><FaInstagram /></a>
              <a href="#" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#1f2937', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', textDecoration: 'none' }}><FaTwitter /></a>
              <a href="#" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#1f2937', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', textDecoration: 'none' }}><FaFacebookF /></a>
              <a href="#" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#1f2937', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', textDecoration: 'none' }}><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#ffffff', fontWeight: '800', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '1rem' }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#ffffff', fontWeight: '800', fontSize: '1.2rem', marginBottom: '1.5rem' }}>Contact Us</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#9ca3af', listStyle: 'none', margin: 0, padding: 0, fontSize: '1rem' }}>
              <li>123 Fitness Avenue</li>
              <li>Lagos, Nigeria</li>
              <li>info@primefitness.com</li>
              <li>+234 800 000 0000</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #1f2937', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>© 2026 Prime Fitness. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer