import { motion } from 'framer-motion'
import { trainers } from '../data'

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-green-700 font-semibold tracking-widest uppercase text-sm">The Team</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-4">Meet Our <span className="text-green-700">Trainers</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">World class coaches dedicated to helping you reach your full potential.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div key={trainer.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-80 overflow-hidden">
                <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" alt="trainer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg leading-tight">{trainer.name}</h3>
                  <p className="text-green-400 text-sm font-semibold mt-1">{trainer.specialty}</p>
                </div>
              </div>
              <div className="px-4 py-3 bg-white">
                <span className="text-gray-400 text-sm font-medium">{trainer.experience}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers