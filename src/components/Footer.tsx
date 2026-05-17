import { Cpu, Linkedin, Twitter, Github, Instagram, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Features', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-blue pt-20 pb-10 border-t border-white/10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-xl font-bold text-white mb-8 uppercase tracking-tight">
              <div className="w-8 h-8 bg-brand-cyan rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-brand-blue"></div>
              </div>
              <span>Bimbim<span className="text-brand-cyan">Tech</span></span>
            </a>
            <p className="text-slate-500 leading-relaxed mb-8 text-sm max-w-xs">
              Membantu bisnis bertransformasi secara digital dengan solusi pengembangan perangkat lunak kelas dunia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-cyan hover:text-brand-blue transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-cyan hover:text-brand-blue transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 hover:text-brand-cyan transition-colors text-sm font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Support</h4>
            <ul className="space-y-4">
              {legalLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 hover:text-brand-cyan transition-colors text-sm font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Newsletter</h4>
            <p className="text-slate-500 mb-6 text-sm">Join our newsletter to stay up to date on tech innovations.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand-cyan w-full placeholder:text-slate-700"
              />
              <button className="bg-brand-cyan text-brand-blue p-2.5 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-brand-cyan/20">
                <ArrowUp size={18} className="rotate-45" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] uppercase font-bold tracking-[0.2em]">
            © {new Date().getFullYear()} BIMBIM TECH SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-500 hover:text-brand-cyan transition-colors text-[10px] font-bold uppercase tracking-widest"
          >
            Back To Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
