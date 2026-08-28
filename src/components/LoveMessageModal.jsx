import { motion, AnimatePresence } from 'framer-motion'

const LoveMessageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="backdrop-blur-md bg-[rgba(25,25,25,0.85)] border border-white/10 p-6 md:p-8 rounded-2xl relative overflow-hidden max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Carbon Fiber Background */}
            <div className="absolute inset-0 bg-carbon-fiber opacity-20 pointer-events-none" />
            
            {/* Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-honda-red opacity-20 blur-3xl rounded-full" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-bmw-blue opacity-20 blur-3xl rounded-full" />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <motion.h2
                className="text-3xl md:text-4xl font-black text-center mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-b from-[#ffffff] via-[#dcdcdc] to-[#8c8c8c] bg-clip-text text-transparent font-black tracking-[0.15em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">HONDA</span>
                <span className="mx-2">❤️</span>
                <span className="inline-flex font-black tracking-normal drop-shadow-[0_2px_6px_rgba(59,130,246,0.35)]">
                  <span className="text-[#00a3da]">B</span>
                  <span className="text-[#002663]">M</span>
                  <span className="text-[#e20613]">W</span>
                </span>
              </motion.h2>

              {/* Message */}
              <motion.div
                className="text-white text-center space-y-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-2xl font-black text-automotive-gold mb-4" style={{ textShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }}>
                  my lyfie ❤️
                </p>
                
                <div className="text-left space-y-4 text-sm md:text-base leading-relaxed">
                  <p className="text-automotive-chrome">
                    ek kan nie glo ons is al 'n hele maand saam nie... dis actually so crazy om te dink dat ons mekaar op 'n game ontmoet het en nou beteken jy so baie vir my... van die eerste keer dat ek jou gesien het het ek sommer net iets gevoel... ek het jou van die begin af so mooi gevind en ek het net al hoe meer vir jou begin val...
                  </p>
                  
                  <p className="text-automotive-chrome">
                    jy is so 'n hardwerkende persoon en ek is regtig trots op jou... ek love dat ek met jou oor enigiets kan praat en dat ek jou enige tyd kan call en jy sal antwoord... selfs al is jy in Rustenburg en ek in Durban laat jy my nooit voel asof jy te ver van my af is nie...
                  </p>
                  
                  <p className="text-automotive-chrome">
                    dankie dat jy altyd daar is vir my en dat ek myself by jou kan wees... hierdie een maand saam met jou beteken regtig baie vir my en ek hoop ons het nog so baie meer maande en memories saam voor ons... ek is baie baie lief vir jou my lyfie ❤️🥹
                  </p>
                </div>
              </motion.div>

              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="mt-6 w-full px-6 py-3 bg-[rgba(30,30,30,0.8)] border-2 border-transparent rounded-full text-white font-black text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  boxShadow: `0 0 0 2px transparent, 0 0 20px rgba(0,0,0,0.5)`,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 2px #FFD700, 0 0 20px #FFD700`
                  e.currentTarget.style.background = `linear-gradient(to right, #CC000022, #FFD70044, #0066B122)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 2px transparent, 0 0 20px rgba(0,0,0,0.5)`
                  e.currentTarget.style.background = 'rgba(30,30,30,0.8)'
                }}
              >
                ❤️ Close ❤️
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoveMessageModal
