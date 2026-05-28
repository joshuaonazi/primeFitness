import { motion } from 'framer-motion'
import { testimonials } from '../data'
import { HiStar } from 'react-icons/hi'

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '6rem 0', backgroundColor: '#f9fafb' }}>
      <div className="section-container">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="section-header">
          <span className="section-tag">Success Stories</span>
          <h2 className="section-title">What Our <span>Members Say</span></h2>
          <p className="section-subtitle">Real people. Real results. Real transformations.</p>
        </motion.div>

        {/* Testimonial Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} style={{ backgroundColor: '#ffffff', borderRadius: '1.5rem', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} style={{ color: '#facc15', fontSize: '1.5rem' }} />
                ))}
              </div>

              {/* Review */}
              <p style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1rem', fontStyle: 'italic', marginBottom: '2rem' }}>"{testimonial.review}"</p>

              {/* Member Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={testimonial.image} alt={testimonial.name} style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#111827', margin: '0 0 0.25rem 0' }}>{testimonial.name}</h4>
                  <p style={{ color: '#15803d', fontSize: '0.9rem', fontWeight: '600', margin: 0 }}>{testimonial.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials