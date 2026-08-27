import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const H2RBikeShowcase = () => {
  const [showSpecs, setShowSpecs] = useState(false)

  const h2rSpecs = {
    name: 'KAWASAKI NINJA H2',
    type: 'Street-Legal Superbike',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3vonpcgcUSJPSsCUo2tcJIr-FWNXkt9AuOwUAS-aVn5s6qWrGmBN1mOs&s=10',
    logo: 'https://i.pinimg.com/736x/4d/ad/fe/4dadfe70fec322618df885e9c4135010.jpg',
    engine: '998cc Inline-4 Supercharged',
    power: '149 kW',
    torque: '133 Nm',
    '0-100': '2.7s',
    topSpeed: '299 km/h',
    weight: '238 kg (wet)',
    price: '$30,000+',
    features: [
      'Supercharged Engine',
      'Carbon Fiber Body',
      'Traction Control',
      'Launch Control',
      'Quick Shifter',
      'Ohlins Suspension',
      'Brembo Brakes',
      'Aerodynamic Winglets',
    ],
  }

  return (
    <div className="backdrop-blur-md bg-[rgba(25,25,25,0.65)] border border-white/10 p-4 md:p-6 rounded-2xl relative overflow-hidden">
      {/* Racing Background */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-20 pointer-events-none" />
      
      {/* Speed Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-kawasaki-lime to-transparent"
            style={{
              top: `${10 + i * 15}%`,
              width: '100%',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <motion.h3
          className="text-lg md:text-xl font-black mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'linear-gradient(90deg, #006400, #32CD32, #006400)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(50, 205, 50, 0.5)',
          }}
        >
          THE DREAM MACHINE: NINJA H2
        </motion.h3>

        {/* Main Bike Display */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <motion.img
            src={h2rSpecs.image}
            alt={h2rSpecs.name}
            className="w-full max-w-sm h-48 object-cover rounded-xl border-2 border-white/10 cursor-pointer"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowSpecs(!showSpecs)}
            style={{ 
              filter: 'drop-shadow(0 0 30px rgba(50, 205, 50, 0.6))',
            }}
          />
        </motion.div>

        {/* Bike Name */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {h2rSpecs.logo && (
            <motion.img
              src={h2rSpecs.logo}
              alt="Kawasaki logo"
              className="w-16 h-16 mx-auto mb-2 object-contain"
            />
          )}
          <h4 className="text-2xl md:text-3xl font-black text-kawasaki-lime mb-2" style={{ textShadow: '0 0 20px rgba(50, 205, 50, 0.8)' }}>
            {h2rSpecs.name}
          </h4>
          <p className="text-sm text-automotive-chrome font-black" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>{h2rSpecs.type}</p>
        </motion.div>

        {/* Specs Grid */}
        <AnimatePresence>
          {showSpecs && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="backdrop-blur-md bg-[rgba(30,30,30,0.8)] border border-white/10 rounded-xl p-6 mb-6"
            >
              <div className="flex flex-wrap justify-center items-stretch gap-3 mb-6">
                {Object.entries(h2rSpecs).filter(([key]) => 
                  !['name', 'type', 'features', 'image', 'logo'].includes(key)
                ).map(([spec, value], index) => (
                  <motion.div
                    key={spec}
                    className="bg-[rgba(25,25,25,0.5)] border border-white/10 rounded-lg py-3 px-3 text-center min-w-[140px] max-w-[180px] flex-1 w-full"
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-xs text-automotive-chrome font-black uppercase break-words">{spec}</div>
                    <div className="text-base md:text-lg font-black text-kawasaki-lime break-words" style={{ textShadow: '0 0 10px rgba(50, 205, 50, 0.6)' }}>{value}</div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h6 className="text-automotive-chrome font-black mb-3 text-center" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>FEATURES:</h6>
                <div className="flex flex-wrap justify-center gap-2">
                  {h2rSpecs.features.map((feature, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-[rgba(30,30,30,0.8)] border border-white/10 text-white text-xs font-black rounded-full"
                      whileHover={{ scale: 1.15, rotate: [-5, 5, -5] }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      style={{
                        boxShadow: `0 0 0 1px transparent`,
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0 1px #006400, 0 0 10px #006400`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0 1px transparent`
                      }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={() => setShowSpecs(!showSpecs)}
            className="px-6 py-3 bg-[rgba(30,30,30,0.8)] border-2 border-transparent text-white font-black rounded-full"
            whileHover={{ scale: 1.1, rotate: [-5, 5, -5] }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: `0 0 0 2px transparent, 0 0 20px rgba(0,0,0,0.5)`,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 0 2px #006400, 0 0 20px #006400`
              e.currentTarget.style.background = `linear-gradient(to right, #00640022, #00640044)`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 0 2px transparent, 0 0 20px rgba(0,0,0,0.5)`
              e.currentTarget.style.background = 'rgba(30,30,30,0.8)'
            }}
          >
            {showSpecs ? 'HIDE SPECS' : 'SHOW SPECS'}
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="flex justify-center gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="text-4xl"
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚡
          </motion.div>
          <motion.div
            className="text-4xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            🔥
          </motion.div>
          <motion.div
            className="text-4xl"
            animate={{ x: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💨
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-4 text-center text-sm text-kawasaki-lime font-black"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ textShadow: '0 0 15px rgba(50, 205, 50, 0.8)' }}
        >
          ⚡ TRACK ONLY - STREET ILLEGAL ⚡
        </motion.p>
      </div>
    </div>
  )
}

export default H2RBikeShowcase
