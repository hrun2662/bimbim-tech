import { motion } from 'motion/react';
import { Layout, Smartphone, Cpu, Palette, Cloud, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Building robust, scalable, and responsive web applications using the latest technologies.',
      icon: <Layout className="text-brand-cyan" size={32} />,
      color: 'blue'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions designed for performance and engagement.',
      icon: <Smartphone className="text-brand-cyan" size={32} />,
      color: 'cyan'
    },
    {
      title: 'IoT Development',
      description: 'Connecting devices and data to create smart environments and integrated tech ecosystems.',
      icon: <Cpu className="text-brand-cyan" size={32} />,
      color: 'indigo'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centric design that balances visual elegance with seamless functionality.',
      icon: <Palette className="text-brand-cyan" size={32} />,
      color: 'purple'
    },
    {
      title: 'Cloud & Server Management',
      description: 'Reliable infrastructure design and 24/7 server monitoring to keep your systems online.',
      icon: <Cloud className="text-brand-cyan" size={32} />,
      color: 'sky'
    },
    {
      title: 'Cyber Security',
      description: 'Protecting your digital assets with advanced security protocols and vulnerability assessments.',
      icon: <ShieldCheck className="text-brand-cyan" size={32} />,
      color: 'emerald'
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold tracking-widest text-brand-cyan uppercase mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue dark:text-white">Expertise That Drives Results</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We provide a comprehensive suite of technology services designed to help your business evolve in a digital-first world.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-6 p-5 rounded-2xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{service.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
