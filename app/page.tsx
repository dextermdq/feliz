import { getProducts } from "@/src/lib/api";
import {
  HeroSection,
  BenefitsStrip,
  CategoriesGrid,
  ProductGrid,
  CTASection,
} from "@/src/components/sections";
import { MoreSoldSection } from "@/src/components/sections/MoreSoldSection";
import { HowToBuySection } from "@/src/components/sections/HowToBuySection";
import { LocationMap } from "@/src/components/sections/LocationMap";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";

export default async function Home() {
  const allProducts = await getProducts();
  const destacados = allProducts.filter((p) => p.destacado).slice(0, 8);
  const ofertas = allProducts.filter((p) => p.enOferta).slice(0, 8);
  const masVendidos = allProducts
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-[164px] bg-feliz-gris-100">
        {/* Sección 1: Hero Section (fullwidth) */}
        <HeroSection />

        {/* Sección 2: Benefits Strip (fondo blanco) */}
        <section className="w-full bg-feliz-blanco py-space-xl shadow-sm">
          <div className="max-w-container mx-auto page-margin">
            <BenefitsStrip />
          </div>
        </section>

        {/* Contenedor principal para secciones con padding */}
        <div className="w-full max-w-container mx-auto page-margin py-space-2xl space-y-space-2xl">

          {/* Sección 3: Categorías */}
          <section>
            <CategoriesGrid />
          </section>

          {/* Sección 4: Productos Destacados */}
          <section>
            <ProductGrid
              titulo="Productos Destacados"
              descripcion="Nuestra selección de productos con mejor relación precio-calidad"
              productos={destacados}
              verTodo={{ texto: "Ver todos", href: "/categorias" }}
            />
          </section>

          {/* Sección 5: Ofertas (5 columnas) */}
          <section id="ofertas-semana">
            <div className="flex items-center justify-between mb-space-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span>✓</span>
                  <h2 className="font-headline-lg text-headline-lg text-feliz-negro uppercase tracking-tight">
                    OFERTAS DE LA SEMANA
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-feliz-gris-500">
                  Precios especiales por tiempo limitado o hasta agotar stock.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-space-xs">
                <span className="px-3 py-1 bg-feliz-amarillo text-feliz-negro font-label-caps text-label-caps font-bold rounded">
                  STOCK ASEGURADO
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
              {ofertas.slice(0, 5).map((product) => (
                <div
                  key={product.id}
                  className="bg-feliz-blanco rounded-xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
                >
                  <span className="absolute top-space-sm left-space-sm z-10 px-2.5 py-0.5 bg-feliz-rojo text-feliz-blanco font-label-badge text-label-badge font-bold rounded-full shadow-sm">
                    -{Math.round(((product.precioAnterior || product.precioMayorista) - product.precioMayorista) / (product.precioAnterior || product.precioMayorista) * 100)}% OFF
                  </span>

                  <div className="relative w-full aspect-square mb-space-sm rounded-lg overflow-hidden bg-feliz-blanco flex items-center justify-center">
                    <img
                      src={product.imagenes[0] || ""}
                      alt={product.nombre}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col flex-grow">
                    <span className="font-body-sm text-body-sm text-feliz-gris-500 uppercase tracking-wider font-semibold">
                      {product.marca}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-feliz-negro leading-snug line-clamp-2 mt-0.5">
                      {product.nombre}
                    </h3>
                    <span className="inline-block mt-space-xs font-label-badge text-label-badge text-feliz-negro bg-feliz-gris-100 px-2 py-0.5 rounded font-semibold w-fit text-xs">
                      {product.unidadVenta} x {product.unidadesPorBulto}
                    </span>

                    <div className="mt-space-md">
                      {product.precioAnterior && (
                        <span className="font-body-sm text-body-sm text-feliz-gris-500 line-through">
                          $ {(product.precioAnterior / 100).toFixed(0)}
                        </span>
                      )}
                      <span className="font-price-xl text-price-xl text-feliz-rojo font-bold leading-none">
                        $ {(product.precioMayorista / 100).toFixed(0)}
                      </span>
                      <div className="font-body-sm text-body-sm text-feliz-gris-500 mt-0.5">
                        $ {(product.precioMayorista / 100).toFixed(0)} por unidad
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-space-md py-2.5 bg-feliz-rojo text-feliz-blanco font-label-caps text-label-caps font-bold rounded-lg hover:bg-feliz-rojo-oscuro transition-colors flex items-center justify-center gap-1">
                    <span>+ AGREGAR</span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 6: Más Vendidos */}
          <MoreSoldSection productos={masVendidos} />
        </div>

        {/* Sección 7: Ubicación y Mapa */}
        <LocationMap />

        {/* Sección 8: CTA (fullwidth) */}
        <CTASection />

        {/* Sección 9: How to buy (fullwidth) */}
        <HowToBuySection />
      </main>
      <Footer />
    </>
  );
}
