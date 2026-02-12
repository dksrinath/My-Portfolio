import React from 'react';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <p className="text-slate-400">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {SKILLS.map((category, index) => (
            <div 
              key={index} 
              className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-primary-400/30 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold mb-4 text-primary-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-black/20 text-slate-300 text-sm rounded-full border border-white/5 hover:border-primary-400/50 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};