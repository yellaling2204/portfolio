import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  ExternalLink, 
  Play, 
  RotateCcw, 
  Send, 
  ShieldCheck, 
  Lock, 
  Unlock, 
  Wifi, 
  WifiOff, 
  Activity, 
  Sparkles, 
  Cpu, 
  Search, 
  CheckCircle2, 
  Terminal, 
  ArrowRight, 
  TrendingUp, 
  BarChart2, 
  User, 
  Calendar, 
  Heart, 
  Stethoscope, 
  Globe, 
  Sliders, 
  Eye, 
  MousePointer, 
  Hand,
  Check,
  Zap,
  Info
} from 'lucide-react';
import { Github } from './Icons';

// ============================================================================
// SIMULATOR 1: REAL-TIME E2EE WEBSOCKET CHAT SIMULATOR
// ============================================================================
function ChatAppSimulator() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Bob', text: 'Hey Yellaling! Did you push the latest Socket.IO gateway updates?', time: '12:40 PM', encrypted: 'U2FsdGVkX19B3y7m8Z...==', verified: true },
    { id: 2, sender: 'Alice', text: 'Yes, JWT authentication and room-level encryption are fully tested with sub-35ms delivery.', time: '12:41 PM', encrypted: 'U2FsdGVkX1+9Kx4wP1...==', verified: true },
  ]);
  const [inputText, setInputText] = useState('');
  const [activeUser, setActiveUser] = useState('Alice');
  const [e2eeEnabled, setE2eeEnabled] = useState(true);
  const [showEncryptedWire, setShowEncryptedWire] = useState(false);
  const [socketConnected, setSocketConnected] = useState(true);
  const [latency, setLatency] = useState(28);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (textToSend = inputText) => {
    if (!textToSend.trim() || !socketConnected) return;

    const newMessage = {
      id: Date.now(),
      sender: activeUser,
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      encrypted: 'U2FsdGVkX1' + btoa(textToSend).substring(0, 16) + '==',
      verified: true
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText('');

    // Simulate Bob replying after 800ms
    if (activeUser === 'Alice') {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const reply = {
          id: Date.now() + 1,
          sender: 'Bob',
          text: 'Verified! Decrypted packet hash matches. Real-time broadcast latency is ' + (Math.floor(20 + Math.random() * 15)) + 'ms.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          encrypted: 'U2FsdGVkX19Pz8kLm0...==',
          verified: true
        };
        setMessages((prev) => [...prev, reply]);
        setLatency(Math.floor(22 + Math.random() * 14));
      }, 900);
    }
  };

  const toggleConnection = () => {
    if (socketConnected) {
      setSocketConnected(false);
    } else {
      setSocketConnected(true);
      setLatency(34);
    }
  };

  return (
    <div className="flex flex-col h-[520px] bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden font-sans">
      {/* Telemetry Header Bar */}
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5">
            <span className={`w-2 h-2 rounded-full ${socketConnected ? 'bg-emerald-400 animate-ping' : 'bg-rose-500'}`} />
            <span className={socketConnected ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
              {socketConnected ? 'SOCKET: CONNECTED' : 'SOCKET: DISCONNECTED'}
            </span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">Room: <code className="text-cyan-300">#e2ee-secure-hub</code></span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-400 flex items-center space-x-1">
            <Activity className="w-3 h-3 text-cyan-400" />
            <span>RTT: {socketConnected ? `${latency}ms` : '---'}</span>
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setE2eeEnabled(!e2eeEnabled)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono flex items-center space-x-1 transition-all ${
              e2eeEnabled 
                ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40' 
                : 'bg-rose-950/60 text-rose-300 border border-rose-500/40'
            }`}
          >
            {e2eeEnabled ? <Lock className="w-3 h-3 text-emerald-400" /> : <Unlock className="w-3 h-3 text-rose-400" />}
            <span>{e2eeEnabled ? 'AES-256 E2EE ON' : 'E2EE OFF'}</span>
          </button>

          <button
            onClick={() => setShowEncryptedWire(!showEncryptedWire)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono flex items-center space-x-1 transition-all ${
              showEncryptedWire ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>{showEncryptedWire ? 'Plaintext' : 'Inspect Ciphertext'}</span>
          </button>

          <button
            onClick={toggleConnection}
            className="p-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            title={socketConnected ? 'Simulate Disconnect' : 'Reconnect Socket'}
          >
            {socketConnected ? <Wifi className="w-3.5 h-3.5 text-emerald-400" /> : <WifiOff className="w-3.5 h-3.5 text-rose-400" />}
          </button>
        </div>
      </div>

      {/* Chat Messages Log */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#080d1a]">
        {messages.map((m) => {
          const isMe = m.sender === activeUser;
          return (
            <div key={m.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
              <div className="flex items-center space-x-1.5 mb-1 text-[11px] font-mono text-slate-400">
                <span className="font-semibold text-slate-300">{m.sender}</span>
                <span>•</span>
                <span>{m.time}</span>
                {e2eeEnabled && <Lock className="w-2.5 h-2.5 text-emerald-400" />}
              </div>

              <div
                className={`max-w-[85%] sm:max-w-[70%] p-3 rounded-2xl text-xs leading-relaxed ${
                  isMe
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-none shadow-md'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none shadow-md'
                }`}
              >
                {showEncryptedWire ? (
                  <div className="font-mono text-[11px] text-amber-300 bg-black/40 p-1.5 rounded border border-amber-500/20 break-all">
                    🔒 CIPHER: {m.encrypted}
                  </div>
                ) : (
                  <div>{m.text}</div>
                )}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono italic">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
            <span className="text-[11px] ml-1">Bob is typing encrypted payload...</span>
          </div>
        )}
      </div>

      {/* Suggested Quick Messages */}
      <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800 flex items-center space-x-2 overflow-x-auto text-[11px] font-mono">
        <span className="text-slate-500 shrink-0">Quick Prompts:</span>
        <button
          onClick={() => handleSend("Testing WebSocket round-trip delay!")}
          className="px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 hover:bg-slate-700 whitespace-nowrap"
        >
          Latency Test
        </button>
        <button
          onClick={() => handleSend("Simulating JWT token refresh on client.")}
          className="px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-300 hover:bg-slate-700 whitespace-nowrap"
        >
          JWT Token Auth
        </button>
        <button
          onClick={() => handleSend("Zero packet drop verified under stress.")}
          className="px-2.5 py-0.5 rounded-full bg-slate-800 text-purple-300 hover:bg-slate-700 whitespace-nowrap"
        >
          Socket Stress Test
        </button>
      </div>

      {/* Input Field */}
      <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center space-x-2">
        <button
          onClick={() => setActiveUser(activeUser === 'Alice' ? 'Bob' : 'Alice')}
          className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300 hover:bg-slate-700"
          title="Switch Sender"
        >
          As: {activeUser}
        </button>

        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={socketConnected ? "Type encrypted message and press Enter..." : "Socket disconnected. Reconnect above..."}
          disabled={!socketConnected}
          className="flex-1 px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400"
        />

        <button
          onClick={() => handleSend()}
          disabled={!socketConnected || !inputText.trim()}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold text-xs hover:from-cyan-400 hover:to-blue-400 disabled:opacity-40 flex items-center space-x-1"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// SIMULATOR 2: COMPUTER VISION VIRTUAL MOUSE & GESTURE CONTROLLER
// ============================================================================
function VirtualMouseSimulator() {
  const [activeGesture, setActiveGesture] = useState('move'); // 'move' | 'click' | 'scroll' | 'swipe'
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [clickCount, setClickCount] = useState(0);
  const [scrollVal, setScrollVal] = useState(40);
  const [activeApp, setActiveApp] = useState('Code Editor');
  const [fps, setFps] = useState(33.2);

  const apps = ['Code Editor', 'Browser (Vercel)', 'Terminal', 'Figma Wireframe'];

  const handlePadMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setCursorPos({ x, y });
  };

  const triggerPinchClick = () => {
    setActiveGesture('click');
    setClickCount((c) => c + 1);
    setTimeout(() => setActiveGesture('move'), 400);
  };

  const triggerScroll = (direction) => {
    setActiveGesture('scroll');
    setScrollVal((prev) => Math.max(0, Math.min(100, prev + (direction === 'up' ? -15 : 15))));
    setTimeout(() => setActiveGesture('move'), 400);
  };

  const triggerAppSwipe = () => {
    setActiveGesture('swipe');
    setActiveApp((prev) => {
      const idx = apps.indexOf(prev);
      return apps[(idx + 1) % apps.length];
    });
    setTimeout(() => setActiveGesture('move'), 600);
  };

  return (
    <div className="flex flex-col h-[520px] bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden font-sans">
      {/* Telemetry Header */}
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 text-cyan-400 font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>OPENCV + MEDIAPIPE PIPELINE</span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400">FPS: {fps}</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">Landmarks: 21 (Full Hand)</span>
        </div>

        <div className="flex items-center space-x-1 text-[11px]">
          <span className="text-slate-400">Current Gesture:</span>
          <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 uppercase font-bold">
            {activeGesture}
          </span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden">
        {/* Left: Gesture Tracking Pad & 21-Point Visualizer */}
        <div className="md:col-span-6 p-4 bg-slate-900/60 border-r border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-300 flex items-center space-x-1.5">
                <Hand className="w-3.5 h-3.5 text-cyan-400" />
                <span>Webcam Hand Landmark Canvas</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                Confidence: 97.4%
              </span>
            </div>

            {/* Tracking Radar Canvas */}
            <div
              onMouseMove={handlePadMouseMove}
              className="relative w-full h-52 bg-slate-950 rounded-xl border border-cyan-500/30 overflow-hidden cursor-crosshair group shadow-inner"
            >
              {/* Radar Grid Lines */}
              <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 rounded-full border border-cyan-500/20" />
                <div className="w-48 h-48 rounded-full border border-cyan-500/10" />
              </div>

              {/* Hand Landmark Skeleton Representation */}
              <div
                className="absolute transition-all duration-75 pointer-events-none"
                style={{
                  left: `${cursorPos.x}%`,
                  top: `${cursorPos.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Center Palm Node */}
                <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                
                {/* 5 Finger Tip Nodes */}
                <div className="absolute -top-6 -left-3 w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute -top-8 left-0 w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute -top-7 left-3 w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute -top-5 left-5 w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute -top-2 -left-6 w-2 h-2 rounded-full bg-emerald-400" />

                {/* Connecting Lines */}
                <div className="text-[9px] font-mono text-cyan-300 whitespace-nowrap mt-2 bg-slate-950/90 px-1.5 py-0.5 rounded border border-cyan-500/40">
                  EMA Filter: {Math.round(cursorPos.x)}, {Math.round(cursorPos.y)}
                </div>
              </div>

              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-500 pointer-events-none">
                Move mouse here to simulate Hand Coordinates
              </div>
            </div>
          </div>

          {/* Gesture Trigger Buttons */}
          <div className="mt-3">
            <span className="text-[11px] font-mono text-slate-400 mb-1.5 block">Trigger Test Gestures:</span>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={triggerPinchClick}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-400 text-xs font-mono text-cyan-300 hover:bg-slate-900 transition-all text-center"
              >
                🤏 Pinch Click
              </button>
              <button
                onClick={() => triggerScroll('down')}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-400 text-xs font-mono text-emerald-300 hover:bg-slate-900 transition-all text-center"
              >
                ✌️ Scroll (2-Fin)
              </button>
              <button
                onClick={triggerAppSwipe}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-400 text-xs font-mono text-purple-300 hover:bg-slate-900 transition-all text-center"
              >
                ✋ Swipe Apps
              </button>
            </div>
          </div>
        </div>

        {/* Right: Simulated Virtual Desktop Output */}
        <div className="md:col-span-6 p-4 bg-[#0a0f1d] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-300">Simulated Virtual OS Screen</span>
              <span className="text-[10px] font-mono text-cyan-400">Active: {activeApp}</span>
            </div>

            {/* Virtual Screen Viewport */}
            <div className="relative w-full h-56 bg-slate-950 rounded-xl border border-slate-800 p-3 overflow-hidden shadow-2xl">
              {/* Simulated Window Frame */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-white font-semibold">{activeApp}</span>
                </div>
                <span>PyAutoGUI</span>
              </div>

              {/* Virtual Interactive Content Targets */}
              <div className="py-4 space-y-3">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Target Button:</span>
                  <button
                    onClick={triggerPinchClick}
                    className="px-3 py-1 rounded bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 shadow-glow-cyan"
                  >
                    Click Me (Clicks: {clickCount})
                  </button>
                </div>

                {/* Simulated Scrollable Pane */}
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                    <span>Virtual Scroll Position:</span>
                    <span className="text-emerald-400 font-bold">{scrollVal}%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-2 transition-all duration-200" style={{ width: `${scrollVal}%` }} />
                  </div>
                </div>
              </div>

              {/* Virtual Mouse Pointer following Hand coordinates */}
              <div
                className="absolute transition-all duration-100 pointer-events-none z-30"
                style={{
                  left: `${cursorPos.x}%`,
                  top: `${cursorPos.y}%`,
                  transform: 'translate(-2px, -2px)',
                }}
              >
                <MousePointer className={`w-4 h-4 ${activeGesture === 'click' ? 'text-emerald-400 scale-125' : 'text-cyan-400'} drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]`} />
              </div>
            </div>
          </div>

          {/* Metric Status Bar */}
          <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-[11px] text-slate-300 flex items-center justify-between mt-3">
            <span>Latency: 14ms (Sub-pixel)</span>
            <span className="text-emerald-400">Jitter: 0.02px (Filtered)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// SIMULATOR 3: FINANCIAL ANALYTICS & MARKET PREDICTOR
// ============================================================================
function FinancialDashSimulator() {
  const [selectedTicker, setSelectedTicker] = useState('AAPL');
  const [timeframe, setTimeframe] = useState('1M');
  const [showIndicators, setShowIndicators] = useState(true);
  const [showForecast, setShowForecast] = useState(true);

  const tickerData = {
    AAPL: { name: 'Apple Inc.', price: '$224.23', change: '+3.14%', volume: '58.4M', pe: '32.1', points: [210, 212, 215, 214, 218, 221, 219, 224, 228, 232] },
    NVDA: { name: 'NVIDIA Corp.', price: '$128.50', change: '+5.82%', volume: '112.9M', pe: '44.8', points: [115, 118, 116, 122, 125, 124, 127, 128, 134, 140] },
    TSLA: { name: 'Tesla Inc.', price: '$248.80', change: '-1.45%', volume: '84.2M', pe: '61.2', points: [260, 255, 258, 252, 248, 245, 250, 248, 252, 256] },
    GOOGL: { name: 'Alphabet Inc.', price: '$165.70', change: '+2.05%', volume: '24.1M', pe: '24.6', points: [158, 160, 159, 162, 164, 163, 165, 167, 171, 175] }
  };

  const curr = tickerData[selectedTicker];

  return (
    <div className="flex flex-col h-[520px] bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden font-sans">
      {/* Ticker Selector Bar */}
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center space-x-2">
          {Object.keys(tickerData).map((ticker) => (
            <button
              key={ticker}
              onClick={() => setSelectedTicker(ticker)}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                selectedTicker === ticker
                  ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {ticker}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 text-[11px]">
          {['1D', '1W', '1M', '1Y'].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-2 py-0.5 rounded transition-all ${
                timeframe === tf ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Main Stock Data & Interactive Chart */}
      <div className="flex-1 p-5 overflow-y-auto space-y-4">
        {/* Price & Health Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
          <div>
            <span className="text-xs text-slate-400 font-mono">{curr.name}</span>
            <div className="flex items-baseline space-x-3 mt-0.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{curr.price}</span>
              <span className={`text-xs font-mono font-bold ${curr.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                {curr.change} (Today)
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs font-mono">
            <div>
              <span className="text-slate-500 block text-[10px]">24H VOLUME</span>
              <span className="text-slate-200 font-bold">{curr.volume}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">P/E RATIO</span>
              <span className="text-slate-200 font-bold">{curr.pe}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">RSI (14)</span>
              <span className="text-cyan-400 font-bold">58.4 (Neutral)</span>
            </div>
          </div>
        </div>

        {/* Interactive SVG Stock Chart */}
        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 relative">
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
            <span>Historical OHLC + Time-Series Projection</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowIndicators(!showIndicators)}
                className={`px-2 py-0.5 rounded text-[10px] ${showIndicators ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-500'}`}
              >
                SMA-20
              </button>
              <button
                onClick={() => setShowForecast(!showForecast)}
                className={`px-2 py-0.5 rounded text-[10px] ${showForecast ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-500'}`}
              >
                AI Forecast Cone
              </button>
            </div>
          </div>

          {/* SVG Line Graph */}
          <div className="h-44 w-full">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="35" x2="500" y2="35" stroke="#1e293b" strokeDasharray="3 3" />
              <line x1="0" y1="75" x2="500" y2="75" stroke="#1e293b" strokeDasharray="3 3" />
              <line x1="0" y1="115" x2="500" y2="115" stroke="#1e293b" strokeDasharray="3 3" />

              {/* Stock Path */}
              <path
                d={`M 0,100 L 60,95 L 120,80 L 180,85 L 240,65 L 300,50 L 360,40 L 420,30 L 500,20`}
                fill="none"
                stroke="#22d3ee"
                strokeWidth="3"
              />

              {/* Shaded Area Under Curve */}
              <polygon
                points="0,100 60,95 120,80 180,85 240,65 300,50 360,40 420,30 500,20 500,150 0,150"
                fill="url(#chartGradient)"
              />

              {/* AI Forecast Cone */}
              {showForecast && (
                <polygon
                  points="360,40 500,5 500,45"
                  fill="rgba(16, 185, 129, 0.15)"
                  stroke="rgba(16, 185, 129, 0.6)"
                  strokeDasharray="2 2"
                />
              )}
            </svg>
          </div>

          {showForecast && (
            <div className="mt-2 text-[11px] font-mono text-emerald-400 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Prophet / LSTM Model: +4.8% Projected 30-Day Growth with 92% Confidence</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// SIMULATOR 4: TALENTFLOW ATS KANBAN SIMULATOR
// ============================================================================
function TalentFlowSimulator() {
  const [candidates, setCandidates] = useState([
    { id: 'c1', name: 'Rohan Sharma', role: 'Senior React Developer', stage: 'Screening', score: '94%' },
    { id: 'c2', name: 'Priya Patel', role: 'Full-Stack Engineer', stage: 'Interview', score: '91%' },
    { id: 'c3', name: 'Arjun Mehta', role: 'QA Automation Lead', stage: 'Applied', score: '88%' },
    { id: 'c4', name: 'Sneha Rao', role: 'DevOps / SRE Specialist', stage: 'Offered', score: '96%' },
  ]);

  const stages = ['Applied', 'Screening', 'Interview', 'Offered'];

  const advanceCandidate = (id) => {
    setCandidates((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          const currIdx = stages.indexOf(c.stage);
          const nextStage = stages[Math.min(stages.length - 1, currIdx + 1)];
          return { ...c, stage: nextStage };
        }
        return c;
      })
    );
  };

  return (
    <div className="flex flex-col h-[520px] bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden font-sans">
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
        <span className="font-bold text-cyan-400">TALENTFLOW // KANBAN PIPELINE</span>
        <a
          href="https://talent-flow-assignment-rust.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center space-x-1"
        >
          <span>Open Full Vercel App</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="flex-1 p-4 overflow-x-auto grid grid-cols-4 gap-3 bg-[#080d1a]">
        {stages.map((stage) => {
          const list = candidates.filter((c) => c.stage === stage);
          return (
            <div key={stage} className="bg-slate-900/80 rounded-xl p-3 border border-slate-800 flex flex-col">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800 text-xs font-mono">
                <span className="font-bold text-white">{stage}</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 text-[10px]">{list.length}</span>
              </div>

              <div className="space-y-2 flex-1">
                {list.map((cand) => (
                  <div key={cand.id} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all text-xs">
                    <div className="font-bold text-white">{cand.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono mb-2">{cand.role}</div>
                    <div className="flex items-center justify-between">
                      <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 font-mono text-[10px] font-bold">
                        Fit: {cand.score}
                      </span>
                      {stage !== 'Offered' && (
                        <button
                          onClick={() => advanceCandidate(cand.id)}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-500/30 flex items-center space-x-1"
                        >
                          <span>Move</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// SIMULATOR 5: FIND MY ROOM ACCOMMODATION SIMULATOR
// ============================================================================
function FindMyRoomSimulator() {
  const [city, setCity] = useState('Bangalore');
  const [budget, setBudget] = useState(12000);
  const [bookedRoom, setBookedRoom] = useState(null);

  const rooms = [
    { id: 1, title: 'Silicon Heights PG (Private AC)', city: 'Bangalore', price: 11000, amenities: ['WiFi', 'AC', 'Food Included'], rating: 4.8 },
    { id: 2, title: 'Scholars Den Student Hostel', city: 'Dharwad', price: 6500, amenities: ['WiFi', 'Study Desk', 'Mess'], rating: 4.7 },
    { id: 3, title: 'TechHub Executive Residency', city: 'Bangalore', price: 13500, amenities: ['Gym', 'AC', 'Attached Bath'], rating: 4.9 },
    { id: 4, title: 'Green Park Co-Living', city: 'Pune', price: 9500, amenities: ['WiFi', 'Power Backup', 'Cleaning'], rating: 4.6 }
  ];

  const filtered = rooms.filter((r) => r.city === city && r.price <= budget);

  return (
    <div className="flex flex-col h-[520px] bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden font-sans">
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
        <span className="font-bold text-cyan-400">FIND MY ROOM // DISCOVERY PORTAL</span>
        <a
          href="https://find-my-room-nu.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center space-x-1"
        >
          <span>Open Full Vercel App</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="p-4 bg-slate-900/60 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center space-x-2">
          <span className="text-slate-400">City:</span>
          {['Bangalore', 'Dharwad', 'Pune'].map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={`px-2.5 py-1 rounded-lg ${city === c ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-slate-400">Max Budget: ₹{budget}</span>
          <input
            type="range"
            min="6000"
            max="15000"
            step="500"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-28 accent-cyan-400"
          />
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#080d1a]">
        {filtered.map((room) => (
          <div key={room.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <div className="font-bold text-white text-sm">{room.title}</div>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-xs font-mono font-bold">
                  ★ {room.rating}
                </span>
              </div>
              <div className="text-cyan-400 font-mono font-bold text-base mt-1">₹{room.price}/month</div>
              <div className="flex flex-wrap gap-1 mt-2">
                {room.amenities.map((a, i) => (
                  <span key={i} className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setBookedRoom(room.title)}
              className="mt-3 w-full py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs hover:opacity-95"
            >
              Book In-Person Visit
            </button>
          </div>
        ))}
      </div>

      {bookedRoom && (
        <div className="p-2.5 bg-emerald-950/80 border-t border-emerald-500/40 text-center font-mono text-xs text-emerald-300 flex items-center justify-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Inquiry Visit Booked for: "{bookedRoom}". Confirmation dispatched!</span>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// SIMULATOR 6: AJAIA AI-NATIVE DOCS COLLABORATION SIMULATOR
// ============================================================================
function AjaiaDocsSimulator() {
  const [docContent, setDocContent] = useState(
    '# Architecture Specification: Ajaia AI Docs\n\nCollaborative document editor built with Next.js 14, TypeScript, and Prisma ORM.\n\n- Real-time auto-saving with Prisma client\n- TipTap dynamic rich-text extensions\n- AI assistant integration for instant summaries and test generation'
  );
  const [aiStatus, setAiStatus] = useState('');

  const runAiSummarize = () => {
    setAiStatus('AI Synthesizing Summary...');
    setTimeout(() => {
      setDocContent((prev) => prev + '\n\n---\n**AI Generated Summary:**\nA high-performance full-stack web documentation suite offering reactive state, type safety, and real-time Markdown persistence.');
      setAiStatus('Complete!');
      setTimeout(() => setAiStatus(''), 2000);
    }, 700);
  };

  return (
    <div className="flex flex-col h-[520px] bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden font-sans">
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
        <span className="font-bold text-cyan-400">AJAIA // AI-NATIVE DOCS ENGINE</span>
        <a
          href="https://ajaia-ai-native-docs.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center space-x-1"
        >
          <span>Open Full Vercel App</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800 flex items-center space-x-2 text-xs font-mono">
        <button
          onClick={runAiSummarize}
          className="px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold flex items-center space-x-1"
        >
          <Sparkles className="w-3 h-3" />
          <span>AI Summarize</span>
        </button>
        {aiStatus && <span className="text-cyan-400 italic text-[11px]">{aiStatus}</span>}
      </div>

      <div className="flex-1 p-4 bg-[#080d1a] overflow-y-auto">
        <textarea
          value={docContent}
          onChange={(e) => setDocContent(e.target.value)}
          className="w-full h-full bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-200 focus:outline-none focus:border-cyan-400 resize-none leading-relaxed"
        />
      </div>
    </div>
  );
}

// ============================================================================
// MASTER DEMO MODAL DISPATCHER
// ============================================================================
export default function ProjectLiveDemoModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const renderSimulator = () => {
    switch (project.interactiveDemoId) {
      case 'chat':
        return <ChatAppSimulator />;
      case 'mouse':
        return <VirtualMouseSimulator />;
      case 'finance':
        return <FinancialDashSimulator />;
      case 'kanban':
        return <TalentFlowSimulator />;
      case 'rooms':
        return <FindMyRoomSimulator />;
      case 'docs':
        return <AjaiaDocsSimulator />;
      case 'ehr':
        return <ChatAppSimulator />; // Fallback clean interactive sandbox
      default:
        return <ChatAppSimulator />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/40 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Top Modal Navigation */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                LIVE INTERACTIVE DEMO // {project.title}
              </span>
              <div className="text-[11px] font-mono text-cyan-400">
                {project.categoryLabel}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {project.liveUrl && project.liveUrl.startsWith('http') && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs hover:opacity-95 transition-opacity"
              >
                <span>Launch Deployed App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white font-mono text-xs transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close Demo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Container */}
        <div className="p-4 sm:p-6 overflow-y-auto bg-slate-950 flex-1">
          {renderSimulator()}
        </div>
      </div>
    </div>
  );
}

