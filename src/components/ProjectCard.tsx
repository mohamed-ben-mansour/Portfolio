import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectCard = ({ title, description, image, tags, githubUrl, liveUrl }: ProjectProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-all transform -translate-y-4 group-hover:translate-y-0 duration-300"
            >
              <Code size={20} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-all transform -translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="p-8">
        <div className="flex gap-2 mb-4 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">{description}</p>
        <div className="flex items-center gap-4">
           {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-600 flex items-center gap-1 hover:underline"
            >
              Live Demo <ExternalLink size={14} />
            </a>
           )}
        </div>
      </div>
    </motion.div>
  );
};
