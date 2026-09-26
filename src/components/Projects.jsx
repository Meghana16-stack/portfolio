import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Brain, Film, Laptop, Clock, ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI / Machine Learning Project',
    tag: 'Artificial Intelligence',
    icon: Brain,
    desc: 'A machine learning based project developed to explore practical AI concepts and data-driven solutions.',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-Learn'],
    repoStatus: 'Coming Soon',
    accentGradient: 'from-pink-500 to-rose-500',
  },
  {
    id: 2,
    title: 'Movie Recommendation System',
    tag: 'Recommendation Engine',
    icon: Film,
    desc: 'A recommendation system that suggests movies based on user preferences and similarity between movies.',
    technologies: ['Python', 'NLP', 'Similarity Metrics', 'Pandas'],
    repoStatus: 'Coming Soon',
    accentGradient: 'from-rose-500 to-pink-600',
  },
  {
    id: 3,
    title: 'StudyOS',
    tag: 'Student Productivity',
    icon: Laptop,
    desc: 'A modern student-focused productivity and study platform designed to organize learning, resources and academic activities.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Web Audio API'],
    repoStatus: 'Coming Soon',
    accentGradient: 'from-pink-600 to-rose-400',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-pink-100/40 blur-[130px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-rose-100/30 blur-[130px] pointer-events-none translate-x-1/3" />

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
            FEATURED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B2E] mb-4">
            Projects &amp; Creations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Hands-on software development and machine learning initiatives aimed at solving practical problems and advancing technical depth.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-pink-100 hover:border-pink-300 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-pink-500/10"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${project.accentGradient} text-white flex items-center justify-center shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-200/60 uppercase">
                      {project.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1E1B2E] group-hover:text-pink-600 transition-colors duration-200 mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    {project.desc}
                  </p>

                  {/* Tech stack pill tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-lg bg-pink-50/60 border border-pink-100 text-gray-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer / Repository Action */}
                <div className="pt-4 border-t border-pink-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200/80">
                      <Clock size={13} className="text-pink-500" />
                      {project.repoStatus}
                    </span>
                  </div>

                  <a
                    href="https://github.com/Meghana16-stack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-pink-600 transition-colors"
                    title="View GitHub profile"
                  >
                    <Github size={14} />
                    <span>Meghana16-stack</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global GitHub CTA notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center p-6 rounded-2xl bg-gradient-to-r from-pink-50/50 via-rose-50/30 to-pink-50/50 border border-pink-100 max-w-2xl mx-auto"
        >
          <p className="text-xs sm:text-sm text-gray-600">
            More open-source repositories and experimental code are actively being published to{' '}
            <a
              href="https://github.com/Meghana16-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-pink-600 hover:text-pink-700 hover:underline inline-flex items-center gap-1"
            >
              github.com/Meghana16-stack <ArrowUpRight size={13} />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
