import React, { useState, useEffect } from 'react';
import { X, Calculator, CloudSun, CheckSquare, Timer, Gamepad2, RotateCcw, Play, Pause, Plus, Trash2 } from 'lucide-react';

interface MiniAppsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialApp?: 'calc' | 'weather' | 'tasks' | 'timer' | 'game';
}

export const MiniAppsModal: React.FC<MiniAppsModalProps> = ({
  isOpen,
  onClose,
  initialApp = 'calc',
}) => {
  const [activeApp, setActiveApp] = useState<'calc' | 'weather' | 'tasks' | 'timer' | 'game'>(initialApp);

  useEffect(() => {
    if (initialApp) setActiveApp(initialApp);
  }, [initialApp]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0b0f19] border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#07090e]/80">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
            <div>
              <h2 className="text-base font-semibold text-white tracking-wide">
                JavaScript Mini-Projects Live Playground
              </h2>
              <p className="text-xs text-slate-400">
                Pure Vanilla JavaScript DOM & Logic Implementation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Close interactive modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-slate-800/80 bg-[#0d1220]/60 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveApp('calc')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeApp === 'calc'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-medium'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            Calculator
          </button>
          <button
            onClick={() => setActiveApp('weather')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeApp === 'weather'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-medium'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <CloudSun className="w-3.5 h-3.5" />
            Weather Widget
          </button>
          <button
            onClick={() => setActiveApp('tasks')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeApp === 'tasks'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-medium'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            Task Board
          </button>
          <button
            onClick={() => setActiveApp('timer')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeApp === 'timer'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-medium'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Timer className="w-3.5 h-3.5" />
            Stopwatch
          </button>
          <button
            onClick={() => setActiveApp('game')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeApp === 'game'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-medium'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            Number Guess Game
          </button>
        </div>

        {/* Playground Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {activeApp === 'calc' && <CalculatorApp />}
          {activeApp === 'weather' && <WeatherApp />}
          {activeApp === 'tasks' && <TasksApp />}
          {activeApp === 'timer' && <StopwatchApp />}
          {activeApp === 'game' && <GuessGameApp />}
        </div>
      </div>
    </div>
  );
};

// 1. Calculator
const CalculatorApp: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleDigit = (digit: string) => {
    setDisplay((prev) => (prev === '0' ? digit : prev + digit));
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const handleCalculate = () => {
    try {
      const fullExpr = equation + display;
      // Safe arithmetic evaluator
      const sanitized = fullExpr.replace(/[^0-9+\-*/.]/g, '');
      // eslint-disable-next-line no-eval
      const result = Function(`'use strict'; return (${sanitized})`)();
      setDisplay(String(Number(result.toFixed(4))));
      setEquation('');
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="max-w-xs mx-auto p-4 rounded-xl bg-[#090d16] border border-slate-800 shadow-xl">
      <div className="text-right p-3 mb-3 bg-[#05070b] rounded-lg border border-slate-800/80">
        <div className="text-xs text-slate-500 min-h-[1rem] font-mono">{equation}</div>
        <div className="text-2xl font-mono text-cyan-400 font-semibold tracking-wider truncate">
          {display}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 text-sm font-mono">
        <button onClick={handleClear} className="col-span-2 p-2.5 rounded bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 font-semibold">AC</button>
        <button onClick={() => setDisplay((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev))} className="p-2.5 rounded bg-slate-800 hover:bg-slate-700">±</button>
        <button onClick={() => handleOperator('/')} className="p-2.5 rounded bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">÷</button>

        {['7', '8', '9'].map((n) => (
          <button key={n} onClick={() => handleDigit(n)} className="p-2.5 rounded bg-slate-850 bg-slate-800/70 hover:bg-slate-700">{n}</button>
        ))}
        <button onClick={() => handleOperator('*')} className="p-2.5 rounded bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">×</button>

        {['4', '5', '6'].map((n) => (
          <button key={n} onClick={() => handleDigit(n)} className="p-2.5 rounded bg-slate-800/70 hover:bg-slate-700">{n}</button>
        ))}
        <button onClick={() => handleOperator('-')} className="p-2.5 rounded bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">−</button>

        {['1', '2', '3'].map((n) => (
          <button key={n} onClick={() => handleDigit(n)} className="p-2.5 rounded bg-slate-800/70 hover:bg-slate-700">{n}</button>
        ))}
        <button onClick={() => handleOperator('+')} className="p-2.5 rounded bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">+</button>

        <button onClick={() => handleDigit('0')} className="col-span-2 p-2.5 rounded bg-slate-800/70 hover:bg-slate-700">0</button>
        <button onClick={() => !display.includes('.') && setDisplay(display + '.')} className="p-2.5 rounded bg-slate-800/70 hover:bg-slate-700">.</button>
        <button onClick={handleCalculate} className="p-2.5 rounded bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400">=</button>
      </div>
    </div>
  );
};

// 2. Weather Widget
const WeatherApp: React.FC = () => {
  const [city, setCity] = useState('Rawalpindi');
  const [activeCity, setActiveCity] = useState('Rawalpindi');

  const weatherData: Record<string, { temp: number; desc: string; humidity: number; wind: number; icon: string }> = {
    'rawalpindi': { temp: 24, desc: 'Clear Night & Pleasant Breeze', humidity: 48, wind: 11, icon: '🌙' },
    'islamabad': { temp: 23, desc: 'Mild & Crisp Breeze', humidity: 52, wind: 9, icon: '✨' },
    'lahore': { temp: 28, desc: 'Partly Cloudy', humidity: 60, wind: 14, icon: '⛅' },
    'karachi': { temp: 29, desc: 'Coastal Humidity & Breeze', humidity: 75, wind: 22, icon: '🌊' },
    'gujrat': { temp: 25, desc: 'Clear Skies', humidity: 50, wind: 10, icon: '☀️' },
  };

  const current = weatherData[activeCity.toLowerCase()] || {
    temp: 24,
    desc: 'Moderate & Clear Conditions',
    humidity: 50,
    wind: 12,
    icon: '🌤️',
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      setActiveCity(city.trim());
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl bg-[#090d16] border border-slate-800">
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city (Rawalpindi, Lahore, Gujrat...)"
          className="flex-1 px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
        />
        <button
          type="submit"
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
        >
          Search
        </button>
      </form>

      <div className="text-center p-6 rounded-xl bg-gradient-to-b from-cyan-950/20 to-purple-950/20 border border-cyan-500/20">
        <div className="text-5xl mb-2">{current.icon}</div>
        <h3 className="text-xl font-bold text-white capitalize">{activeCity}</h3>
        <p className="text-xs text-slate-400 mb-3">{current.desc}</p>
        <div className="text-4xl font-mono font-bold text-cyan-300 mb-6">
          {current.temp}°C
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-xs">
          <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
            <span className="text-slate-400 block mb-1">Humidity</span>
            <span className="font-semibold text-slate-200 font-mono">{current.humidity}%</span>
          </div>
          <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
            <span className="text-slate-400 block mb-1">Wind Speed</span>
            <span className="font-semibold text-slate-200 font-mono">{current.wind} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Task Board
const TasksApp: React.FC = () => {
  const [tasks, setTasks] = useState<{ id: number; text: string; done: boolean }[]>([
    { id: 1, text: 'Review Web Systems lecture notes (BSIT)', done: true },
    { id: 2, text: 'Build responsive luxury watch card component', done: true },
    { id: 3, text: 'Design FoodHub MERN order status schema', done: false },
    { id: 4, text: 'Practice JavaScript asynchronous closures', done: false },
  ]);
  const [input, setInput] = useState('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input.trim(), done: false }]);
    setInput('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl bg-[#090d16] border border-slate-800">
      <form onSubmit={addTask} className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
        />
        <button
          type="submit"
          className="flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          Add
        </button>
      </form>

      <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
        {tasks.map((t) => (
          <div
            key={t.id}
            className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
              t.done
                ? 'bg-slate-900/40 border-slate-800/40 text-slate-500'
                : 'bg-slate-900/80 border-slate-800 text-slate-200'
            }`}
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleTask(t.id)}
                className="w-4 h-4 rounded border-slate-700 bg-slate-800 accent-cyan-500 cursor-pointer"
              />
              <span className={`text-xs truncate ${t.done ? 'line-through' : ''}`}>
                {t.text}
              </span>
            </div>
            <button
              onClick={() => deleteTask(t.id)}
              className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
              title="Delete task"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between">
        <span>{tasks.filter((t) => t.done).length} completed</span>
        <span>{tasks.length} total tasks</span>
      </div>
    </div>
  );
};

// 4. Stopwatch
const StopwatchApp: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 10);
      }, 10);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (ms: number) => {
    const mins = Math.floor(ms / 60000);
    const secs = Math.floor((ms % 60000) / 1000);
    const centis = Math.floor((ms % 1000) / 10);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(centis).padStart(2, '0')}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setLaps([]);
  };

  const handleLap = () => {
    if (isRunning) {
      setLaps([seconds, ...laps]);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl bg-[#090d16] border border-slate-800 text-center">
      <div className="text-4xl sm:text-5xl font-mono font-bold text-cyan-400 tracking-wider mb-6 tabular-nums">
        {formatTime(seconds)}
      </div>

      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-semibold transition-colors ${
            isRunning
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
          }`}
        >
          {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          {isRunning ? 'Pause' : 'Start'}
        </button>

        <button
          onClick={handleLap}
          disabled={!isRunning}
          className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 disabled:opacity-40 transition-colors"
        >
          Lap
        </button>

        <button
          onClick={handleReset}
          className="flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>

      {laps.length > 0 && (
        <div className="max-h-36 overflow-y-auto space-y-1.5 border-t border-slate-800 pt-3 text-xs font-mono text-left">
          {laps.map((lap, index) => (
            <div key={index} className="flex justify-between px-3 py-1 bg-slate-900/60 rounded">
              <span className="text-slate-400">Lap {laps.length - index}</span>
              <span className="text-cyan-300">{formatTime(lap)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// 5. Number Guess Game
const GuessGameApp: React.FC = () => {
  const [secret, setSecret] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('Guess a number between 1 and 100!');
  const [attempts, setAttempts] = useState(0);
  const [won, setWon] = useState(false);

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(guess);
    if (isNaN(num)) return;

    setAttempts((a) => a + 1);
    if (num === secret) {
      setWon(true);
      setFeedback(`🎉 Correct! You guessed ${num} in ${attempts + 1} attempts!`);
    } else if (num < secret) {
      setFeedback(`📉 Too low! Try higher than ${num}`);
    } else {
      setFeedback(`📈 Too high! Try lower than ${num}`);
    }
    setGuess('');
  };

  const restartGame = () => {
    setSecret(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setFeedback('New game started! Guess a number between 1 and 100.');
    setAttempts(0);
    setWon(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl bg-[#090d16] border border-slate-800 text-center">
      <h3 className="text-sm font-semibold text-white mb-2">Number Guessing Challenge</h3>
      <p className="text-xs text-slate-400 mb-6">{feedback}</p>

      {!won ? (
        <form onSubmit={handleGuess} className="flex gap-2 justify-center mb-4">
          <input
            type="number"
            min="1"
            max="100"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="1 - 100"
            className="w-28 px-3 py-2 text-center text-sm rounded-lg bg-slate-900 border border-slate-700 text-white font-mono focus:outline-none focus:border-cyan-400"
          />
          <button
            type="submit"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
          >
            Check
          </button>
        </form>
      ) : (
        <button
          onClick={restartGame}
          className="px-6 py-2 rounded-lg text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors mb-4"
        >
          Play Again
        </button>
      )}

      <div className="text-[11px] text-slate-500">
        Attempts taken: <span className="font-mono text-cyan-400">{attempts}</span>
      </div>
    </div>
  );
};
