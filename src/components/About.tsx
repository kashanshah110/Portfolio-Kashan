import React from 'react';
import { GraduationCap, Code, Compass, Terminal, Cpu, ArrowUpRight } from 'lucide-react';
import { ABOUT_DATA, CONTACT_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background glow decoration */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            01. Background & Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            About Kashan Ali
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Blending formal computer science education with self-directed front-end engineering.
          </p>
        </div>

        {/* Content Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Narrative Card (7 cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <h3 className="text-xl font-bold text-white font-display">
                {ABOUT_DATA.headline}
              </h3>
              <p>
                {ABOUT_DATA.storyParagraph1}
              </p>
              <p className="text-slate-400">
                {ABOUT_DATA.storyParagraph2}
              </p>
            </div>

            {/* Editorial highlights footer inside card */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid sm:grid-cols-2 gap-4">
              {ABOUT_DATA.highlights.map((item, idx) => (
                <div key={idx} className="text-xs">
                  <span className="text-slate-500 block font-mono">{item.label}</span>
                  <span className="text-slate-200 font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dual Pillar Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Academic Pillar */}
            <div className="glass-card p-6 rounded-2xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-display">
                      University of Gujrat
                    </h4>
                    <span className="text-xs text-purple-300 font-mono">
                      BS Information Technology · 4 Semesters
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Focusing on Web Systems, Data Structures, Relational Databases, and Object-Oriented Programming. 
                  Currently maintaining a competitive 3.02 CGPA.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span>Location: Gujrat / Rawalpindi</span>
                <span className="font-mono text-cyan-300">CGPA 3.02</span>
              </div>
            </div>

            {/* Self-Taught Dev Pillar */}
            <div className="glass-card p-6 rounded-2xl flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-display">
                      Self-Taught Front-End Engineer
                    </h4>
                    <span className="text-xs text-cyan-300 font-mono">
                      Modern Stack & Daily Builder
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deeply passionate about responsive web design, semantic HTML, modern CSS Grid/Flexbox, 
                  pure JavaScript DOM manipulation, and progressing into full-stack MERN architectures.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span>Status: Building Active Projects</span>
                <a
                  href="#projects"
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Explore Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
