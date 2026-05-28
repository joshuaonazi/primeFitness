import { motion } from 'framer-motion'
import { plans } from '../data'
import { HiCheck } from 'react-icons/hi'

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-green-700 font-semibold tracking-widest uppercase text-sm">Membership</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-4">Simple <span className="text-green-700">Pricing</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">No hidden fees. No long term contracts. Just results.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className={`rounded-2xl p-8 ${plan.highlighted ? 'bg-green-700 text-white shadow-2xl scale-105' : 'bg-gray-50 text-gray-900 shadow-md'}`}>
              {plan.highlighted && (
                <span className="inline-block bg-white text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">Most Popular</span>
              )}
              <h3 className={`text-2xl font-black mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-green-200' : 'text-gray-500'}`}>{plan.description}</p>
              <div className="flex items-end gap-1 mb-8">
                <span className={`text-5xl font-black ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                <span className={`text-lg mb-2 ${plan.highlighted ? 'text-green-200' : 'text-gray-500'}`}>{plan.period}</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <HiCheck className={`text-xl flex-shrink-0 ${plan.highlighted ? 'text-green-300' : 'text-green-700'}`} />
                    <span className={`text-sm ${plan.highlighted ? 'text-green-100' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`block text-center py-3 rounded-full font-bold transition-colors duration-200 ${plan.highlighted ? 'bg-white text-green-700 hover:bg-green-50' : 'bg-green-700 text-white hover:bg-green-800'}`}>Get Started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing