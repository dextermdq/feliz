---
name: Mayorista Contundente
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#5e3f3b'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#936e69'
  outline-variant: '#e9bcb6'
  surface-tint: '#c0000c'
  primary: '#b5000b'
  on-primary: '#ffffff'
  primary-container: '#e30613'
  on-primary-container: '#fff5f3'
  inverse-primary: '#ffb4aa'
  secondary: '#6c5e00'
  on-secondary: '#ffffff'
  secondary-container: '#fedf00'
  on-secondary-container: '#716200'
  tertiary: '#0059a8'
  on-tertiary: '#ffffff'
  tertiary-container: '#0071d4'
  on-tertiary-container: '#f5f7ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930007'
  secondary-fixed: '#ffe33b'
  secondary-fixed-dim: '#e2c600'
  on-secondary-fixed: '#211b00'
  on-secondary-fixed-variant: '#524700'
  tertiary-fixed: '#d5e3ff'
  tertiary-fixed-dim: '#a7c8ff'
  on-tertiary-fixed: '#001b3c'
  on-tertiary-fixed-variant: '#004788'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  surface-canvas: '#F2F2F2'
  surface-card: '#FFFFFF'
  brand-red: '#E30613'
  accent-yellow: '#FFE000'
  brand-black: '#0D0D0D'
  success-green: '#1E7E34'
  border-subtle: '#E5E5E5'
  text-muted: '#666666'
typography:
  display-hero:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
  display-hero-mobile:
    fontFamily: Archivo Narrow
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 34px
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
  price-xl:
    fontFamily: Archivo Narrow
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 30px
  price-lg:
    fontFamily: Archivo Narrow
    fontSize: 22px
    fontWeight: '800'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: Archivo Narrow
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
  label-badge:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2.5rem
---

## Brand & Style

This design system delivers a high-impact, functional, and densely structured e-commerce experience tailored specifically for the Argentine wholesale retail sector. The brand personality is grounded, direct, energetic, and unapologetically commercial—communicating unbeatable bulk volume pricing, clear savings, and zero friction.

The visual style synthesizes **High-Contrast Commercialism** with clean, disciplined utility:
- **No Gradients, No Glassmorphism:** Every surface is opaque, crisp, and tactile. Visual strength stems from stark contrasts between pure deep dark foundations, vibrant signal yellows, and aggressive promotional reds.
- **Density with Rigor:** Wholesale shopping demands information density—pack sizes, unit costs, bulk discounts, and tier pricing must be parsed instantly. The layout balances high product frequency with clear visual boundaries and consistent typographic weights.
- **Rioplatense Tone of Voice:** The interactive copy speaks directly to the local customer ("Retirá en el día", "Armá tu pedido", "Comprá al por mayor sin mínimo"), using Argentine currency formatting and colloquial retail conventions.

## Colors

The color palette is built around high-saturation visual cues designed to drive commercial clarity and urgency:

- **Primary Red (`#E30613`):** The primary brand anchor. Used for primary conversion triggers (main "AGREGAR" action buttons, checkout CTAs), prominent sale badges, and the primary price point hierarchy.
- **Secondary Yellow (`#FFE000`):** The high-contrast commercial accent. Used for secondary CTAs (such as "VER CATÁLOGO" or "AVISARME"), notice ribbons, and highlight badges. Any text placed on top of this color must strictly use `#0D0D0D` for maximum legibility and contrast compliance.
- **Neutral Deep Black (`#0D0D0D`):** Applied to dominant structural containers including the sticky main header, primary navigation bars, promotional hero backdrops, and footer blocks.
- **Surface Canvas (`#F2F2F2`) & Card (`#FFFFFF`):** The page backdrop is a steady, light grey that allows pure white product cards to lift off the canvas with immediate definition.
- **Functional Accents:** `#1E7E34` provides a reliable green indicator for stock confirmation pills ("Disponible") and dedicated WhatsApp integration triggers.

## Typography

The typographic hierarchy combines **Archivo Narrow** (display, hero, price tags, and uppercase callouts) with **Inter** (body copy, product specs, and transactional data).

- **High-Impact Numerical Anchors:** Wholesale buyers scan for bottom-line prices first. All primary prices leverage Archivo Narrow Bold/ExtraBold to make figures dense, punchy, and instantly legible in compact shelf-grid arrangements.
- **Argentine Currency Standard:** Prices must always display the full integer with a period thousand separator (e.g., `$12.480`), avoiding trailing cents unless legally required. Subordinated calculations (e.g., `$1.040 por unidad`) use `body-sm` in `#666666`.
- **Display & Headings:** Major category anchors, utility banners, and section headlines use uppercase Archivo Narrow with tight line heights to mimic high-energy wholesale warehouse signage.

## Layout & Spacing

The layout is built for density, rhythm, and mobile efficiency:

- **Desktop Framework:** A standard 12-column grid system capped at a `1280px` maximum viewport container. Outer page margins are `24px`, with column gutters fixed at `16px`. Category listings allocate a persistent `260px` left column for multi-tier filters and faceted navigation, with the remaining columns housing a 3-column product matrix.
- **Mobile Matrix:** The mobile viewport (360px–420px) maximizes screen real estate with `12px` or `16px` outer gutters. Products render in dense 2-column configurations or peek-ahead horizontal carousels with minimal edge spacing to indicate swipeable continuity.
- **Vertical Spacing Cadence:** Sections are spaced tightly (`space-xl` to `space-2xl`) to maintain momentum throughout the purchase flow. Micro-spacing between product card titles, unit pack counts, and CTA buttons sticks strictly to `space-xs` through `space-md`.

## Elevation & Depth

This design system deliberately minimizes deep shadows and floating spatial effects in favor of crisp surfaces:

- **Surface Separation:** Contrast is primarily generated through flat surface juxtaposition (pure `#FFFFFF` product containers against the `#F2F2F2` canvas).
- **Subtle Elevation:** Product cards and floating summary sheets utilize a soft, tight, non-diffused shadow: `box-shadow: 0 2px 8px rgba(13, 13, 13, 0.08)`. On desktop card hover, this subtly steps up to `0 4px 12px rgba(13, 13, 13, 0.12)`.
- **Drawer Panels & Overlays:** The sliding cart drawer uses an absolute level of depth over a solid `rgba(13, 13, 13, 0.6)` backdrop scrim, preventing visual bleed and maintaining focus on the immediate purchase tally.
- **No Blurs:** Backdrop filters and translucent glassmorphism treatments are strictly disallowed.

## Shapes

The geometric structure maintains a balanced, friendly, yet rigorous commercial profile:

- **Product & Content Cards:** Standardized with an explicit `12px` corner radius (`rounded-lg`), producing approachable containers without turning overly bubble-like.
- **Interactive Buttons & Controls:** Form inputs, quantity steppers, and actionable CTA buttons use an `8px` corner radius (`rounded`), providing crisp tap targets that feel purposeful.
- **Status Pills & Promo Badges:** Promotional badges (discount percentages `-25%`, stock alerts `Disponible`, bulto tags) use continuous full-radius pill styling (`9999px`) to immediately set them apart from square content boxes.

## Components

### Buttons
- **Primary Action (CTA):** Solid red `#E30613` background, white uppercase text, `8px` border radius, `font-weight: 700`. Used for "AGREGAR", "PEDIR POR WHATSAPP", and checkout transitions. Full width inside cards and drawers.
- **Secondary Action:** Solid yellow `#FFE000` background, pure black `#0D0D0D` uppercase text. Used for catalogue navigation and WhatsApp quote triggers.
- **Outlined / Ghost Button:** Transparent background, `1.5px` border in `#0D0D0D` or `#E30613`, bold label. Used for secondary drawer navigation ("VER CARRITO COMPLETO") and pagination ("CARGAR MÁS PRODUCTOS").

### Product Cards
- **Structure:** White background `#FFFFFF`, `12px` border radius, subtle border (`1px solid #E5E5E5`), soft shadow.
- **Visual Stacking (Top-to-Bottom):**
  1. Image area (square 1:1 ratio) with top-left floating pill discount badge (red `#E30613` with white text).
  2. Brand tag in uppercase `body-sm` (`#666666`).
  3. Product title (2-line clamp, Archivo/Inter bold).
  4. Packaging detail pill or caption (e.g., "Bulto cerrado x 12 u.").
  5. Price block: Strikethrough previous price (`#999999`), large bold red main price (`$12.480`), unit breakdown (`$1.040 por unidad`).
  6. Stepper counter (`- 1 +`) paired with full-width primary "AGREGAR" button.

### Badges & Chips
- **Discount Badges:** Pill-shaped, background `#E30613`, text `#FFFFFF`, bold `11px`.
- **Incentive Tags:** Pill-shaped, background `#FFE000`, text `#0D0D0D`, bold `11px`.
- **Filter Chips:** Active state features red background `#E30613` with white text and an embedded close icon `×`. Inactive state features `#FFFFFF` with `#E5E5E5` border and `#0D0D0D` text.

### Form Inputs & Quantity Steppers
- **Search & Text Inputs:** Clean white `#FFFFFF` surface, `8px` border radius, `1px solid #CCCCCC`, focusing to a high-contrast `#0D0D0D` outline. Placeholder text in `#888888`.
- **Quantity Selector:** Horizontal 3-part segment with `-` and `+` triggers flanking the central count, housed in a bordered container matching the button height.

### Utility & Promotional Banners
- **Marquee Top Bar:** Yellow background `#FFE000`, height `36px`, filled with uppercase continuous notice text in `#0D0D0D` ("SIN MÍNIMO DE COMPRA · PRECIOS MAYORISTAS").
- **Header & Footer Shell:** Jet black `#0D0D0D` background featuring the yellow-and-red monogram logo, bright white navigation items, and high-visibility yellow notification badges.