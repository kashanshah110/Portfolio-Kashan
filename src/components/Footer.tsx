import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#06080d] py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Rights */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-white font-display text-sm tracking-tight">
              Kashan Ali
            </span>
            <span className="hidden sm:inline text-slate-600" aria-hidden="true">·</span>
            <span>Front-End Web Developer & BSIT Student</span>
            <span className="hidden sm:inline text-slate-600" aria-hidden="true">·</span>
            <span>Rawalpindi, Pakistan</span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={CONTACT_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={CONTACT_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors cursor-pointer"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-slate-600 text-[11px]">
          © {new Date().getFullYear()} Kashan Ali. Designed and engineered with React, Tailwind CSS & modern web standards.
        </div>
      </div>
    </footer>
  );
};
