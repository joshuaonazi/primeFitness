import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
              alt="Prime Fitness Gym"
              className="rounded-2xl w-full h-[500px] object-cover shadow-xl"
            />
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-green-700 text-white rounded-2xl p-6 shadow-xl">
              <span className="text-4xl font-black block">5+</span>
              <span className="text-green-200 text-sm font-medium">Years of Excellence</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="text-green-700 font-semibold tracking-widest uppercase text-sm">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              More Than Just A <span className="text-green-700">Gym</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Prime Fitness, we believe that transformation goes beyond physical appearance. 
              We are a community of driven individuals committed to becoming the best versions 
              of themselves — physically, mentally and emotionally.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded over 5 years ago, we have helped hundreds of members achieve their fitness 
              goals through personalized training, expert nutrition guidance and a supportive 
              community that keeps you accountable every step of the way.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                "World Class Trainers",
                "Modern Equipment",
                "Personalized Programs",
                "Supportive Community",
              ].map((value) => (
                <div key={value} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-700 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{value}</span>
                </div>
              ))}
            </div>

            
              href="#services"
              className="mt-4 self-start bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-200"
            >
              Explore Our Services
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About