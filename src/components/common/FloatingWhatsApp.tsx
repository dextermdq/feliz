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
        {/* Logo oficial WhatsApp - Burbuja con teléfono */}
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Burbuja de chat grande */}
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.18-1.46C9.89 21.64 10.93 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-.89 0-1.77-.2-2.6-.57l-.18-.09-1.95.46.47-1.81-.12-.19C4.26 16.89 4 14.54 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
          {/* Teléfono en el medio */}
          <path d="M15.5 11.5c-.28-.15-1.62-.8-1.87-.88-.25-.09-.43-.14-.61.14-.18.28-.7.88-.86 1.06-.16.18-.31.2-.58.07-1.28-.62-2.12-1.11-2.94-2.56-.2-.35-.1-.54.15-.73.16-.15.28-.31.44-.5.15-.18.2-.3.3-.49.1-.19.05-.36-.02-.5-.08-.14-.61-1.45-.84-2-.22-.53-.45-.45-.61-.46-.15 0-.32 0-.5 0-.18 0-.48.07-.73.35-.25.28-.95.93-.95 2.27 0 1.34.98 2.64 1.12 2.83.14.18 1.98 3.02 4.84 4.14.66.29 1.18.45 1.58.58.66.21 1.26.18 1.73.1.52-.08 1.62-.66 1.84-1.3.22-.64.22-1.19.16-1.3-.06-.1-.24-.17-.5-.32z" />
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
