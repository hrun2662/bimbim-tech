import { motion } from 'motion/react';
import { Target, Eye, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Projects Done', value: '150+' },
    { label: 'Happy Clients', value: '80+' },
    { label: 'Years Exp.', value: '10+' },
    { label: 'Offices', value: '4' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-brand-cyan rounded-full"></div>
            <h2 className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase">Inside Bimbim Tech</h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight">
            Pioneering Digital <span className="text-brand-cyan">Innovation</span>
          </h3>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Kami adalah pusat keunggulan teknologi yang berdedikasi untuk memberikan solusi digital berperforma tinggi. Dengan memadukan desain strategis dan rekayasa perangkat lunak yang tangguh, kami membantu merek untuk berkembang di pasar global.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex-shrink-0 w-14 h-14 bg-brand-cyan/20 rounded-xl flex items-center justify-center text-brand-cyan">
                <Target size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 text-white">Misi Kami</h4>
                <p className="text-slate-400 text-sm">Menghubungkan kompleksitas teknologi dengan pengalaman manusia yang intuitif melalui inovasi berkelanjutan.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex-shrink-0 w-14 h-14 bg-brand-cyan/20 rounded-xl flex items-center justify-center text-brand-cyan">
                <Eye size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 text-white">Visi Kami</h4>
                <p className="text-slate-400 text-sm">Menjadi mitra terpercaya di dunia untuk transformasi digital end-to-end dan pertumbuhan teknologi yang berkelanjutan.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4 relative z-10">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                whileHover={{ y: -5 }}
                className="bg-slate-900 border border-white/10 p-10 rounded-[40px] text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-brand-cyan mb-2">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
