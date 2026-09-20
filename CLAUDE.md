# Super Mayorista Feliz — Sitio web

## 1. Contexto del negocio

**Super Mayorista Feliz** es un supermercado mayorista de consumo masivo ubicado en **Alió 3232, Mar del Plata, Buenos Aires, Argentina**. Abierto de lunes a sábado, 8 a 17 hs. Propuesta de valor: **sin mínimo de compra** (diferencial principal), precios bajos mayoristas, productos de alta rotación, atención a comercios chicos y medianos. Público: dueños de kioscos, almacenes, despensas, bares, restaurantes y vecinos que compran desde celular, muchas veces con conexión lenta. El sitio es mobile-first, liviano y complementa el canal actual (Instagram `@feliz.supermayorista` y WhatsApp).

## 2. Stack y versiones

- **Next.js 15** (App Router, canary)
- **TypeScript** modo estricto
- **Tailwind CSS v4**
- **shadcn/ui** (componentes base)
- **Zustand** (carrito con persistencia localStorage)
- **lucide-react** (iconos)
- **next/image** (imágenes optimizadas)

## 3. Comandos

```bash
npm run dev         # Desarrollo en http://localhost:3000
npm run build       # Build de producción
npm run start       # Ejecutar build
npm run typecheck   # Verificar tipos TS (más barato que build)
npm run lint        # Linting (si aplica)
```

## 4. Estructura de carpetas

```
feliz/
├── .claude/settings.json          # Hooks para sonidos de terminación
├── CLAUDE.md                       # Este archivo
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── app/                           # App Router
│   ├── layout.tsx                 # Layout global (header, footer, providers)
│   ├── page.tsx                   # Home (8 secciones)
│   ├── favicon.ico, etc.          # SEO metadata
│   ├── (main)/                    # Rutas públicas
│   │   ├── categorias/            # Todas las categorías
│   │   ├── c/[slug]/              # Listado de una categoría (con filtros)
│   │   ├── p/[slug]/              # Ficha de producto
│   │   ├── ofertas/               # Productos con descuento
│   │   ├── buscar/                # Búsqueda
│   │   ├── carrito/               # Carrito completo
│   │   ├── ingresar/              # Login (maqueta + TODO)
│   │   ├── crear-cuenta/          # Registro mayorista (maqueta + TODO)
│   │   ├── nosotros/              # Quiénes somos
│   │   ├── como-comprar/          # Cómo comprar / envíos
│   │   ├── contacto/              # Contacto + mapa + horarios
│   │   └── preguntas-frecuentes/  # FAQ
│   └── api/                       # APIs si se necesitan (webhooks, etc)
├── src/
│   ├── components/                # Componentes React
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── MegaMenu.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── TopBar.tsx
│   │   ├── product/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── QuantitySelector.tsx
│   │   │   └── PriceDisplay.tsx
│   │   ├── cart/
│   │   │   ├── CartDrawer.tsx
│   │   │   └── CartSummary.tsx
│   │   ├── common/
│   │   │   ├── Badge.tsx
│   │   │   ├── Breadcrumb.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── Skeleton.tsx
│   │   └── sections/
│   │       ├── HeroCarousel.tsx
│   │       ├── BenefitsStrip.tsx
│   │       ├── CategoriesGrid.tsx
│   │       └── ProductGrid.tsx
│   ├── lib/
│   │   ├── api.ts                 # Capa unificada de datos (getProducts, getCategories, etc.)
│   │   ├── cart-store.ts          # Zustand store del carrito
│   │   ├── formatting.ts          # formatPrice(), formatWhatsApp(), etc.
│   │   └── utils.ts               # Utilidades generales
│   ├── types/
│   │   └── index.ts               # Todos los types (Product, Category, etc.)
│   ├── data/
│   │   ├── productos.json         # Mock de productos (generado por script)
│   │   ├── categorias.json        # Mock de categorías
│   │   └── ofertas.json           # Mock de ofertas
│   └── styles/
│       └── globals.css            # Estilos globales (tailwind directives)
├── public/
│   ├── brand/                     # Logo real
│   │   ├── logo.svg
│   │   ├── logo-blanco.svg
│   │   ├── isotipo.svg
│   │   ├── favicon.ico
│   │   ├── apple-icon.png
│   │   └── og-image.png
│   └── productos/                 # Imágenes placeholder (si se generan)
├── design-ref/                    # Referencia visual (NO se commitea a src/)
│   ├── screens/                   # Capturas de Stitch
│   └── stitch-export/             # HTML/CSS de Stitch (referencia)
└── scripts/
    └── seed.ts                    # Generador de mock datos
```

## 5. Design tokens

**Paleta (extraída de `/design-ref/` y validada contra logo real):**

```css
--feliz-rojo:        #E30613;  /* color de marca, ofertas, precios, CTAs */
--feliz-rojo-oscuro: #B3040F;  /* hover de CTAs primarios */
--feliz-amarillo:    #FFE000;  /* acentos, badges, navegación */
--feliz-negro:       #0D0D0D;  /* header, footer, bloques hero */
--feliz-gris-900:    #1A1A1A;  /* superficies oscuras secundarias */
--feliz-gris-100:    #F2F2F2;  /* fondo del body */
--feliz-gris-500:    #6B6B6B;  /* texto secundario */
--feliz-blanco:      #FFFFFF;  /* superficies principales */
--feliz-verde:       #25D366;  /* WhatsApp */
```

**Tipografía:**
- Display & titulares: **Archivo Narrow** (700/800), `tracking-tight`
- Cuerpo: **Inter** (400/500/600)
- Tamaños: 48px hero (desktop), 30px (mobile); 32px headlines; 14px body

**Radios y sombras:**
- Tarjetas: 12px
- Botones: 8px
- Badges/pills: 9999px
- Sombras: `0 2px 8px rgba(0,0,0,0.06)` reposo, `0 8px 24px rgba(0,0,0,0.12)` hover

## 6. Convenciones de código

- **Naming:** camelCase en JS/TS, kebab-case en archivos y rutas de diseño
- **Components:** Servidor por defecto; `"use client"` solo si hay interactividad
- **Types:** Todos centralizados en `src/types/index.ts`; no types inline
- **Precios:** Siempre formateados con `Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" })`; sin centavos si es entero
- **Idioma:** Español rioplatense exclusivamente (voseo en CTAs: "Comprá", "Armá", "Pedí")
- **API:** Toda lectura de datos pasa por `src/lib/api.ts` (getProducts, getCategories, etc.). Hoy devuelven mocks; mañana fetch a endpoint real sin cambiar componentes
- **No `any`:** TypeScript modo estricto siempre
- **Datos mock:** Generados con script `scripts/seed.ts`, luego commiteados como `src/data/*.json`

## 7. Modelo de datos

```typescript
// En src/types/index.ts

type Product = {
  id: string;
  slug: string;
  nombre: string;              // ej. "ACEITE DE GIRASOL NATURA 900ML"
  marca: string;
  descripcion: string;
  categoriaId: string;
  subcategoriaId: string;
  imagenes: string[];
  sku: string;
  unidadVenta: "unidad" | "bulto" | "caja" | "pack";
  unidadesPorBulto: number;     // ej. 12
  precioMayorista: number;      // por unidad de venta, en centavos
  precioMinorista: number;
  precioAnterior?: number;      // si hay oferta
  enOferta: boolean;
  destacado: boolean;
  stock: "disponible" | "ultimas-unidades" | "sin-stock";
  etiquetas?: string[];         // ["NUEVO", "MÁS VENDIDO"]
};

type Category = {
  id: string;
  slug: string;
  nombre: string;
  imagen: string;
  icono: string;
  subcategorias: Subcategory[];
  cantidadProductos: number;
};

type CartItem = {
  productId: string;
  cantidad: number;
  precioUnitario: number;       // guardado al agregar (para aislar de cambios de precio)
};
```

Toda consulta tipo `getProducts()`, `getCategories()`, `searchProducts()` vive en `src/lib/api.ts` y es agnóstica al origen de datos (hoy mock, mañana fetch).

## 8. Estado del proyecto

**Checklist de etapas Fase 1:**

- [x] **NIVEL 0:** CLAUDE.md ✓ | Plan ✓ | src/types ✓ | Tailwind config ✓ | scripts/seed.ts ✓ | src/data/*.json ✓ (174 productos, 8 categorías, 25 ofertas)
- [ ] **NIVEL 1:**
  - [ ] A. Layout global (header, nav, footer, FAB WhatsApp)
  - [ ] B. Primitivas de UI (ProductCard, Badge, Breadcrumb, Skeletons, etc.)
  - [ ] C. Páginas estáticas (nosotros, como-comprar, contacto, FAQ, login, registro)
- [ ] **NIVEL 2:**
  - [ ] D. Home (8 secciones)
  - [ ] E. Catálogo (/c/[slug] con filtros, /buscar, /ofertas)
  - [ ] F. Ficha de producto (/p/[slug])
- [ ] **NIVEL 3:**
  - [ ] G. Carrito (Zustand store, drawer, /carrito, WhatsApp)
- [ ] **NIVEL 4:**
  - [ ] H. SEO (metadata, sitemap, robots, OG)
  - [ ] I. QA (responsive 390px, teclado, Lighthouse mobile ≥90)

## 9. Decisiones tomadas

- **20/09/2026 — NIVEL 0 cierre:** Usar script `seed.js` (no TS) para evitar fricciones con ts-node. Generó 174 productos verosímiles (nombres, marcas reales, precios en pesos 2026) distribuidos entre 8 categorías. Capa de datos agnóstica: `src/lib/api.ts` lee JSONs; cambiar a fetch real no requiere tocar componentes.

## 10. Pendiente para la Fase 2

- **Login / Registro:** Rutas maquetadas en `/ingresar` y `/crear-cuenta`, formularios visuales, pero lógica real en Fase 2 (backend + auth)
- **Listas de precios por cliente:** El type Product ya tiene `precioMinorista` y `precioMayorista`; `PriceContext` siempre devuelve mayorista. En Fase 2, cambiar según tipo de cliente
- **Checkout con Mercado Pago:** Botón visible en `/carrito` pero deshabilitado con tooltip "Próximamente"
- **Panel de administración:** `/admin` (no incluido en Fase 1)
- **TODOs específicos:** Ver punto 10 de `prompt-super-feliz-frontend_2.md` líneas 55–56 para detalles

---

**Última actualización:** 20/09/2026 — Creación inicial de CLAUDE.md
