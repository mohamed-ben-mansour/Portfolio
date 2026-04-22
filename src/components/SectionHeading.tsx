import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export const SectionHeading = ({ title, subtitle, centered = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3">
          {title}
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
          {subtitle}
        </h3>
      </motion.div>
    </div>
  );
};
