import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const areas = [
  {
    num: '01',
    title: 'AI & MACHINE LEARNING',
    desc: 'Exploring machine learning algorithms, model training, feature evaluation and intelligent data-driven systems.',
    visual: 'neural',
  },
  {
    num: '02',
    title: 'DATA & ANALYTICS',
    desc: 'Processing datasets with Python, identifying statistical patterns, and transforming raw information into actionable insights.',
    visual: 'data',
  },
  {
    num: '03',
    title: 'SOFTWARE & WEB DEV',
    desc: 'Building responsive, accessible web interfaces and applications using modern component architecture and clean code.',
    visual: 'generative',
  },
];

function NeuralVisual() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" aria-hidden="true">
      {[[20,20],[60,15],[100,20],[15,45],[45,40],[75,40],[105,45],[30,65],[60,65],[90,65]].map(([cx,cy],i) => (
        <motion.circle key={i} cx={cx} cy={cy} r={3} fill="#EC4899" opacity={0.6}
          animate={{ scale:[1,1.3,1], opacity:[0.4,0.8,0.4] }}
          transition={{ duration:3+i*0.3, repeat:Infinity, ease:'easeInOut' }} />
      ))}
      {[[20,20,45,40],[60,15,45,40],[60,15,75,40],[100,20,75,40],[15,45,30,65],[45,40,60,65],[75,40,60,65],[105,45,90,65]].map(([x1,y1,x2,y2],i) => (
        <motion.line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F472B6" strokeWidth={0.8} opacity={0.3}
          animate={{ opacity:[0.15,0.45,0.15] }}
          transition={{ duration:4+i*0.2, repeat:Infinity, ease:'easeInOut' }} />
      ))}
    </svg>
  );
}

function DataVisual() {
  const bars = [35, 55, 40, 65, 50, 70, 45];
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" aria-hidden="true">
      {bars.map((h, i) => (
        <motion.rect key={i} x={10+i*15} y={80-h} width={8} height={h} rx={2}
          fill="#DB2777" opacity={0.4}
          animate={{ height:[h, h*0.7, h], y:[80-h, 80-h*0.7, 80-h] }}
          transition={{ duration:3+i*0.4, repeat:Infinity, ease:'easeInOut' }} />
      ))}
    </svg>
  );
}

function GenerativeVisual() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" aria-hidden="true">
      {Array.from({length:15},(_, i) => (
        <motion.circle key={i}
          cx={20 + (i * 6) % 80} cy={15 + (i * 11) % 55}
          r={2 + (i % 3)} fill="#F43F5E" opacity={0.45}
          animate={{ scale: [1, 1.4, 1], opacity:[0.2, 0.6, 0.2] }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, ease:'easeInOut' }} />
      ))}
      <motion.path
        d="M 15 50 Q 60 10 105 50"
        fill="none"
        stroke="#FB7185"
        strokeWidth={1}
        strokeDasharray="4 4"
        opacity={0.5}
      />
    </svg>
  );
}

const visuals = { neural: NeuralVisual, data: DataVisual, generative: GenerativeVisual };

export default function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="expertise" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles size={12} />
            WHAT I EXPLORE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B2E] mb-4">
            Areas of Exploration
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Domains where I am actively expanding practical capabilities and conceptual depth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area, i) => {
            const Visual = visuals[area.visual];
            return (
              <motion.div
                key={area.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="group relative p-7 sm:p-8 rounded-3xl bg-white border border-pink-100 hover:border-pink-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/10"
              >
                <div className="h-24 mb-6 rounded-2xl bg-gradient-to-br from-pink-50/80 via-white to-rose-50/50 border border-pink-100/60 overflow-hidden flex items-center justify-center p-2">
                  <Visual />
                </div>
                <span className="text-xs font-extrabold text-pink-400 mb-2 block tracking-widest">{area.num}</span>
                <h3 className="text-lg font-bold text-[#1E1B2E] group-hover:text-pink-600 transition-colors mb-2.5">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {area.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
