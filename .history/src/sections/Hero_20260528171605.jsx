import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80')`,
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
        }}
      />
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
      <div className="section-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#ffffff' }}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'inline-block', backgroundColor: '#15803d', color: '#ffffff', fontSize: '0.9rem', fontWeight: '600', padding: '0.5rem 1.5rem', borderRadius: '9999px', marginBottom: '1.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          Welcome to Prime Fitness
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '1.5rem' }}
        >
          Transform Your <br />
          <span style={{ color: '#4ade80' }}>Body & Mind</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: '1.2rem', color: '#d1d5db', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.8' }}
        >
          Join Prime Fitness and unlock your full potential with world-class trainers,
          cutting-edge equipment and personalized programs built around your goals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a href="#pricing" style={{ backgroundColor: '#15803d', color: '#ffffff', padding: '1rem 2.5rem', borderRadius: '9999px', fontWeight: '700', fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 4px 15px rgba(21,128,61,0.3)' }}>
            Join Now
          </a>
          <a href="#services" style={{ border: '2px solid #ffffff', color: '#ffffff', padding: '1rem 2.5rem', borderRadius: '9999px', fontWeight: '700', fontSize: '1.1rem', textDecoration: 'none' }}>
            View Programs
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <span style={{ color: '#ffffff', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ width: '4px', height: '32px', backgroundColor: '#4ade80', borderRadius: '9999px' }}
        />
      </motion.div>
    </section>
  )
}

export default Hero