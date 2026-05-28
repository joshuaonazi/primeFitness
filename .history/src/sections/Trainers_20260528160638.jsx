import { motion } from 'framer-motion'
import { trainers } from '../data'

const Trainers = () => {
  return (
    <section id="trainers" style={{ padding: '6rem 0', backgroundColor: '#f9fafb' }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="section-header">
          <span className="section-tag">The Team</span>
          <h2 className="section-title">Meet Our <span>Trainers</span></h2>
          <p className="section-subtitle">World class coaches dedicated to helping you reach your full potential.</p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {trainers.map((trainer, index) => (
            <motion.div key={trainer.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} style={{ backgroundColor: '#ffffff', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)' }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
                <img src={trainer.image} alt={trainer.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} alt="" />
                <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)' }} />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                  <h3 style={{ color: '#ffffff', fontWeight: '800', fontSize: '1.1rem' }}>{trainer.name}</h3>
                  <p style={{ color: '#4ade80', fontSize: '0.85rem', fontWeight: '600', marginTop: '0.25rem' }}>{trainer.specialty}</p>
                </div>
              </div>
              <div style={{ padding: '1rem 1.25rem', backgroundColor: '#ffffff' }}>
                <span style={{ color: '#9ca3af', fontSize: '0.85rem', fontWeight: '500' }}>{trainer.experience}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers