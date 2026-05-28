import { motion } from 'framer-motion'
import { services } from '../data'

const Services = () => {
  return (
    <section id="services" style={{ padding: '6rem 0', backgroundColor: '#f9fafb' }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="section-header">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Our <span>Services</span></h2>
          <p className="section-subtitle">Everything you need to reach your fitness goals under one roof.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {services.map((service, index) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} style={{ backgroundColor: '#ffffff', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#111827', marginBottom: '0.5rem' }}>{service.title}</h3>
                <p style={{ color: '#6b7280', lineHeight: '1.7', fontSize: '0.95rem' }}>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services