import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LiveTelemetry = ({ engineStarted }) => {
  const [gear, setGear] = useState('N')
  const [speed, setSpeed] = useState(0)
  const [turboBoost, setTurboBoost] = useState(0)
  const [trackCondition, setTrackCondition] = useState({
    text: '⛅ OPTIMAL / COOL TRACK',
    color: 'text-amber-400',
    glow: 'rgba(251, 191, 36, 0.8)',
    borderColor: '#fbbf24'
  })

  // Weather conditions for South African cities
  const weatherConditions = {
    durban: 'cloudy',
    rustenburg: 'partly_sunny'
  }

  // Calculate track conditions based on weather
  useEffect(() => {
    const durban = weatherConditions.durban
    const rustenburg = weatherConditions.rustenburg

    if (durban.includes('rain') || durban.includes('shower') || 
        rustenburg.includes('rain') || rustenburg.includes('shower')) {
      setTrackCondition({
        text: '🌧️ WET TRACK / HAZARDOUS',
        color: 'text-cyan-400',
        glow: 'rgba(34, 211, 238, 0.8)',
        borderColor: '#22d3ee'
      })
    }
    else if ((durban.includes('sunny') || durban.includes('clear')) && 
             (rustenburg.includes('sunny') || rustenburg.includes('clear'))) {
      setTrackCondition({
        text: '☀️ SUNNY / HOT TRACK',
        color: 'text-green-400',
        glow: 'rgba(74, 222, 128, 0.8)',
        borderColor: '#4ade80'
      })
    }
    else {
      setTrackCondition({
        text: '⛅ OPTIMAL / COOL TRACK',
        color: 'text-amber-400',
        glow: 'rgba(251, 191, 36, 0.8)',
        borderColor: '#fbbf24'
      })
    }
  }, [])

  // Manual gear control
  const shiftGear = (newGear) => {
    if (!engineStarted) return
    setGear(newGear)
  }

  const shiftUp = () => {
    const gearNum = parseInt(gear) || 0
    if (gearNum < 6) {
      shiftGear((gearNum + 1).toString())
    }
  }

  const shiftDown = () => {
    const gearNum = parseInt(gear) || 0
    if (gearNum > 1) {
      shiftGear((gearNum - 1).toString())
    } else if (gearNum === 1) {
      shiftGear('N')
    }
  }

  // Synchronized speed and turbo based on manual gear
  useEffect(() => {
    if (!engineStarted) {
      setGear('N')
      setSpeed(0)
      setTurboBoost(0)
      return
    }

    const updateInterval = 50

    const mainTimer = setInterval(() => {
      const gearNum = parseInt(gear) || 0

      if (gearNum === 0) {
        // Neutral
        setSpeed(0)
        setTurboBoost(0)
      } else {
        // Calculate target speed based on gear
        let targetSpeed, targetTurbo
        
        switch(gearNum) {
          case 1:
            targetSpeed = 60
            targetTurbo = 1.8
            break
          case 2:
            targetSpeed = 100
            targetTurbo = 1.7
            break
          case 3:
            targetSpeed = 140
            targetTurbo = 1.7
            break
          case 4:
            targetSpeed = 180
            targetTurbo = 1.5
            break
          case 5:
            targetSpeed = 220
            targetTurbo = 1.5
            break
          case 6:
            targetSpeed = 240
            targetTurbo = 1.2
            break
          default:
            targetSpeed = 0
            targetTurbo = 0
        }

        // Smooth transition to target
        const currentSpeedVal = speed
        const speedDiff = targetSpeed - currentSpeedVal
        const newSpeed = currentSpeedVal + (speedDiff * 0.1)
        
        // Add slight fluctuation in gear 6
        let finalSpeed = newSpeed
        if (gearNum === 6) {
          const fluctuation = Math.floor(Math.random() * 7) - 3
          finalSpeed = 240 + fluctuation
        }

        // Turbo fluctuation
        let finalTurbo = targetTurbo
        if (gearNum >= 2) {
          finalTurbo = targetTurbo + (Math.random() * 0.1 - 0.05)
        }

        setSpeed(Math.floor(finalSpeed))
        setTurboBoost(finalTurbo.toFixed(2))
      }
    }, updateInterval)

    return () => clearInterval(mainTimer)
  }, [engineStarted, gear, speed])

  const speedPercentage = Math.min(100, (speed / 300) * 100)
  const turboPercentage = Math.min(100, (turboBoost / 2.0) * 100)

  return (
    <div className="backdrop-blur-md bg-[rgba(25,25,25,0.65)] border border-white/10 p-4 md:p-6 rounded-2xl relative overflow-hidden">
      {/* Racing Background */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-20 pointer-events-none" />
      
      {/* Speed Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-automotive-gold to-transparent"
            style={{
              top: `${25 + i * 25}%`,
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
          🏁 LIVE PIT WALL TELEMETRY
        </motion.h3>

        <div className="space-y-4">
          {/* Fuel Level / Love Tank */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-automotive-chrome font-black" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>
                FUEL LEVEL / LOVE TANK
              </span>
              <span className="text-xs text-kawasaki-lime font-black" style={{ textShadow: '0 0 10px rgba(50, 205, 50, 0.8)' }}>
                FULL THROTTLE
              </span>
            </div>
            <div className="h-3 bg-neutral-800 rounded-full overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 via-green-400 to-green-300 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.8))' }}
              />
            </div>
          </motion.div>

          {/* Gear, Speed, Turbo Boost - Side by Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-3"
          >
            {/* Gear Display */}
            <div className="bg-[rgba(30,30,30,0.8)] border border-white/10 rounded-lg p-3 text-center">
              <div className="text-xs text-automotive-chrome font-black mb-1" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>
                GEAR
              </div>
              <motion.div
                className="text-4xl font-black text-automotive-gold"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                style={{ textShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }}
              >
                {gear}
              </motion.div>
              {/* Gear Control Buttons */}
              <div className="flex justify-center gap-2 mt-2">
                <button
                  onClick={shiftDown}
                  disabled={!engineStarted}
                  className="px-2 py-1 bg-[rgba(30,30,30,0.8)] border border-white/10 rounded text-xs font-black text-white hover:bg-[rgba(50,50,50,0.8)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <button
                  onClick={shiftUp}
                  disabled={!engineStarted}
                  className="px-2 py-1 bg-[rgba(30,30,30,0.8)] border border-white/10 rounded text-xs font-black text-white hover:bg-[rgba(50,50,50,0.8)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  +
                </button>
              </div>
            </div>

            {/* Speed Display */}
            <div className="bg-[rgba(30,30,30,0.8)] border border-white/10 rounded-lg p-3 text-center">
              <div className="text-xs text-automotive-chrome font-black mb-1" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>
                SPEED
              </div>
              <div className="text-3xl font-black text-automotive-gold" style={{ textShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }}>
                {speed}
              </div>
              <div className="text-xs text-automotive-chrome font-black">km/h</div>
            </div>

            {/* Turbo Boost */}
            <div className="bg-[rgba(30,30,30,0.8)] border border-white/10 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-automotive-chrome font-black" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>
                  TURBO
                </span>
                <span className="text-xs font-black" style={{ 
                  color: turboBoost >= 1.6 ? '#ef4444' : turboBoost >= 1.2 ? '#fbbf24' : '#4ade80',
                  textShadow: `0 0 10px ${turboBoost >= 1.6 ? 'rgba(239, 68, 68, 0.8)' : turboBoost >= 1.2 ? 'rgba(251, 191, 36, 0.8)' : 'rgba(74, 222, 128, 0.8)'}`
                }}>
                  {turboBoost} BAR
                </span>
              </div>
              <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full transition-all duration-300"
                  animate={{ 
                    width: `${turboPercentage}%`,
                    backgroundColor: turboBoost >= 1.6 ? '#ef4444' : turboBoost >= 1.2 ? '#fbbf24' : '#4ade80'
                  }}
                  style={{ filter: `drop-shadow(0 0 8px ${turboBoost >= 1.6 ? 'rgba(239, 68, 68, 0.8)' : turboBoost >= 1.2 ? 'rgba(251, 191, 36, 0.8)' : 'rgba(74, 222, 128, 0.8)'})` }}
                />
              </div>
            </div>
          </motion.div>

          {/* Track Conditions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <div
              className="px-4 py-2 bg-[rgba(30,30,30,0.8)] border border-white/10 rounded-full"
              style={{
                boxShadow: `0 0 0 2px ${trackCondition.borderColor}, 0 0 15px ${trackCondition.glow}`,
                transition: 'all 0.3s ease',
              }}
            >
              <span className={`text-sm font-black ${trackCondition.color}`} style={{ textShadow: `0 0 15px ${trackCondition.glow}` }}>
                {trackCondition.text}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="flex justify-center gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="text-3xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ⚙️
          </motion.div>
          <motion.div
            className="text-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            📡
          </motion.div>
          <motion.div
            className="text-3xl"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ⚙️
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-4 text-center text-xs text-automotive-chrome font-black"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}
        >
          🏁 SYSTEMS NOMINAL 🏁
        </motion.p>
      </div>
    </div>
  )
}

export default LiveTelemetry
