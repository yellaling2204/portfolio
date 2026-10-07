import React, { useRef } from 'react';
import { personalDetails, projectsData, experienceData, educationData, skillsData } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Control Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-xs font-semibold text-slate-200">
              RESUME VIEWER // Yellaling_Kalyane_Resume.pdf
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/60 font-mono text-xs transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-mono text-xs transition-colors"
              title="Share Link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable/Viewable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans text-xs leading-relaxed selection:bg-cyan-200 print:p-0 print:m-0">
          
          {/* Header */}
          <div className="text-center border-b border-slate-300 pb-4 mb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-slate-900 uppercase">
              {personalDetails.fullName}
            </h1>
            <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 uppercase tracking-wide">
              FULL-STACK SOFTWARE ENGINEER | QUALITY & AUTOMATION ENGINEERING
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-600 mt-2">
              <span>{personalDetails.location}</span>
              <span>|</span>
              <a href={`tel:${personalDetails.phone}`} className="hover:text-blue-600">{personalDetails.phone}</a>
              <span>|</span>
              <a href={`mailto:${personalDetails.email}`} className="hover:text-blue-600 font-medium">{personalDetails.email}</a>
              <span>|</span>
              <a href={personalDetails.github} target="_blank" rel="noreferrer" className="hover:text-blue-600">
                GitHub: github.com/{personalDetails.githubUsername}
              </a>
              <span>|</span>
              <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600">
                LinkedIn: {personalDetails.linkedin}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-1.5">
              Professional Summary
            </h2>
            <p className="text-[11.5px] text-slate-800 leading-normal text-justify">
              Computer Science Engineer and 2026 B.Tech graduate from IIIT Dharwad with hands-on experience in software development, API validation, debugging, and test automation. Proficient in Python, Java, SQL, REST APIs, Postman, Git, and modern web technologies, with practical exposure to functional, regression, smoke, and sanity testing. Built an LLM-assisted Python test automation framework that converts natural-language requirements into executable functional test cases and reusable validation workflows. Strong foundation in SDLC, STLC, Agile/Scrum, OOP, DBMS, and problem solving; seeking an entry-level Quality Engineering role at Deloitte.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-1.5">
              Technical Skills
            </h2>
            <div className="text-[11px] space-y-1 text-slate-800">
              <p><strong>Programming:</strong> Python, Java, JavaScript, TypeScript, SQL</p>
              <p><strong>Testing & QA:</strong> Test Automation, Functional Testing, API Testing, Regression Testing, Smoke Testing, Sanity Testing, UAT, Bug Reporting, Debugging, Test Scenarios & Test Cases</p>
              <p><strong>Automation / API:</strong> Python Automation, LLM-Assisted Test Automation, BDD-Style Testing, REST APIs, Postman, API Validation</p>
              <p><strong>Engineering:</strong> SDLC, STLC, Agile/Scrum, Git, GitHub, Code Review, CI/CD Fundamentals, Jenkins</p>
              <p><strong>Backend & Data:</strong> Node.js, Express.js, RESTful API Design, MongoDB, MySQL, Data Modeling, Indexing, Query Optimization</p>
              <p><strong>Frontend / Tools:</strong> React.js, HTML5, CSS3, Vite, Tailwind CSS, Docker, Docker Compose, Linux/Ubuntu, VS Code</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-1.5">
              Professional Experience
            </h2>
            <div>
              <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs">
                <span>Web Development Intern — SystemTron</span>
                <span className="font-medium text-slate-700">Dec 2024 – Jan 2025</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-[11px] text-slate-800 mt-1">
                <li>Developed production-style MERN features across frontend and backend layers, translating functional requirements into maintainable software.</li>
                <li>Built React components and Node.js/Express REST endpoints with authentication, validation, API integration, debugging, testing, and defect resolution.</li>
                <li>Performed API validation and functional checks for application workflows; investigated issues and verified fixes before feature delivery.</li>
                <li>Used Git and code-review practices while collaborating with a small development team on integration and delivery.</li>
              </ul>
            </div>
          </div>

          {/* Automation & Software Engineering Projects */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-1.5">
              Automation & Software Engineering Projects
            </h2>

            <div className="space-y-2.5">
              {/* Full-Stack Featured Project */}
              <div>
                <div className="font-bold text-slate-900 text-[11.5px]">
                  Ajaia AI-Native Collaborative Docs <span className="font-normal text-slate-600">| Next.js | TypeScript | Prisma ORM | TipTap | Vercel</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-[11px] text-slate-800">
                  <li>Engineered an AI-native rich-text document editor with Next.js 14, TipTap extensions, and Prisma database persistence.</li>
                  <li>Deployed production application to Vercel with document sharing, access control, and instant file export workflows.</li>
                </ul>
              </div>

              {/* Project 1 */}
              <div>
                <div className="font-bold text-slate-900 text-[11.5px]">
                  LLM-Assisted Test Automation Framework <span className="font-normal text-slate-600">| Python | LLMs | BDD-Style Testing</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-[11px] text-slate-800">
                  <li>Built a Python framework that converts natural-language requirements into executable functional test cases and reusable validation workflows.</li>
                  <li>Structured automated validation around requirements and expected behavior to reduce manual test-case creation and improve consistency.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="font-bold text-slate-900 text-[11.5px]">
                  Secure Real-Time Messaging Platform <span className="font-normal text-slate-600">| MERN | REST APIs | Socket.IO | JWT | MongoDB</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-[11px] text-slate-800">
                  <li>Developed secure REST APIs and real-time messaging workflows with authentication, authorization, persistent storage, and protected channels.</li>
                  <li>Performed API validation, debugging, and end-to-end functional checks for authentication and messaging scenarios.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="font-bold text-slate-900 text-[11.5px]">
                  TalentFlow — Mini Hiring Platform <span className="font-normal text-slate-600">| React | TypeScript | Vite | Tailwind</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-[11px] text-slate-800">
                  <li>Built job-posting, candidate-pipeline, and assessment workflows with structured application data flows and Kanban management.</li>
                  <li>Implemented optimistic updates with rollback handling and tested failure scenarios to improve application resilience.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div>
                <div className="font-bold text-slate-900 text-[11.5px]">
                  Computer Vision Human Interaction System <span className="font-normal text-slate-600">| Python | OpenCV | MediaPipe</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-[11px] text-slate-800">
                  <li>Developed a real-time gesture-controlled virtual mouse and tested gesture recognition across multiple operating conditions.</li>
                  <li>Debugged recognition and event-handling logic to improve reliable interaction behavior.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-1.5">
              Education
            </h2>
            <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs">
              <span>Indian Institute of Information Technology (IIIT) Dharwad — B.Tech, Computer Science & Engineering</span>
              <span className="font-medium text-slate-700">May 2026</span>
            </div>
            <p className="text-[11px] text-slate-800 mt-0.5">
              <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, Software Engineering
            </p>
          </div>

          {/* Engineering & Delivery */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-1.5">
              Engineering & Delivery
            </h2>
            <p className="text-[11px] text-slate-800">
              Containerized applications using Docker/Docker Compose and built Jenkins CI/CD workflows for automated builds and Docker image creation. Comfortable with Git-based collaboration, debugging, APIs, testing, and iterative Agile-style development.
            </p>
          </div>

          {/* Additional */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-1.5">
              Additional
            </h2>
            <p className="text-[11px] text-slate-800">
              <strong>Languages:</strong> English (Professional), Kannada (Native), Hindi (Conversational) &nbsp;|&nbsp; 
              <strong>Availability:</strong> Immediate Joiner &nbsp;|&nbsp; 
              <strong>Relocation:</strong> Open to relocate
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
