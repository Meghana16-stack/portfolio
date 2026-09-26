import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Hammer, RefreshCw, Sparkles } from 'lucide-react';

const cards = [
  { icon: BookOpen, title: 'Learn', desc: 'Master foundational principles and concepts.' },
  { icon: Hammer, title: 'Build', desc: 'Apply theory through hands-on code and real projects.' },
  { icon: RefreshCw, title: 'Iterate', desc: 'Test, reflect, optimize, and expand capabilities.' },
];

export default function Learning() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles size={12} />
            CORE PHILOSOPHY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E1B2E] mb-4">
            Learning by Building
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base leading-relaxed">
            I believe the most effective way to understand modern technology is to experiment with it. I continuously learn new concepts, apply them through hands-on practice, and sharpen my capabilities through creative experimentation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="p-7 rounded-3xl bg-gradient-to-b from-white to-pink-50/40 border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-pink-500/10 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-pink-500 group-hover:to-rose-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-[#1E1B2E] group-hover:text-pink-600 transition-colors mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
