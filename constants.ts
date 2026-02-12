import { Project, Experience, Education, SkillCategory, Certification } from './types';

export const PROFILE = {
  name: "Srinath D K",
  role: "Full-Stack Developer | AI Engineer",
  location: "Salem, Tamil Nadu, India",
  email: "drdksrinath@gmail.com",
  phone: "+91 89409 44008",
  linkedin: "https://linkedin.com/in/sri-nath",
  github: "https://github.com/dksrinath",
  bio: "I am a Computer Science graduate building scalable web apps and AI solutions. I have practical experience in React, Flask, and Generative AI through internships and real-world projects."
};

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "CodimAi",
    period: "Sep 2025 – Dec 2025",
    description: "Implemented a new responsive website design using React and Tailwind CSS, significantly improving user interface standards. Built a Geo-Generative Engine and SEO optimization modules to drive top search rankings and targeted regional traffic."
  },
  {
    id: 2,
    role: "AI & Data Analytics Intern",
    company: "Shell & AICTE",
    period: "Apr 2025 – May 2025",
    description: "Built a Forest Fire Detection system using Deep Learning (CNN). Analyzed environmental datasets for Green Skills initiatives."
  },
  {
    id: 3,
    role: "Salesforce Developer Intern",
    company: "SmartInternz",
    period: "Nov 2023 – Jan 2024",
    description: "Earned 'Developer Super Set' badge. Mastered Apex, LWC, and Process Automation."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AI-Driven Petition Management System',
    description: 'AI-powered petition categorization using NLP. Reduced department assignment time by 65%.',
    tech: ['Python', 'Flask', 'MongoDB', 'NLP', 'JavaScript'],
    category: 'web',
    liveUrl: 'https://ai-driven-petition-management.onrender.com/',
    githubUrl: 'https://github.com/dksrinath/AI-Driven-Petition-Management',
    featured: true,
    highlights: [
      '500+ active users served',
      '65% reduction in department assignment time',
      'Bilingual support (English & Tamil)'
    ],
    iconType: 'petition'
  },
  {
    id: 5,
    title: 'PDF Chatbot (RAG)',
    description: 'RAG-based system for chatting with PDFs. Supports scanned docs via OCR and visual citation highlighting.',
    tech: ['Streamlit', 'LangChain', 'FAISS', 'Gemini'],
    category: 'ai',
    liveUrl: 'https://sri-nath-pdf-chatbot-rag.hf.space/',
    githubUrl: 'https://huggingface.co/spaces/Sri-nath/pdf-chatbot-rag',
    featured: true,
    highlights: ['RAG Architecture', 'Visual Citation'],
    iconType: 'chatbot'
  },
  {
    id: 6,
    title: 'Forest Fire Detection',
    description: 'Deep Learning model to classify images as "Fire" or "No Fire" for early disaster warning.',
    tech: ['Python', 'TensorFlow', 'CNN'],
    category: 'ai',
    githubUrl: 'https://github.com/dksrinath/Forest-Fire-Detection-DL',
    featured: false,
    highlights: ['92% Accuracy', 'CNN Architecture'],
    iconType: 'fire'
  },
  {
    id: 3,
    title: 'Google Drive Chat Assistant',
    description: 'An intelligent agent to search, list, and explain Drive files via natural language chat. Features multi-agent orchestration.',
    tech: ['Next.js', 'TypeScript', 'Gemini Pro', 'Google Drive API'],
    category: 'ai',
    githubUrl: 'https://github.com/dksrinath/google-drive-chat',
    featured: false,
    highlights: ['Multi-agent orchestration', 'Natural Language Processing'],
    iconType: 'chatbot'
  },
  {
    id: 2,
    title: 'Project Management Tool',
    description: 'Full-stack app with RBAC (Admin/Manager/Dev) and an AI agent that auto-generates user stories from project descriptions.',
    tech: ['Python', 'React.js', 'PostgreSQL', 'GROQ API'],
    category: 'web',
    githubUrl: 'https://github.com/dksrinath/project-management-tool',
    featured: false,
    highlights: ['AI Agent integration', 'Role-Based Access Control'],
    iconType: 'management'
  },
  {
    id: 4,
    title: 'AI Document Verification System',
    description: 'KYC pipeline validating IDs (Aadhaar/PAN) using OCR and deterministic rules (name match, address similarity).',
    tech: ['Python', 'Gemini Vision', 'OCR'],
    category: 'ai',
    githubUrl: 'https://github.com/dksrinath/AI-Document-Verification-System',
    featured: false,
    highlights: ['KYC Automation', 'OCR Integration'],
    iconType: 'default'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "SQL", "JavaScript", "HTML5", "CSS3", "Dart"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Flask", "Tailwind CSS", "TensorFlow", "Keras", "OpenCV"]
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "VS Code", "Docker", "Postman", "Jupyter Notebook"]
  },
  {
    title: "AI/ML & Cloud",
    skills: ["Gemini API", "RAG", "LangChain", "Salesforce (Apex/LWC)", "Render"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 1,
    degree: "B.E. Computer Science and Engineering",
    institution: "Sona College of Technology, Salem",
    year: "2022-2025",
    grade: "CGPA: 7.43/10"
  },
  {
    id: 2,
    degree: "Diploma in Engineering",
    institution: "Thiagarajar Polytechnic College, Salem",
    year: "2019-2022",
    grade: "Percentage: 94.66%"
  },
  {
    id: 3,
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Sri Sarada Balamandir Boys Matric Hr Sec School",
    year: "2018-2019",
    grade: "66%"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "Java Full Stack Development",
    issuer: "Wipro Program",
    date: "October 2024"
  },
  {
    id: 2,
    title: "Programming in Java",
    issuer: "Infosys Springboard",
    date: "September 2024"
  },
  {
    id: 3,
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "August 2024"
  },
  {
    id: 4,
    title: "Cisco Packet Tracer - Network Simulation",
    issuer: "Cisco",
    date: "June 2024"
  }
];