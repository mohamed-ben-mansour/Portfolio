import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { 
  Code2, 
  Database, 
  Sparkles, 
  Brain, 
  Globe, 
  Terminal 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Agentic AI & Orchestration',
    icon: <Sparkles className="w-6 h-6" />,
    skills: [
      'Autonomous Agents', 
      'Multi-Agent Systems (MAS)', 
      'LangGraph', 
      'CrewAI', 
      'Function Calling',
      'Task Decomposition'
    ],
  },
  {
    title: 'Multimodal & Generative AI',
    icon: <Brain className="w-6 h-6" />,
    skills: [
      'Vision-Language Models', 
      'Stable Diffusion', 
      'Audio Intelligence', 
      'Fine-tuning (LoRA/QLoRA)', 
      'LLM Evaluation',
      'Prompt Engineering'
    ],
  },
  {
    title: 'Advanced RAG & Knowledge',
    icon: <Database className="w-6 h-6" />,
    skills: [
      'GraphRAG', 
      'Hybrid Search', 
      'Vector DBs (Pinecone/Chroma)', 
      'Semantic Cache', 
      'Metadata Filtering',
      'Knowledge Graphs'
    ],
  },
  {
    title: 'Competitive Programming',
    icon: <Terminal className="w-6 h-6" />,
    skills: [
      'C++', 
      'Advanced Algorithms', 
      'Data Structures', 
      'Complexity Optimization', 
      'Graph Theory',
      'Dynamic Programming'
    ],
  },
  {
    title: 'Full Stack AI Engineering',
    icon: <Globe className="w-6 h-6" />,
    skills: [
      'Next.js 14', 
      'FastAPI', 
      'TypeScript', 
      'Tailwind CSS', 
      'Real-time WebSockets',
      'Vector Search UI'
    ],
  },
  {
    title: 'Backend & LLMOps',
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      'Python', 
      'Node.js', 
      'Docker', 
      'CI/CD for LLMs', 
      'System Design',
      'API Security'
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Expertise"
          subtitle="Pushing the Frontiers of Agentic Intelligence"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {category.icon}
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                {category.title}
              </h4>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-50 text-slate-600 text-sm rounded-lg border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;