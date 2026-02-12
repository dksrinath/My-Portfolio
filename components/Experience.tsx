import React from 'react';
import { EXPERIENCES } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Professional Experience</h2>
          <p className="text-slate-400">Industry internships and hands-on experience</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline Container */}
          <div className="space-y-12">
            
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} className="relative flex md:gap-8 items-center">
                {/* Timeline Column (Desktop) */}
                <div className="hidden md:flex flex-col items-center absolute left-0 h-full justify-center w-12 shrink-0">
                   {/* Line Segment */}
                   <div className={`absolute w-0.5 bg-white/10
                       ${idx === 0 ? 'top-1/2 h-[calc(50%_+_3rem)]' : ''}
                       ${idx !== 0 && idx !== EXPERIENCES.length - 1 ? 'top-0 h-[calc(100%_+_3rem)]' : ''}
                       ${idx === EXPERIENCES.length - 1 ? 'top-0 h-1/2' : ''}
                   `}></div>
                   
                   {/* Dot */}
                   <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-primary-500 shadow-[0_0_0_4px_rgba(15,23,42,1)] z-10 relative"></div>
                </div>

                {/* Content Card */}
                <div className="w-full md:ml-12 bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-primary-500/30 group relative z-10 backdrop-blur-sm shadow-lg">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-1">
                       {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-lg text-slate-300 font-medium">{exp.company}</p>
                      <span className="px-2.5 py-0.5 bg-white/5 rounded-full text-xs text-slate-400 border border-white/5 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};