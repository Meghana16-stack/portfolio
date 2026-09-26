import { motion } from 'framer-motion';

const items = [
  'Python', 'Java', 'C', 'C++', 'HTML5', 'CSS3', 'JavaScript', 'React',
  'Artificial Intelligence', 'Machine Learning', 'NLP', 'Data Analysis',
  'Git', 'GitHub', 'VS Code', 'Google AI Studio',
];

export default function TechMarquee() {
  const doubled = [...items, ...items];

  return (
    <div className="py-7 bg-gradient-to-r from-pink-50/60 via-rose-50/40 to-pink-50/60 border-y border-pink-100 overflow-hidden">
      <div className="group flex">
        <motion.div
          className="flex shrink-0 gap-8 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ willChange: 'transform' }}
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-xs sm:text-sm font-bold tracking-wider text-pink-600/80 hover:text-pink-600 transition-colors cursor-default uppercase"
            >
              {item}
              {i < doubled.length - 1 && (
                <span className="ml-8 text-pink-300">•</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
