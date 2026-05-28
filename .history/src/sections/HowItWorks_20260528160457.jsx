import { motion } from 'framer-motion'
import { steps } from '../data'

const HowItWorks = () => {
  return (
    <section id="how-it-works" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="section-header">
          <span className="section-tag">The Process</span>
          <h2 className="section-title">How It <span>Works</span></h2>
          <p className="section-subtitle">Getting started is simple. Three steps to begin your transformation.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {steps.map((step, index) => (
            <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backgroundColor: '#f9fafb', borderRadius: '1.5rem', padding: '3rem 2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 8px 20px rgba(21,128,61,0.3)' }}>
                <span style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: '900' }}>{step.step}</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.8', fontSize: '0.95rem' }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="#pricing" style={{ backgroundColor: '#15803d', color: '#ffffff', padding: '1rem 2.5rem', borderRadius: '9999px', fontWeight: '700', fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 4px 15px rgba(21,128,61,0.3)', display: 'inline-block' }}>Start Your Journey</a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks