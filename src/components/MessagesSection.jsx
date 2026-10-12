import { motion } from 'framer-motion'

const MessagesSection = () => {
  return (
    <div className="backdrop-blur-md bg-[rgba(25,25,25,0.65)] border border-white/10 p-4 md:p-6 rounded-2xl relative overflow-hidden">
      {/* Carbon Fiber Background */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-20 pointer-events-none" />
      
      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-honda-red opacity-20 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-bmw-blue opacity-20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Header */}
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
          💕 MESSAGES 💕
        </motion.h3>

        {/* Message Content */}
        <motion.div
          className="text-white space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-2xl font-black text-automotive-gold mb-4 text-center" style={{ textShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }}>
            my lyfie ❤️
          </p>
          
          <div className="text-left space-y-4 text-sm md:text-base leading-relaxed">
            <p className="text-automotive-chrome">
              ek kan nie glo ons is al 'n hele maand saam nie... dis actually so crazy om te dink dat ons mekaar op 'n game ontmoet het en nou beteken jy so baie vir my... van die eerste keer dat ek jou gesien het het ek sommer net iets gevoel... ek het jou van die begin af so handsome en sexy gevind en ek het net al hoe meer vir jou begin val...
            </p>
            
            <p className="text-automotive-chrome">
              jy is so 'n hardwerkende persoon en ek is regtig trots op jou... ek love dat ek met jou oor enigiets kan praat en dat ek jou enige tyd kan call en jy sal antwoord... selfs al is jy in Rustenburg en ek in Durban laat jy my nooit voel asof jy te ver van my af is nie...
            </p>
            
            <p className="text-automotive-chrome">
              dankie dat jy altyd daar is vir my en dat ek myself by jou kan wees... hierdie een maand saam met jou beteken regtig baie vir my en ek hoop ons het nog so baie meer maande en memories saam voor ons... ek is baie baie lief vir jou my lyfie ❤️🥹
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MessagesSection
