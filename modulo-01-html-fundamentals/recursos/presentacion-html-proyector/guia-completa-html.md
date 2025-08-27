# 📘 Guía Completa de HTML: Material de Estudio

## 1. Introducción: ¿Qué es HTML y cómo funciona la web?

**HTML (HyperText Markup Language)** es el lenguaje fundamental para crear páginas web. Su nombre se traduce como "Lenguaje de Marcado de Hipertexto" y sirve para dar **estructura y significado** al contenido web mediante etiquetas especializadas.

### Cómo funciona la web: El proceso completo

El funcionamiento de la web sigue un proceso sistemático que ocurre cada vez que visitamos una página:

1. **El usuario escribe una URL** en el navegador (ejemplo: https://ejemplo.com)
2. **El navegador hace una petición** al servidor usando protocolos HTTP/HTTPS
3. **El servidor responde** enviando documentos (HTML, CSS, JavaScript, imágenes, etc.)
4. **El navegador interpreta el HTML** y lo renderiza como una página web visible

### Componentes clave de la web

- **URL (Uniform Resource Locator):** Localizador único de cada recurso en línea
- **HTTP/HTTPS:** Protocolo que transporta los datos entre cliente y servidor de forma segura
- **HTML:** Lenguaje que da forma, estructura y significado semántico al contenido

---

## 2. Configuración del entorno de desarrollo

Para comenzar a trabajar con HTML de manera profesional, necesitas configurar correctamente tu entorno de desarrollo.

### Herramientas básicas esenciales

#### Editor de código
- **Opciones recomendadas:** Visual Studio Code, Sublime Text, Atom
- **Características importantes:** 
  - Coloreado de sintaxis para facilitar la lectura
  - Autocompletado inteligente de etiquetas
  - Extensiones especializadas para desarrollo web

#### Navegador web
- **Opciones:** Chrome, Firefox, Edge, Safari
- **Uso:** Visualizar, probar y depurar el código HTML

#### Servidor local (opcional pero recomendado)
- **Herramientas:** XAMPP, MAMP o extensión Live Server para VS Code
- **Función:** Simula cómo funcionaría tu sitio web en un servidor real

### Estructura de carpetas recomendada

Organizar correctamente los archivos desde el inicio es fundamental para proyectos escalables:

```
proyecto/
├── index.html          # archivo principal de la página
├── css/               # hojas de estilo CSS
│   └── styles.css
├── js/                # scripts de JavaScript
│   └── script.js
├── img/               # imágenes y recursos visuales
│   ├── logo.png
│   └── banner.jpg
└── assets/            # otros recursos (fuentes, iconos, etc.)
```

---

## 3. Anatomía de un documento HTML

### Estructura básica obligatoria

Todo documento HTML válido debe seguir esta estructura mínima:

```html
<!DOCTYPE html>  <!-- Declara que es HTML5 -->
<html lang="es"> <!-- Elemento raíz del documento -->
  <head>         <!-- Metainformación no visible -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi página web</title>
  </head>
  <body>         <!-- Contenido visible de la página -->
    <h1>Hola mundo</h1>
    <p>Este es mi primer sitio web</p>
  </body>
</html>
```

### Explicación de las partes principales

#### `<!DOCTYPE html>`
- **Función:** Declara que el documento utiliza HTML5
- **Importancia:** Asegura que el navegador interprete el código correctamente

#### `<html lang="es">`
- **Función:** Elemento raíz que contiene todo el documento
- **Atributo lang:** Especifica el idioma principal del contenido (importante para SEO y accesibilidad)

#### `<head>`
La sección head contiene **metainformación** crucial que no es visible para el usuario:
- Enlaces a archivos CSS y JavaScript externos
- Etiquetas `<meta>` para charset, viewport y SEO
- `<title>` que aparece en la pestaña del navegador
- Información para motores de búsqueda

#### `<body>`
Contiene **todo el contenido visible** de la página web que los usuarios pueden ver e interactuar.

### Comentarios en HTML

Los comentarios son fundamentales para documentar el código y facilitar el mantenimiento:

```html
<!-- Este es un comentario de una línea -->

<!--
Este es un comentario
de múltiples líneas
que explica una sección compleja
-->
```

---

## 4. Etiquetas, elementos y atributos

### Conceptos fundamentales

#### Etiqueta
Palabra clave encerrada entre `<` y `>` que define la función o tipo de contenido.

#### Elemento
Estructura completa formada por:
- Etiqueta de apertura
- Contenido (opcional)
- Etiqueta de cierre

#### Atributo
Información adicional que modifica el comportamiento o apariencia del elemento.

### Ejemplos prácticos

```html
<!-- Elemento párrafo simple -->
<p>Hola mundo</p>

<!-- Elemento imagen con atributos -->
<img src="foto.jpg" alt="Descripción de la imagen" width="300">

<!-- Elemento enlace con múltiples atributos -->
<a href="https://ejemplo.com" target="_blank" title="Visitar ejemplo">Enlace externo</a>
```

### Tipos de elementos

#### Elementos normales (con contenido)
```html
<p>Contenido del párrafo</p>
<h1>Título principal</h1>
<div>Contenedor genérico</div>
```

#### Elementos vacíos (sin contenido)
```html
<img src="imagen.jpg" alt="Descripción" />
<br> <!-- Salto de línea -->
<hr> <!-- Línea horizontal -->
<input type="text" name="nombre">
```

### Anidamiento de elementos

Los elementos pueden contener otros elementos, creando una **jerarquía estructurada**:

```html
<section>                    <!-- Elemento padre -->
  <h2>Título de sección</h2> <!-- Elemento hijo -->
  <p>Párrafo de texto</p>    <!-- Elemento hijo -->
  <ul>                       <!-- Elemento hijo que es padre de otros -->
    <li>Elemento 1</li>      <!-- Elemento nieto -->
    <li>Elemento 2</li>      <!-- Elemento nieto -->
    <li>Elemento 3</li>      <!-- Elemento nieto -->
  </ul>
</section>
```

---

## 5. HTML Semántico: El contenido del `<body>`

### ¿Por qué es importante el HTML semántico?

El HTML semántico va más allá de la simple presentación visual. Sus beneficios incluyen:

#### **Accesibilidad mejorada**
- Los lectores de pantalla pueden navegar mejor por el contenido
- Usuarios con discapacidades pueden entender la estructura de la página
- Mejora la experiencia para todos los usuarios

#### **Mejor SEO (Search Engine Optimization)**
- Los motores de búsqueda entienden mejor el contenido
- Mejora el posicionamiento en resultados de búsqueda
- Facilita la indexación correcta del contenido

#### **Código más mantenible**
- El código es más fácil de leer y entender
- Facilita el trabajo en equipo
- Reduce errores y mejora la productividad

#### **Evitar el abuso de `<div>`**
Usa `<div>` únicamente cuando no exista una etiqueta semántica más específica para tu contenido.

### Estructura semántica principal

```html
<body>
  <header>    <!-- Cabecera: logo, título, navegación principal -->
    <nav>     <!-- Menú de navegación -->
    </nav>
  </header>
  
  <main>      <!-- Contenido principal (único por página) -->
    <section> <!-- Bloques temáticos relacionados -->
      <article> <!-- Contenido independiente y reutilizable -->
      </article>
    </section>
  </main>
  
  <aside>     <!-- Contenido complementario -->
  </aside>
  
  <footer>    <!-- Pie de página -->
  </footer>
</body>
```

### Etiquetas semánticas esenciales

| Etiqueta | Función | Uso Típico |
|----------|---------|------------|
| `<header>` | Cabecera de la página o sección | Logo, título principal, navegación |
| `<nav>` | Zona de navegación | Menús principales, breadcrumbs, paginación |
| `<main>` | Contenido principal del documento | El tema central de la página (único por página) |
| `<section>` | Sección temática del contenido | Capítulos, pestañas, bloques temáticos |
| `<article>` | Contenido independiente | Noticias, posts de blog, productos |
| `<aside>` | Contenido complementario | Publicidad, widgets, enlaces relacionados |
| `<footer>` | Pie de página | Copyright, información de contacto, redes sociales |

### Etiquetas de contenido por categorías

#### Títulos y texto
```html
<h1>Título principal (solo uno por página)</h1>
<h2>Título secundario</h2>
<h3>Título terciario</h3>
<!-- h4, h5, h6 para jerarquías más profundas -->

<p>Párrafo de texto normal</p>
<strong>Texto importante (negrita semántica)</strong>
<em>Texto enfatizado (cursiva semántica)</em>
<small>Texto secundario, aclaraciones legales</small>
<mark>Texto resaltado o marcado</mark>
```

#### Listas organizadas
```html
<!-- Lista desordenada (viñetas) -->
<ul>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ul>

<!-- Lista ordenada (números) -->
<ol>
  <li>Paso número uno</li>
  <li>Paso número dos</li>
  <li>Paso número tres</li>
</ol>
```

#### Enlaces y multimedia
```html
<!-- Enlaces -->
<a href="https://ejemplo.com">Enlace externo</a>
<a href="#seccion">Enlace interno</a>
<a href="mailto:contacto@ejemplo.com">Enlace de email</a>

<!-- Imágenes con contexto semántico -->
<figure>
  <img src="grafico.jpg" alt="Gráfico de ventas mensuales">
  <figcaption>Evolución de las ventas durante 2024</figcaption>
</figure>

<!-- Imagen simple -->
<img src="logo.png" alt="Logo de la empresa">
```

#### Datos tabulares
```html
<table>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Precio</th>
      <th>Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>$999</td>
      <td>15</td>
    </tr>
    <tr>
      <td>Mouse</td>
      <td>$29</td>
      <td>50</td>
    </tr>
  </tbody>
</table>
```

#### Elementos de formulario
```html
<form action="/procesar" method="post">
  <label for="nombre">Nombre completo:</label>
  <input type="text" id="nombre" name="nombre" required>
  
  <label for="email">Correo electrónico:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="mensaje">Mensaje:</label>
  <textarea id="mensaje" name="mensaje" rows="4"></textarea>
  
  <button type="submit">Enviar formulario</button>
</form>
```

#### Multimedia avanzada
```html
<!-- Video con controles -->
<video controls width="640" height="480">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Tu navegador no soporta el elemento video.
</video>

<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Tu navegador no soporta el elemento audio.
</audio>

<!-- Contenido externo -->
<iframe src="https://www.youtube.com/embed/VIDEO_ID" 
        width="560" height="315" 
        title="Video de YouTube">
</iframe>
```

#### Elementos autocerrables importantes

Estas etiquetas **no requieren etiqueta de cierre**:

```html
<img src="imagen.jpg" alt="Descripción">
<input type="text" name="campo">
<br> <!-- Salto de línea -->
<hr> <!-- Línea horizontal separadora -->
<meta charset="UTF-8">
<link rel="stylesheet" href="estilos.css">
```

---

## 6. Ejemplo práctico completo: Sitio web profesional

El siguiente ejemplo integra todas las etiquetas y conceptos presentados en una página funcional:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Página de ejemplo con HTML semántico completo">
    <title>Página Completa con HTML Semántico</title>
</head>
<body>
    <!-- Cabecera principal del sitio -->
    <header>
        <h1>Mi Sitio Web Profesional</h1>
        <nav>
            <ul>
                <li><a href="#about">Sobre Nosotros</a></li>
                <li><a href="#multimedia">Multimedia</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <!-- Contenido principal de la página -->
    <main>
        <!-- Sección de presentación -->
        <section id="about">
            <article>
                <h2>Bienvenidos a nuestra plataforma</h2>
                <p>Este es un <strong>ejemplo completo</strong> de cómo estructurar 
                   un documento HTML semántico siguiendo las mejores prácticas de 
                   desarrollo web moderno.</p>
                
                <h3>Características principales:</h3>
                <ul>
                    <li><strong>HTML semántico</strong> para mejor accesibilidad</li>
                    <li><em>Estructura clara</em> y bien organizada</li>
                    <li>Multimedia integrada correctamente</li>
                    <li>Formularios funcionales y accesibles</li>
                </ul>
                
                <p><mark>Nota importante:</mark> Todas las etiquetas están 
                   implementadas siguiendo estándares web actuales.</p>
            </article>
        </section>

        <!-- Sección multimedia -->
        <section id="multimedia">
            <h2>Contenido Multimedia</h2>
            
            <!-- Imagen con contexto semántico -->
            <figure>
                <img src="dashboard.jpg" alt="Panel de control de la aplicación">
                <figcaption>
                    Captura del panel principal de nuestra aplicación
                </figcaption>
            </figure>
            
            <!-- Video embebido con múltiples formatos -->
            <video controls width="640" height="360">
                <source src="demo.mp4" type="video/mp4">
                <source src="demo.webm" type="video/webm">
                <p>Tu navegador no soporta el elemento video. 
                   <a href="demo.mp4">Descarga el video</a> en su lugar.</p>
            </video>
            
            <!-- Contenido externo responsivo -->
            <iframe src="https://www.ejemplo-mapa.com/embed" 
                    width="100%" height="300" 
                    title="Ubicación de nuestras oficinas"
                    loading="lazy">
            </iframe>
        </section>

        <!-- Sección de servicios con tabla -->
        <section id="servicios">
            <h2>Nuestros Servicios</h2>
            <table>
                <thead>
                    <tr>
                        <th>Servicio</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desarrollo Web</td>
                        <td>Creación de sitios web modernos y responsivos</td>
                        <td>Desde $500</td>
                    </tr>
                    <tr>
                        <td>Consultoría SEO</td>
                        <td>Optimización para motores de búsqueda</td>
                        <td>$200/mes</td>
                    </tr>
                    <tr>
                        <td>Mantenimiento</td>
                        <td>Actualizaciones y soporte técnico continuo</td>
                        <td>$100/mes</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- Sección de contacto con formulario completo -->
        <section id="contact">
            <h2>Formulario de Contacto</h2>
            <form action="/procesar-contacto" method="post">
                <!-- Información personal -->
                <fieldset>
                    <legend>Información Personal</legend>
                    
                    <label for="name">Nombre completo:</label>
                    <input type="text" id="name" name="name" required>
                    
                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required>
                    
                    <label for="phone">Teléfono (opcional):</label>
                    <input type="tel" id="phone" name="phone">
                </fieldset>
                
                <!-- Tipo de consulta -->
                <fieldset>
                    <legend>Tipo de consulta:</legend>
                    <input type="radio" id="general" name="tipo" value="general" checked>
                    <label for="general">Consulta general</label>
                    
                    <input type="radio" id="soporte" name="tipo" value="soporte">
                    <label for="soporte">Soporte técnico</label>
                    
                    <input type="radio" id="ventas" name="tipo" value="ventas">
                    <label for="ventas">Información de ventas</label>
                </fieldset>
                
                <!-- Mensaje -->
                <label for="message">Mensaje detallado:</label>
                <textarea id="message" name="message" rows="5" 
                         placeholder="Escribe tu mensaje aquí..." required></textarea>
                
                <!-- Preferencias adicionales -->
                <input type="checkbox" id="newsletter" name="newsletter" value="si">
                <label for="newsletter">Suscribirse a nuestro newsletter mensual</label>
                
                <input type="checkbox" id="updates" name="updates" value="si">
                <label for="updates">Recibir actualizaciones sobre nuevos servicios</label>
                
                <!-- Botones de acción -->
                <button type="submit">Enviar mensaje</button>
                <button type="reset">Limpiar formulario</button>
            </form>
        </section>
    </main>

    <!-- Barra lateral con información complementaria -->
    <aside>
        <h3>Información Adicional</h3>
        <p><small><strong>Horario de atención:</strong><br>
           Lunes a Viernes: 9:00 AM - 6:00 PM<br>
           Sábados: 9:00 AM - 2:00 PM</small></p>
        
        <hr>
        
        <h4>Enlaces útiles</h4>
        <nav aria-label="Enlaces secundarios">
            <ul>
                <li><a href="/politica-privacidad">Política de Privacidad</a></li>
                <li><a href="/terminos-servicio">Términos de Servicio</a></li>
                <li><a href="/faq">Preguntas Frecuentes</a></li>
            </ul>
        </nav>
        
        <p>Síguenos en nuestras redes sociales para contenido exclusivo 
           y <mark>ofertas especiales</mark>.</p>
    </aside>

    <!-- Pie de página -->
    <footer>
        <p>&copy; 2025 Mi Sitio Web Profesional. Todos los derechos reservados.</p>
        <p><small>Desarrollado con HTML semántico y mejores prácticas web.</small></p>
        
        <!-- Enlaces de pie de página -->
        <nav aria-label="Enlaces de pie de página">
            <a href="/aviso-legal">Aviso Legal</a> |
            <a href="/cookies">Política de Cookies</a> |
            <a href="/accesibilidad">Accesibilidad</a>
        </nav>
    </footer>
</body>
</html>
```

---

## 7. Buenas prácticas para HTML profesional

### ✅ Estructura y semántica
- **Usar HTML semántico** siempre antes que contenedores genéricos como `<div>`
- **Mantener jerarquía de títulos:** un único `<h1>` por página, seguido ordenadamente por `<h2>`, `<h3>`, etc.
- **Un solo `<main>`** por página para el contenido principal
- **Estructura lógica** que tenga sentido incluso sin CSS

### ✅ Accesibilidad
- **Atributo `alt`** obligatorio en todas las imágenes
- **Labels apropiados** para todos los campos de formulario
- **Uso correcto de `<fieldset>` y `<legend>`** para agrupar elementos relacionados
- **Atributos ARIA** cuando sea necesario para mejorar la accesibilidad

### ✅ SEO y metadatos
- **`<title>` descriptivo y único** para cada página
- **Meta description** relevante para motores de búsqueda
- **Atributo `lang`** en el elemento `<html>`
- **Estructura de encabezados coherente** para facilitar la indexación

### ✅ Mantenimiento del código
- **Comentarios explicativos** para secciones complejas
- **Indentación consistente** para mejorar la legibilidad
- **Nombres de archivos y IDs descriptivos** en inglés o español consistentemente
- **Validación regular** del código HTML usando herramientas como W3C Validator

### ✅ Rendimiento
- **Optimización de imágenes** con formatos apropiados (WebP, AVIF cuando sea posible)
- **Lazy loading** para contenido multimedia no crítico
- **Minificación del HTML** en producción

---

## 8. Diferencias entre elementos Block e Inline

### Elementos Block (de bloque)
- **Ocupan todo el ancho** disponible de su contenedor
- **Comienzan en una nueva línea** y empujan el contenido siguiente hacia abajo
- **Pueden contener** otros elementos block e inline

**Ejemplos comunes:**
```html
<div>, <p>, <h1>-<h6>, <section>, <article>, <header>, <footer>, <ul>, <ol>, <li>
```

### Elementos Inline (en línea)
- **Ocupan solo el espacio** necesario para su contenido
- **Fluyen junto** con el texto circundante
- **Solo pueden contener** otros elementos inline (no elementos block)

**Ejemplos comunes:**
```html
<span>, <a>, <strong>, <em>, <img>, <input>, <button>
```

---

## 9. Recursos recomendados para continuar aprendiendo

### Documentación oficial
- **MDN Web Docs (Mozilla):** Referencia más completa y actualizada
- **W3Schools:** Tutoriales interactivos y ejemplos prácticos
- **HTML Living Standard (WHATWG):** Especificación oficial del estándar

### Herramientas de práctica y validación
- **Codepen.io:** Editor online para experimentar con código
- **W3C Markup Validator:** Validador oficial de HTML
- **htmlreference.io:** Referencia visual rápida de etiquetas HTML

### Extensiones útiles para VS Code
- **Live Server:** Servidor local automático con recarga en vivo
- **HTML CSS Support:** Autocompletado mejorado
- **Prettier:** Formateo automático del código

---

## 10. Resumen final

HTML es el **lenguaje fundamental** de la web que permite estructurar y dar significado al contenido digital. Los puntos clave para dominar HTML incluyen:

- **La web funciona** a través de la interacción entre URL, HTTP/HTTPS y HTML
- **Estructura mínima esencial:** `<!DOCTYPE html>` + `<html>` + `<head>` + `<body>`
- **HTML semántico** mejora significativamente la accesibilidad, SEO y mantenibilidad del código
- **Evitar el abuso de `<div>`** utilizando etiquetas con significado semántico específico
- **Las etiquetas forman elementos** y los atributos añaden propiedades y comportamientos
- **Herramientas necesarias:** editor de código profesional + navegador web moderno

El dominio de HTML semántico es la base sólida sobre la cual construir cualquier proyecto web profesional. Con esta guía, tienes los conocimientos fundamentales para crear páginas web estructuradas, accesibles y optimizadas para motores de búsqueda.

---

*Esta guía te proporciona una base sólida en HTML. La práctica constante y la experimentación con diferentes tipos de contenido te ayudarán a convertirte en un desarrollador web competente.*