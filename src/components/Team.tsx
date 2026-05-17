import { motion } from 'motion/react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'ANANDA BIMBIM NOVIANO',
      role: 'CEO & Founder',
      image: 'https://i.pravatar.cc/300?u=bimbim',
      socials: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'Jessica Walsh',
      role: 'Head of UI/UX',
      image: 'https://i.pravatar.cc/300?u=jessica',
      socials: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'David Miller',
      role: 'Lead Full-Stack Developer',
      image: 'https://i.pravatar.cc/300?u=david',
      socials: { linkedin: '#', github: '#' }
    },
    {
      name: 'Sophia Aria',
      role: 'IoT Systems Architect',
      image: 'https://i.pravatar.cc/300?u=sophia',
      socials: { linkedin: '#', twitter: '#' }
    }
  ];

  return (
    <section id="team" className="section-padding">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-4">Our Brilliant Minds</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight">Meet The <span className="text-brand-cyan">Innovators</span></h3>
          <p className="text-lg text-slate-400">
            A diverse group of world-class engineers, designers, and strategists working together to build the technology of tomorrow.
          </p>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-[40px] aspect-[4/5] mb-6 border border-white/10">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-brand-cyan text-brand-blue flex items-center justify-center hover:scale-110 transition-transform">
                    <Linkedin size={18} />
                  </a>
                )}
                {member.socials.github && (
                  <a href={member.socials.github} className="w-10 h-10 rounded-full bg-brand-cyan text-brand-blue flex items-center justify-center hover:scale-110 transition-transform">
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-white tracking-tight mb-1">{member.name}</h4>
              <p className="text-[10px] text-brand-cyan font-bold uppercase tracking-[0.2em]">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
