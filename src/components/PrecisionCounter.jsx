import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Set your anniversary date here (format: YYYY-MM-DDTHH:mm:ss)
const ANNIVERSARY_DATE = new Date('2026-07-29T00:00:00')

const PrecisionCounter = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      
      // Calculate exact time difference in milliseconds
      const diff = now.getTime() - ANNIVERSARY_DATE.getTime()
      
      // If the date is in the future, show 0
      if (diff < 0) {
        setTimeElapsed({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      
      // Calculate each unit sequentially without rounding errors
      const millisecondsPerSecond = 1000
      const millisecondsPerMinute = millisecondsPerSecond * 60
      const millisecondsPerHour = millisecondsPerMinute * 60
      const millisecondsPerDay = millisecondsPerHour * 24
      
      const days = Math.floor(diff / millisecondsPerDay)
      const remainingAfterDays = diff % millisecondsPerDay
      
      const hours = Math.floor(remainingAfterDays / millisecondsPerHour)
      const remainingAfterHours = remainingAfterDays % millisecondsPerHour
      
      const minutes = Math.floor(remainingAfterHours / millisecondsPerMinute)
      const remainingAfterMinutes = remainingAfterHours % millisecondsPerMinute
      
      const seconds = Math.floor(remainingAfterMinutes / millisecondsPerSecond)

      setTimeElapsed({ days, hours, minutes, seconds })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const TimeUnit = ({ value, label, color, icon }) => (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.1, rotate: [-5, 5, -5] }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.div
        className={`text-3xl md:text-4xl font-black ${color} mb-1`}
        animate={{ 
          scale: [1, 1.05, 1],
          textShadow: [
            `0 0 20px ${color.replace('text-', '')}`,
            `0 0 40px ${color.replace('text-', '')}`,
            `0 0 20px ${color.replace('text-', '')}`,
          ],
        }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{
          fontFamily: 'Arial Black, sans-serif',
          textShadow: '0 0 30px currentColor',
        }}
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      <div className="text-[10px] md:text-xs text-automotive-chrome uppercase tracking-widest font-bold">
        {label}
      </div>
      <motion.div
        className="text-lg md:text-xl mt-1"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {icon}
      </motion.div>
    </motion.div>
  )

  return (
    <div className="backdrop-blur-md bg-[rgba(25,25,25,0.65)] border border-white/10 p-4 md:p-6 rounded-2xl relative overflow-hidden">
      {/* Racing Background */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-20 pointer-events-none" />
      
      {/* Speed Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-automotive-orange to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              width: '100%',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
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
          🏁 OUR LOVE MILEAGE 🏁
        </motion.h3>
        
        <div className="flex justify-around items-center gap-1 md:gap-3">
          <TimeUnit value={timeElapsed.days} label="DAYS" color="text-honda-red" icon="🏎️" />
          <motion.div 
            className="text-2xl md:text-3xl text-automotive-gold font-black"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ textShadow: '0 0 15px rgba(255, 215, 0, 0.8)' }}
          >
            :
          </motion.div>
          <TimeUnit value={timeElapsed.hours} label="HOURS" color="text-kawasaki-green" icon="⚡" />
          <motion.div 
            className="text-2xl md:text-3xl text-automotive-gold font-black"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            style={{ textShadow: '0 0 15px rgba(255, 215, 0, 0.8)' }}
          >
            :
          </motion.div>
          <TimeUnit value={timeElapsed.minutes} label="MINS" color="text-bmw-blue" icon="🚙" />
          <motion.div 
            className="text-2xl md:text-3xl text-automotive-gold font-black"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            style={{ textShadow: '0 0 15px rgba(255, 215, 0, 0.8)' }}
          >
            :
          </motion.div>
          <TimeUnit value={timeElapsed.seconds} label="SECS" color="text-automotive-purple" icon="💨" />
        </div>

        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm md:text-base text-automotive-chrome font-black mb-2" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>
            SINCE JULY 29, 2026
          </p>
          <motion.div
            className="h-1.5 bg-automotive-carbon rounded-full overflow-hidden mx-auto"
            style={{ maxWidth: '200px' }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-honda-red via-kawasaki-green to-bmw-blue rounded-full"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ width: '50px' }}
            />
          </motion.div>
          <motion.p
            className="mt-3 text-xs text-kawasaki-lime font-black"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ textShadow: '0 0 10px rgba(50, 205, 50, 0.8)' }}
          >
            ⚡ FULL THROTTLE LOVE ⚡
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default PrecisionCounter
