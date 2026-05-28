import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { navLinks } from '../data'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-black text-green-500 tracking-tight">PRIME <span className="text-white">FITNESS</span></span>
            <p className="text-gray-400 mt-4 leading-relaxed max-w-sm">
              Transforming lives through fitness, nutrition and community. Join us and become the best version of yourself.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-700 flex items-center justify-center transition-colors duration-200"><FaInstagram /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-700 flex items-center justify-center transition-colors duration-200"><FaTwitter /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-700 flex items-center justify-center transition-colors duration-200"><FaFacebookF /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-700 flex items-center justify-center transition-colors duration-200"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-green-500 transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-3 text-gray-400">
              <li>123 Fitness Avenue</li>
              <li>Lagos, Nigeria</li>
              <li>info@primefitness.com</li>
              <li>+234 800 000 0000</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 Prime Fitness. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-green-500 text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-green-500 text-sm transition-colors duration-200">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer