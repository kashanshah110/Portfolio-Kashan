import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, Check, Copy, ExternalLink, MessageSquare } from 'lucide-react';
import { CONTACT_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('sending');

    setTimeout(() => {
      setFormStatus('success');
      // Construct mailto link so user can immediately send via their email client
      const mailtoUrl = `mailto:${CONTACT_DATA.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inbound from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open mail client safely
      window.location.href = mailtoUrl;

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormStatus('idle');
      }, 3500);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background neon ambient */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            05. Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Let's Build Something Great
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Open for front-end developer internships, full-time roles, freelance projects, and technical collaborations.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="glass-card p-5 rounded-2xl flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                  <a
                    href={`mailto:${CONTACT_DATA.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                  >
                    {CONTACT_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => copyToClipboard(CONTACT_DATA.email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                  title="Compose email"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-5 rounded-2xl flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Phone & WhatsApp</div>
                  <a
                    href={`tel:${CONTACT_DATA.phone}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 transition-colors font-mono"
                  >
                    {CONTACT_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => copyToClipboard(CONTACT_DATA.phone, 'phone')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={`tel:${CONTACT_DATA.phone}`}
                  className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
                  title="Call number"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card p-5 rounded-2xl flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                  <a
                    href={CONTACT_DATA.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-blue-300 transition-colors"
                  >
                    in/kashan-ali-29815b30a
                  </a>
                </div>
              </div>

              <a
                href={CONTACT_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
                title="Open LinkedIn"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="glass-card p-5 rounded-2xl flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30 flex items-center justify-center">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">GitHub Profile</div>
                  <a
                    href={CONTACT_DATA.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-white hover:text-purple-300 transition-colors font-mono"
                  >
                    github.com/kashanshah110
                  </a>
                </div>
              </div>

              <a
                href={CONTACT_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-purple-400 hover:bg-slate-800 transition-colors"
                title="Open GitHub"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Location Card */}
            <div className="glass-card p-5 rounded-2xl flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400">Current Base</div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  Rawalpindi / Islamabad, Pakistan
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <h3 className="text-base font-bold text-white font-display">
                Send a Direct Inquiry
              </h3>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Front-End Role / Project Discussion"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Kashan, I came across your portfolio and wanted to discuss..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Quick response within 24 hours.
                </span>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-white disabled:opacity-50 transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.35)] cursor-pointer"
                >
                  {formStatus === 'sending' ? (
                    <span>Opening Mail Client...</span>
                  ) : formStatus === 'success' ? (
                    <>
                      <Check className="w-4 h-4 text-slate-950" />
                      <span>Inquiry Prepared!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
