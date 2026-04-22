import { Mail, Globe } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center gap-6 mb-8">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            <Globe size={24} />
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          © {currentYear} Mohamed Ben Mansour. All rights reserved. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};
