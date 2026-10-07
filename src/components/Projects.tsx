import React, { useState } from 'react';
import { ExternalLink, Github, Play, ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { MiniAppsModal } from './MiniAppsModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMiniAppsOpen, setIsMiniAppsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'fullstack' | 'javascript'>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Glow highlight */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[40rem] h-[25rem] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              03. Featured Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Crafted Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Interactive web applications demonstrating responsive layout architecture, luxury UI design, JavaScript logic, and full-stack development.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Works (4)
            </button>
            <button
              onClick={() => setActiveTab('frontend')}
              className={`px-3 py-1.5 font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'frontend'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Front-End
            </button>
            <button
              onClick={() => setActiveTab('fullstack')}
              className={`px-3 py-1.5 font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'fullstack'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              MERN Stack
            </button>
            <button
              onClick={() => setActiveTab('javascript')}
              className={`px-3 py-1.5 font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'javascript'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              JavaScript Suite
            </button>
          </div>
        </div>

        {/* Projects 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800/80 hover:border-cyan-500/40"
            >
              <div>
                {/* Thumbnail Container with hover depth and measured contrast scrim */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c101a] via-transparent to-transparent opacity-80" />

                  {/* Top Status Indicators (Unboxed) */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded bg-[#07090e]/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                      {project.category.toUpperCase()}
                    </span>
                    {project.inProgress && (
                      <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                        IN PROGRESS
                      </span>
                    )}
                  </div>

                  {/* Hover Overlay Prompt */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="px-3.5 py-2 rounded-lg bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-500/30 hover:bg-cyan-300 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View Case Study
                    </button>
                    {project.id === 'js-mini-projects' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMiniAppsOpen(true);
                        }}
                        className="px-3.5 py-2 rounded-lg bg-purple-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-purple-500/30 hover:bg-purple-400 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5" />
                        Live Playground
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6">
                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer font-display"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{project.subtitle}</p>
                  </div>

                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.techStack.length} Technologies</span>
                    <span aria-hidden="true">·</span>
                    <span>Production Grade</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900/80 text-slate-300 border border-slate-800 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 py-4 bg-[#0a0e19]/60 border-t border-slate-800/80 flex items-center justify-between gap-3 text-xs">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-slate-300 hover:text-cyan-300 font-medium transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Details & Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.id === 'js-mini-projects' && (
                    <button
                      onClick={() => setIsMiniAppsOpen(true)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/25 transition-colors font-medium cursor-pointer"
                    >
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>Test Mini-Apps</span>
                    </button>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case study detail modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onLaunchInteractiveDemo={() => setIsMiniAppsOpen(true)}
      />

      {/* Interactive JavaScript Mini-Projects Modal */}
      <MiniAppsModal
        isOpen={isMiniAppsOpen}
        onClose={() => setIsMiniAppsOpen(false)}
      />
    </section>
  );
};
