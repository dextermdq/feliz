import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "feliz-rojo": "#E30613",
        "feliz-rojo-oscuro": "#B3040F",
        "feliz-amarillo": "#FFE000",
        "feliz-negro": "#0D0D0D",
        "feliz-gris-900": "#1A1A1A",
        "feliz-gris-100": "#F2F2F2",
        "feliz-gris-500": "#6B6B6B",
        "feliz-blanco": "#FFFFFF",
        "feliz-verde": "#25D366",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-hero": ["48px", { lineHeight: "52px" }],
        "display-hero-mobile": ["30px", { lineHeight: "34px" }],
        "headline-lg": ["32px", { lineHeight: "38px" }],
        "headline-lg-mobile": ["24px", { lineHeight: "28px" }],
        "headline-md": ["20px", { lineHeight: "24px" }],
        "price-xl": ["28px", { lineHeight: "30px" }],
        "price-lg": ["22px", { lineHeight: "24px" }],
        "body-lg": ["16px", { lineHeight: "24px" }],
        "body-md": ["14px", { lineHeight: "20px" }],
        "body-sm": ["12px", { lineHeight: "16px" }],
      },
      spacing: {
        gutter: "1rem",
        margin: "1.5rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "0.75rem",
        "space-lg": "1rem",
        "space-xl": "1.5rem",
        "space-2xl": "2.5rem",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      boxShadow: {
        subtle: "0 2px 8px rgba(13, 13, 13, 0.06)",
        soft: "0 4px 12px rgba(13, 13, 13, 0.12)",
        md: "0 8px 24px rgba(13, 13, 13, 0.12)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
} satisfies Config;
