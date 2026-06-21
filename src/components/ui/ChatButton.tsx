"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "bot";
  text: string;
  links?: { label: string; href: string }[];
};

const GREETINGS: Record<string, Message> = {
  vi: {
    role: "bot",
    text: "Xin chào! Tôi có thể giúp gì cho bạn? Hãy nhập từ khoá để tìm kiếm thông tin.",
  },
  en: {
    role: "bot",
    text: "Hello! How can I help you? Enter a keyword to search for information.",
  },
};

const QUICK_LINKS: Record<string, { label: string; href: string }[]> = {
  vi: [
    { label: "Giải pháp Công nghệ", href: "/vi/giai-phap-dich-vu/cong-nghe" },
    { label: "Dịch vụ An ninh mạng", href: "/vi/giai-phap-dich-vu/an-ninh-mang" },
    { label: "Giải pháp AI", href: "/vi/giai-phap-dich-vu/ai" },
    { label: "Tuyển dụng", href: "/vi/tuyen-dung" },
    { label: "Liên hệ", href: "/vi/lien-he" },
  ],
  en: [
    { label: "Technology Solutions", href: "/en/giai-phap-dich-vu/cong-nghe" },
    { label: "Cyber Security Services", href: "/en/giai-phap-dich-vu/an-ninh-mang" },
    { label: "AI Solutions", href: "/en/giai-phap-dich-vu/ai" },
    { label: "Careers", href: "/en/tuyen-dung" },
    { label: "Contact", href: "/en/lien-he" },
  ],
};

export function ChatButton({ locale = "vi" }: { locale?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    GREETINGS[locale] || GREETINGS.vi,
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const isVi = locale === "vi";

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    const q = input.trim();
    if (!q) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: q }]);

    setTimeout(() => {
      const links = (QUICK_LINKS[locale] || QUICK_LINKS.vi).filter((l) =>
        l.label.toLowerCase().includes(q.toLowerCase())
      );

      if (links.length > 0) {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: isVi
              ? `Tôi tìm thấy ${links.length} kết quả:`
              : `I found ${links.length} results:`,
            links,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: isVi
              ? `Không tìm thấy kết quả cho "${q}". Bạn có thể liên hệ trực tiếp.`
              : `No results found for "${q}". Please contact us directly.`,
            links: [
              {
                label: isVi ? "Trang Liên hệ" : "Contact page",
                href: `/${locale}/lien-he`,
              },
            ],
          },
        ]);
      }
    }, 400);
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-36 right-6 z-50 flex h-[420px] w-[340px] flex-col overflow-hidden rounded-2xl shadow-2xl"
            style={{ background: "#1a1a2e", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ background: "linear-gradient(to right, #06b6d4, #2563eb)" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: "rgba(255,255,255,0.2)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">DTG Support</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="rounded-full p-1 transition" style={{ background: "transparent" }} onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[85%] rounded-2xl px-3 py-2 text-sm"
                    style={{
                      background: msg.role === "user" ? "#06b6d4" : "rgba(255,255,255,0.1)",
                      color: msg.role === "user" ? "#fff" : "rgba(255,255,255,0.9)",
                    }}
                  >
                    {msg.text}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-2 space-y-1.5">
                        {msg.links.map((link, j) => (
                          <a
                            key={j}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs text-white transition"
                            style={{ background: "rgba(255,255,255,0.1)" }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                          >
                            <span className="flex-1">{link.label}</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.4 }}>
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="p-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder={isVi ? "Nhập từ khoá tìm kiếm..." : "Enter keyword..."}
                  className="flex-1 rounded-full px-4 py-2 text-sm text-white outline-none"
                  style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
                />
                <button
                  onClick={handleSend}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition"
                  style={{ background: "#06b6d4" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Float Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition"
        style={{ background: "linear-gradient(to right, #06b6d4, #2563eb)", boxShadow: "0 4px 20px rgba(6,182,212,0.3)" }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </>
  );
}
