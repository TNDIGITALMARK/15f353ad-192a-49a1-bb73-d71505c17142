"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function NetworkToolsPage() {
  const [scanResults] = useState([
    { ip: '192.168.1.1', status: 'ONLINE', ports: '22, 80, 443', vulnerability: 'LOW' },
    { ip: '192.168.1.12', status: 'ONLINE', ports: '22, 3306, 8080', vulnerability: 'MEDIUM' },
    { ip: '192.168.1.45', status: 'ONLINE', ports: '22, 80, 443, 3389', vulnerability: 'HIGH' },
    { ip: '192.168.1.78', status: 'ONLINE', ports: '80, 443', vulnerability: 'LOW' },
    { ip: '192.168.1.102', status: 'OFFLINE', ports: '-', vulnerability: '-' },
    { ip: '192.168.1.156', status: 'ONLINE', ports: '22, 23, 80', vulnerability: 'MEDIUM' },
    { ip: '192.168.1.203', status: 'ONLINE', ports: '443, 8443', vulnerability: 'LOW' },
    { ip: '192.168.1.254', status: 'ONLINE', ports: '22, 80, 443, 3306', vulnerability: 'CRITICAL' },
  ]);

  const [activeScans] = useState([
    { target: '192.168.1.0/24', type: 'PORT_SCAN', progress: 67 },
    { target: 'example.com', type: 'VULN_SCAN', progress: 34 },
    { target: '10.0.0.0/16', type: 'NETWORK_MAP', progress: 89 },
  ]);

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
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all hover:border-l-2 hover:border-[#00FF41]"
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
            href="/chat-ai"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all hover:border-l-2 hover:border-[#00FF41]"
          >
            &gt; Chat AI
          </Link>

          <Link
            href="/network-tools"
            className="block text-[#00FF41] text-sm py-2 px-3 hover:bg-[#00FF4110] transition-all border-l-2 border-[#00FF41] cyber-glow"
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
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#00FF41] mb-2 cyber-glow-strong">
            NETWORK ANALYSIS TOOLS
          </h2>
          <p className="text-[#00FF41] text-sm opacity-80">
            Advanced Network Scanning & Vulnerability Assessment
          </p>
        </div>

        {/* Scan Control Panel */}
        <div className="terminal-window rounded p-6">
          <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
            &gt; INITIATE SCAN
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-[#00FF41] text-sm mb-2 block">TARGET</label>
              <input
                type="text"
                placeholder="192.168.1.0/24"
                className="w-full bg-black border border-[#00FF41] rounded px-4 py-2 text-[#00FF41] placeholder-[#00FF4150] focus:outline-none focus:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all"
              />
            </div>

            <div>
              <label className="text-[#00FF41] text-sm mb-2 block">SCAN TYPE</label>
              <select className="w-full bg-black border border-[#00FF41] rounded px-4 py-2 text-[#00FF41] focus:outline-none focus:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all">
                <option>PORT_SCAN</option>
                <option>VULN_SCAN</option>
                <option>NETWORK_MAP</option>
                <option>FULL_AUDIT</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="cyber-button w-full">
                START SCAN
              </button>
            </div>
          </div>
        </div>

        {/* Active Scans */}
        <div className="terminal-window rounded p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#00FF41] pulse-glow"></div>
            <h3 className="text-[#00FF41] font-bold tracking-wider">
              &gt; ACTIVE SCANS
            </h3>
          </div>

          <div className="space-y-4">
            {activeScans.map((scan, index) => (
              <div key={index} className="bg-[#00FF4105] border border-[#00FF41] rounded p-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="text-[#00FF41] font-bold text-sm">{scan.target}</div>
                    <div className="text-[#66FF66] text-xs">{scan.type}</div>
                  </div>
                  <div className="text-[#00FF41] text-sm font-bold">{scan.progress}%</div>
                </div>
                <div className="h-2 bg-[#00FF4120] rounded overflow-hidden">
                  <div
                    className="h-full bg-[#00FF41] rounded transition-all duration-500 animate-pulse"
                    style={{
                      width: `${scan.progress}%`,
                      boxShadow: '0 0 10px #00FF41'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scan Results Table */}
        <div className="terminal-window rounded p-6">
          <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
            &gt; SCAN RESULTS
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full font-mono text-sm">
              <thead>
                <tr className="border-b border-[#00FF41]">
                  <th className="text-left text-[#00FF41] py-3 px-4">IP ADDRESS</th>
                  <th className="text-left text-[#00FF41] py-3 px-4">STATUS</th>
                  <th className="text-left text-[#00FF41] py-3 px-4">OPEN PORTS</th>
                  <th className="text-left text-[#00FF41] py-3 px-4">VULNERABILITY</th>
                  <th className="text-left text-[#00FF41] py-3 px-4">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {scanResults.map((result, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#00FF4130] hover:bg-[#00FF4110] transition-all"
                  >
                    <td className="text-[#00FF41] py-3 px-4">{result.ip}</td>
                    <td className="py-3 px-4">
                      <span className={`${
                        result.status === 'ONLINE'
                          ? 'text-[#66FF66]'
                          : 'text-[#FF4141]'
                      }`}>
                        {result.status}
                      </span>
                    </td>
                    <td className="text-[#66FF66] py-3 px-4">{result.ports}</td>
                    <td className="py-3 px-4">
                      <span className={`font-bold ${
                        result.vulnerability === 'LOW' ? 'text-[#66FF66]' :
                        result.vulnerability === 'MEDIUM' ? 'text-[#FFD700]' :
                        result.vulnerability === 'HIGH' ? 'text-[#FF8800]' :
                        result.vulnerability === 'CRITICAL' ? 'text-[#FF0000] pulse-glow' :
                        'text-[#00FF41]'
                      }`}>
                        {result.vulnerability}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-[#00FF41] hover:text-[#66FF66] transition-all text-xs border border-[#00FF41] px-2 py-1 rounded hover:bg-[#00FF4120]">
                        ANALYZE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Threat Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Detected Vulnerabilities */}
          <div className="terminal-window rounded p-6">
            <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
              &gt; DETECTED VULNERABILITIES
            </h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="p-3 bg-[#FF000010] border-l-2 border-[#FF0000]">
                <div className="flex justify-between mb-1">
                  <span className="text-[#FF0000] font-bold">CRITICAL</span>
                  <span className="text-[#FF0000]">192.168.1.254</span>
                </div>
                <div className="text-[#00FF41] text-xs">
                  Open MySQL port with weak authentication
                </div>
              </div>

              <div className="p-3 bg-[#FF880010] border-l-2 border-[#FF8800]">
                <div className="flex justify-between mb-1">
                  <span className="text-[#FF8800] font-bold">HIGH</span>
                  <span className="text-[#FF8800]">192.168.1.45</span>
                </div>
                <div className="text-[#00FF41] text-xs">
                  RDP exposed to public network
                </div>
              </div>

              <div className="p-3 bg-[#FFD70010] border-l-2 border-[#FFD700]">
                <div className="flex justify-between mb-1">
                  <span className="text-[#FFD700] font-bold">MEDIUM</span>
                  <span className="text-[#FFD700]">192.168.1.12</span>
                </div>
                <div className="text-[#00FF41] text-xs">
                  Outdated SSH version detected
                </div>
              </div>
            </div>
          </div>

          {/* Network Statistics */}
          <div className="terminal-window rounded p-6">
            <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
              &gt; NETWORK STATISTICS
            </h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between text-[#00FF41]">
                <span>Total Hosts:</span>
                <span className="font-bold cyber-glow">254</span>
              </div>
              <div className="flex justify-between text-[#00FF41]">
                <span>Active Hosts:</span>
                <span className="font-bold text-[#66FF66]">187</span>
              </div>
              <div className="flex justify-between text-[#00FF41]">
                <span>Open Ports:</span>
                <span className="font-bold text-[#66FF66]">1,247</span>
              </div>
              <div className="flex justify-between text-[#00FF41]">
                <span>Vulnerabilities:</span>
                <span className="font-bold text-[#FF8800]">23</span>
              </div>
              <div className="flex justify-between text-[#00FF41]">
                <span>Critical Issues:</span>
                <span className="font-bold text-[#FF0000] pulse-glow">3</span>
              </div>
              <div className="flex justify-between text-[#00FF41]">
                <span>Last Scan:</span>
                <span className="text-[#66FF66]">2 min ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="terminal-window rounded p-6">
          <h3 className="text-[#00FF41] font-bold tracking-wider mb-4">
            &gt; QUICK ACTIONS
          </h3>
          <div className="flex flex-wrap gap-4">
            <button className="cyber-button">
              FULL NETWORK SCAN
            </button>
            <button className="cyber-button">
              EXPORT RESULTS
            </button>
            <button className="cyber-button">
              THREAT REPORT
            </button>
            <button className="cyber-button">
              SCHEDULE SCAN
            </button>
            <button className="cyber-button">
              CONFIGURE ALERTS
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
