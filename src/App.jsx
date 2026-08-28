import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WelcomeScreen from './components/WelcomeScreen'
import PrecisionCounter from './components/PrecisionCounter'
import DualWorldClocks from './components/DualWorldClocks'
import MilestoneTimeline from './components/MilestoneTimeline'
import CarComparison from './components/CarComparison'
import H2RBikeShowcase from './components/H2RBikeShowcase'
import LiveTelemetry from './components/LiveTelemetry'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [engineStarted, setEngineStarted] = useState(false)

  const handleEnterDashboard = () => {
    setShowWelcome(false)
    setEngineStarted(true)
  }

  return (
    <div className="min-h-screen bg-racing-gradient relative overflow-hidden">
      {/* Carbon Fiber Background */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-30 pointer-events-none" />
      
      {/* Reduced Speed Lines for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-automotive-orange to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              width: '100%',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-honda-red opacity-10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bmw-blue opacity-10 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-kawasaki-green opacity-10 blur-3xl rounded-full" />
      </div>

      <AnimatePresence mode="wait">
        {showWelcome ? (
          <WelcomeScreen key="welcome" onEnter={handleEnterDashboard} />
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10"
          >
            {/* Dashboard Header */}
            <motion.header
              className="p-4 md:p-6 text-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h1
                className="text-3xl md:text-5xl font-black mb-2"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
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
                className="text-automotive-chrome text-base md:text-lg font-bold"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                United by Speed, Driven by Love
              </motion.p>
            </motion.header>

            {/* Dashboard Grid */}
            <main className="p-4 md:p-6 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Precision Counter */}
                <motion.div
                  className="md:col-span-2 lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <PrecisionCounter />
                </motion.div>

                {/* Dual World Clocks */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <DualWorldClocks />
                </motion.div>

                {/* Live Telemetry */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <LiveTelemetry engineStarted={engineStarted} />
                </motion.div>

                {/* Car Comparison */}
                <motion.div
                  className="md:col-span-2 lg:col-span-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  <CarComparison />
                </motion.div>

                {/* H2R Bike Showcase */}
                <motion.div
                  className="md:col-span-2 lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <H2RBikeShowcase />
                </motion.div>

                {/* Milestone Timeline - Spans full width */}
                <motion.div
                  className="md:col-span-2 lg:col-span-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                >
                  <MilestoneTimeline />
                </motion.div>
              </div>
            </main>

            {/* Footer */}
            <motion.footer
              className="p-6 text-center text-automotive-chrome text-sm font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <p>🏎️ Made with 💕 across 645km of South African roads 🚙</p>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
