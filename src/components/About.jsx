import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, GraduationCap, Building2, BookOpen, Sparkles } from 'lucide-react';

const stats = [
  { value: '02', label: 'Year of B.Tech', icon: GraduationCap },
  { value: 'CSM', label: 'Branch (AI & ML)', icon: Sparkles },
  { value: 'BVRIT', label: 'College (Narsapur)', icon: Building2 },
  { value: 'AI / Dev', label: 'Core Focus Area', icon: BookOpen },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-pink-100/50 blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-rose-100/40 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Pill Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-xs font-bold tracking-widest uppercase">
            <Sparkles size={12} />
            ABOUT ME
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B2E] mb-10 leading-tight"
        >
          About{' '}
          <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 mb-16 items-center">
          {/* Text Left Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-5 text-gray-700 leading-relaxed"
          >
            <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
              Hello! I'm <strong className="text-pink-600 font-bold">G Meghana</strong>, a Computer Science student interested in software development, artificial intelligence, machine learning and modern web technologies.
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              I enjoy learning new technologies by building practical projects and continuously improving my technical skills.
            </p>

            {/* Preserved Academic Info */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-pink-50/70 via-rose-50/40 to-pink-50/70 border border-pink-200/80 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-pink-700 mb-2 flex items-center gap-2">
                <GraduationCap size={15} className="text-pink-600" />
                ACADEMIC CREDENTIALS
              </h3>
              <p className="text-sm text-gray-700 font-medium">
                Second-year B.Tech CSM student specializing in <strong>Artificial Intelligence &amp; Machine Learning</strong> at <strong>BVRIT Narsapur</strong>.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs px-2.5 py-1 rounded-md bg-white border border-pink-200 text-pink-700 font-semibold">
                  College: BVRIT Narsapur
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white border border-pink-200 text-pink-700 font-semibold">
                  Degree: B.Tech (Year 02)
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white border border-pink-200 text-pink-700 font-semibold">
                  Branch: CSM (AI &amp; ML)
                </span>
              </div>
            </div>

            {/* Clickable Quick Connect Links */}
            <div className="pt-2">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Connect Directly</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://github.com/Meghana16-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-pink-100 hover:border-pink-300 hover:bg-pink-50/50 text-xs font-medium text-gray-700 hover:text-pink-600 transition-all shadow-sm"
                >
                  <Github size={16} className="text-pink-500 shrink-0" />
                  <span className="truncate">github.com/Meghana16-stack</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/meghana-ganapur-63b4aa384?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-pink-100 hover:border-pink-300 hover:bg-pink-50/50 text-xs font-medium text-gray-700 hover:text-pink-600 transition-all shadow-sm"
                >
                  <Linkedin size={16} className="text-pink-500 shrink-0" />
                  <span className="truncate">linkedin.com/in/meghana-ganapur</span>
                </a>

                <a
                  href="mailto:meghanaganapur@gmail.com"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-pink-100 hover:border-pink-300 hover:bg-pink-50/50 text-xs font-medium text-gray-700 hover:text-pink-600 transition-all shadow-sm"
                >
                  <Mail size={16} className="text-pink-500 shrink-0" />
                  <span className="truncate">meghanaganapur@gmail.com</span>
                </a>

                <a
                  href="tel:+919381850993"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-pink-100 hover:border-pink-300 hover:bg-pink-50/50 text-xs font-medium text-gray-700 hover:text-pink-600 transition-all shadow-sm"
                >
                  <Phone size={16} className="text-pink-500 shrink-0" />
                  <span className="truncate">+91 9381850993</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Visual Right Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[340px] aspect-square">
              {/* Glassmorphic card container with pink aesthetic */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-50 via-white to-rose-50 border border-pink-200/90 shadow-xl shadow-pink-500/10" />

              <svg viewBox="0 0 200 200" className="relative z-10 w-full h-full p-8" aria-label="Abstract AI and creative network graphic">
                {/* Neural Network Nodes */}
                {[
                  [40, 40], [100, 30], [160, 40],
                  [30, 100], [80, 80], [120, 80], [170, 100],
                  [40, 140], [100, 120], [160, 140],
                  [60, 170], [100, 170], [140, 170],
                ].map(([cx, cy], i) => (
                  <motion.circle
                    key={i}
                    cx={cx} cy={cy}
                    r={i % 3 === 0 ? 5 : 3.5}
                    fill={i % 2 === 0 ? '#EC4899' : '#FB7185'}
                    opacity={0.7}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
                    transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
                {/* Connecting lines */}
                {[
                  [40,40,80,80], [100,30,80,80], [100,30,120,80], [160,40,120,80],
                  [80,80,100,120], [120,80,100,120], [30,100,40,140], [170,100,160,140],
                  [40,140,60,170], [100,120,100,170], [160,140,140,170],
                  [80,80,30,100], [120,80,170,100],
                ].map(([x1,y1,x2,y2], i) => (
                  <motion.line
                    key={`l${i}`}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#F472B6"
                    strokeWidth={1}
                    opacity={0.3}
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 4 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </svg>

              {/* Floating tech badge */}
              <div className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-pink-200 shadow-md shadow-pink-500/10 text-xs font-semibold text-pink-700 flex items-center gap-1.5">
                <Sparkles size={14} className="text-pink-500" />
                <span>AI • ML • Web Dev</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white to-pink-50/50 border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md hover:shadow-pink-500/10 text-center group"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-pink-100/70 text-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1E1B2E] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-500">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
