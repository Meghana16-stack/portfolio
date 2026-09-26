import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const stages = ['LEARN', 'BUILD', 'EXPERIMENT', 'IMPROVE', 'ENGINEER'];

export default function CareerFocus() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-pink-50/20 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles size={12} />
            CAREER DIRECTION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1B2E] mb-5 tracking-tight">
            AI / ML{' '}
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
              ENGINEERING
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            My goal is to build deep proficiency in Artificial Intelligence and Machine Learning while developing solid software engineering skills to create reliable, practical digital applications.
          </p>
        </motion.div>

        {/* Progression Stages */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
          {stages.map((stage, i) => (
            <div key={stage} className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
                className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32"
              >
                {/* Outer Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-pink-200"
                  animate={inView ? { borderColor: ['rgba(244,114,182,0.3)', 'rgba(236,72,153,0.6)', 'rgba(244,114,182,0.3)'] } : {}}
                  transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Inner Pill */}
                <motion.div
                  className="absolute inset-2 rounded-full bg-gradient-to-tr from-pink-50 to-rose-50 border border-pink-100 shadow-sm"
                  animate={inView ? { scale: [1, 1.04, 1] } : {}}
                  transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="relative z-10 text-xs sm:text-sm font-extrabold text-pink-700 tracking-wider">
                  {stage}
                </span>
              </motion.div>

              {/* Connector between circles */}
              {i < stages.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0, scaleY: 0 }}
                  animate={inView ? { scaleX: 1, scaleY: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.12 }}
                  className="w-0.5 h-6 md:w-8 md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-pink-400 to-rose-400 origin-top md:origin-left"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
