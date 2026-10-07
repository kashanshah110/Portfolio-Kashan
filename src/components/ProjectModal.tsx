import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onLaunchInteractiveDemo?: (projectId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onLaunchInteractiveDemo,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#0c101a] border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#07090e]/80">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Project Case Study</span>
            <span aria-hidden="true">·</span>
            <span className="text-cyan-400 capitalize">{project.category}</span>
            {project.inProgress && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-amber-400 font-medium">In Progress</span>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Hero Media */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 aspect-video bg-slate-900">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
                <p className="text-sm text-cyan-300 font-medium">{project.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Architecture & Overview
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.detailedOverview}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Key Capabilities & Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-200 border border-slate-700/60 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#07090e]/90 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            Author: <span className="text-slate-200 font-medium">Kashan Ali</span>
          </div>

          <div className="flex items-center gap-3">
            {project.id === 'js-mini-projects' && onLaunchInteractiveDemo && (
              <button
                onClick={() => {
                  onClose();
                  onLaunchInteractiveDemo(project.id);
                }}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Open Interactive Suite
              </button>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-colors border border-slate-700"
            >
              <Github className="w-3.5 h-3.5" />
              Source Code
            </a>

            {project.id !== 'js-mini-projects' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
