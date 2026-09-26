import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Phone, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-pink-100/40 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-rose-100/30 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles size={12} />
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E1B2E] mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto text-sm sm:text-base">
            Have an inquiry, project idea, or opportunity? Feel free to send a message or reach out across any channel below.
          </p>
        </motion.div>

        {/* 4 Clickable Channel Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {/* Email */}
          <a
            href="mailto:meghanaganapur@gmail.com"
            className="group p-5 rounded-2xl bg-gradient-to-b from-white to-pink-50/50 border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 group-hover:bg-pink-500 group-hover:text-white flex items-center justify-center transition-all duration-200 mb-3 shadow-sm">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</div>
              <div className="text-sm font-bold text-[#1E1B2E] group-hover:text-pink-600 transition-colors truncate">
                meghanaganapur@gmail.com
              </div>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919381850993"
            className="group p-5 rounded-2xl bg-gradient-to-b from-white to-pink-50/50 border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 group-hover:bg-pink-500 group-hover:text-white flex items-center justify-center transition-all duration-200 mb-3 shadow-sm">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Phone</div>
              <div className="text-sm font-bold text-[#1E1B2E] group-hover:text-pink-600 transition-colors">
                +91 9381850993
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/meghana-ganapur-63b4aa384?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-gradient-to-b from-white to-pink-50/50 border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 group-hover:bg-pink-500 group-hover:text-white flex items-center justify-center transition-all duration-200 mb-3 shadow-sm">
              <Linkedin size={20} />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">LinkedIn</div>
              <div className="text-sm font-bold text-[#1E1B2E] group-hover:text-pink-600 transition-colors truncate">
                meghana-ganapur
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Meghana16-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-gradient-to-b from-white to-pink-50/50 border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10 flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 group-hover:bg-pink-500 group-hover:text-white flex items-center justify-center transition-all duration-200 mb-3 shadow-sm">
              <Github size={20} />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">GitHub</div>
              <div className="text-sm font-bold text-[#1E1B2E] group-hover:text-pink-600 transition-colors truncate">
                Meghana16-stack
              </div>
            </div>
          </a>
        </motion.div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-pink-100 shadow-xl shadow-pink-500/5"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-10 text-center space-y-3"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1E1B2E]">Thank You!</h3>
              <p className="text-sm text-gray-600">Your message has been sent successfully. I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-pink-50/20 text-[#1E1B2E] text-sm focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 transition-all duration-200"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-pink-50/20 text-[#1E1B2E] text-sm focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 transition-all duration-200"
                    placeholder="e.g. john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-pink-50/20 text-[#1E1B2E] text-sm focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/10 transition-all duration-200 resize-none"
                  placeholder="Share details about your query or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white text-sm font-bold rounded-full hover:from-pink-600 hover:to-rose-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/25 active:scale-95 transition-all duration-300"
              >
                <Send size={16} />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
