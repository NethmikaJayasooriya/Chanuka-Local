"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {/* Tooltip banner */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 bg-white border border-[#25d366]/40 shadow-xl rounded-2xl p-3.5 max-w-xs animate-in slide-in-from-bottom-2 duration-300">
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#17355c]">
              <img
                src="/images/hero-chanuka.jpg"
                alt="Chanuka Jeewantha"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25d366] border-2 border-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-heading text-xs font-bold text-[#0e1a2b] flex items-center justify-between">
              <span>Chanuka Jeewantha</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                className="text-[#94a3b8] hover:text-[#0e1a2b] text-xs px-1"
                aria-label="Dismiss message"
              >
                ✕
              </button>
            </p>
            <p className="text-[11px] text-[#52637a] mt-0.5 leading-snug">
              Got a job opening with an urgent deadline? Send me your current CV for a quick look!
            </p>
          </div>
        </div>
      )}

      {/* Main WhatsApp Action Button */}
      <a
        href={whatsappUrl("Hi Chanuka, I came across your website and would like to ask about getting my CV done.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Chanuka on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-[#25d366] hover:bg-[#1ea952] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl shadow-[#25d366]/35 transition-all duration-300 hover:scale-105"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-200" />
        </span>

        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.203c.043.071.043.418-.101.823z" />
        </svg>

        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
