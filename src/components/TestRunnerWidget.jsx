import React, { useState } from 'react';
import { testScenarios } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  FlaskConical, 
  Terminal, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  HelpCircle,
  FileCode,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function TestRunnerWidget() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(testScenarios[0].id);
  const [isRunning, setIsRunning] = useState(false);
  const [completedCases, setCompletedCases] = useState([]);
  const [currentRunningCaseId, setCurrentRunningCaseId] = useState(null);
  const [activeView, setActiveView] = useState('console'); // 'console' | 'gherkin'
  const [executionReport, setExecutionReport] = useState(null);

  const currentScenario = testScenarios.find((s) => s.id === selectedScenarioId) || testScenarios[0];

  const handleSelectScenario = (id) => {
    if (isRunning) return;
    setSelectedScenarioId(id);
    setCompletedCases([]);
    setCurrentRunningCaseId(null);
    setExecutionReport(null);
  };

  const runScenarioTests = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCompletedCases([]);
    setExecutionReport(null);

    let currentIndex = 0;
    const cases = currentScenario.cases;

    const executeNext = () => {
      if (currentIndex < cases.length) {
        const testCase = cases[currentIndex];
        setCurrentRunningCaseId(testCase.id);

        setTimeout(() => {
          setCompletedCases((prev) => [...prev, testCase]);
          currentIndex++;
          executeNext();
        }, 380 + Math.random() * 250);
      } else {
        setCurrentRunningCaseId(null);
        setIsRunning(false);
        setExecutionReport({
          total: cases.length,
          passed: cases.length,
          failed: 0,
          scenarioName: currentScenario.name,
          duration: `${Math.floor(75 + Math.random() * 45)}ms`,
          status: '100% PASSED'
        });

        // Trigger celebratory confetti
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#06b6d4', '#10b981', '#3b82f6']
        });
      }
    };

    executeNext();
  };

  const handleReset = () => {
    setIsRunning(false);
    setCompletedCases([]);
    setCurrentRunningCaseId(null);
    setExecutionReport(null);
  };

  const progressPercentage = Math.round((completedCases.length / currentScenario.cases.length) * 100);

  return (
    <section id="test-lab" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#070b16]/90 border-y border-cyan-500/20">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3 backdrop-blur-md">
            <FlaskConical className="w-3.5 h-3.5 animate-pulse" />
            <span>04 // LIVE FRAMEWORK DEMO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            LLM-Assisted <span className="gradient-text-emerald">Test Automation Engine</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Live interactive demonstration of my marquee project: converting natural-language requirements into executable BDD test cases and deterministic assertion suites.
          </p>
        </div>

        {/* Clear Purpose Banner explaining "Why this exists" */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/25 text-xs text-slate-300 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <strong className="text-cyan-300 font-mono block sm:inline">Purpose & Context: </strong>
            <span>
              On my resume, I developed an LLM-assisted Python test automation framework. This interactive console allows you to select real-world requirements below (e.g. JWT security, WebSocket latency, or UI contracts) and watch the simulated framework parse and execute automated assertions in real-time.
            </span>
          </div>
        </div>

        {/* Scenario Selector Pills */}
        <div className="mb-6">
          <div className="text-xs font-mono text-slate-400 mb-2 flex items-center space-x-1.5">
            <span>Select a Natural-Language Requirement:</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {testScenarios.map((sc) => (
              <button
                key={sc.id}
                onClick={() => handleSelectScenario(sc.id)}
                disabled={isRunning}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 border ${
                  selectedScenarioId === sc.id
                    ? 'bg-slate-900 border-cyan-400 shadow-glow-cyan text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <div className="text-xs font-bold text-white mb-1 flex items-center justify-between">
                  <span>{sc.name}</span>
                  {selectedScenarioId === sc.id && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  )}
                </div>
                <div className="text-[11px] font-mono text-slate-400 line-clamp-2">
                  "{sc.nlPrompt}"
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Live Terminal & Execution Console */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-2xl">
          
          {/* Terminal Window Header */}
          <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <span className="ml-2 font-mono text-xs text-slate-300 flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>pytest-bdd --framework=llm-nlp-parser --suite={selectedScenarioId}</span>
              </span>
            </div>

            <div className="flex items-center space-x-2 font-mono text-xs">
              <button
                onClick={() => setActiveView('console')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  activeView === 'console'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Live Execution
              </button>
              <button
                onClick={() => setActiveView('gherkin')}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  activeView === 'gherkin'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Synthesized BDD Spec
              </button>
            </div>
          </div>

          {activeView === 'console' ? (
            <div className="p-5 sm:p-7 font-mono text-xs">
              
              {/* Natural-Language Input Preview */}
              <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/20 text-xs">
                <div className="text-[11px] text-cyan-400 font-bold mb-1 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Natural-Language Requirement Input:</span>
                </div>
                <p className="text-slate-200 italic font-sans text-xs">
                  "{currentScenario.nlPrompt}"
                </p>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={runScenarioTests}
                    disabled={isRunning}
                    className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl font-bold text-xs transition-all ${
                      isRunning
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 hover:from-emerald-300 hover:to-cyan-300 shadow-glow-emerald hover:scale-105'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isRunning ? 'Synthesizing & Executing...' : 'Run Test Assertions'}</span>
                  </button>

                  <button
                    onClick={handleReset}
                    disabled={isRunning || completedCases.length === 0}
                    className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <span className="text-slate-400 text-[11px]">Progress:</span>{' '}
                    <span className="text-emerald-400 font-bold">{progressPercentage}%</span>
                  </div>
                  <div className="w-28 bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-emerald-400 h-2 transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Execution Steps */}
              <div className="space-y-3 mb-6">
                {currentScenario.cases.map((tc) => {
                  const isDone = completedCases.some((c) => c.id === tc.id);
                  const isCurrent = currentRunningCaseId === tc.id;

                  return (
                    <div
                      key={tc.id}
                      className={`p-3.5 rounded-2xl border transition-all duration-200 ${
                        isDone
                          ? 'bg-slate-900/80 border-emerald-500/30'
                          : isCurrent
                          ? 'bg-cyan-950/30 border-cyan-500/60 animate-pulse'
                          : 'bg-slate-900/30 border-slate-800/60 opacity-60'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center space-x-2.5">
                          {isDone ? (
                            <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 font-bold text-[10px] border border-emerald-500/40">
                              PASS
                            </span>
                          ) : isCurrent ? (
                            <span className="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 font-bold text-[10px] border border-cyan-500/40">
                              RUNNING
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 font-bold text-[10px]">
                              QUEUED
                            </span>
                          )}

                          <span className="text-slate-500 text-[11px]">{tc.id}</span>
                          <span className="text-white font-medium text-xs">{tc.name}</span>
                        </div>

                        {isDone && (
                          <div className="text-emerald-400 text-[11px] flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{tc.time}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-2 pt-2 border-t border-slate-800/60 text-[11px] text-cyan-300 font-mono">
                        {tc.assert}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Execution Summary */}
              {executionReport && (
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex flex-wrap items-center justify-between gap-4 animate-fadeIn">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-emerald-300 font-bold text-sm">
                        All {executionReport.total} Test Assertions Passed Deterministically
                      </div>
                      <div className="text-[11px] text-emerald-400/80">
                        Execution Time: {executionReport.duration} • Reusable Validation Pipeline Healthy
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-emerald-900/60 text-emerald-200 border border-emerald-500/30 text-xs font-semibold">
                    Zero Regressions Detected
                  </span>
                </div>
              )}

            </div>
          ) : (
            /* Synthesized Gherkin Feature Viewer */
            <div className="p-6 font-mono text-xs bg-slate-950 text-slate-300 space-y-3">
              <div className="text-slate-500">// Generated automatically from: "{currentScenario.name}"</div>
              <div className="text-cyan-400 font-bold">Feature: {currentScenario.feature}</div>
              <div className="pl-4 text-slate-400">
                In order to ensure zero defects in production deployments<br/>
                As a Quality Engineer<br/>
                I want deterministic validation for {currentScenario.name.toLowerCase()}
              </div>

              <div className="pt-2 text-purple-400 font-semibold">Scenario: Validate {currentScenario.name}</div>
              <div className="pl-4 space-y-1.5 text-slate-300">
                {currentScenario.cases.map((c, i) => (
                  <div key={i}>
                    <span className="text-emerald-400 font-bold">{i === 0 ? 'Given' : i === currentScenario.cases.length - 1 ? 'Then' : 'When'}</span>{' '}
                    <span>{c.name} with constraint: <code className="text-cyan-300">"{c.assert}"</code></span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                <span>AST Parser Engine: Python 3.11</span>
                <span className="text-cyan-400">Standard: BDD Gherkin v6</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
