import { motion } from 'framer-motion'

const CTABanner = () => {
  return (
    <section style={{ position: 'relative', padding: '6rem 0', overflow: 'hidden' }}>

      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1600&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />

      {/* Dark Overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)' }} />

      {/* Content */}
      <div className="section-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#ffffff', maxWidth: '800px' }}>
        <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ display: 'inline-block', backgroundColor: '#15803d', color: '#ffffff', fontSize: '0.875rem', fontWeight: '600', padding: '0.375rem 1rem', borderRadius: '9999px', marginBottom: '1.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Limited Time Offer
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1.2', marginBottom: '1.5rem' }}>
          Start Your <span className="text-green-400">Free 3 Day</span> Trial Today
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} style={{ fontSize: '1.125rem', color: '#d1d5db', marginBottom: '2.5rem', lineHeight: '1.8' }}>
          No credit card required. No commitment. Just show up and experience the Prime Fitness difference for yourself.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#pricing" style={{ backgroundColor: '#15803d', color: '#ffffff', padding: '1rem 2.5rem', borderRadius: '9999px', fontWeight: '700', fontSize: '1.125rem', textDecoration: 'none', boxShadow: '0 4px 15px rgba(21,128,61,0.3)' }}>Claim Free Trial</a>
          <a href="#about" style={{ border: '2px solid #ffffff', color: '#ffffff', padding: '1rem 2.5rem', borderRadius: '9999px', fontWeight: '700', fontSize: '1.125rem', textDecoration: 'none' }}>Learn More</a>
        </motion.div>
      </div>

    </section>
  )
}

export default CTABanner