import React, { useState } from 'react';
import { ArrowDown, Mail, Github, Linkedin, MapPin, Check, Copy, Sparkles, Code2 } from 'lucide-react';
import { CONTACT_DATA, IMAGES } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-cyber-grid"
    >
      {/* Ambient Neon Glow Backdrops */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-blue-600/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio, Title, CTAs (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status & Location Line (Zero-pill clean text) */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-medium text-emerald-400">Available for Opportunities</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Rawalpindi, Pakistan
              </span>
            </div>

            {/* Name & Headline */}
            <div>
              <p className="text-sm uppercase tracking-widest text-cyan-400 font-mono font-medium mb-2">
                Front-End Web Developer & BSIT Student
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
                KASHAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">ALI</span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Building sleek, modern, and responsive web applications with precision code. 
              Bridging academic computer science at the University of Gujrat with self-taught front-end craftsmanship.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-white shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
              >
                View Work
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
              >
                Contact
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-mono text-slate-300 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:text-cyan-300 transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links & Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-3 text-slate-400 text-sm">
              <span className="text-xs text-slate-500">Connect:</span>
              <a
                href={CONTACT_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_DATA.email}`}
                className="p-2 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Email Kashan Ali"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Circular Avatar with Glowing Border (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer Neon Glow Halo */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-600 to-blue-500 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition duration-500" 
              />

              {/* Glowing circular border ring */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-purple-500 to-blue-500 shadow-[0_0_40px_rgba(6,182,212,0.45)]">
                {/* Inner mask container */}
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0e17] border-2 border-[#07090e]">
                  <img
                    src={IMAGES.avatar}
                    alt="Kashan Ali - Front-End Web Developer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback placeholder with initials if image ever fails
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Styled fallback in case asset fails */}
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-[#07090e] text-slate-300">
                    <Code2 className="w-12 h-12 text-cyan-400 mb-2" />
                    <span className="text-xl font-bold font-display text-white">KA</span>
                    <span className="text-xs text-slate-400">Kashan Ali</span>
                  </div>
                </div>

                {/* Floating Micro Badge */}
                <div className="absolute -bottom-2 right-4 px-3 py-1 rounded-full bg-[#0a0f1d]/90 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>BSIT · 3.02 CGPA</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Strip below avatar */}
            <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-sm text-center">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-lg font-bold font-mono text-cyan-400 tabular-nums">4th</div>
                <div className="text-[11px] text-slate-400">Semester BSIT</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-lg font-bold font-mono text-cyan-400 tabular-nums">3.02</div>
                <div className="text-[11px] text-slate-400">Current CGPA</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-lg font-bold font-mono text-cyan-400 tabular-nums">4+</div>
                <div className="text-[11px] text-slate-400">Core Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator prompt */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-400 transition-colors group cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span>Explore Portfolio</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
