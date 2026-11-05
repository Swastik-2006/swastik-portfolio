import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { JourneySection } from './components/JourneySection';
import { ExperimentsSection } from './components/ExperimentsSection';
import { LearningSection } from './components/LearningSection';
import { ArtGallerySection } from './components/ArtGallerySection';
import { CycleSection } from './components/CycleSection';
import { HorizonSection } from './components/HorizonSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('story');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['story', 'journey', 'experiments', 'learning', 'art', 'cycle', 'horizon', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#111318] text-[#e2e2e9] font-sans antialiased selection:bg-[#c8f169] selection:text-[#111318]">
      {/* Sticky Navigation Header */}
      <Header activeSection={activeSection} />

      {/* Main Page Flow */}
      <main className="w-full pt-16">
        <HeroSection />
        <StorySection />
        <JourneySection />
        <ExperimentsSection />
        <LearningSection />
        <ArtGallerySection />
        <CycleSection />
        <HorizonSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
