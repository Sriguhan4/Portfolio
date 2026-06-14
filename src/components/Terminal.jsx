import { useState, useRef, useEffect, useCallback } from 'react';
import { commandRegistry, getWelcomeMessage } from '../data/terminalCommands';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Terminal.css';

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [animatingLines, setAnimatingLines] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (isVisible && !initialized) {
      const welcomeLines = getWelcomeMessage().map(line => ({ type: 'system', content: line }));
      setHistory(welcomeLines);
      setInitialized(true);
    }
  }, [isVisible, initialized]);

  const scrollToBottom = useCallback(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, animatingLines, scrollToBottom]);

  const animateLines = useCallback(async (lines) => {
    setIsAnimating(true);
    for (let i = 0; i < lines.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 120));
      setAnimatingLines(prev => [...prev, lines[i]]);
    }
    setAnimatingLines([]);
    setHistory(prev => [...prev, ...lines.map(l => ({ type: 'output', content: l }))]);
    setIsAnimating(false);
  }, []);

  const executeCommand = useCallback(async (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setHistory(prev => [...prev, { type: 'input', content: cmd.trim() }]);
    setCommandHistory(prev => [cmd.trim(), ...prev]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    const command = commandRegistry[trimmed];
    if (!command) {
      setHistory(prev => [...prev, {
        type: 'error',
        content: `Command not found: ${cmd.trim()}. Type "help" for available commands.`
      }]);
      return;
    }

    const result = command.execute();

    if (result.type === 'text') {
      setHistory(prev => [...prev, { type: 'output', content: result.content }]);
    } else if (result.type === 'table') {
      const tableContent = result.content.map(row =>
        `  ${row.command.padEnd(20)} ${row.description}`
      ).join('\n');
      setHistory(prev => [...prev, {
        type: 'output',
        content: `\n  COMMAND              DESCRIPTION\n  ${'─'.repeat(45)}\n${tableContent}\n`
      }]);
    } else if (result.type === 'animated') {
      await animateLines(result.lines);
    } else if (result.type === 'action' && result.action === 'download-resume') {
      setHistory(prev => [...prev, { type: 'output', content: result.content }]);
      // Trigger download
      const link = document.createElement('a');
      link.href = '/Resume/Sriguhan_S_Resume.pdf';
      link.download = 'Sriguhan_S_Resume.pdf';
      link.click();
    }
  }, [animateLines]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isAnimating) {
      executeCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = Object.keys(commandRegistry);
      const match = commands.find(c => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  const focusInput = () => inputRef.current?.focus();

  return (
    <section id="terminal" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          {/* <div className="section-tag">
            <span>⌨️</span> Interactive Terminal
          </div> */}
          <h2 className="section-title">Command Center</h2>
          <p className="section-subtitle">
            Explore my portfolio through the command line. Type <code>help</code> to get started.
          </p>
        </div>

        <div className={`terminal-window ${isVisible ? 'visible' : ''}`} onClick={focusInput}>
          <div className="terminal-bar">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="terminal-title">sriguhan@cloudlab:~</span>
            <div className="terminal-bar-actions">
              <span className="bar-btn" title="Minimize">─</span>
              <span className="bar-btn" title="Maximize">□</span>
              <span className="bar-btn" title="Close">×</span>
            </div>
          </div>

          <div className="terminal-output" ref={outputRef}>
            {history.map((entry, i) => (
              <div key={i} className={`terminal-line ${entry.type}`}>
                {entry.type === 'input' && (
                  <span className="prompt">
                    <span className="prompt-user">sriguhan</span>
                    <span className="prompt-at">@</span>
                    <span className="prompt-host">cloudlab</span>
                    <span className="prompt-sep">:~$ </span>
                  </span>
                )}
                {entry.type === 'error' && <span className="error-prefix">✕ </span>}
                <span className="line-content">{entry.content}</span>
              </div>
            ))}

            {animatingLines.map((line, i) => (
              <div key={`anim-${i}`} className="terminal-line output animate-in">
                <span className="line-content">{line}</span>
              </div>
            ))}

            <div className="terminal-input-line">
              <span className="prompt">
                <span className="prompt-user">sriguhan</span>
                <span className="prompt-at">@</span>
                <span className="prompt-host">cloudlab</span>
                <span className="prompt-sep">:~$ </span>
              </span>
              <input
                ref={inputRef}
                type="text"
                className="terminal-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck={false}
                autoComplete="off"
                disabled={isAnimating}
                aria-label="Terminal input"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
