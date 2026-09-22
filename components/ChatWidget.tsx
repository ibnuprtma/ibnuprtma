"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, RotateCcw, Sparkles, Terminal, Bot, User, ChevronDown } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "model";
  text: string;
  isFallback?: boolean;
  timestamp: string;
}

const INITIAL_MESSAGE: Message = {
  id: "welcome",
  role: "model",
  text: "Halo bro! 👋 Kenalin, gue **Neo** — asisten virtual.\n\nBtw nama lu siapa nih? Dan lu siapanya si Ibnu? Temen lama, recruiter, calon klien, jodoh atau cuma sekadar kepo? wkwk",
  timestamp: "Baru saja"
};

const SUGGESTED_PROMPTS = [
  "😴 Jam tidur lu beneran normal atau kalong wkwk?",
  "🎮 Spill game yang lagi sering lu mainin sekarang dong!",
  "🍕 Rekomendasi kuliner enak di Surabaya versi lu apa aja?",
  "📈 Lagi trading pair apa & strateginya gimana bro?",
  "💘 Love language lu apa & kencan ideal versi lu gimana?",
  "🎧 Bagi playlist Spotify lu dong, lagi dengerin apa nih?"
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showBubbleTip, setShowBubbleTip] = useState(true);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load chat history and widget state from localStorage on client mount
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem("neo_chat_messages");
      if (savedHistory) {
        const parsed = JSON.parse(savedHistory);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Always ensure welcome message is up to date
          if (parsed[0]?.id === "welcome") {
            parsed[0].text = INITIAL_MESSAGE.text;
          }
          setMessages(parsed);
          // If there's already an ongoing chat, keep bubble tip closed
          setShowBubbleTip(false);
        }
      }

      const savedIsOpen = localStorage.getItem("neo_chat_is_open");
      if (savedIsOpen === "true") {
        setIsOpen(true);
      }
    } catch (e) {
      console.error("Gagal membaca history chat:", e);
    } finally {
      setHasHydrated(true);
    }
  }, []);

  // Save chat history to localStorage whenever messages change (only after initial hydration)
  useEffect(() => {
    if (!hasHydrated) return;
    try {
      localStorage.setItem("neo_chat_messages", JSON.stringify(messages));
    } catch (e) {
      console.error("Gagal menyimpan history chat:", e);
    }
  }, [messages, hasHydrated]);

  // Save open state to localStorage
  useEffect(() => {
    if (!hasHydrated) return;
    try {
      localStorage.setItem("neo_chat_is_open", isOpen ? "true" : "false");
    } catch (e) {
      console.error("Gagal menyimpan status chat:", e);
    }
  }, [isOpen, hasHydrated]);

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isMinimized, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen, isMinimized]);

  // Dismiss bubble tip after 10 seconds or when opened
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubbleTip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text,
      timestamp: timeStr
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Build history for API (skip initial welcome message)
      const historyPayload = newMessages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({
          role: m.role,
          text: m.text
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: historyPayload
        })
      });

      const data = await res.json();
      const replyText = data.reply || "Waduh, koneksi ke server lagi terhambat nih bro. Coba refresh atau colek Ibnu di ibnuprtma@gmail.com ya!";

      const modelMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "model",
        text: replyText,
        isFallback: data.fallback || false,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "model",
        text: "Otak gue ngebul parah asli, daripada nungguin gue bengong, mending lu langsung senggol Ibnu aslinya aja",
        isFallback: true,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
    try {
      localStorage.removeItem("neo_chat_messages");
    } catch (e) {
      console.error("Gagal menghapus history chat:", e);
    }
  };

  // Helper to parse basic markdown headers, bullets, bolding, code & links for clean rendering
  const renderFormattedText = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, lIdx) => {
      const trimmed = line.trim();

      // Horizontal rule
      if (trimmed === "---" || trimmed === "***") {
        return <hr key={lIdx} className="my-2 border-t border-black/20" />;
      }

      // Headers (### or ##)
      if (trimmed.startsWith("### ") || trimmed.startsWith("## ")) {
        const headerText = trimmed.replace(/^#{2,3}\s+/, "");
        return (
          <div key={lIdx} className="mt-2.5 mb-1 font-bold font-mono text-[#0047FF] text-xs uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#FFD600] border border-black inline-block" />
            <span>{headerText}</span>
          </div>
        );
      }

      // Bullet points (* or -)
      const isBullet = trimmed.startsWith("* ") || trimmed.startsWith("- ");
      const displayLine = isBullet ? trimmed.slice(2) : line;

      // Parse inline elements (bold, code, links)
      const parts = displayLine.split(/(\*\*.*?\*\*|`.*?`)/g);

      return (
        <div
          key={lIdx}
          className={`${lIdx > 0 && !isBullet ? "mt-1.5" : ""} ${
            isBullet ? "flex items-start gap-1.5 mt-1 ml-1 text-xs" : ""
          }`}
        >
          {isBullet && (
            <span className="w-1.5 h-1.5 bg-[#0047FF] border border-black rounded-full shrink-0 mt-1.5" />
          )}
          <p className="flex-1">
            {parts.map((part, pIdx) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={pIdx} className="font-extrabold text-[#0047FF]">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              if (part.startsWith("`") && part.endsWith("`")) {
                return (
                  <code
                    key={pIdx}
                    className="bg-[#FFD600]/30 text-black px-1 py-0.5 border border-black/30 font-mono text-[11px] rounded-xs"
                  >
                    {part.slice(1, -1)}
                  </code>
                );
              }
              if (part.includes("@gmail.com")) {
                return (
                  <a
                    key={pIdx}
                    href="mailto:ibnuprtma@gmail.com"
                    className="underline font-bold text-[#0047FF] hover:bg-[#FFD600] px-1 rounded transition-colors"
                  >
                    {part}
                  </a>
                );
              }
              if (part.includes("http://") || part.includes("https://")) {
                return (
                  <a
                    key={pIdx}
                    href={part.match(/https?:\/\/[^\s]+/)?.[0] || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-[#0047FF] hover:bg-[#FFD600] px-1 rounded transition-colors"
                  >
                    {part}
                  </a>
                );
              }
              return part;
            })}
          </p>
        </div>
      );
    });
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 font-mono">
      {/* Interactive Speech Bubble Notification (shown initially) */}
      {!isOpen && showBubbleTip && (
        <div className="absolute bottom-16 right-0 mb-2 w-64 bg-[#FEFCE8] border-3 border-black p-3 shadow-[4px_4px_0px_#000] animate-bounce text-xs">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-1.5 text-black font-bold font-sans">
              <Sparkles size={14} className="text-[#0047FF] animate-spin" />
              <span>Tanya Neo</span>
            </div>
            <button
              onClick={() => setShowBubbleTip(false)}
              className="text-gray-500 hover:text-black font-bold"
              aria-label="Tutup notifikasi"
            >
              ×
            </button>
          </div>
          <p className="mt-1 text-gray-700 font-sans leading-tight">
            Tanyain dah tanyain
          </p>
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-[#FEFCE8] border-r-3 border-b-3 border-black transform rotate-45" />
        </div>
      )}

      {/* Trigger Floating Button (when closed or minimized) */}
      {!isOpen ? (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
            setShowBubbleTip(false);
          }}
          className="group relative flex items-center gap-2.5 bg-[#FFD600] text-black px-4 py-3 border-3 border-black shadow-[5px_5px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0px_#000] transition-all cursor-pointer font-bold font-sans"
          aria-label="Buka Chat Neo"
        >
          <div className="relative">
            <Bot size={22} className="text-black group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#10B981] border border-black rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#10B981] border border-black rounded-full" />
          </div>
          <span className="text-sm tracking-wide uppercase font-extrabold">Tanya Neo</span>
          <span className="bg-[#0047FF] text-white text-[10px] font-mono px-1.5 py-0.5 border border-black uppercase tracking-wider">
            Online
          </span>
        </button>
      ) : null}

      {/* Expanded Chat Terminal Window */}
      {isOpen && (
        <div
          className={`flex flex-col bg-[#FEFCE8] border-3 border-black shadow-[8px_8px_0px_#000] transition-all duration-200 overflow-hidden ${
            isMinimized
              ? "w-80 h-14"
              : "w-[94vw] sm:w-[420px] md:w-[440px] h-[560px] max-h-[85vh]"
          }`}
        >
          {/* Terminal Window Header */}
          <div className="bg-[#0A192F] text-white px-3.5 py-2.5 border-b-3 border-black flex items-center justify-between select-none shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-3 h-3 rounded-full bg-[#FF4D4D] border border-black hover:opacity-80"
                  title="Tutup"
                />
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-3 h-3 rounded-full bg-[#FFD600] border border-black hover:opacity-80"
                  title={isMinimized ? "Perbesar" : "Minimalkan"}
                />
                <div className="w-3 h-3 rounded-full bg-[#10B981] border border-black" />
              </div>
              <div className="flex items-center gap-1.5 ml-2">
                <Terminal size={14} className="text-[#FFD600]" />
                <span className="text-xs font-bold text-gray-200 tracking-wider font-mono">
                  Neo
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {!isMinimized && (
                <button
                  onClick={handleReset}
                  className="p-1 text-gray-400 hover:text-[#FFD600] transition-colors"
                  title="Reset Obrolan"
                >
                  <RotateCcw size={14} />
                </button>
              )}
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 text-gray-400 hover:text-white transition-colors"
                title={isMinimized ? "Perbesar" : "Minimalkan"}
              >
                <ChevronDown
                  size={15}
                  className={`transform transition-transform ${isMinimized ? "rotate-180" : ""}`}
                />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-400 hover:text-[#FF4D4D] transition-colors"
                title="Tutup"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* If not minimized, show full terminal body */}
          {!isMinimized && (
            <>
              {/* Status Bar */}
              <div className="bg-[#FFD600] px-3.5 py-1 border-b-2 border-black flex items-center justify-between text-[11px] font-bold text-black font-mono shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full inline-block animate-pulse" />
                  {/* <span>MODEL: GEMINI FLASH ⚡</span> */}
                </div>
                <span className="text-[10px] bg-black text-white px-1.5 py-0.2 rounded-xs">
                  LET'S CHAT
                </span>
              </div>

              {/* Chat Message Scroll Area */}
              <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 bg-[#FAF7F0] text-sm">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.role === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    {/* Role Badge + Timestamp */}
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-600 font-mono mb-1">
                      {msg.role === "user" ? (
                        <>
                          <span>{msg.timestamp}</span>
                          <span className="bg-[#FFD600] text-black px-1 border border-black font-bold">
                            YOU
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="bg-[#0047FF] text-white px-1 border border-black font-bold flex items-center gap-1">
                            <Bot size={10} /> Neo
                          </span>
                          <span>{msg.timestamp}</span>
                        </>
                      )}
                    </div>

                    {/* Bubble Content */}
                    <div
                      className={`max-w-[88%] p-3 border-2 border-black text-xs sm:text-sm font-sans leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[#FFD600] text-black shadow-[3px_3px_0px_#000]"
                          : msg.isFallback
                          ? "bg-[#FFF4E5] border-[#FF4D4D] text-gray-900 shadow-[3px_3px_0px_#FF4D4D]"
                          : "bg-white text-gray-900 shadow-[3px_3px_0px_#000]"
                      }`}
                    >
                      {msg.isFallback && (
                        <div className="flex items-center gap-1.5 text-[#DC2626] font-mono font-bold text-[11px] mb-1.5 pb-1 border-b border-[#FCA5A5]">
                          <span>☕ LIMIT MODE / COOLING DOWN</span>
                        </div>
                      )}
                      <div>{renderFormattedText(msg.text)}</div>
                    </div>
                  </div>
                ))}

                {/* Loading Indicator */}
                {isLoading && (
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-600 font-mono mb-1">
                      <span className="bg-[#0047FF] text-white px-1 border border-black font-bold flex items-center gap-1">
                        <Bot size={10} /> Neo
                      </span>
                      <span>sabar ngetikk....</span>
                    </div>
                    <div className="bg-white p-3 border-2 border-black shadow-[3px_3px_0px_#000] flex items-center gap-2 text-xs font-mono">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-black rounded-full animate-bounce" />
                        <span
                          className="w-2 h-2 bg-black rounded-full animate-bounce"
                          style={{ animationDelay: "0.15s" }}
                        />
                        <span
                          className="w-2 h-2 bg-black rounded-full animate-bounce"
                          style={{ animationDelay: "0.3s" }}
                        />
                      </div>
                      <span className="text-gray-600">Neo lagi ngetik sabar...</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestion Chips */}
              <div className="bg-[#FEFCE8] border-t-2 border-black px-3 py-2 shrink-0">
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Sparkles size={11} className="text-[#0047FF]" />
                  Tanya Cepat:
                </p>
                <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                  {SUGGESTED_PROMPTS.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt)}
                      disabled={isLoading}
                      className="whitespace-nowrap text-[11px] bg-white text-black px-2 py-1 border border-black hover:bg-[#FFD600] active:scale-95 transition-all shadow-[1px_1px_0px_#000] disabled:opacity-50 cursor-pointer shrink-0 font-sans"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="bg-[#0A192F] p-2.5 border-t-3 border-black flex items-center gap-2 shrink-0"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ketik noh pertanyaan ttg ibnu..."
                  disabled={isLoading}
                  className="flex-1 bg-white text-black px-3 py-2 text-xs sm:text-sm border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#FFD600] font-sans disabled:bg-gray-200"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-[#0047FF] text-white p-2 sm:px-3 sm:py-2 border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-[#0037CC] active:translate-x-[1px] active:translate-y-[1px] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all flex items-center gap-1.5 font-bold text-xs"
                  aria-label="Kirim pesan"
                >
                  <Send size={14} />
                  <span className="hidden sm:inline">KIRIM</span>
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}
