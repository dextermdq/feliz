export function LocationMap() {
  return (
    <section className="w-full bg-feliz-negro py-space-2xl">
      <div className="max-w-container mx-auto page-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-2xl items-center">
          {/* Mapa */}
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.8563458836757!2d-57.55705!3d-38.00552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1d7e8c8c8c8c9%3A0x1234567890abcdef!2sAli%C3%B3%203232%2C%20Mar%20del%20Plata%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1695000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col gap-space-xl">
            <div>
              <h2 className="font-archivo font-bold text-headline-lg text-feliz-blanco uppercase tracking-tight mb-space-md">
                Ubicación
              </h2>
              <p className="text-body-lg text-feliz-gris-100">
                Visitanos en nuestro local mayorista
              </p>
            </div>

            <div className="flex flex-col gap-space-lg">
              {/* Dirección */}
              <div className="flex items-start gap-space-md">
                <span className="material-symbols-outlined text-feliz-rojo text-2xl flex-shrink-0">
                  location_on
                </span>
                <div>
                  <p className="font-label-caps text-label-caps font-bold text-feliz-amarillo uppercase">
                    Dirección
                  </p>
                  <p className="text-body-md text-feliz-gris-100 mt-1">
                    Alió 3232, Mar del Plata, Buenos Aires
                  </p>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start gap-space-md">
                <span className="material-symbols-outlined text-feliz-amarillo text-2xl flex-shrink-0">
                  schedule
                </span>
                <div>
                  <p className="font-label-caps text-label-caps font-bold text-feliz-amarillo uppercase">
                    Horarios
                  </p>
                  <p className="text-body-md text-feliz-gris-100 mt-1">
                    Lunes a sábado, 8:00 a 17:00 hs
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-space-md">
                <span className="material-symbols-outlined text-[#25D366] text-2xl flex-shrink-0">
                  chat
                </span>
                <div>
                  <p className="font-label-caps text-label-caps font-bold text-feliz-amarillo uppercase">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/5492235550199"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-md text-[#25D366] hover:text-[#20ba58] transition-colors mt-1"
                  >
                    223 555-0199
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://maps.google.com/?q=Av.+Alió+3232,+Mar+del+Plata"
              target="_blank"
              rel="noopener noreferrer"
              className="px-space-xl py-3.5 bg-feliz-rojo text-feliz-blanco font-label-caps text-label-caps font-bold rounded-lg hover:bg-feliz-rojo-oscuro transition-colors tracking-wider uppercase inline-flex items-center gap-space-xs shadow-md w-full justify-center"
            >
              <span>ABRIR EN MAPS</span>
              <span className="material-symbols-outlined">arrow_outward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
