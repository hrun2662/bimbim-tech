import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'CTO, Fintech Solutions',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
      content: 'Partnering with Bimbim Tech transformed our legacy infrastructure into a real-time powerhouse. Their expertise in cloud architectures is world-class.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, NextMove',
      avatar: 'https://i.pravatar.cc/150?u=michael',
      content: "The UI/UX design they delivered exceeded our wildest expectations. Our user engagement increased by 40% within the first month of launching.",
      rating: 5
    },
    {
      name: 'Elena Rodriguez',
      role: 'Director of Innovation, SmartCity Co',
      avatar: 'https://i.pravatar.cc/150?u=elena',
      content: 'Bimbim Tech is simply the best when it comes to IoT integration. They handled our city-wide sensor grid project with absolute precision.',
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-4">Global Trust</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-8 text-white uppercase tracking-tight">
            Hear From Our <span className="text-brand-cyan">Partners</span>
          </h3>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed italic">
            "Reliability, innovation, and skin in the game. That's what Bimbim Tech brings to every single collaboration. They don't just build code; they build business success."
          </p>
          
          <div className="flex gap-4">
            <button 
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-cyan hover:border-brand-cyan hover:text-brand-blue transition-all"
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-cyan hover:border-brand-cyan hover:text-brand-blue transition-all"
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[40px] relative z-10"
          >
            <div className="flex gap-1 mb-8">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-brand-cyan text-brand-cyan" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl font-medium text-slate-200 mb-10 leading-relaxed">
              "{testimonials[activeIndex].content}"
            </p>
            
            <div className="flex items-center gap-4">
              <img 
                src={testimonials[activeIndex].avatar} 
                alt={testimonials[activeIndex].name} 
                className="w-14 h-14 rounded-full border border-brand-cyan/20"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-lg font-bold text-white tracking-tight">{testimonials[activeIndex].name}</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
