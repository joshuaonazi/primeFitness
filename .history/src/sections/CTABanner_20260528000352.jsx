import { motion } from 'framer-motion'

const CTABanner = () => {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1600&q=80')` }} />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="inline-block bg-green-700 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
          Limited Time Offer
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black leading-tight mb-6">
          Start Your <span className="text-green-400">Free 3 Day</span> Trial Today
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          No credit card required. No commitment. Just show up and experience the Prime Fitness difference for yourself.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200 w-full sm:w-auto">Claim Free Trial</a>
          <a href="#about" className="border-2 border-white hover:border-green-400 hover:text-green-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200 w-full sm:w-auto">Learn More</a>
        </motion.div>
      </div>

    </section>
  )
}

export default CTABanner