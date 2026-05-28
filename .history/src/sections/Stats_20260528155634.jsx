import { motion } from 'framer-motion'
import { stats } from '../data'

const Stats = () => {
  return (
    <section className="bg-green-700 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center py-6 px-4 rounded-2xl bg-green-800/40"
            >
              <span className="text-5xl md:text-6xl font-black text-white mb-2 leading-none">{stat.value}</span>
              <span className="text-green-200 font-semibold text-sm tracking-widest uppercase mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats