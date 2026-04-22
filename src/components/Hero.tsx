import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40 animate-pulse delay-1000" />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-sm font-semibold mb-6">
                Available for work
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Building digital <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  experiences
                </span> that matter.
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto md:mx-0">
                Hi, I'm Mohamed. A passionate AI Full Stack Engineer focused on creating elegant,
                user-centric, and high-performance web applications.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                >
                  View My Work <ArrowRight size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-slate-200 text-slate-700 rounded-xl font-semibold flex items-center gap-2 hover:bg-slate-50 transition-colors"
                >
                  View CV <Download size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

         <motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative"
>
  <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] mx-auto">
    {/* Decorative Background Tilt */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl rotate-6 opacity-10" />
    
    {/* Profile Image */}
    <img
      src="/d86cf804-467e-4b52-9865-d3288f69e007.jfif"
      alt="Mohamed Ben Mansour"
      className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10"
    />

    {/* Experience Badge */}
    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block">
      <div className="flex flex-col h-full justify-center">
        <p className="text-3xl font-bold text-blue-600">1+</p>
        <p className="text-xs text-slate-500 font-medium">Years Experience</p>
      </div>
    </div>
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
};
