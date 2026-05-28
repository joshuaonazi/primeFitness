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
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-green-700 font-semibold tracking-widest uppercase text-sm">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">Frequently Asked <span className="text-green-700">Questions</span></h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">Got questions? We have got answers.</p>
        </motion.div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="border border-gray-200 rounded-2xl overflow-hidden">

              {/* Question */}
              <button onClick={() => toggle(index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200">
                <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                <span className="text-green-700 flex-shrink-0">
                  {openIndex === index ? <HiMinus className="text-xl" /> : <HiPlus className="text-xl" />}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <p className="px-6 pb-6 text-gray-500 leading-relaxed">{faq.answer}</p>
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