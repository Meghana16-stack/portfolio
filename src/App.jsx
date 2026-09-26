import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Expertise from './components/Expertise'
import TechMarquee from './components/TechMarquee'
import CareerFocus from './components/CareerFocus'
import Learning from './components/Learning'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1E1B2E] selection:bg-pink-100 selection:text-pink-700">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Expertise />
        <TechMarquee />
        <CareerFocus />
        <Learning />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
