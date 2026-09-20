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
        {/* Logo oficial de WhatsApp: teléfono + globo de chat */}
        <svg
          className="w-9 h-9"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Globo de chat */}
          <path d="M17 10.5V7c0 .55-.45 1-1 1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
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
