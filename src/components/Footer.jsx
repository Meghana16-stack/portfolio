import { Github, Linkedin, Mail, Phone, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#1E1B2E] text-white relative overflow-hidden">
      {/* Decorative subtle top border */}
      <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="text-center md:text-left">
            <div className="text-xl font-black tracking-wider text-white">G MEGHANA</div>
            <div className="text-xs sm:text-sm text-pink-300/80 mt-1 font-medium">
              B.Tech CSM • BVRIT Narsapur
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              Artificial Intelligence &amp; Machine Learning Specialization
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Meghana16-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/meghana-ganapur-63b4aa384?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:meghanaganapur@gmail.com"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:+919381850993"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 text-center md:text-left flex items-center justify-center gap-1.5">
            <span>© 2026 G Meghana. All rights reserved. Built with</span>
            <Heart size={13} className="text-pink-500 fill-pink-500" />
            <span>&amp; Modern React.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-pink-300 hover:text-white transition-all duration-200 border border-white/10 hover:border-pink-500/50"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
