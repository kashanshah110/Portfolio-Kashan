import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            04. Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Education & Coursework
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Formal computer science and information technology studies grounding my software development career.
          </p>
        </div>

        {/* Education Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Institution Card (7 cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-slate-800/80">
            <div>
              {/* Header with University Logo / Badge */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {EDUCATION_DATA.institution}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {EDUCATION_DATA.location}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        {EDUCATION_DATA.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Degree title */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-300">
                  {EDUCATION_DATA.degree}
                </h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Comprehensive 4-year undergraduate curriculum covering computational theory, software design, algorithms, database architectures, and distributed systems.
                </p>
              </div>

              {/* Key academic achievements */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Academic Highlights
                </span>
                {EDUCATION_DATA.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Progress Metrics */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-slate-400">Degree Completion Progress</span>
                <span className="font-mono text-cyan-400 font-semibold">
                  {EDUCATION_DATA.semestersCompleted} of {EDUCATION_DATA.totalSemesters} Semesters (50%)
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  style={{ width: `${(EDUCATION_DATA.semestersCompleted / EDUCATION_DATA.totalSemesters) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: CGPA Spotlight & Coursework (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* CGPA Spotlight Glass Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800/80 bg-gradient-to-br from-[#0c101a] via-[#0d1222] to-[#121124] relative overflow-hidden">
              <div 
                aria-hidden="true" 
                className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" 
              />
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Academic Standing
                </span>
                <Award className="w-5 h-5 text-amber-400" />
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-extrabold font-mono text-white tracking-tight tabular-nums">
                  {EDUCATION_DATA.cgpa}
                </span>
                <span className="text-sm font-mono text-slate-400">
                  / {EDUCATION_DATA.scale} CGPA
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Maintained across 4 semesters of university examinations, laboratory coursework, and technical evaluations at the University of Gujrat.
              </p>
            </div>

            {/* Relevant Coursework Card */}
            <div className="glass-card p-6 rounded-2xl flex-1 border border-slate-800/80">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-cyan-400">
                <BookOpen className="w-4 h-4" />
                <span>Core Subject Coursework</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {EDUCATION_DATA.coreCoursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-medium hover:border-slate-700 transition-colors"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
