import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, Phone, ArrowRight, ExternalLink, Copy, Check, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="contact" className="w-full py-20 lg:py-28 bg-[#111318] border-t border-[#1e2025]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 text-center items-center">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#c8f169] uppercase tracking-widest font-bold">
              08 //
            </span>
            <span className="font-mono text-xs text-[#92949D] uppercase tracking-wider">
              CONNECT
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Maybe our paths cross here.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#92949D] max-w-xl mt-1 leading-relaxed">
            Have an opportunity, an interesting idea, or simply want to talk about technology,
            creativity or building things? Let's connect.
          </p>
        </div>

        {/* Contact Vector Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Email */}
          <div className="p-6 rounded-2xl bg-[#1a1b21] hover:bg-[#1e2025] border border-[#282a2f] hover:border-[#c8f169]/50 transition-all duration-300 shadow-lg flex items-center justify-between group relative">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-4 min-w-0 flex-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#282a2f] border border-[#33353a] flex items-center justify-center text-[#c8f169] group-hover:scale-110 transition-transform shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[11px] text-[#92949D] uppercase tracking-wider">
                  EMAIL DIRECT
                </span>
                <span className="font-display font-semibold text-base sm:text-lg text-white truncate">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>
            <div className="flex items-center gap-1.5 shrink-0 pl-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  copyToClipboard(PERSONAL_INFO.email, 'email');
                }}
                title="Copy Email"
                className="p-1.5 rounded-lg text-[#92949D] hover:text-[#c8f169] hover:bg-[#282a2f] transition-colors"
              >
                {copiedItem === 'email' ? (
                  <Check className="w-4 h-4 text-[#c8f169]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[#92949D] group-hover:text-[#c8f169] transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#1a1b21] hover:bg-[#1e2025] border border-[#282a2f] hover:border-[#c2c1ff]/50 transition-all duration-300 shadow-lg flex items-center justify-between group"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-[#282a2f] border border-[#33353a] flex items-center justify-center text-[#c2c1ff] group-hover:scale-110 transition-transform shrink-0">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[11px] text-[#92949D] uppercase tracking-wider">
                  PROFESSIONAL
                </span>
                <span className="font-display font-semibold text-base sm:text-lg text-white truncate">
                  LinkedIn Profile
                </span>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-[#92949D] group-hover:text-[#c2c1ff] transition-colors shrink-0" />
          </a>

          {/* GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#1a1b21] hover:bg-[#1e2025] border border-[#282a2f] hover:border-white/50 transition-all duration-300 shadow-lg flex items-center justify-between group"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-[#282a2f] border border-[#33353a] flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[11px] text-[#92949D] uppercase tracking-wider">
                  CODEBASE
                </span>
                <span className="font-display font-semibold text-base sm:text-lg text-white truncate">
                  github.com/Swastik-2006
                </span>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-[#92949D] group-hover:text-white transition-colors shrink-0" />
          </a>

          {/* Instagram */}
          <a
            href={PERSONAL_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#1a1b21] hover:bg-[#1e2025] border border-[#282a2f] hover:border-[#c2c1ff]/50 transition-all duration-300 shadow-lg flex items-center justify-between group"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-[#282a2f] border border-[#33353a] flex items-center justify-center text-[#c2c1ff] group-hover:scale-110 transition-transform shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[11px] text-[#92949D] uppercase tracking-wider">
                  CREATIVE / ART
                </span>
                <span className="font-display font-semibold text-base sm:text-lg text-white truncate">
                  @swastikkundu2006
                </span>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-[#92949D] group-hover:text-[#c2c1ff] transition-colors shrink-0" />
          </a>

          {/* Phone Direct / WhatsApp */}
          <div className="p-6 rounded-2xl bg-[#1a1b21] hover:bg-[#1e2025] border border-[#282a2f] hover:border-[#c8f169]/50 transition-all duration-300 shadow-lg flex items-center justify-between group sm:col-span-2 lg:col-span-2">
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-4 min-w-0 flex-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#282a2f] border border-[#33353a] flex items-center justify-center text-[#c8f169] group-hover:scale-110 transition-transform shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[11px] text-[#92949D] uppercase tracking-wider">
                  DIRECT MOBILE / WHATSAPP
                </span>
                <span className="font-display font-semibold text-base sm:text-lg text-white truncate">
                  {PERSONAL_INFO.phone}
                </span>
              </div>
            </a>

            <div className="flex items-center gap-2 shrink-0 pl-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  copyToClipboard(PERSONAL_INFO.phone, 'phone');
                }}
                title="Copy Phone"
                className="p-1.5 rounded-lg text-[#92949D] hover:text-[#c8f169] hover:bg-[#282a2f] transition-colors"
              >
                {copiedItem === 'phone' ? (
                  <Check className="w-4 h-4 text-[#c8f169]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
              <a
                href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#282a2f] text-xs font-mono text-[#c8f169] hover:bg-[#c8f169] hover:text-[#111318] transition-colors flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copy Notification Toast */}
        {copiedItem && (
          <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-[#c8f169] text-[#111318] font-mono text-xs font-bold uppercase tracking-wider shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
            <Check className="w-4 h-4" />
            <span>Copied {copiedItem} to clipboard!</span>
          </div>
        )}
      </div>
    </section>
  );
};
