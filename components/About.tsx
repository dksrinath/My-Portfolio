import React from 'react';
import { MapPin, GraduationCap, Code, ExternalLink, BadgeCheck, FileText } from 'lucide-react';
import { SKILLS, EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../constants';
import { Skills } from './Skills';
import { Experience } from './Experience';

export const About: React.FC = () => {
  return (
    <div className="animate-fade-in-up pb-12">
      {/* Bio Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-white">About Me</h1>
            
            <div className="bg-white/5 rounded-3xl p-8 md:p-10 border border-white/10 backdrop-blur-sm mb-12 shadow-xl">
              <p className="text-lg text-slate-200 font-light leading-relaxed">
                I am a software engineer focused on combining Full-Stack development with Artificial Intelligence. With internship experience at CodimAi and Shell, I know how to build clean, production-ready code. I am currently looking for a full-time role or internship where I can solve complex technical problems.
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin size={20} className="text-primary-400 shrink-0" />
                  <span>Salem, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <GraduationCap size={20} className="text-primary-400 shrink-0" />
                  <span>B.E. Computer Science and Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Code size={20} className="text-secondary-400 shrink-0" />
                  <span className="text-secondary-400">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Education</h2>
              <p className="text-slate-400">My academic journey in computer science</p>
            </div>

            <div className="relative">
              <div className="space-y-12">
                {EDUCATION.map((edu, idx) => (
                  <div key={edu.id} className="relative">
                     {/* Timeline Line Segment */}
                     <div 
                       className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-white/10
                         ${idx === 0 ? 'top-1/2 h-[calc(50%_+_3rem)]' : ''}
                         ${idx !== 0 && idx !== EDUCATION.length - 1 ? 'top-0 h-[calc(100%_+_3rem)]' : ''}
                         ${idx === EDUCATION.length - 1 ? 'top-0 h-1/2' : ''}
                       `}
                     ></div>

                     <div className={`flex flex-col md:flex-row items-center justify-between md:gap-8 group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="hidden md:block w-5/12"></div>
                        
                        {/* Dot - Hidden on mobile, visible on desktop */}
                        <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary-400 bg-slate-900 z-10 shadow-[0_0_0_4px_rgba(30,41,59,1)]"></div>
                        
                        <div className="w-full md:w-5/12 bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-primary-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 z-10 relative backdrop-blur-sm">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/20 text-primary-300 mb-3 border border-primary-500/20">
                            {edu.year}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                          <p className="text-slate-300 mb-2">{edu.institution}</p>
                          <p className="text-secondary-400 font-medium text-sm">{edu.grade}</p>
                        </div>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Experience />
      
      {/* Certifications & Publications */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Certifications & Publications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Certifications Column */}
                <div>
                     <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                        <BadgeCheck className="text-secondary-400" size={24} /> 
                        Certifications
                     </h3>
                     <div className="space-y-4">
                        {CERTIFICATIONS.map((cert) => (
                             <div key={cert.id} className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-secondary-400/50 hover:bg-white/10 transition-all duration-300 group">
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-white group-hover:text-secondary-400 transition-colors mb-3">{cert.title}</h4>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-300">{cert.issuer}</span>
                                        <span className="text-slate-400 font-mono text-xs bg-white/10 px-3 py-1.5 rounded-full border border-white/10">{cert.date}</span>
                                    </div>
                                </div>
                             </div>
                        ))}
                     </div>
                </div>

                {/* Publications Column */}
                <div>
                     <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                        <FileText className="text-primary-400" size={24} /> 
                        Publications
                     </h3>
                     <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm flex flex-col items-start text-left hover:border-primary-400/50 hover:bg-white/10 transition-all duration-300 h-fit shadow-lg">
                        <div className="w-full">
                            <a 
                              href="https://ieeexplore.ieee.org/document/10560440" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="group/link inline-flex items-start gap-2 hover:text-primary-400 transition-colors mb-3"
                            >
                              <h4 className="text-lg font-bold text-white group-hover/link:text-primary-400 transition-colors leading-snug">"Enhancing the Education Ecosystem for Specially Abled Students"</h4>
                              <ExternalLink size={18} className="mt-1 flex-shrink-0 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-300 border border-primary-500/20">
                                    ICCDS-2024
                                </span>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                Research paper presented at the IEEE International Conference on Communication and Data Sciences. Explores technology-driven solutions for creating inclusive education systems.
                            </p>
                            <a 
                              href="https://ieeexplore.ieee.org/document/10560440" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-primary-400 hover:text-primary-300 inline-flex items-center gap-1"
                            >
                                View Publication <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};