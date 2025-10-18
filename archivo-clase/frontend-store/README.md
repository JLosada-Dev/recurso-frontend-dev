# Frontend Store — Proyecto de Clase

## Resumen

FrontEnd Store es una pequeña tienda estática creada como ejercicio práctico para el curso de Frontend. Está pensada para que los estudiantes practiquen HTML semántico, CSS moderno (variables, Grid y Flexbox), diseño responsive y componentes visuales sencillos.

## Estructura del proyecto

```
frontend-store/
├─ css/
│  ├─ normalize.css    # Reset/normalize CSS
│  └─ style.css        # Estilos principales del proyecto
├─ img/                # Imágenes de productos, logo y gráficos
├─ index.html          # Página principal con grid de productos
├─ producto.html       # Página de detalle del producto
└─ nosotros.html       # Página "Sobre nosotros"
```

## Qué aprenderán los estudiantes

- Uso de variables CSS (`:root`) para mantener paletas de color y fuentes centralizadas.
- Diseño responsive con `@media` y Grid/Flexbox.
- Organización semántica del HTML (header, nav, main, footer).
- Buenas prácticas de tipografía y uso de fuentes externas (Google Fonts).
- Cómo estructurar una galería de productos con enlaces a páginas de detalle.

## Dependencias

- Google Fonts: `Staatliches` (cargada desde la CDN en `index.html`).
- No hay dependencias de JavaScript ni build tools — proyecto estático listo para abrir en navegador.

## Cómo ejecutar / Ver en local

- Método rápido: abrir `index.html` en el navegador con doble clic.
- Recomendado para desarrollo: usar Live Server en VSCode o un servidor simple:

```bash
# desde la carpeta frontend-store
python3 -m http.server 5500
# abre http://localhost:5500 en el navegador
```

## Explicación de archivos importantes

- `index.html` — Página principal:

  - Header con logo
  - Navegación con clase `navegacion`
  - Grid de productos (`.grid`) con tarjetas de producto que enlazan a `producto.html`
  - Elementos de diseño como `.grafico--camisas` usan imágenes de fondo en CSS

- `css/style.css` — Puntos clave:

  - Variables en `:root` (colores, fuentes)
  - Tipografía con `font-size: 62.5%` en `html` para facilitar `rem`
  - Grid adaptativo (`.grid`) que pasa de 2 columnas a 3 en pantallas >= 768px
  - Componentes como `.producto`, `.bloques` y `.formulario` con estilos reutilizables

- `css/normalize.css` — Normaliza el comportamiento entre navegadores (archivo estándar)

## Buenas prácticas ya implementadas

- Uso de variables CSS para colores y fuente principal
- Layout responsive y mobile-first (breakpoints claros a 768px)
- Nombres de clases descriptivos (`.producto__imagen`, `.producto__precio`)
- Imágenes fluidas (`img { width: 100%; }`) para evitar desbordes

## Mejoras recomendadas (tareas para estudiantes)

1. Accesibilidad:

   - Añadir `alt` descriptivos en todas las imágenes (si faltan)
   - Añadir `aria-label` o roles donde aplique (navegación, formularios)
   - Asegurar contraste suficiente entre texto y fondo

2. Optimización de imágenes:

   - Crear versiones responsivas (srcset) y formatos modernos (WebP)
   - Comprimir imágenes para mejorar tiempos de carga

3. Interactividad y validación:

   - Añadir validación JS al formulario de la página `producto.html`
   - Implementar un carrito básico con LocalStorage como ejercicio práctico

4. SEO y metadatos:

   - Añadir metatags Open Graph y favicon
   - Mejorar `meta description` y `title` por página
