import { motion } from 'framer-motion'
import { plans } from '../data'
import { HiCheck } from 'react-icons/hi'

const Pricing = () => {
  return (
    <section id="pricing" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="section-header">
          <span className="section-tag">Membership</span>
          <h2 className="section-title">Simple <span>Pricing</span></h2>
          <p className="section-subtitle">No hidden fees. No long term contracts. Just results.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          {plans.map((plan, index) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} style={{ backgroundColor: plan.highlighted ? '#15803d' : '#f9fafb', borderRadius: '1.5rem', padding: '3rem 2rem', color: plan.highlighted ? '#ffffff' : '#111827', boxShadow: plan.highlighted ? '0 20px 40px rgba(21,128,61,0.2)' : '0 4px 20px rgba(0,0,0,0.06)', transform: plan.highlighted ? 'scale(1.05)' : 'scale(1)', position: 'relative', zIndex: plan.highlighted ? 1 : 0 }}>
              {plan.highlighted && (
                <span style={{ display: 'inline-block', backgroundColor: '#ffffff', color: '#15803d', fontSize: '0.8rem', fontWeight: '700', padding: '0.4rem 1rem', borderRadius: '9999px', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Most Popular</span>
              )}
              <h3 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '0.5rem', color: plan.highlighted ? '#ffffff' : '#111827' }}>{plan.name}</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '2rem', color: plan.highlighted ? '#bbf7d0' : '#6b7280', lineHeight: '1.6' }}>{plan.description}</p>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.25rem', marginBottom: '2.5rem' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1', color: plan.highlighted ? '#ffffff' : '#111827' }}>{plan.price}</span>
                <span style={{ fontSize: '1.1rem', color: plan.highlighted ? '#bbf7d0' : '#6b7280', paddingBottom: '0.5rem' }}>{plan.period}</span>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem', padding: 0, listStyle: 'none' }}>
                {plan.features.map((feature) => (
                  <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <HiCheck style={{ fontSize: '1.5rem', color: plan.highlighted ? '#86efac' : '#15803d', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: plan.highlighted ? '#f0fdf4' : '#4b5563' }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" style={{ display: 'block', textAlign: 'center', padding: '1.2rem', borderRadius: '9999px', fontWeight: '700', fontSize: '1.05rem', textDecoration: 'none', backgroundColor: plan.highlighted ? '#ffffff' : '#15803d', color: plan.highlighted ? '#15803d' : '#ffffff', boxShadow: plan.highlighted ? 'none' : '0 4px 15px rgba(21,128,61,0.2)' }}>Get Started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing