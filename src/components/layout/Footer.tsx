'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar con API de newsletter
    console.log('Email para newsletter:', email);
    setEmail('');
  };

  return (
    <footer className="bg-feliz-negro text-feliz-blanco">
      {/* Contenido principal — 4 columnas */}
      <div className="max-w-container mx-auto px-gutter py-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl">
          {/* Columna 1: Newsletter */}
          <div>
            <h3 className="font-archivo font-bold text-headline-md mb-space-lg">
              Newsletter
            </h3>
            <p className="text-body-sm text-feliz-gris-500 mb-space-md">
              Recibí ofertas exclusivas y novedades mayoristas
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex gap-space-sm"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                className="flex-1 bg-feliz-gris-900 text-feliz-blanco px-space-md py-space-sm rounded border border-feliz-gris-500 placeholder-feliz-gris-500 text-body-md focus:outline-none focus:ring-2 focus:ring-feliz-amarillo"
                required
              />
              <button
                type="submit"
                className="bg-feliz-amarillo text-feliz-negro font-archivo font-bold px-space-lg py-space-sm rounded hover:bg-opacity-90 transition-all text-body-sm"
              >
                AVISARME
              </button>
            </form>
          </div>

          {/* Columna 2: Contacto */}
          <div>
            <h3 className="font-archivo font-bold text-headline-md mb-space-lg">
              Contacto
            </h3>
            <ul className="space-y-space-md text-body-sm">
              <li className="flex gap-space-sm">
                <svg
                  className="w-5 h-5 flex-shrink-0 text-feliz-amarillo"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Alió 3232, Mar del Plata</span>
              </li>
              <li className="flex gap-space-sm">
                <a
                  href="https://wa.me/5492235550199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-space-sm hover:text-feliz-amarillo transition-colors"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-feliz-verde"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378l-.36-.187A9.879 9.879 0 0112.004 2c5.528 0 10.037 4.467 10.037 9.963 0 1.896-.438 3.729-1.222 5.373l-.196.392a9.86 9.86 0 01-3.606 3.606l-.392.196c-1.644.784-3.477 1.222-5.373 1.222-5.496 0-9.963-4.509-9.963-10.037 0-1.897.438-3.729 1.222-5.373l.187-.36A9.87 9.87 0 016.51 3.051 9.879 9.879 0 0112.051 2" />
                  </svg>
                  <span>+54 9 223 555-0199</span>
                </a>
              </li>
              <li className="flex gap-space-sm">
                <svg
                  className="w-5 h-5 flex-shrink-0 text-feliz-amarillo"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:info@feliz.mayorista.com.ar"
                  className="hover:text-feliz-amarillo transition-colors"
                >
                  info@feliz.mayorista.com.ar
                </a>
              </li>
              <li className="text-feliz-gris-500">Lun–Sab 8:00–18:00</li>
            </ul>
          </div>

          {/* Columna 3: Información */}
          <div>
            <h3 className="font-archivo font-bold text-headline-md mb-space-lg">
              Información
            </h3>
            <ul className="space-y-space-sm text-body-sm">
              <li>
                <Link
                  href="/como-comprar"
                  className="hover:text-feliz-amarillo transition-colors"
                >
                  Cómo comprar
                </Link>
              </li>
              <li>
                <Link
                  href="/envios"
                  className="hover:text-feliz-amarillo transition-colors"
                >
                  Envíos y retiros
                </Link>
              </li>
              <li>
                <Link
                  href="/formas-pago"
                  className="hover:text-feliz-amarillo transition-colors"
                >
                  Formas de pago
                </Link>
              </li>
              <li>
                <Link
                  href="/preguntas-frecuentes"
                  className="hover:text-feliz-amarillo transition-colors"
                >
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="hover:text-feliz-amarillo transition-colors"
                >
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="hover:text-feliz-amarillo transition-colors"
                >
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes */}
          <div>
            <h3 className="font-archivo font-bold text-headline-md mb-space-lg">
              Síguenos
            </h3>
            <div className="flex gap-space-md mb-space-xl">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-feliz-gris-900 flex items-center justify-center hover:bg-feliz-amarillo hover:text-feliz-negro transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.205 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-feliz-gris-900 flex items-center justify-center hover:bg-feliz-amarillo hover:text-feliz-negro transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5492235550199"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-feliz-verde flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378l-.36-.187A9.879 9.879 0 0112.004 2c5.528 0 10.037 4.467 10.037 9.963 0 1.896-.438 3.729-1.222 5.373l-.196.392a9.86 9.86 0 01-3.606 3.606l-.392.196c-1.644.784-3.477 1.222-5.373 1.222-5.496 0-9.963-4.509-9.963-10.037 0-1.897.438-3.729 1.222-5.373l.187-.36A9.87 9.87 0 016.51 3.051 9.879 9.879 0 0112.051 2" />
                </svg>
              </a>
            </div>

            {/* Logos medios de pago */}
            <h4 className="font-inter font-bold text-body-sm mb-space-md text-feliz-gris-500">
              MEDIOS DE PAGO
            </h4>
            <div className="flex gap-space-sm flex-wrap">
              {['visa', 'mastercard', 'amex', 'mercadopago'].map((method) => (
                <div
                  key={method}
                  className="w-10 h-6 bg-feliz-gris-900 rounded flex items-center justify-center text-body-sm text-feliz-gris-500"
                >
                  {method.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Barra de copyright */}
      <div className="border-t border-feliz-gris-900 px-gutter py-space-lg">
        <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md text-body-sm text-feliz-gris-500">
          <p>
            © 2024 Super Mayorista Feliz. Todos los derechos reservados.
          </p>
          <div className="flex gap-space-lg">
            <Link href="/privacidad" className="hover:text-feliz-amarillo transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-feliz-amarillo transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
