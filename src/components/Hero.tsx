import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-blue">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/tech_hero_bg_1779017064846.png" 
          alt="Tech Background" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/60 via-transparent to-brand-blue"></div>
      </div>

      {/* Animated Glowing Orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-cyan/10 blur-[100px] rounded-full"></div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 rounded-md">
            The Future of Technology
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight leading-none">
            Solusi <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500">Teknologi</span> Terdepan
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Membantu bisnis bertransformasi secara digital dengan solusi pengembangan perangkat lunak kelas dunia.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              Hubungi Kami
            </motion.a>
            <motion.a 
              href="#portfolio"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline"
            >
              Layanan Kami
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative side elements matching theme */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-brand-cyan/20 to-transparent"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-brand-cyan/20 to-transparent"></div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <ChevronDown className="animate-bounce" />
      </motion.div>
    </section>
  );
}
