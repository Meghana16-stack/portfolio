import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2, Coffee, Terminal, Binary,
  FileCode, Palette, Globe, Atom,
  Brain, Cpu, MessageSquare, BarChart3,
  GitBranch, Github, Monitor, Sparkles
} from 'lucide-react';

const categories = [
  {
    title: 'PROGRAMMING',
    badgeColor: 'text-pink-600 bg-pink-50 border-pink-200',
    skills: [
      { name: 'Python', icon: Code2, desc: 'Scripting, Data Science & AI' },
      { name: 'Java', icon: Coffee, desc: 'Object-Oriented Programming' },
      { name: 'C', icon: Terminal, desc: 'Core Algorithms & Systems' },
      { name: 'C++', icon: Binary, desc: 'Performance & Problem Solving' },
    ],
  },
  {
    title: 'WEB DEVELOPMENT',
    badgeColor: 'text-rose-600 bg-rose-50 border-rose-200',
    skills: [
      { name: 'HTML', icon: FileCode, desc: 'Semantic Page Architecture' },
      { name: 'CSS', icon: Palette, desc: 'Responsive Layouts & Styling' },
      { name: 'JavaScript', icon: Globe, desc: 'Dynamic Interactivity & ES6+' },
      { name: 'React', icon: Atom, desc: 'Component UI & State Systems' },
    ],
  },
  {
    title: 'AI / ML',
    badgeColor: 'text-pink-700 bg-pink-100/70 border-pink-300',
    skills: [
      { name: 'Artificial Intelligence', icon: Brain, desc: 'Autonomous & Heuristic Systems' },
      { name: 'Machine Learning', icon: Cpu, desc: 'Supervised & Unsupervised Models' },
      { name: 'Natural Language Processing', icon: MessageSquare, desc: 'Text Processing & Language Models' },
      { name: 'Data Analysis', icon: BarChart3, desc: 'Feature Extraction & Insights' },
    ],
  },
  {
    title: 'TOOLS',
    badgeColor: 'text-rose-700 bg-rose-100/70 border-rose-300',
    skills: [
      { name: 'Git', icon: GitBranch, desc: 'Version Control & Branching' },
      { name: 'GitHub', icon: Github, desc: 'Remote Repos & Collaboration' },
      { name: 'VS Code', icon: Monitor, desc: 'Development Environment' },
      { name: 'Google AI Studio', icon: Sparkles, desc: 'Prompt Engineering & API Prototyping' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-pink-50/25 to-white overflow-hidden">
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-pink-100/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-rose-100/30 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles size={12} />
            TECHNICAL PROFICIENCY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B2E] mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Hands-on technical foundation spanning modern programming, web development, artificial intelligence, and developer tooling.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5 pb-2 border-b border-pink-100">
                <span className={`text-xs font-extrabold tracking-wider px-3 py-1 rounded-full border ${cat.badgeColor}`}>
                  {cat.title}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {cat.skills.length} competencies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {cat.skills.map((skill, si) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + ci * 0.08 + si * 0.04 }}
                      className="group relative p-5 rounded-2xl bg-white border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10 cursor-default"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-11 h-11 rounded-xl bg-pink-50 group-hover:bg-gradient-to-tr group-hover:from-pink-500 group-hover:to-rose-500 text-pink-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                          <Icon size={22} strokeWidth={1.75} />
                        </div>
                        <span className="text-[10px] font-semibold tracking-wider text-pink-400 group-hover:text-pink-600 uppercase">
                          Tech
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#1E1B2E] group-hover:text-pink-600 transition-colors duration-200 mb-1">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-normal">
                        {skill.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
