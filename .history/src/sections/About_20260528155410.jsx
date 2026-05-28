import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="relative">
            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80" alt="Prime Fitness Gym" className="rounded-3xl w-full h-[520px] object-cover shadow-2xl" />
            <div className="absolute -bottom-8 -right-8 bg-green-700 text-white rounded-2xl p-6 shadow-2xl text-center">
              <span className="text-5xl font-black block leading-none">5+</span>
              <span className="text-green-200 text-sm font-semibold mt-1 block">Years of Excellence</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="flex flex-col gap-6 lg:pl-8">
            <span className="text-green-700 font-bold tracking-widest uppercase text-sm">About Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">More Than Just A <span className="text-green-700">Gym</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed">At Prime Fitness, we believe that transformation goes beyond physical appearance. We are a community of driven individuals committed to becoming the best versions of themselves — physically, mentally and emotionally.</p>
            <p className="text-gray-600 text-lg leading-relaxed">Founded over 5 years ago, we have helped hundreds of members achieve their fitness goals through personalized training, expert nutrition guidance and a supportive community.</p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {["World Class Trainers", "Modern Equipment", "Personalized Programs", "Supportive Community"].map((value) => (
                <div key={value} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-700 flex-shrink-0" />
                  <span className="text-gray-700 font-semibold text-sm">{value}</span>
                </div>
              ))}
            </div>
            <a href="#services" className="mt-2 self-start bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200 shadow-lg">Explore Our Services</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About