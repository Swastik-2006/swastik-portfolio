import React, { useState } from 'react';
import { ExternalLink, Maximize2, X, Palette, ZoomIn } from 'lucide-react';
import { ARTWORKS, Artwork } from '../data/portfolioData';

export const ArtGallerySection: React.FC = () => {
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);

  return (
    <section id="art" className="w-full py-20 lg:py-28 bg-[#0c0e13] border-t border-[#1e2025]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#c2c1ff] uppercase tracking-widest font-bold">
                05 //
              </span>
              <span className="font-mono text-xs text-[#92949D] uppercase tracking-wider">
                BEYOND TECH
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Because I'm more than a Computer Science student.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#92949D] max-w-2xl mt-1 leading-relaxed">
              I also enjoy art, drawing, and visual creativity. Technology is one side of my
              curiosity; art is another way I express it.
            </p>
          </div>

          <a
            href="https://www.instagram.com/swastikkundu2006/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg bg-[#3630b5] text-[#e2dfff] hover:bg-[#3630b5]/80 font-mono text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 self-start md:self-auto shadow-sm transition-all hover:scale-[1.02] border border-[#aeadff]/20"
          >
            <span>@swastikkundu2006</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Visual Editorial Art Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTWORKS.map((artwork) => (
            <div
              key={artwork.id}
              onClick={() => setActiveArtwork(artwork)}
              className="rounded-2xl overflow-hidden bg-[#1e2025] border border-[#282a2f] flex flex-col group hover:border-[#c8f169]/50 transition-all duration-300 shadow-xl cursor-pointer"
            >
              {/* Image Container */}
              <div className="h-72 sm:h-80 w-full bg-[#111318] relative flex flex-col items-center justify-center overflow-hidden">
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-mono text-xs text-[#c8f169] flex items-center gap-1.5 bg-[#111318]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#33353a]">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Expand Artwork</span>
                  </span>
                </div>
              </div>

              {/* Title & Metadata Card Footer */}
              <div className="p-5 flex flex-col gap-1.5 bg-[#1a1b21] border-t border-[#282a2f]">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-white group-hover:text-[#c8f169] transition-colors">
                    {artwork.title}
                  </h3>
                  <span className="font-mono text-xs text-[#92949D]">{artwork.year}</span>
                </div>
                <p className="font-mono text-xs text-[#92949D]">{artwork.medium}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeArtwork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveArtwork(null)}
        >
          <div
            className="w-full max-w-4xl bg-[#1e2025] border border-[#33353a] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArtwork(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-[#111318]/80 text-[#92949D] hover:text-white border border-[#33353a] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Full Image */}
            <div className="w-full md:w-3/5 bg-[#0c0e13] flex items-center justify-center p-4 min-h-[320px] max-h-[500px]">
              <img
                src={activeArtwork.imageUrl}
                alt={activeArtwork.title}
                className="max-w-full max-h-[460px] object-contain rounded-lg"
              />
            </div>

            {/* Right: Artwork Details */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#1a1b21]">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-[#c8f169] uppercase tracking-wider">
                  VISUAL EXPLORATION
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  {activeArtwork.title}
                </h3>
                <p className="font-mono text-xs text-[#c2c1ff] uppercase">
                  {activeArtwork.medium}
                </p>

                <p className="font-sans text-sm text-[#92949D] leading-relaxed mt-2">
                  {activeArtwork.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#282a2f] flex items-center justify-between mt-6">
                <span className="font-mono text-xs text-[#92949D]">
                  BY SWASTIK KUNDU
                </span>
                <a
                  href="https://www.instagram.com/swastikkundu2006/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#c8f169] hover:underline flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
