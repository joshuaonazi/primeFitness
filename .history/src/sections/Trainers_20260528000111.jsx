import { motion } from 'framer-motion'
import { trainers } from '../data'

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-green-700 font-semibold tracking-widest uppercase text-sm">The Team</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">Meet Our <span className="text-green-700">Trainers</span></h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">World class coaches dedicated to helping you reach your full potential.</p>
        </motion.div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div key={trainer.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-72 overflow-hidden">
                <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{trainer.name}</h3>
                  <p className="text-green-400 text-sm font-medium">{trainer.specialty}</p>
                </div>
              </div>
              <div className="p-4">
                <span className="text-gray-500 text-sm">{trainer.experience}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Trainers