import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import { SkillCategory } from '../types/portfolio';
import { Sparkles, Layers, SlidersHorizontal, Image as ImageIcon } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const [customIconOverrides, setCustomIconOverrides] = useState<Record<string, string>>({});
  const [customUrlModalSkill, setCustomUrlModalSkill] = useState<string | null>(null);
  const [tempUrlInput, setTempUrlInput] = useState('');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  const handleSaveCustomImage = (skillId: string) => {
    if (tempUrlInput.trim()) {
      setCustomIconOverrides((prev) => ({
        ...prev,
        [skillId]: tempUrlInput.trim(),
      }));
    }
    setCustomUrlModalSkill(null);
    setTempUrlInput('');
  };

  const handleResetImage = (skillId: string) => {
    setCustomIconOverrides((prev) => {
      const copy = { ...prev };
      delete copy[skillId];
      return copy;
    });
    setCustomUrlModalSkill(null);
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Glow Backdrop */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              02. Technical Toolkit
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Skills & Technologies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Modern front-end toolchain with solid foundational coding practices, version control, and expanding full-stack capabilities.
            </p>
          </div>

          {/* Interactive Filter Controls (Functional buttons with active states) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Skills ({SKILLS_DATA.length})
            </button>
            <button
              onClick={() => setActiveCategory('frontend')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === 'frontend'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Front-End
            </button>
            <button
              onClick={() => setActiveCategory('backend')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === 'backend'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Backend & DB
            </button>
            <button
              onClick={() => setActiveCategory('tools')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === 'tools'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tools & Workflow
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const hasCustomImage = Boolean(customIconOverrides[skill.id]);

            return (
              <div
                key={skill.id}
                className="glass-card p-5 rounded-2xl flex flex-col justify-between group relative"
              >
                <div>
                  {/* Top line: Icon + Name + Status */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center p-2 group-hover:border-cyan-500/40 transition-colors shadow-inner">
                        <TechIcon
                          iconKey={skill.iconKey}
                          name={skill.name}
                          className="w-6 h-6"
                          customImage={customIconOverrides[skill.id] || skill.swappableImage}
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h3>
                        {/* Unboxed metadata */}
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                          <span className="capitalize">{skill.category}</span>
                          <span aria-hidden="true">·</span>
                          <span className={skill.status === 'In Progress' ? 'text-amber-400' : 'text-cyan-400'}>
                            {skill.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Swap Icon Action Button (addresses user request to easily swap custom icon) */}
                    <button
                      onClick={() => {
                        setCustomUrlModalSkill(skill.id);
                        setTempUrlInput(customIconOverrides[skill.id] || '');
                      }}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-cyan-300 hover:bg-slate-800/80 transition-colors text-xs"
                      title="Swap icon with your own image URL"
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Highlight text */}
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    {skill.highlight}
                  </p>
                </div>

                {/* Bottom line: Mastery Level */}
                <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-mono">Proficiency</span>
                  <span className="text-slate-300 font-medium font-mono">{skill.level}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Callout / Swappable image guide */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              All tech icons include crisp SVGs with an image placeholder slot that can be swapped with your own image assets or URLs.
            </span>
          </div>
          <span className="font-mono text-cyan-400 text-[11px] whitespace-nowrap">
            src/components/TechIcon.tsx
          </span>
        </div>
      </div>

      {/* Mini Image Swap Modal */}
      {customUrlModalSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-[#0c101a] border border-cyan-500/40 p-5 rounded-xl shadow-2xl text-slate-200">
            <h4 className="text-sm font-semibold text-white mb-1">
              Swap Icon Image Placeholder
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Enter an image URL or asset path to replace this skill's icon.
            </p>
            <input
              type="text"
              value={tempUrlInput}
              onChange={(e) => setTempUrlInput(e.target.value)}
              placeholder="e.g. /images/my-custom-icon.png or URL"
              className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white mb-4 focus:outline-none focus:border-cyan-400"
            />
            <div className="flex justify-end gap-2 text-xs">
              <button
                onClick={() => handleResetImage(customUrlModalSkill)}
                className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                Reset to Default SVG
              </button>
              <button
                onClick={() => setCustomUrlModalSkill(null)}
                className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSaveCustomImage(customUrlModalSkill)}
                className="px-3 py-1.5 rounded-lg font-semibold bg-cyan-400 text-slate-950 hover:bg-cyan-300"
              >
                Apply Image
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
