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
        <svg
          className="w-9 h-9"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.78.41 3.45 1.15 4.95L2.05 22l5.25-1.23c1.38.75 2.94 1.16 4.74 1.16c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.74 2 12.04 2m0 1.67c2.33 0 4.52.91 6.16 2.55c1.63 1.63 2.56 3.82 2.56 6.16c0 4.81-3.91 8.72-8.72 8.72c-1.56 0-3.06-.41-4.38-1.15l-.32-.17-3.29.76.79-3.26-.21-.34c-.8-1.35-1.25-2.91-1.25-4.56c0-4.81 3.91-8.72 8.72-8.72m5.55 7.48c.29 0 .54.25.54.54c0 .29-.25.54-.54.54c-.29 0-.54-.25-.54-.54c0-.29.25-.54.54-.54m-3.76 0c.29 0 .54.25.54.54c0 .29-.25.54-.54.54c-.29 0-.54-.25-.54-.54c0-.29.25-.54.54-.54m-3.76 0c.29 0 .54.25.54.54c0 .29-.25.54-.54.54c-.29 0-.54-.25-.54-.54c0-.29.25-.54.54-.54m1.89 3.24c.68 0 1.4.35 1.85.92l.17.24c.32.44.95.78 1.55.83h.61l.17-.02c1.15-.05 2.5-.58 3.41-1.58h.02v-.02c.24-.25.54-.54.54-.98c0-.44-.46-.8-.93-.8h-1.46c-.15.04-.3.08-.45.08c-.88 0-1.7-.5-2.2-1.15l-.12-.17c-.24-.34-.66-.54-1.08-.54h-1.32c-.79 0-1.43.62-1.43 1.39v.21c0 1.05.61 1.97 1.52 2.43l.16.08c.35.17.56.54.56.93z" />
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
