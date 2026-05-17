import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Global SaaS Dashboard',
      category: 'Web Development',
      image: '/src/assets/images/portfolio_web_design_1779017080867.png',
      description: 'A data-heavy enterprise dashboard for global logistics monitoring.'
    },
    {
      title: 'PaySwift Mobile',
      category: 'Mobile App',
      image: '/src/assets/images/portfolio_mobile_app_1779017097941.png',
      description: 'Award-winning fintech app with focus on instant cross-border transfers.'
    },
    {
      title: 'Nexus IoT Hub',
      category: 'IoT & Cloud',
      image: '/src/assets/images/portfolio_iot_cloud_1779017115027.png',
      description: 'Centralized management platform for city-wide smart sensor networks.'
    },
    {
      title: 'EcoTrack Platform',
      category: 'Cloud Solutions',
      image: 'https://picsum.photos/seed/ecotrack/800/600',
      description: 'Environmental monitoring system using real-time data processing.'
    },
    {
      title: 'Visionary AR',
      category: 'UI/UX Design',
      image: 'https://picsum.photos/seed/visionary/800/600',
      description: 'Experimental interface design for next-gen augmented reality glasses.'
    },
    {
      title: 'SecureNet Core',
      category: 'Cyber Security',
      image: 'https://picsum.photos/seed/securenet/800/600',
      description: 'Internal threat detection system for financial institutions.'
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-4">Innovation Showcase</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Our <span className="text-brand-cyan">Featured</span> Projects</h3>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <a href="#" className="text-brand-cyan text-sm font-bold uppercase tracking-widest hover:underline transition-all">View All Work →</a>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[32px] bg-slate-900 border border-white/5"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="p-8">
              <span className="text-[10px] font-black tracking-widest text-brand-cyan uppercase mb-2 block">{project.category}</span>
              <h4 className="text-white text-xl font-bold mb-3 tracking-tight">{project.title}</h4>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
              
              <div className="flex gap-4">
                <a href="#" className="text-white/60 hover:text-brand-cyan transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
