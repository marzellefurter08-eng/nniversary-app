import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const milestones = [
  {
    id: 1,
    title: 'The Day We Met',
    date: 'July 25, 2024',
    description: 'The moment our paths crossed and everything changed. From strangers to something magical in the making.',
    icon: '🏁',
    color: 'text-honda-red',
    vehicle: '🏎️',
  },
  {
    id: 2,
    title: 'Going Official',
    date: 'July 29, 2024',
    description: 'The day we made it official and started this incredible journey together.',
    icon: '❤️',
    color: 'text-kawasaki-green',
    vehicle: '🏍️',
  },
  {
    id: 3,
    title: 'Our First Call',
    date: 'August 1, 2024',
    description: 'Hearing your voice for the first time across the distance. Hours turned into moments, and moments into memories.',
    icon: '📞',
    color: 'text-bmw-blue',
    vehicle: '🚙',
  },
  {
    id: 4,
    title: '1 Month Anniversary',
    date: 'August 29, 2024',
    description: 'Celebrating our first month together! Every day with you is a victory lap. Here\'s to many more!',
    icon: '🏆',
    color: 'text-automotive-gold',
    vehicle: '🏁',
  },
]

const MilestoneTimeline = () => {
  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="backdrop-blur-md bg-[rgba(25,25,25,0.65)] border border-white/10 p-4 md:p-6 rounded-2xl relative overflow-hidden">
      {/* Racing Background */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-20 pointer-events-none" />
      
      {/* Speed Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-automotive-purple to-transparent"
            style={{
              top: `${20 + i * 20}%`,
              width: '100%',
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.5,
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
          🏁 OUR LOVE RACE TRACK 🏁
        </motion.h3>
        
        <div className="relative">
          {/* Racing Track Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-honda-red via-kawasaki-green to-bmw-blue transform md:-translate-x-1/2 rounded-full" />
          
          {/* Timeline Items */}
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-12 md:pl-0"
              >
                {/* Racing Checkpoint */}
                <motion.div
                  className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full ${milestone.color.replace('text-', 'bg')} transform md:-translate-x-1/2 z-10 flex items-center justify-center text-xs font-black text-white`}
                  whileHover={{ scale: 1.3 }}
                  animate={{
                    boxShadow: [
                      `0 0 15px ${milestone.color.replace('text-', 'rgba')}`,
                      `0 0 30px ${milestone.color.replace('text-', 'rgba')}`,
                      `0 0 15px ${milestone.color.replace('text-', 'rgba')}`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ 
                    boxShadow: `0 0 20px ${milestone.color.replace('text-', '')}`,
                    border: '3px solid #FFD700',
                  }}
                >
                  {milestone.vehicle}
                </motion.div>

                {/* Milestone Card */}
                <motion.div
                  className={`ml-4 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? [-2, 2, -2] : [2, -2, 2] }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="bg-[rgba(30,30,30,0.8)] backdrop-blur-sm border-2 border-white/10 rounded-xl p-4 cursor-pointer transition-all"
                    onClick={() => toggleExpand(milestone.id)}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      boxShadow: `0 0 0 2px transparent, 0 0 20px rgba(0,0,0,0.5)`,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      const glowColor = milestone.id === 1 ? '#CC0000' : milestone.id === 2 ? '#006400' : milestone.id === 3 ? '#0066B1' : '#FFD700'
                      e.currentTarget.style.boxShadow = `0 0 0 2px ${glowColor}, 0 0 20px ${glowColor}`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0 2px transparent, 0 0 20px rgba(0,0,0,0.5)`
                    }}
                  >
                    <div className="flex items-center gap-3 md:justify-end">
                      <motion.span
                        className="text-xl font-black"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {milestone.icon}
                      </motion.span>
                      <div>
                        <h4 className={`font-black text-lg ${milestone.color}`} style={{ textShadow: `0 0 15px ${milestone.id === 1 ? 'rgba(204, 0, 0, 0.8)' : milestone.id === 2 ? 'rgba(0, 100, 0, 0.8)' : milestone.id === 3 ? 'rgba(0, 102, 177, 0.8)' : 'rgba(255, 215, 0, 0.8)'}` }}>{milestone.title}</h4>
                        <p className="text-xs text-automotive-chrome font-black" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }}>{milestone.date}</p>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedId === milestone.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 pt-3 border-t-2 border-automotive-gold"
                        >
                          <p className="text-sm text-automotive-chrome leading-relaxed font-semibold">
                            {milestone.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Racing Decorations */}
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="text-4xl"
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🏎️
          </motion.div>
          <motion.div
            className="text-4xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            🏍️
          </motion.div>
          <motion.div
            className="text-4xl"
            animate={{ x: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚙
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default MilestoneTimeline
