import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-brand-cyan rounded-full"></div>
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-slate-500 uppercase">Get In Touch</h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight uppercase tracking-tight">
            Ready to Build <br /> <span className="text-brand-cyan">The Future?</span>
          </h3>
          <p className="text-lg text-slate-400 mb-12 max-w-xl">
            Mari berdiskusi tentang bagaimana kami dapat membantu mentransformasi bisnis Anda ke level berikutnya.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Email Us</p>
                <a href="mailto:hello@bimbimtech.com" className="text-lg font-bold text-white hover:text-brand-cyan transition-colors">hello@bimbimtech.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Call Us</p>
                <a href="tel:+62215550123" className="text-lg font-bold text-white hover:text-brand-cyan transition-colors">+62 21 555 0123</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 rounded-3xl overflow-hidden h-64 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700 border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.174246872582!2d106.816666!3d-6.208763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e0f49c0993%3A0x6bba847c214c8d!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1715890000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Google Maps"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-white/10 p-10 md:p-14 rounded-[40px]"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Ex. John Doe" 
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-cyan focus:outline-none transition-all text-white placeholder:text-slate-600"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="Ex. john@business.com" 
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-cyan focus:outline-none transition-all text-white placeholder:text-slate-600"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
              <textarea 
                rows={5} 
                placeholder="Tuliskan pesan atau detail proyek Anda di sini..." 
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-cyan focus:outline-none transition-all text-white placeholder:text-slate-600 resize-none"
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full py-5 text-lg"
            >
              Kirim Pesan
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
