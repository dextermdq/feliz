#!/bin/bash

# Script para descargar imágenes de productos desde Open Food Facts
# Uso: bash scripts/download-product-images.sh

set -e

USER_AGENT="FelizMayorista/1.0 (demo)"
OUTPUT_DIR="public/images/productos"
CREDITS_FILE="$OUTPUT_DIR/CREDITS.md"

mkdir -p "$OUTPUT_DIR"

# Array de productos: (slug, busqueda, fuente_alternativa)
declare -a PRODUCTOS=(
  "aceite-girasol-natura-900ml|Natura aceite girasol|world.openfoodfacts.org"
  "fideos-tirabulon-lucchetti-500g|Lucchetti fideos tirabuzón|world.openfoodfacts.org"
  "arroz-largo-fino-molinos-ala-1kg|Molinos Ala arroz|world.openfoodfacts.org"
  "gaseosa-coca-cola-2-25l|Coca Cola 2.25|world.openfoodfacts.org"
  "sprite-original-2-25l|Sprite 2.25|world.openfoodfacts.org"
  "naranja-pulp-2-5l|Naranja Pulp jugo|world.openfoodfacts.org"
  "leche-entera-la-serenisima-1l|La Serenísima leche 1L|world.openfoodfacts.org"
  "queso-barra-la-serenisima-250g|La Serenísima queso|world.openfoodfacts.org"
  "yogur-la-serenisima-160g|La Serenísima yogur|world.openfoodfacts.org"
  "hamburguesas-congeladas-500g|Arcor hamburguesas congeladas|world.openfoodfacts.org"
  "papas-fritas-congeladas-1kg|Papas fritas congeladas|world.openfoodfacts.org"
  "milanesas-congeladas-500g|Arcor milanesas|world.openfoodfacts.org"
  "lavandina-ayudin-1l|Ayudín lavandina|world.openproductsfacts.org"
  "detergente-magistral-750ml|Magistral detergente|world.openproductsfacts.org"
  "desodorante-ambiental-500ml|Magistral desodorante ambiental|world.openproductsfacts.org"
  "shampoo-dove-250ml|Dove shampoo|world.openbeautyfacts.org"
  "acondicionador-sedal-250ml|Sedal acondicionador|world.openbeautyfacts.org"
  "jabon-dove-100g|Dove jabón|world.openbeautyfacts.org"
  "galletitas-chocolinas-160g|Bagley Chocolinas|world.openfoodfacts.org"
  "chocolate-arcor-30g|Arcor chocolate|world.openfoodfacts.org"
  "alfajor-arcor-60g|Arcor alfajor|world.openfoodfacts.org"
  "vasos-descartables-180cc|Vasos descartables|world.openproductsfacts.org"
  "platos-descartables-23cm|Platos descartables|world.openproductsfacts.org"
  "servilletas-papel-blancas|Servilletas papel|world.openproductsfacts.org"
)

# Inicializar CREDITS.md
> "$CREDITS_FILE"
echo "# Créditos de Imágenes de Productos" >> "$CREDITS_FILE"
echo "" >> "$CREDITS_FILE"
echo "Las imágenes de productos han sido descargadas desde las siguientes fuentes:" >> "$CREDITS_FILE"
echo "" >> "$CREDITS_FILE"

downloaded=0
failed=0

for producto_info in "${PRODUCTOS[@]}"; do
  IFS='|' read -r slug busqueda fuente <<< "$producto_info"

  output_file="$OUTPUT_DIR/${slug}.jpg"

  echo "Buscando: $slug ($busqueda)..."

  # Intentar buscar en Open Food Facts
  response=$(curl -s -H "User-Agent: $USER_AGENT" \
    "https://${fuente}/api/v0/search?q=${busqueda// /+}&page_size=5")

  # Extraer la primera imagen frontal encontrada
  image_url=$(echo "$response" | jq -r '.products[0].image_front_url // empty' 2>/dev/null)

  if [ -n "$image_url" ]; then
    echo "  ✓ Imagen encontrada"
    if curl -s -H "User-Agent: $USER_AGENT" -o "$output_file" "$image_url"; then
      size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null || echo "0")
      if [ "$size" -gt 10000 ]; then
        echo "  ✓ Descargada: ${size} bytes"
        echo "- ${slug}: Open Food Facts — [$image_url]($image_url)" >> "$CREDITS_FILE"
        ((downloaded++))
      else
        echo "  ✗ Archivo muy pequeño (${size} bytes), removiendo..."
        rm -f "$output_file"
        ((failed++))
      fi
    else
      echo "  ✗ Error descargando imagen"
      ((failed++))
    fi
  else
    echo "  ✗ No se encontró imagen"
    ((failed++))
  fi
done

echo ""
echo "=============================================="
echo "Descargadas: $downloaded"
echo "Fallidas: $failed"
echo "=============================================="
