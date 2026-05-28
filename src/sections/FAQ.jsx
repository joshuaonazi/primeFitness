import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPlus, HiMinus } from 'react-icons/hi'
import { faqs } from '../data'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
      <div className="section-container" style={{ maxWidth: '800px' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="section-header">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          <p className="section-subtitle">Got questions? We have got answers.</p>
        </motion.div>

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', overflow: 'hidden', backgroundColor: '#f9fafb' }}>

              {/* Question */}
              <button onClick={() => toggle(index)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', outline: 'none' }}>
                <span style={{ fontWeight: '700', color: '#111827', fontSize: '1.1rem', paddingRight: '1rem' }}>{faq.question}</span>
                <span style={{ color: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {openIndex === index ? <HiMinus style={{ fontSize: '1.5rem' }} /> : <HiPlus style={{ fontSize: '1.5rem' }} />}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                    <p style={{ padding: '0 1.5rem 1.5rem', margin: 0, color: '#4b5563', lineHeight: '1.8', fontSize: '1rem' }}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ