"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [command, setCommand] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    '> AAAYAFUJ OS v1.0 INITIALIZED',
    '> CYBER NEURAL NETWORK ONLINE',
    '> AWAITING COMMANDS...',
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;

    // Add command to terminal
    setTerminalOutput(prev => [...prev, `> ${command}`]);

    // Simulate AI response
    setTimeout(() => {
      setTerminalOutput(prev => [...prev, '> AI_RESPONSE: Analyzing input...', '> RESULT: Processing security protocols...']);
    }, 500);

    setCommand('');
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar Navigation */}
      <aside className="w-48 bg-black border-r border-[#00FF41] flex flex-col p-6">
        <div className="mb-8">
          <h1 className="text-[#00FF41] text-xl font-bold tracking-wider cyber-glow">
            AAAYAFUJ OS
          </h1>
        </div>

        <nav className="flex-1 space-y-1">
          <h3 className="text-[#00FF41] text-xs font-bold mb-3 tracking-wider opacity-70">
            CONTENT+HY
          </h3>

          <Link
            href="/"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all border-l-2 border-[#00FF41] cyber-glow"
          >
            &gt; Dashboard
          </Link>

          <Link
            href="/ai-brain"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all hover:border-l-2 hover:border-[#00FF41]"
          >
            &gt; AI Brain
          </Link>

          <Link
            href="/network-tools"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all hover:border-l-2 hover:border-[#00FF41]"
          >
            &gt; Network Tools
          </Link>

          <Link
            href="/settings"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all hover:border-l-2 hover:border-[#00FF41]"
          >
            &gt; Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-6">
        {/* Hero Section */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#00FF41] mb-2 cyber-glow-strong">
              UNLOCK THE FUTURE OF INTELLIGENCE
            </h2>
            <p className="text-[#00FF41] text-sm opacity-80">
              A Unified Cyber-Neural Operating System
            </p>

            <div className="flex gap-4 mt-6">
              <button className="cyber-button">
                START FREE TRIAL
              </button>
              <button className="cyber-button">
                LEARN MORE
              </button>
            </div>
          </div>

          <div className="relative w-48 h-48">
            <Image
              src="/generated/circuit-brain.png"
              alt="AI Neural Network"
              width={192}
              height={192}
              className="opacity-80"
              style={{ filter: 'drop-shadow(0 0 20px rgba(0, 255, 65, 0.6))' }}
            />
          </div>
        </div>

        {/* Terminal Command Area */}
        <div className="terminal-window rounded p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#00FF41] pulse-glow"></div>
            <h3 className="text-[#00FF41] font-bold tracking-wider">
              &gt; ENTER COMMANDS
            </h3>
          </div>

          {/* Terminal Output */}
          <div className="bg-black rounded border border-[#00FF41] p-4 min-h-[200px] max-h-[300px] overflow-y-auto font-mono text-sm">
            {terminalOutput.map((line, index) => (
              <div key={index} className="text-[#00FF41] mb-1">
                {line}
              </div>
            ))}

            {/* AI Response Area */}
            <div className="mt-4 p-3 border-l-2 border-[#008F11] bg-[#00FF4105]">
              <p className="text-[#00FF41] text-xs mb-2">
                &gt; AI_RESPONSE: Holding neural protocol...
              </p>
              <p className="text-[#66FF66] text-xs">
                DATA_SYSTEM: ...Analysis frame...
              </p>
              <p className="text-[#66FF66] text-xs">
                RESULT: Processing decoding 99.7%...
              </p>
            </div>
          </div>

          {/* Command Input */}
          <form onSubmit={handleCommand} className="flex gap-2">
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="Enter command..."
              className="flex-1 bg-black border border-[#00FF41] rounded px-4 py-2 text-[#00FF41] placeholder-[#00FF4150] focus:outline-none focus:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all"
            />
            <button
              type="submit"
              className="cyber-button"
            >
              EXECUTE
            </button>
          </form>
        </div>

        {/* Upload Database Section */}
        <div className="terminal-window rounded p-6">
          <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
            &gt; UPLOAD TEXT DATABASES
          </h3>

          <div className="border-2 border-dashed border-[#00FF41] rounded p-8 text-center hover:bg-[#00FF4105] transition-all cursor-pointer">
            <div className="flex flex-col items-center gap-3">
              <svg
                className="w-12 h-12 text-[#00FF41]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <div>
                <p className="text-[#00FF41] font-bold mb-1">CHOOSE FILE</p>
                <p className="text-[#00FF41] text-xs opacity-70">
                  aaayafuj_text_database1.txt, aaayafuj_text_database2.txt
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Learning Progress */}
        <div className="terminal-window rounded p-6">
          <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
            &gt; AI LEARNING PROGRESS
          </h3>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-[#00FF41] text-sm mb-2">
                <span>DATABASE PROCESSING</span>
                <span>78%</span>
              </div>
              <div className="h-2 bg-[#00FF4120] rounded overflow-hidden">
                <div
                  className="h-full bg-[#00FF41] rounded transition-all duration-500"
                  style={{
                    width: '78%',
                    boxShadow: '0 0 10px #00FF41'
                  }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[#00FF41] text-sm mb-2">
                <span>PATTERN RECOGNITION</span>
                <span>91%</span>
              </div>
              <div className="h-2 bg-[#00FF4120] rounded overflow-hidden">
                <div
                  className="h-full bg-[#00FF41] rounded transition-all duration-500"
                  style={{
                    width: '91%',
                    boxShadow: '0 0 10px #00FF41'
                  }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[#00FF41] text-sm mb-2">
                <span>CONFIG. OPTIMIZING ALGORITHMS</span>
                <span className="pulse-glow">PROCESSING...</span>
              </div>
              <div className="h-2 bg-[#00FF4120] rounded overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00FF41] to-[#66FF66] rounded animate-pulse"
                  style={{
                    width: '45%',
                    boxShadow: '0 0 10px #00FF41'
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#00FF4110] border border-[#00FF41] rounded">
            <p className="text-[#00FF41] text-sm">
              <span className="font-bold">SYSTEM STATUS:</span> Online |
              <span className="ml-2">CPU: 34%</span> |
              <span className="ml-2">Memory: 67%</span> |
              <span className="ml-2 cyber-glow">AI Confidence: 89%</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
