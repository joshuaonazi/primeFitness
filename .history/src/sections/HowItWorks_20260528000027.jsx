import { motion } from 'framer-motion'
import { steps } from '../data'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-green-700 font-semibold tracking-widest uppercase text-sm">The Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">How It <span className="text-green-700">Works</span></h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">Getting started is simple. Three steps to begin your transformation.</p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-green-100 z-0" />

          {steps.map((step, index) => (
            <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }} className="relative z-10 flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 rounded-full bg-green-700 flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-black">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mt-16">
          <a href="#pricing" className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200 inline-block">Start Your Journey</a>
        </motion.div>

      </div>
    </section>
  )
}

export default HowItWorks