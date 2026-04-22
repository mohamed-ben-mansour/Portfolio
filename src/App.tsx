import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';

// 1. Move the About component definition OUTSIDE of the App function
export const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3"
        >
          About Me
        </motion.h2>

        {/* Main Heading */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-10 max-w-3xl mx-auto leading-tight"
        >
          Passionate about building digital products that solve real-world problems.
        </motion.h3>

        {/* Description Body */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            I’m <span className="text-slate-900 font-semibold underline decoration-blue-500/30 decoration-4 underline-offset-2">more than just a student</span>—I’m an industry-active engineer with over a year of experience shipping production-ready code. 
            By balancing academic research with hands-on work at both <span className="text-slate-900 font-medium">agile startups and established firms</span>, 
            I’ve learned to tackle complex problems with a level of resourcefulness that goes way beyond the typical entry-level scope. 
            For me, it's about bridging the gap between <span className="italic">high-level theory</span> and the <span className="text-blue-600 font-medium">grit of real-world implementation.</span>
          </p>
        </motion.div>

        {/* Subtle background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50" />
      </div>
    </section>
  );
};

// 2. Main App component
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        {/* 3. Call the About component here */}
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}