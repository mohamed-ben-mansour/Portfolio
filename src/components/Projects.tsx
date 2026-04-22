import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';

const projects = [
  {
    title: 'Agentic fraud and anomaly detection system',
    description: 'Multi-agent system that autonomously detects and investigates fraudulent activities across various domains, leveraging advanced AI techniques for real-time analysis and decision-making. The system utilizes autonomous agents to monitor transactions, identify suspicious patterns, and conduct in-depth investigations, providing actionable insights to mitigate risks and enhance security.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1000',
    tags: ['Python','LangChain', 'TypeScript', 'FastAPI', 'LLMs','Agentic Systems'],
    githubUrl: 'https://github.https://github.com/mohamed-ben-mansour/agentic-fraud-detection/tree/main',
    // liveUrl: 'https://example.com',
  },
  {
    title: 'STM32-based AI VScode extension',
    description: 'EmbedAI is a project that facilitates the development and testing of STM32 code. My solution is a smart platform designed to assist developers in writing, analyzing, and improving STM32 code. It provides features such as code generation, debugging assistance, and performance optimization suggestions, all powered by advanced AI algorithms.',
    image: './pic.png',
    tags: ['React', 'FastAPI', 'Clang','Bidirectional LSTM','open source LLMs','TypeScript'],
    githubUrl: 'https://github.com/mohamed-ben-mansour/EmbedAI',
    liveUrl: 'https://www.linkedin.com/posts/mohamed-ben-mansour-345881318_embedai-aifordevelopers-embeddedsystems-activity-7336848609973280769-C88t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCTMKUBah0Hbp-9-RMEM4Hn3fpxYgnw3H8',
  },
  {
    title: 'AI Anesthesiology Assistant',
    description: 'An AI-powered conversational assistant that automates pre-anesthetic consultations by interacting with patients in Tunisian dialect—via voice or text—to capture, validate, and extract key data from medical documents, ultimately delivering structured clinical alerts and physician-ready summaries to streamline medical workflows and ensure healthcare compliance.',
    image: './anesthesia.png',
    tags: ['Python', 'PyTorch', 'React', 'FastAPI','FAISS','RAG','Transformers','LLMs','openCV'],
    githubUrl: 'https://github.com/mohamed-ben-mansour/anesthesia-guard',
    liveUrl: 'https://www.linkedin.com/posts/mohamed-ben-mansour-345881318_platformmanagement-techleadership-artificialintelligence-activity-7427096043529400320-GSM8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCTMKUBah0Hbp-9-RMEM4Hn3fpxYgnw3H8',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50/50">
      <div className="px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Portfolio"
          subtitle="Selected Projects"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
