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
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.71.227 1.355.196 1.867.119.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-2.176 0-4.33.691-6.041 1.987l-.384.223-.398-.066C5.034 8.987 4.127 8.948 3.29 9.09c-.837.141-1.635.45-2.26 1.061-.625.61-.975 1.409-1.023 2.234-.048.825.18 1.631.648 2.269l.209.313-.308.341c-.432.479-.702.998-.778 1.562-.076.564.094 1.136.457 1.635.363.499.87.84 1.464.975.594.135 1.233.081 1.796-.16l.345-.16.36.095c.756.199 1.532.284 2.313.246 2.621-.135 5.034-1.902 6.514-4.287.625-1.018 1.063-2.137 1.303-3.316.24-1.179.235-2.389-.014-3.558-.725-3.44-3.674-5.869-7.25-5.869z" />
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
