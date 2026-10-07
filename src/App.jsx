import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TestRunnerWidget from './components/TestRunnerWidget';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import BackgroundIllusion from './components/BackgroundIllusion';
import MouseSpotlight from './components/MouseSpotlight';
import { FlaskConical } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative">
      {/* 3D Optical Illusion Background Canvas & Grid */}
      <BackgroundIllusion />

      {/* Dynamic Cursor Spotlight Lighting */}
      <MouseSpotlight />

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <TestRunnerWidget />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume Viewer / Print Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Floating QA Test Quick Launcher */}
      <a
        href="#test-lab"
        className="fixed bottom-6 right-6 z-40 hidden sm:inline-flex items-center space-x-2 px-3.5 py-2 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-medium shadow-glow-emerald backdrop-blur-md hover:scale-105 hover:bg-slate-800 transition-all duration-300"
        title="Jump to QA Automation Test Lab"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <FlaskConical className="w-3.5 h-3.5" />
        <span>Live QA Lab</span>
      </a>
    </div>
  );
}
