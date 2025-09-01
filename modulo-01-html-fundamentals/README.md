# Módulo 1: Fundamentos de HTML

Bienvenido al módulo de fundamentos de HTML. Este módulo te llevará desde cero hasta dominar los conceptos esenciales para crear páginas web estructuradas y semánticamente correctas.

## 📚 Orden de Estudio Recomendado

Para aprovechar al máximo este módulo, sigue este orden de estudio:

1. **[01-introduccion.html](teoria/01-introduccion.html)** - Estructura básica y elementos fundamentales
2. **[02-contenedores-contenido.html](teoria/02-contenedores-contenido.html)** - Diferencia entre contenedores y contenido
3. **[03-elementos-texto-estructura.html](teoria/03-elementos-texto-estructura.html)** - Encabezados, párrafos y texto
4. **[04-listas-enlaces.html](teoria/04-listas-enlaces.html)** - Listas ordenadas/desordenadas y enlaces
5. **[05-multimedia.html](teoria/05-multimedia.html)** - Imágenes, video y audio
6. **[06-formularios.html](teoria/06-formularios.html)** - Formularios e interactividad
7. **[07-tablas.html](teoria/07-tablas.html)** - Estructuras de datos tabulares

## ¿Qué es HTML?

HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web. Utiliza "etiquetas" para estructurar y dar significado semántico al contenido.

## Estructura básica de un documento HTML

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi primera página web</title>
  </head>
  <body>
    <!-- Todo el contenido visible va aquí -->
    <h1>¡Hola mundo!</h1>
    <p>Este es mi primer párrafo en HTML.</p>
  </body>
</html>
```

## Etiquetas fundamentales

| Etiqueta  | Descripción                                            |
| --------- | ------------------------------------------------------ |
| `<html>`  | Elemento raíz que contiene toda la página              |
| `<head>`  | Metadatos e información para el navegador (no visible) |
| `<title>` | Título que aparece en la pestaña del navegador         |
| `<body>`  | Todo el contenido visible de la página                 |
| `<meta>`  | Información adicional (codificación, responsive, etc.) |

## Etiquetas de contenido más usadas

### Texto y encabezados

- `<h1>` a `<h6>`: Encabezados de diferentes niveles
- `<p>`: Párrafos de texto

### Enlaces y multimedia

- `<a href="">`: Enlaces
- `<img src="" alt="">`: Imágenes

### Listas

- `<ul>`: Lista no ordenada
- `<ol>`: Lista ordenada
- `<li>`: Elemento de lista

### Tablas

- `<table>`: Contenedor de tabla
- `<tr>`: Fila de tabla
- `<td>`: Celda de datos
- `<th>`: Celda de encabezado

### Formularios

- `<form>`: Contenedor de formulario
- `<input>`: Campo de entrada
- `<label>`: Etiqueta para campos
- `<button>`: Botón

## Buenas prácticas

- ✅ Usa sangría consistente para mejorar la legibilidad
- ✅ Agrega comentarios usando `<!-- comentario -->`
- ✅ Usa atributos `alt` en imágenes para accesibilidad
- ✅ Valida tu HTML en [validator.w3.org](https://validator.w3.org/)
- ✅ Usa etiquetas semánticamente correctas
- ✅ Mantén la estructura jerárquica de encabezados

## Recursos útiles

- 📖 [MDN HTML](https://developer.mozilla.org/es/docs/Web/HTML) - Documentación oficial
- 🎓 [W3Schools HTML](https://www.w3schools.com/html/) - Tutoriales interactivos
- 🔍 [HTML Validator](https://validator.w3.org/) - Validador de código HTML

---

¡Explora los archivos de este módulo y experimenta creando tus propias páginas!
