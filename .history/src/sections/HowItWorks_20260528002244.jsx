import { motion } from 'framer-motion'
import { steps } from '../data'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-green-700 font-semibold tracking-widest uppercase text-sm">The Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-4">How It <span className="text-green-700">Works</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">Getting started is simple. Three steps to begin your transformation.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }} className="relative flex flex-col items-center text-center bg-gray-50 p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-green-700 flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-2xl font-black">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mt-16">
          <a href="#pricing" className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-colors duration-200 inline-block shadow-lg">Start Your Journey</a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks