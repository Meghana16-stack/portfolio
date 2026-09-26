import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Mail, GraduationCap, MapPin } from 'lucide-react';
import profileImg from '../assets/meghana.jpeg';

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: (i % 3 === 0 ? 5 : i % 2 === 0 ? 3 : 2),
  x: (i * 19) % 100,
  y: (i * 23) % 100,
  duration: 10 + (i % 5) * 2,
  delay: (i * 0.4),
  opacity: 0.15 + (i % 4) * 0.06,
}));

export default function Hero() {
  const ref = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    setMouse({
      x: (clientX / window.innerWidth - 0.5) * 20,
      y: (clientY / window.innerHeight - 0.5) * 20,
    });
  };

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const smoothEase = [0.22, 1, 0.36, 1];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: smoothEase },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouse}
      className="relative min-h-screen flex items-center overflow-x-hidden bg-gradient-to-b from-white via-pink-50/30 to-white pt-24 pb-16 lg:py-0"
    >
      {/* Ambient Pink Glow Orbs */}
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full opacity-30 blur-[130px] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #F472B6, #FDA4AF)',
          top: '5%',
          left: '-6%',
          x: mouse.x * 0.35,
          y: mouse.y * 0.35,
        }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, 6, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[460px] h-[460px] rounded-full opacity-25 blur-[120px] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #EC4899, #FB7185)',
          bottom: '8%',
          right: '-4%',
          x: mouse.x * -0.3,
          y: mouse.y * -0.3,
        }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, -8, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle Floating Ambient Pink Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-pink-400 pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            filter: p.size > 3 ? 'blur(0.5px)' : 'none',
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main Hero Container */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 text-left order-2 lg:order-1"
          >
            {/* Academic Badge preserving exact college & branch */}
            <motion.div variants={item} className="mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/80 border border-pink-200/90 text-pink-700 text-xs font-semibold tracking-wide shadow-sm shadow-pink-500/10">
                <Sparkles size={13} className="text-pink-500 shrink-0" />
                <span>B.Tech CSM • BVRIT Narsapur</span>
              </div>
            </motion.div>

            {/* Student Name */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E1B2E] tracking-tight leading-[1.1] mb-3"
            >
              G MEGHANA
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent mb-5"
            >
              CSM (AI &amp; ML) Student &amp; Aspiring Developer
            </motion.p>

            {/* Introduction */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 font-normal max-w-2xl"
            >
              Hi, I'm Meghana. I'm a CSM (Artificial Intelligence &amp; Machine Learning) student passionate about technology, software development, artificial intelligence, machine learning and building creative digital experiences.
            </motion.p>

            {/* Academic Details Pill Tag */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3 mb-8 text-xs text-gray-600"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-pink-100 shadow-sm">
                <GraduationCap size={14} className="text-pink-600" />
                <strong>Degree:</strong> B.Tech • Year 02 (CSM)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-pink-100 shadow-sm">
                <MapPin size={14} className="text-pink-600" />
                <strong>College:</strong> BVRIT Narsapur
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollTo('#projects')}
                className="group px-7 py-3.5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white text-sm font-semibold rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 active:scale-95 flex items-center gap-2"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="px-7 py-3.5 border-2 border-pink-200 bg-white/80 backdrop-blur-sm text-gray-800 text-sm font-semibold rounded-full hover:border-pink-500 hover:text-pink-600 hover:bg-pink-50/50 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 shadow-sm flex items-center gap-2"
              >
                <Mail size={16} className="text-pink-500" />
                <span>CONTACT ME</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Image Card with Floating Animation & Pink Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
              {/* Pink Ambient Glow */}
              <div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-pink-400/30 via-rose-300/25 to-pink-200/20 blur-2xl opacity-80 animate-pulse-glow"
                aria-hidden="true"
              />

              {/* Floating Container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative rounded-3xl p-[3px] bg-gradient-to-b from-pink-300 via-rose-200 to-pink-100 shadow-2xl shadow-pink-500/20"
              >
                {/* Image + Info Card */}
                <div className="relative w-full rounded-[22px] overflow-hidden bg-white">
                  {/* Photo Frame */}
                  <div className="relative w-full h-[340px] sm:h-[380px] lg:h-[410px] overflow-hidden bg-pink-50/50">
                    <img
                      src={profileImg}
                      alt="G Meghana - B.Tech CSM Student at BVRIT Narsapur"
                      className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />

                    {/* Corner Status Badge */}
                    <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-pink-200/80 shadow-sm text-xs font-semibold text-gray-800">
                      <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                      <span>CSM (AI/ML)</span>
                    </div>
                  </div>

                  {/* Nameplate Directly Under The Picture */}
                  <div className="p-4 sm:p-5 bg-gradient-to-b from-white via-white to-pink-50/40 border-t border-pink-100 text-center">
                    <h2 className="text-xl sm:text-2xl font-black tracking-wider text-[#1E1B2E] uppercase">
                      G MEGHANA
                    </h2>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <span className="h-0.5 w-4 bg-pink-400/40 rounded-full" />
                      <p className="text-xs sm:text-sm font-bold text-pink-600 tracking-wider uppercase">
                        BVRIT Narsapur
                      </p>
                      <span className="h-0.5 w-4 bg-pink-400/40 rounded-full" />
                    </div>
                    <p className="text-xs text-gray-600 mt-1 font-medium">
                      B.Tech CSM • Artificial Intelligence &amp; Machine Learning
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
