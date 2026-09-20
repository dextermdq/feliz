"use client";

import { FormEvent } from "react";

export default function Contacto() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Fase 2 — conectar a backend para guardar mensaje
    alert("TODO: Enviar mensaje al backend");
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-feliz-rojo text-feliz-blanco py-section">
        <div className="max-w-container mx-auto page-margin">
          <h1 className="text-display-hero md:text-display-hero-mobile font-archivo font-bold mb-space-lg">
            Contacto
          </h1>
          <p className="text-body-lg max-w-2xl">
            ¿Preguntas? Estamos aquí para ayudarte. Contactanos por cualquiera de nuestros canales.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-section">
        <div className="max-w-container mx-auto page-margin">
          <div className="grid md:grid-cols-3 gap-section mb-section">
            {/* Tarjeta Teléfono */}
            <div className="bg-feliz-blanco p-space-xl rounded-lg shadow-subtle">
              <div className="text-3xl mb-space-lg text-feliz-verde">📱</div>
              <h3 className="text-headline-md text-feliz-negro mb-space-md font-archivo font-bold">
                WhatsApp
              </h3>
              <p className="text-body-md text-feliz-gris-500 mb-space-lg">
                Nuestro canal preferido para consultas rápidas.
              </p>
              <a
                href="https://wa.me/5492235551234"
                className="text-feliz-rojo font-medium hover:underline text-body-md"
              >
                +54 223 555-1234
              </a>
            </div>

            {/* Tarjeta Email */}
            <div className="bg-feliz-blanco p-space-xl rounded-lg shadow-subtle">
              <div className="text-3xl mb-space-lg text-feliz-amarillo">📧</div>
              <h3 className="text-headline-md text-feliz-negro mb-space-md font-archivo font-bold">
                Email
              </h3>
              <p className="text-body-md text-feliz-gris-500 mb-space-lg">
                Respuesta garantizada en 24 horas.
              </p>
              <a
                href="mailto:info@feliz.mayorista.com.ar"
                className="text-feliz-rojo font-medium hover:underline text-body-md"
              >
                info@feliz.mayorista.com.ar
              </a>
            </div>

            {/* Tarjeta Dirección */}
            <div className="bg-feliz-blanco p-space-xl rounded-lg shadow-subtle">
              <div className="text-3xl mb-space-lg text-feliz-rojo">📍</div>
              <h3 className="text-headline-md text-feliz-negro mb-space-md font-archivo font-bold">
                Visitanos
              </h3>
              <p className="text-body-md text-feliz-gris-500">
                Alió 3232<br />
                Mar del Plata, Buenos Aires<br />
                Argentina
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-feliz-gris-100 py-section">
        <div className="max-w-container mx-auto page-margin">
          <h2 className="text-headline-lg md:text-headline-lg-mobile text-feliz-negro mb-space-2xl font-archivo font-bold">
            Ubicación
          </h2>
          <div className="bg-feliz-blanco rounded-lg overflow-hidden shadow-soft h-96">
            {/* Mapa embebido — Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.456!2d-57.54!3d-38.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c5f5f5f5f5f5f%3A0x0!2sAli%C3%B3%203232%2C%20Mar%20del%20Plata!5e0!3m2!1ses!2sar!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-body-sm text-feliz-gris-500 mt-space-lg text-center">
            Nota: Mapa embebido de Google Maps. Reemplaza con ubicación real cuando disponible.
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-section">
        <div className="max-w-container mx-auto page-margin">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-headline-lg md:text-headline-lg-mobile text-feliz-negro mb-space-2xl font-archivo font-bold">
              Dejanos tu Mensaje
            </h2>
            <form onSubmit={handleSubmit} className="space-y-space-lg">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-body-md font-medium text-feliz-negro mb-space-sm">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full px-space-lg py-space-md border border-feliz-gris-500 rounded text-body-md text-feliz-negro placeholder-feliz-gris-500 focus:outline-none focus:ring-2 focus:ring-feliz-rojo"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-body-md font-medium text-feliz-negro mb-space-sm">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-space-lg py-space-md border border-feliz-gris-500 rounded text-body-md text-feliz-negro placeholder-feliz-gris-500 focus:outline-none focus:ring-2 focus:ring-feliz-rojo"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className="block text-body-md font-medium text-feliz-negro mb-space-sm">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full px-space-lg py-space-md border border-feliz-gris-500 rounded text-body-md text-feliz-negro placeholder-feliz-gris-500 focus:outline-none focus:ring-2 focus:ring-feliz-rojo"
                  placeholder="+54 223 ..."
                />
              </div>

              {/* Asunto */}
              <div>
                <label htmlFor="asunto" className="block text-body-md font-medium text-feliz-negro mb-space-sm">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  required
                  className="w-full px-space-lg py-space-md border border-feliz-gris-500 rounded text-body-md text-feliz-negro placeholder-feliz-gris-500 focus:outline-none focus:ring-2 focus:ring-feliz-rojo"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-body-md font-medium text-feliz-negro mb-space-sm">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  className="w-full px-space-lg py-space-md border border-feliz-gris-500 rounded text-body-md text-feliz-negro placeholder-feliz-gris-500 focus:outline-none focus:ring-2 focus:ring-feliz-rojo resize-none"
                  placeholder="Cuéntanos tu consulta..."
                ></textarea>
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="w-full bg-feliz-rojo text-feliz-blanco py-space-md px-space-lg rounded font-medium text-body-md hover:bg-feliz-rojo-oscuro transition-colors"
              >
                ENVIAR MENSAJE
              </button>
              <p className="text-body-sm text-feliz-gris-500 text-center">
                TODO: Backend para procesar y guardar mensajes
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
