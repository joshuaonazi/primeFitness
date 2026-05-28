import { motion } from 'framer-motion'
import { stats } from '../data'

const Stats = () => {
  return (
    <section style={{ backgroundColor: '#15803d', padding: '4rem 0' }}>
      <div className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.15)', borderRadius: '1rem', padding: '2rem 1rem' }}>
              <span style={{ fontSize: '3.5rem', fontWeight: '900', color: '#ffffff', lineHeight: '1' }}>{stat.value}</span>
              <span style={{ color: '#bbf7d0', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '0.5rem' }}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats