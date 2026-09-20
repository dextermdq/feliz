import type { Product, Category, SearchFilters } from "@/src/types";
import { productosDemoData } from "@/src/data/productos-demo";
import categorias from "@/src/data/categorias.json";

const PRODUCTOS: Product[] = productosDemoData;
const CATEGORIAS: Category[] = categorias as Category[];

export async function getProducts(filters?: SearchFilters): Promise<Product[]> {
  let result = [...PRODUCTOS];

  if (filters?.categoriaId) {
    result = result.filter((p) => p.categoriaId === filters.categoriaId);
  }

  if (filters?.subcategoriaId) {
    result = result.filter((p) => p.subcategoriaId === filters.subcategoriaId);
  }

  if (filters?.marca) {
    result = result.filter((p) =>
      p.marca.toLowerCase().includes(filters.marca!.toLowerCase())
    );
  }

  if (filters?.precioMin !== undefined) {
    result = result.filter((p) => p.precioMayorista >= filters.precioMin!);
  }

  if (filters?.precioMax !== undefined) {
    result = result.filter((p) => p.precioMayorista <= filters.precioMax!);
  }

  if (filters?.soloOfertas) {
    result = result.filter((p) => p.enOferta);
  }

  if (filters?.soloDisponibles) {
    result = result.filter((p) => p.stock !== "sin-stock");
  }

  if (filters?.ordenar) {
    switch (filters.ordenar) {
      case "precio-asc":
        result.sort((a, b) => a.precioMayorista - b.precioMayorista);
        break;
      case "precio-desc":
        result.sort((a, b) => b.precioMayorista - a.precioMayorista);
        break;
      case "a-z":
        result.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case "ofertas-primero":
        result.sort((a, b) => {
          if (a.enOferta && !b.enOferta) return -1;
          if (!a.enOferta && b.enOferta) return 1;
          return 0;
        });
        break;
      case "relevancia":
      default:
        break;
    }
  }

  return result;
}

export async function getCategories(): Promise<Category[]> {
  return CATEGORIAS;
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  return CATEGORIAS.find((c) => c.slug === slug) || null;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return PRODUCTOS.find((p) => p.slug === slug) || null;
}

export async function searchProducts(query: string): Promise<Product[]> {
  const q = query.toLowerCase();
  return PRODUCTOS.filter(
    (p) =>
      p.nombre.toLowerCase().includes(q) ||
      p.marca.toLowerCase().includes(q) ||
      p.descripcion.toLowerCase().includes(q)
  );
}

export async function getOffers(): Promise<Product[]> {
  return PRODUCTOS.filter((p) => p.enOferta);
}

export async function getFeaturedProducts(limit: number = 8): Promise<Product[]> {
  return PRODUCTOS.filter((p) => p.destacado).slice(0, limit);
}

export async function getProductsByCategorySlug(
  slug: string,
  filters?: SearchFilters
): Promise<Product[]> {
  const category = CATEGORIAS.find((c) => c.slug === slug);
  if (!category) return [];

  return getProducts({
    ...filters,
    categoriaId: category.id,
  });
}

export function formatPrice(cents: number): string {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });
  return formatter.format(cents / 100);
}

export function formatPriceSimple(cents: number): string {
  return `$${Math.floor(cents / 100).toLocaleString("es-AR")}`;
}
