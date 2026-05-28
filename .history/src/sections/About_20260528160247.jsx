import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
      <div className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} style={{ position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80" alt="Prime Fitness Gym" style={{ borderRadius: '1.5rem', width: '100%', height: '520px', objectFit: 'cover', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }} />
            <div style={{ position: 'absolute', bottom: '-2rem', right: '-1rem', backgroundColor: '#15803d', color: '#ffffff', borderRadius: '1rem', padding: '1.5rem 2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: '900', display: 'block', lineHeight: '1' }}>5+</span>
              <span style={{ fontSize: '0.8rem', color: '#bbf7d0', fontWeight: '600', marginTop: '0.25rem', display: 'block' }}>Years of Excellence</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span className="section-tag">About Us</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>More Than Just A <span>Gym</span></h2>
            <p style={{ color: '#4b5563', fontSize: '1.1rem', lineHeight: '1.8' }}>At Prime Fitness, we believe that transformation goes beyond physical appearance. We are a community of driven individuals committed to becoming the best versions of themselves — physically, mentally and emotionally.</p>
            <p style={{ color: '#4b5563', fontSize: '1.1rem', lineHeight: '1.8' }}>Founded over 5 years ago, we have helped hundreds of members achieve their fitness goals through personalized training, expert nutrition guidance and a supportive community.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
              {["World Class Trainers", "Modern Equipment", "Personalized Programs", "Supportive Community"].map((value) => (
                <div key={value} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: '#f9fafb', borderRadius: '0.75rem', padding: '0.75rem 1rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#15803d', flexShrink: '0' }} />
                  <span style={{ color: '#374151', fontWeight: '600', fontSize: '0.9rem' }}>{value}</span>
                </div>
              ))}
            </div>
            <a href="#services" style={{ marginTop: '1rem', alignSelf: 'flex-start', backgroundColor: '#15803d', color: '#ffffff', padding: '1rem 2rem', borderRadius: '9999px', fontWeight: '700', fontSize: '1rem', textDecoration: 'none', boxShadow: '0 4px 15px rgba(21,128,61,0.3)' }}>Explore Our Services</a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About