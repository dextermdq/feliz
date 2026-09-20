"use client";

import { useState } from "react";

export function FloatingWhatsApp() {
  const [showChat, setShowChat] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Globo de chat */}
      {showChat && (
        <div className="animate-fade-in bg-feliz-gris-100 text-feliz-negro rounded-2xl px-4 py-3 shadow-lg max-w-xs">
          <p className="text-sm font-medium">¿Cómo podemos ayudarte?</p>
        </div>
      )}

      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/5492235550199"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onClick={() => setShowChat(false)}
        className="group w-16 h-16 bg-[#25D366] hover:bg-[#20ba58] text-white rounded-full flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] hover:scale-110 transition-all duration-300"
        title="Contactar por WhatsApp"
      >
        {/* Globo de chat - Logo WhatsApp */}
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.52 3.48C18.9 1.84 16.7 1 14.54 1 7.86 1 2.38 6.48 2.38 13.15c0 2.35.67 4.65 1.94 6.64L2.2 23l7.19-1.71c1.85 1.02 3.94 1.56 6.15 1.56 6.68 0 12.15-5.47 12.15-12.15.02-3.25-1.3-6.3-3.67-8.62zm-5.98 18.75c-1.89 0-3.73-.54-5.32-1.56l-.38-.23-3.94.94.96-3.88-.25-.4C4.3 15.83 3.8 14.52 3.8 13.15c0-5.62 4.57-10.19 10.19-10.19 2.73 0 5.3 1.12 7.23 3.08 1.93 1.95 3 4.54 3 7.26-.02 5.6-4.59 10.15-10.21 10.15zm5.5-7.65c-.3-.15-1.8-.88-2.08-.98-.27-.1-.47-.15-.67.16-.2.3-.77.98-.95 1.18-.17.2-.35.23-.65.08-1.4-.68-2.32-1.22-3.23-2.82-.23-.39-.12-.6.17-.8.18-.16.3-.34.48-.55.16-.2.2-.33.33-.54.12-.21.06-.4-.03-.56-.09-.16-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.36-.01-.56-.01-.2 0-.52.08-.8.38-.27.3-1.05 1.03-1.05 2.51 0 1.47 1.08 2.91 1.23 3.11.16.2 2.18 3.32 5.32 4.55.73.32 1.3.5 1.74.64.73.23 1.39.2 1.9.12.58-.09 1.78-.73 2.03-1.44.25-.71.25-1.31.18-1.42-.08-.12-.27-.2-.56-.35z" />
        </svg>
      </a>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
