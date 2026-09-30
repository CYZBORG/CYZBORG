import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { RecordedChatMessage, saveChatSessionToBackend } from '../../src/firebase';

const INITIAL_GREETING: RecordedChatMessage = {
  role: 'model',
  text: 'What would you like to see from CYZBORG?',
};

const CHAT_HISTORY_STORAGE_KEY = 'cyzborg_chat_messages_v2';
const POPUP_DISMISSED_KEY = 'cyzborg_chat_popup_dismissed_v1';
const READABLE_FONT_STACK = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

interface CyzborgChatProps {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CyzborgChat: React.FC<CyzborgChatProps> = ({
  isOpen: controlledIsOpen,
  setIsOpen: controlledSetIsOpen,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = controlledSetIsOpen || setInternalIsOpen;

  const [showTeaser, setShowTeaser] = useState(false);
  const [messages, setMessages] = useState<RecordedChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem(CHAT_HISTORY_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as RecordedChatMessage[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // ignore local storage read errors
    }
    return [INITIAL_GREETING];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const threadEndRef = useRef<HTMLDivElement | null>(null);

  // Show proactive pop-up teaser on desktop after 3.5 seconds if not already opened or dismissed
  useEffect(() => {
    try {
      if (sessionStorage.getItem(POPUP_DISMISSED_KEY) === '1') {
        return;
      }
    } catch {
      // ignore
    }
    const timer = window.setTimeout(() => {
      setShowTeaser(true);
    }, 3500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowTeaser(false);
      threadEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages, isLoading]);

  const dismissTeaser = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTeaser(false);
    try {
      sessionStorage.setItem(POPUP_DISMISSED_KEY, '1');
    } catch {
      // ignore
    }
  };

  const sendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    const userMsg: RecordedChatMessage = { role: 'user', text: trimmed };
    const updatedWithUser = [...messages, userMsg];

    setMessages(updatedWithUser);
    setInput('');
    setErrorMsg(null);
    setIsLoading(true);

    try {
      localStorage.setItem(CHAT_HISTORY_STORAGE_KEY, JSON.stringify(updatedWithUser));
    } catch {
      // ignore
    }

    // Record visitor input immediately so owner captures feedback even if visitor closes tab
    saveChatSessionToBackend(updatedWithUser).catch(() => {});

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedWithUser }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Failed to reach CYZBORG.');
      }

      const modelMsg: RecordedChatMessage = {
        role: 'model',
        text:
          typeof data.reply === 'string' && data.reply.trim()
            ? data.reply.trim()
            : 'Thanks for sharing — we have logged your input for the CYZBORG team. Anything else you would like to see?',
      };

      const finalMessages = [...updatedWithUser, modelMsg];
      setMessages(finalMessages);
      try {
        localStorage.setItem(CHAT_HISTORY_STORAGE_KEY, JSON.stringify(finalMessages));
      } catch {
        // ignore
      }

      // Persist full updated conversation to Firestore for the owner
      saveChatSessionToBackend(finalMessages).catch(() => {});
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Your feedback was saved, but live response is temporarily unavailable.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div
      style={{ fontFamily: READABLE_FONT_STACK }}
      className="fixed bottom-6 left-4 sm:left-6 z-[70] flex flex-col items-start pointer-events-none"
    >
      {/* Proactive Pop-Up Prompt Bubble — Desktop/Tablet ONLY (On mobile, accessed via 3-lines menu) */}
      {!isOpen && showTeaser && (
        <div
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(true);
            }
          }}
          className="hidden min-[1181px]:block pointer-events-auto mb-3 max-w-[300px] sm:max-w-[330px] bg-[#111214]/95 backdrop-blur-md border border-cyzborg-orange/80 p-4 shadow-2xl cursor-pointer group transition-all hover:border-cyzborg-orange rounded-sm"
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2.5">
              <img
                src="https://helmet-with-logo.netlify.app/simple%20logo%20transparent.svg"
                alt="CYZBORG Official Logo"
                className="h-8 w-auto object-contain shrink-0 drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]"
              />
              <span className="w-2 h-2 rounded-full bg-cyzborg-orange animate-pulse" />
              <span className="text-xs font-semibold text-cyzborg-orange tracking-wide uppercase">
                CYZBORG
              </span>
            </div>
            <button
              type="button"
              onClick={dismissTeaser}
              aria-label="Dismiss prompt"
              className="text-neutral-400 hover:text-white transition-colors p-0.5 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[15px] font-medium text-white leading-snug">
            What would you like to see from CYZBORG?
          </p>
          <span className="mt-2 inline-block text-xs font-semibold text-[#00A3FF] group-hover:underline">
            Share your input →
          </span>
        </div>
      )}

      {/* Expanded Chat Window (Opens from 3-lines menu on mobile, or floating button on desktop) */}
      {isOpen && (
        <div className="pointer-events-auto mb-0 md:mb-3 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[75vh] flex flex-col bg-[#0f1012] border border-neutral-700 shadow-2xl overflow-hidden rounded-sm">
          {/* Top Bar */}
          <div className="px-4 py-3.5 bg-[#16181b] border-b border-neutral-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0">
              <img
                src="https://helmet-with-logo.netlify.app/simple%20logo%20transparent.svg"
                alt="CYZBORG Official Logo"
                className="h-11 sm:h-12 w-auto object-contain shrink-0 drop-shadow-[0_0_6px_rgba(255,255,255,0.22)]"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyzborg-orange" />
                  <h3 className="text-base sm:text-[17px] font-bold text-white tracking-wide">
                    CYZBORG
                  </h3>
                </div>
                <p className="text-xs text-neutral-400 truncate mt-0.5">
                  Share Your Input
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close CYZBORG chat"
              className="p-1.5 border border-neutral-700 text-neutral-300 hover:text-white hover:border-cyzborg-orange transition-colors cursor-pointer rounded-sm"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Message Thread */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[260px] max-h-[46vh] bg-[#0f1012]">
            {messages.map((msg, idx) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <span className="text-[11px] font-medium text-neutral-400 mb-1">
                    {isUser ? 'You' : 'CYZBORG'}
                  </span>
                  <div
                    className={`max-w-[88%] px-4 py-3 text-[15px] leading-relaxed whitespace-pre-wrap rounded-sm ${
                      isUser
                        ? 'bg-cyzborg-orange/20 border border-cyzborg-orange/70 text-white'
                        : 'bg-[#181a1e] border border-neutral-800 text-neutral-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <Loader2 className="w-4 h-4 animate-spin text-cyzborg-orange" />
                <span>Sending...</span>
              </div>
            )}

            {errorMsg && (
              <div className="px-3.5 py-2.5 bg-red-950/50 border border-red-800/60 text-xs text-red-200 rounded-sm">
                {errorMsg}
              </div>
            )}

            <div ref={threadEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-[#16181b] border-t border-neutral-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your ideas, styles, or questions..."
              maxLength={500}
              className="flex-1 bg-[#0f1012] border border-neutral-700 focus:border-cyzborg-orange px-3.5 py-2.5 text-[15px] text-white placeholder-neutral-400 focus:outline-none rounded-sm"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="flex items-center justify-center px-4 py-2.5 bg-cyzborg-orange text-black text-sm font-semibold hover:bg-white transition-colors disabled:opacity-40 cursor-pointer rounded-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button — Desktop/Tablet ONLY (On mobile, inside 3-lines header menu) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Share your input with CYZBORG"
        className="hidden min-[1181px]:flex pointer-events-auto items-center gap-2.5 px-4 h-11 bg-[#111214]/95 backdrop-blur-sm border border-neutral-700 hover:border-cyzborg-orange text-white transition-all duration-200 shadow-lg cursor-pointer group rounded-sm"
      >
        <MessageSquare className="w-4 h-4 text-cyzborg-orange group-hover:scale-110 transition-transform" />
        <span className="text-sm font-semibold tracking-wide">
          {isOpen ? 'Close' : 'Share Your Input'}
        </span>
      </button>
    </div>
  );
};

export default CyzborgChat;
