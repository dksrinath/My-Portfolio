import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Folder, FileText, Flame, Bot, Layout, ShieldCheck } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'ai'>('all');

  const filteredProjects = PROJECTS.filter(p => filter === 'all' || p.category === filter);

  const getIcon = (type: string) => {
    const className = "text-slate-500 group-hover:text-primary-400 transition-colors duration-300";
    const size = 48;

    switch (type) {
      case 'petition':
        return <FileText size={size} className={className} />;
      case 'fire':
        return <Flame size={size} className={className} />;
      case 'chatbot':
        return <Bot size={size} className={className} />;
      case 'management':
        return <Layout size={size} className={className} />;
      case 'default':
        return <ShieldCheck size={size} className={className} />;
      default:
        return <Folder size={size} className={className} />;
    }
  };

  return (
    <div className="py-12 md:py-20 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">My Projects</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in AI/ML solutions, full-stack development, and accessible web applications.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 p-1 rounded-full inline-flex backdrop-blur-sm border border-white/10">
            {['all', 'web', 'ai'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize ${
                  filter === f
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {f === 'ai' ? 'AI/ML' : f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-primary-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10 backdrop-blur-sm"
            >
              {/* Header / Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center border-b border-white/5 relative overflow-hidden group-hover:bg-white/10 transition-colors">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
                
                {/* Main Icon - shifts up on hover */}
                <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
                  {getIcon(project.iconType)}
                </div>
                
                {/* Action Buttons - aligned to bottom center */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                   {project.liveUrl && (
                     <a 
                       href={project.liveUrl} 
                       target="_blank" 
                       rel="noreferrer" 
                       className="flex items-center gap-2 px-4 py-1.5 bg-primary-500/90 hover:bg-primary-500 text-white rounded-full text-xs font-bold transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm"
                       title="View Demo"
                     >
                       <ExternalLink size={14} />
                       <span>Demo</span>
                     </a>
                   )}
                   {project.githubUrl && (
                     <a 
                       href={project.githubUrl} 
                       target="_blank" 
                       rel="noreferrer" 
                       className="flex items-center gap-2 px-4 py-1.5 bg-slate-800/90 hover:bg-slate-700 text-white rounded-full text-xs font-bold transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm"
                       title="View Code"
                     >
                       <Github size={14} />
                       <span>Code</span>
                     </a>
                   )}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{project.title}</h3>
                </div>
                
                <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto">
                   <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-black/20 text-primary-300/90 rounded-full border border-white/5">
                          {tech}
                        </span>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};