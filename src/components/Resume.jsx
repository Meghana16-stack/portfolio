import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Linkedin, Sparkles } from 'lucide-react';

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  size: (i % 3 === 0 ? 5 : i % 2 === 0 ? 3.5 : 2),
  x: (i * 27) % 100,
  y: (i * 31) % 100,
  duration: 8 + (i % 4) * 2,
  delay: (i * 0.3),
}));

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="resume"
      className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 text-white"
    >
      {/* Floating ambient particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/20 pointer-events-none"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [0, -25, 0, 15, 0], x: [0, 8, -8, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles size={12} />
            OPPORTUNITIES &amp; COLLABORATION
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight">
            Ready to Build Meaningful Solutions
          </h2>
          <p className="text-white/90 mb-8 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Interested in discussing technology, collaborative projects, or career opportunities? I'd love to connect with you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-pink-600 font-bold rounded-full hover:bg-pink-50 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300 active:scale-95 text-sm"
            >
              <Send size={16} className="text-pink-600" />
              <span>GET IN TOUCH</span>
            </button>

            <a
              href="https://www.linkedin.com/in/meghana-ganapur-63b4aa384?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 backdrop-blur-md border border-white/40 text-white font-semibold rounded-full hover:bg-white/25 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 text-sm"
            >
              <Linkedin size={16} />
              <span>VIEW LINKEDIN</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
