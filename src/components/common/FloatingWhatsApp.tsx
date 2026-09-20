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
        {/* Globo de chat + teléfono (logo WhatsApp) */}
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Burbuja de mensaje */}
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.18-1.46C9.89 21.64 10.93 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-.89 0-1.77-.2-2.6-.57l-.18-.09-1.95.46.47-1.81-.12-.19C4.26 16.89 4 14.54 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
          {/* Teléfono dentro */}
          <path d="M16.6915026,12.4744748 L14.0151496,11.1207615 C13.5355499,10.8571722 12.9656502,10.9077967 12.5563168,11.3170592 L11.5518685,12.3215461 C11.4463987,12.4270592 11.2243722,12.4309507 11.1006357,12.360290076 C10.3694346,11.9160871 9.17988431,10.8631503 8.5871514,10.273305 C7.99604793,9.68383609 6.95161974,8.51287022 6.50876247,7.78565161 C6.39694852,7.66215035 6.40083993,7.44012394 6.50635148,7.33460118 L7.51088025,6.32946769 C7.91992975,5.92041513 7.97066769,5.35059032 7.70720298,4.87092717 L6.35348991,2.19448474 C6.0903501,1.71673746 5.5204503,1.56670019 5.07234559,1.83006625 L2.85395169,3.24686341 C2.41077621,3.50815764 2.15440573,3.98163353 2.25193502,4.50096251 C2.92143681,7.81838574 4.34311125,11.0231651 6.47566126,13.1632057 C8.64709025,15.3456436 11.9012346,16.7873151 15.2060466,17.4503207 C15.7274109,17.5528522 16.2009018,17.2968531 16.4618045,16.853529 L17.8786037,14.6351408 C18.1419984,14.1834508 17.9920046,13.6135379 17.5140249,13.3503695 Z" />
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
