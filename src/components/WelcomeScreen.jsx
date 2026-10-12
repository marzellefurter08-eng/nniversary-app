import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WelcomeScreen = ({ onEnter }) => {
  const [isConnecting, setIsConnecting] = useState(false)
  const [buttonPressed, setButtonPressed] = useState(false)
  const [statusMessage, setStatusMessage] = useState('STAGE 1: IGNITION ENGAGED...')
  const [showGauge, setShowGauge] = useState(false)
  const [rpm, setRpm] = useState(0)

  const statusMessages = [
    'STAGE 1: IGNITION ENGAGED...',
    'STAGE 2: REVVING TO REDLINE...',
    'STAGE 3: LAUNCH CONTROL READY...'
  ]

  const handleEnter = () => {
    setButtonPressed(true)

    // Apply rumble effect
    setTimeout(() => {
      setIsConnecting(true)
      setShowGauge(true)

      // Animate RPM from 0 to 9000
      let currentRpm = 0
      const rpmInterval = setInterval(() => {
        currentRpm += 150 // Increment by 150 every 50ms
        if (currentRpm >= 9000) {
          currentRpm = 9000
          clearInterval(rpmInterval)
        }
        setRpm(currentRpm)
      }, 50)

      // Cycle through status messages
      let messageIndex = 0
      const messageInterval = setInterval(() => {
        messageIndex = (messageIndex + 1) % statusMessages.length
        setStatusMessage(statusMessages[messageIndex])
      }, 800)

      // Transition to dashboard after 2.5 seconds
      setTimeout(() => {
        clearInterval(messageInterval)
        clearInterval(rpmInterval)
        onEnter()
      }, 2500)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-racing-gradient flex items-center justify-center relative overflow-hidden">
      {/* Carbon Fiber Background */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-30 pointer-events-none" />
      
      {/* Glassmorphism Container */}
      <motion.div 
        className={`backdrop-blur-md bg-[rgba(25,25,25,0.65)] border border-white/10 p-8 md:p-12 rounded-2xl relative z-10 max-w-4xl mx-4 ${buttonPressed && !isConnecting ? 'animate-rumble' : ''}`}
      >
        <div className="text-center">
          <AnimatePresence mode="wait">
            {!isConnecting ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Honda and BMW Logos */}
                <div className="flex justify-center items-center gap-8 md:gap-16 mb-8">
                  <motion.img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesofEKVxNTVdwAMXDeOdRrt3GP8iSMOt8BZxq34wnpUKwYZacEqJlyxI&s=10"
                    alt="Honda"
                    className="h-12 w-12 object-contain"
                    animate={{ scale: [1, 1.1, 1], rotate: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ filter: 'drop-shadow(0 0 20px rgba(204, 0, 0, 0.8))' }}
                  />

                  <motion.img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiWkyr0v3L6z4tuNGSzIEJFnzWrxhY_rN_fB0yBxcow&s"
                    alt="BMW"
                    className="h-12 w-12 object-contain"
                    animate={{ scale: [1, 1.1, 1], rotate: [5, -5, 5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    style={{ filter: 'drop-shadow(0 0 20px rgba(0, 102, 177, 0.8))' }}
                  />
                </div>

                <motion.h1
                  className="text-4xl md:text-6xl font-black mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="bg-gradient-to-b from-[#ffffff] via-[#dcdcdc] to-[#8c8c8c] bg-clip-text text-transparent font-black tracking-[0.15em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">HONDA</span>
                  <span className="mx-2">❤️</span>
                  <span className="inline-flex font-black tracking-normal drop-shadow-[0_2px_6px_rgba(59,130,246,0.35)]">
                    <span className="text-[#00a3da]">B</span>
                    <span className="text-[#002663]">M</span>
                    <span className="text-[#e20613]">W</span>
                  </span>
                </motion.h1>
                
                <motion.p
                  className="text-xl md:text-2xl text-automotive-chrome mb-4 font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  United by Speed & Love
                </motion.p>

                <motion.p
                  className="text-lg text-kawasaki-lime mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  🏁 Durban ↔ Rustenburg 🏁
                </motion.p>

                <motion.button
                  onClick={handleEnter}
                  className="px-12 py-6 bg-[rgba(30,30,30,0.8)] border-2 border-transparent rounded-full text-white font-black text-xl"
                  whileHover={{ scale: 1.1, rotate: [-2, 2, -2] }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  style={{
                    boxShadow: `0 0 0 2px transparent, 0 0 20px rgba(0,0,0,0.5)`,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!buttonPressed) {
                      e.currentTarget.style.boxShadow = `0 0 0 2px #FFD700, 0 0 20px #FFD700`
                      e.currentTarget.style.background = `linear-gradient(to right, #CC000022, #FFD70044, #0066B122)`
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!buttonPressed) {
                      e.currentTarget.style.boxShadow = `0 0 0 2px transparent, 0 0 20px rgba(0,0,0,0.5)`
                      e.currentTarget.style.background = 'rgba(30,30,30,0.8)'
                    }
                  }}
                >
                  🏎️ START YOUR ENGINES 🏎️
                </motion.button>

                {/* Stats */}
                <motion.div
                  className="mt-8 flex justify-center gap-8 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <div className="text-automotive-orange">
                    <span className="font-bold text-2xl">29</span> July
                  </div>
                  <div className="text-automotive-purple">
                    <span className="font-bold text-2xl">29</span> August
                  </div>
                  <div className="text-kawasaki-lime">
                    <span className="font-bold text-2xl">🏁</span> Dream
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-8"
              >
                {/* Instrument Cluster - RPM Gauge */}
                <div className="w-full max-w-md mx-auto">
                  <div className="w-full h-4 bg-neutral-800 rounded-full overflow-hidden border border-white/10">
                    <div className={`h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 ${showGauge ? 'animate-sweep' : ''}`} />
                  </div>
                </div>

                {/* Status Message */}
                <motion.p
                  className="text-2xl font-black text-automotive-gold"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                  style={{ textShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }}
                >
                  {statusMessage}
                </motion.p>

                {/* RPM Display */}
                <div className="text-6xl font-black text-automotive-gold" style={{ textShadow: '0 0 30px rgba(255, 215, 0, 0.8)' }}>
                  {Math.floor(rpm)}
                </div>
                <div className="text-sm font-bold text-automotive-chrome">RPM</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-honda-red opacity-20 blur-3xl rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bmw-blue opacity-20 blur-3xl rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}

export default WelcomeScreen
