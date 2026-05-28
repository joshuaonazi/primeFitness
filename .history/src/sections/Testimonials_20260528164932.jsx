import { motion } from 'framer-motion'
import { testimonials } from '../data'
import { HiStar } from 'react-icons/hi'

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-green-700 font-semibold tracking-widest uppercase text-sm">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">What Our <span className="text-green-700">Members Say</span></h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">Real people. Real results. Real transformations.</p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed mb-8 italic">"{testimonial.review}"</p>

              {/* Member Info */}
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" alt="" />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-green-700 text-sm font-medium">{testimonial.role}</p>
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