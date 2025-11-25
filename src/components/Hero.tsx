import { Sparkles, Calendar, Star, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1700142360825-d21edc53c8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBiZWF1dHklMjBjbGluaWN8ZW58MXx8fHwxNzY0MDE1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-rose-900/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-400" />
          <Sparkles className="w-6 h-6 text-rose-400" />
          <span className="tracking-[0.3em] uppercase text-rose-200">Micropigmentação, beleza facial e cílios • Castanhal – PA</span>
          <Sparkles className="w-6 h-6 text-rose-400" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-400" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-white"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1' }}
        >
          Beleza que valoriza o seu olhar
          <br />
          <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
            Gracy Silva Beauty & Estética
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Procedimentos de micropigmentação, design e cílios feitos para realçar sua expressão, com técnica, segurança e acabamento natural.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/5591993761639"
            target="_blank"
            rel="noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/50 flex items-center gap-2 justify-center"
          >
            <Calendar className="w-5 h-5" />
            Agendar atendimento no WhatsApp
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full border-2 border-white/50 transition-all hover:border-white flex items-center gap-2 justify-center"
          >
            Ver procedimentos disponíveis
            <Star className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
        >
          {[
            { number: "+3 anos", label: "Experiência em micropigmentação" },
            { number: "+500 procedimentos", label: "Realizados em sobrancelhas, lábios e cílios" },
            { number: "Atendimento individual", label: "Foco em cuidado e detalhe" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
