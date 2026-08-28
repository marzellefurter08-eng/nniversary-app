import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Configure your timezones here - South Africa cities
const MY_TIMEZONE = 'Africa/Johannesburg' // Durban uses same timezone as Johannesburg
const HIS_TIMEZONE = 'Africa/Johannesburg' // Rustenburg uses same timezone

const DualWorldClocks = () => {
  const [myTime, setMyTime] = useState(new Date())
  const [hisTime, setHisTime] = useState(new Date())

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setMyTime(new Date(now.toLocaleString('en-US', { timeZone: MY_TIMEZONE })))
      setHisTime(new Date(now.toLocaleString('en-US', { timeZone: HIS_TIMEZONE })))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })
  }

  const getDistance = () => {
    // Approximate distance between Durban and Rustenburg in km
    return '645 km'
  }

  return (
    <div className="backdrop-blur-md bg-[rgba(25,25,25,0.65)] border border-white/10 p-4 md:p-6 rounded-2xl relative overflow-hidden">
      {/* Racing Background */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-20 pointer-events-none" />
      
      {/* Speed Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-kawasaki-lime to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              width: '100%',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
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
            background: 'linear-gradient(90deg, #CC0000, #FFD700, #0066B1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
          }}
        >
          SOUTH AFRICA CONNECTION
        </motion.h3>
        
        <div className="w-full relative px-6 py-4 flex flex-col gap-y-4">
          {/* Layer 1: Visual Slider (Line and Dot) */}
          <div className="w-full h-8 flex items-center justify-center my-2">
            <div className="relative flex items-center justify-center">
              <motion.div
                className="w-32 h-1 bg-gradient-to-r from-honda-red via-kawasaki-green to-bmw-blue rounded-full"
                animate={{
                  scaleX: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-2 h-2 bg-automotive-gold rounded-full"
                animate={{
                  x: [-64, 64, -64],
                  scale: [1, 1.5, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }}
              />
            </div>
          </div>

          {/* Layer 2: Twin City Columns */}
          <div className="w-full flex items-center justify-between">
            {/* Durban - Left Column */}
            <motion.div
              className="w-[45%] flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-xs text-automotive-chrome font-black mb-1" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>DURBAN</div>
              <motion.div
                className="text-xl font-black text-honda-red"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ textShadow: '0 0 20px rgba(204, 0, 0, 0.8)' }}
              >
                {formatTime(myTime)}
              </motion.div>
              <div className="text-[10px] text-kawasaki-lime mt-1 font-black" style={{ textShadow: '0 0 10px rgba(50, 205, 50, 0.6)' }}>{formatDate(myTime)}</div>
            </motion.div>

            {/* Rustenburg - Right Column */}
            <motion.div
              className="w-[45%] flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-xs text-automotive-chrome font-black mb-1" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>RUSTENBURG</div>
              <motion.div
                className="text-xl font-black text-bmw-blue"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                style={{ textShadow: '0 0 20px rgba(0, 102, 177, 0.8)' }}
              >
                {formatTime(hisTime)}
              </motion.div>
              <div className="text-[10px] text-kawasaki-lime mt-1 font-black" style={{ textShadow: '0 0 10px rgba(50, 205, 50, 0.6)' }}>{formatDate(hisTime)}</div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-center items-center gap-4 mb-3">
            <motion.div
              className="text-3xl"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              🏎️
            </motion.div>
            <p className="text-lg text-automotive-chrome font-black" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.4)' }}>
              {getDistance()} APART
            </p>
            <motion.div
              className="text-3xl"
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              🚙
            </motion.div>
          </div>
          
          <motion.div
            className="h-1.5 bg-automotive-carbon rounded-full overflow-hidden mx-auto"
            style={{ maxWidth: '250px' }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-honda-red via-kawasaki-green to-bmw-blue rounded-full"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ width: '60px' }}
            />
          </motion.div>
          
          <motion.p
            className="mt-3 text-xs text-automotive-orange font-black"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ textShadow: '0 0 10px rgba(255, 165, 0, 0.8)' }}
          >
            ⚡ SAME TIMEZONE, DIFFERENT PLACES ⚡
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default DualWorldClocks
