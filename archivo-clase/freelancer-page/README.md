# Freelancer Page - Proyecto de Clase

## Resumen

Pequeña landing page tipo "freelancer" creada como ejercicio práctico para el curso de Frontend. Sirve para practicar HTML semántico, CSS moderno (Flexbox y Grid), responsive design y formularios básicos.

## Estructura del proyecto

```
freelancer-page/
├─ css/
│  ├─ normalize.css    # Reset CSS (normalizador)
│  └─ styles.css       # Estilos principales
├─ img/                # Imágenes usadas (hero, avatar, etc.)
└─ index.html          # Página principal
```

## Dependencias

- Usa la fuente `Krub` cargada desde Google Fonts.
- No hay dependencias de JS o build tools; es un proyecto estático.

## Cómo usar / Ejecutar

1. Abrir el archivo `index.html` en el navegador (doble clic) o usar Live Server en VSCode para ver cambios en tiempo real.

2. Si quieres servirlo localmente con Python:

```bash
# desde la carpeta freelancer-page
python3 -m http.server 5500
# luego abre http://localhost:5500 en el navegador
```

## Explicación de componentes

- `index.html`:

  - Header con título principal
  - Barra de navegación responsiva en la sección `.nav-bg`
  - Hero con imagen de fondo y CTA (botón de contacto)
  - Sección de servicios usando Grid en pantallas grandes
  - Formulario de contacto con validación HTML básica
  - Footer simple

- `css/styles.css`:
  - Variables CSS (`:root`) para colores y valores reutilizables
  - Uso de rem y el `html { font-size: 62.5%; }` para trabajar con unidades `rem` más sencillas
  - Diseño responsive con `@media (min-width: 768px)` para adaptar la navegación y el grid de servicios
  - Utilidades: `.contenedor`, `.boton`, `.sombra`, clases flexibles como `.flex`

## Buenas prácticas implementadas

- HTML semántico (header, nav, main, section, footer)
- Accesibilidad básica: `alt` en imágenes (si están presentes), foco visible en botones mediante estilos del navegador
- Uso de variables CSS para facilitar cambios de tema o colores
- Diseño mobile-first con breakpoints claros

## Mejoras recomendadas

- Añadir validaciones más completas y mensajes de error personalizados en el formulario usando JavaScript
- Incluir `aria` attributes para mejorar la accesibilidad (por ejemplo `aria-label` en navegación)
- Optimizar imágenes (servir WebP y tamaños adaptativos)
- Añadir un favicon y metatags de Open Graph para compartir en redes sociales
- Separar componentes CSS en archivos más pequeños si el proyecto crece (por ejemplo `layout.css`, `components.css`)
- Agregar pruebas manuales de contraste de colores para accesibilidad
