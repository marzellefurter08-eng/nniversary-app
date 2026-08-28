import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CarComparison = () => {
  const [selectedCar, setSelectedCar] = useState(null)

  const cars = {
    honda: {
      name: 'HONDA',
      model: 'Ballade i180 1979',
      color: 'text-honda-red',
      bgGradient: 'from-honda-red to-honda-accent',
      image: 'https://i.ytimg.com/vi/XzovsNTaaWI/sddefault.jpg',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesofEKVxNTVdwAMXDeOdRrt3GP8iSMOt8BZxq34wnpUKwYZacEqJlyxI&s=10',
      specs: {
        power: '103 kW',
        torque: '168 Nm',
        '0-100': '9.96s',
        topSpeed: '220 km/h',
        engine: '1.8L Inline-4',
      },
      features: ['Classic Design', 'RWD', 'Manual Transmission', 'Vintage Style'],
    },
    bmw: {
      name: 'BMW',
      model: 'M4 Competition',
      color: 'text-bmw-blue',
      bgGradient: 'from-bmw-blue to-bmw-m',
      image: 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m4-x-kith/bmw-m4-x-kith-stage-01.jpg',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiWkyr0v3L6z4tuNGSzIEJFnzWrxhY_rN_fB0yBxcow&s',
      specs: {
        power: '390 kW',
        torque: '650 Nm',
        '0-100': '3.4s',
        topSpeed: '290 km/h',
        engine: '3.0L Twin-Turbo',
      },
      features: ['M xDrive', 'Adaptive M Suspension', 'Carbon Fiber Roof', 'M Sport Exhaust'],
    },
  }

  return (
    <div className="backdrop-blur-md bg-[rgba(25,25,25,0.65)] border border-white/10 p-4 md:p-6 rounded-2xl relative overflow-hidden">
      {/* Racing Background */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-20 pointer-events-none" />
      
      {/* Speed Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-automotive-gold to-transparent"
            style={{
              top: `${10 + i * 18}%`,
              width: '100%',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.8 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">

<motion.h3 className="w-full mb-6 flex items-center justify-center text-center select-none uppercase">
  {/* Polished Chrome Silver Gradient for HONDA */}
  <span className="bg-gradient-to-b from-[#ffffff] via-[#dcdcdc] to-[#8c8c8c] bg-clip-text text-transparent font-black text-2xl tracking-[0.15em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
    HONDA
  </span>
  
  {/* Stark Minimalist Divider */}
  <span className="text-neutral-500 font-medium text-lg mx-5 tracking-normal opacity-50">
    VS
  </span>
  
  {/* Unified Solid 3-Stripe M-Power Text Block for BMW */}
  <span className="inline-flex font-black text-2xl tracking-normal mr-4 drop-shadow-[0_2px_6px_rgba(59,130,246,0.35)]">
    <span className="text-[#00a3da]">B</span>
    <span className="text-[#002663]">M</span>
    <span className="text-[#e20613]">W</span>
  </span>

  {/* Clean Showcase End Title */}
  <span className="text-white font-black text-2xl tracking-wider">
    SHOWDOWN
  </span>
</motion.h3>

        {/* Car Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {Object.entries(cars).map(([key, car]) => (
            <motion.div
              key={key}
              className="bg-[rgba(30,30,30,0.8)] p-4 rounded-2xl border-2 border-transparent cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCar(selectedCar === key ? null : key)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: key === 'honda' ? 0.2 : 0.4 }}
              style={{
                boxShadow: `0 0 0 2px transparent, 0 0 20px rgba(0,0,0,0.5)`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const glowColor = key === 'honda' ? '#CC0000' : '#0066B1'
                e.currentTarget.style.boxShadow = `0 0 0 2px ${glowColor}, 0 0 20px ${glowColor}`
                e.currentTarget.style.background = `linear-gradient(to right, ${glowColor}22, ${glowColor}44)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 2px transparent, 0 0 20px rgba(0,0,0,0.5)`
                e.currentTarget.style.background = 'rgba(30,30,30,0.8)'
              }}
            >
              <div className="text-center">
                <motion.img
                  src={car.image}
                  alt={car.model}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                  whileHover={{ scale: 1.05 }}
                />
                {car.logo && (
                  <motion.img
                    src={car.logo}
                    alt={`${car.name} logo`}
                    className="w-16 h-16 mx-auto mb-2 object-contain"
                  />
                )}
                <h4 className="text-xl md:text-2xl font-black mb-1">
                  {key === 'honda' ? (
                    <span className="bg-gradient-to-b from-[#ffffff] via-[#dcdcdc] to-[#8c8c8c] bg-clip-text text-transparent">{car.name}</span>
                  ) : (
                    <span className="inline-flex">
                      <span className="text-[#00a3da]">B</span>
                      <span className="text-[#002663]">M</span>
                      <span className="text-[#e20613]">W</span>
                    </span>
                  )}
                </h4>
                <p className="text-white font-black text-xs md:text-sm">{car.model}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Comparison */}
        <AnimatePresence>
          {selectedCar && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="backdrop-blur-md bg-[rgba(30,30,30,0.8)] border border-white/10 rounded-xl p-6"
            >
              <h5 className={`text-2xl font-black ${cars[selectedCar].color} mb-4 text-center`} style={{ textShadow: `0 0 20px ${selectedCar === 'honda' ? 'rgba(204, 0, 0, 0.8)' : 'rgba(0, 102, 177, 0.8)'}` }}>
                {cars[selectedCar].name} {cars[selectedCar].model} SPECS
              </h5>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {Object.entries(cars[selectedCar].specs).map(([spec, value]) => (
                  <motion.div
                    key={spec}
                    className="bg-[rgba(25,25,25,0.5)] border border-white/10 rounded-lg p-3 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-xs text-automotive-chrome font-black uppercase">{spec}</div>
                    <div className={`text-xl font-black ${cars[selectedCar].color}`} style={{ textShadow: `0 0 10px ${selectedCar === 'honda' ? 'rgba(204, 0, 0, 0.6)' : 'rgba(0, 102, 177, 0.6)'}` }}>{value}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mb-4">
                <h6 className="text-automotive-chrome font-black mb-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>FEATURES:</h6>
                <div className="flex flex-wrap gap-2">
                  {cars[selectedCar].features.map((feature, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-[rgba(30,30,30,0.8)] border border-white/10 text-white text-sm font-black rounded-full"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      style={{
                        boxShadow: `0 0 0 1px transparent`,
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        const glowColor = selectedCar === 'honda' ? '#CC0000' : '#0066B1'
                        e.currentTarget.style.boxShadow = `0 0 0 1px ${glowColor}, 0 0 10px ${glowColor}`
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

        {/* VS Animation */}
        <motion.div
          className="flex items-center justify-center gap-x-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.img
            src={cars.honda.logo}
            alt="Honda"
            className="h-10 w-10 object-contain"
            animate={{ x: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="text-4xl font-black text-automotive-gold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ textShadow: '0 0 30px rgba(255, 215, 0, 0.8)' }}
          >
            VS
          </motion.div>
          <motion.img
            src={cars.bmw.logo}
            alt="BMW"
            className="h-10 w-10 object-contain"
            animate={{ x: [0, -15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        <motion.p
          className="mt-4 text-center text-sm text-automotive-chrome font-black"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
        >
          ⚡ CLICK A CAR TO SEE SPECS ⚡
        </motion.p>
      </div>
    </div>
  )
}

export default CarComparison
