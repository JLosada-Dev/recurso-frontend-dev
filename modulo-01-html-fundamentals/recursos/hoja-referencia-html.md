# Hoja de Referencia Rápida - HTML

## Estructura Básica

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Título de la página</title>
  </head>
  <body>
    <!-- Contenido visible -->
  </body>
</html>
```

## Elementos de Texto

| Etiqueta        | Descripción                      | Ejemplo                       |
| --------------- | -------------------------------- | ----------------------------- |
| `<h1>` a `<h6>` | Encabezados (1 = más importante) | `<h1>Título Principal</h1>`   |
| `<p>`           | Párrafo                          | `<p>Texto del párrafo</p>`    |
| `<br>`          | Salto de línea                   | `Línea 1<br>Línea 2`          |
| `<strong>`      | Texto importante (negrita)       | `<strong>Importante</strong>` |
| `<em>`          | Texto con énfasis (cursiva)      | `<em>Énfasis</em>`            |
| `<code>`        | Código en línea                  | `<code>&lt;html&gt;</code>`   |

## Listas

### Lista No Ordenada

```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>
```

### Lista Ordenada

```html
<ol>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
</ol>
```

## Enlaces

| Tipo          | Sintaxis                                       | Descripción           |
| ------------- | ---------------------------------------------- | --------------------- |
| Enlace básico | `<a href="URL">Texto</a>`                      | Enlace a otra página  |
| Nueva pestaña | `<a href="URL" target="_blank">Texto</a>`      | Abre en nueva pestaña |
| Email         | `<a href="mailto:email@ejemplo.com">Email</a>` | Enlace de correo      |
| Teléfono      | `<a href="tel:+123456789">Llamar</a>`          | Enlace de teléfono    |

## Multimedia

### Imágenes

```html
<img src="imagen.jpg" alt="Descripción" width="300" />

<!-- Con pie de foto -->
<figure>
  <img src="imagen.jpg" alt="Descripción" />
  <figcaption>Pie de foto</figcaption>
</figure>
```

### Video

```html
<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4" />
  Tu navegador no soporta video.
</video>
```

### Audio

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  Tu navegador no soporta audio.
</audio>
```

## Formularios

### Estructura Básica

```html
<form action="#" method="post">
  <label for="campo">Etiqueta:</label>
  <input type="text" id="campo" name="campo" />
  <button type="submit">Enviar</button>
</form>
```

### Tipos de Input

| Tipo       | Sintaxis                            | Descripción             |
| ---------- | ----------------------------------- | ----------------------- |
| Texto      | `<input type="text">`               | Campo de texto          |
| Email      | `<input type="email">`              | Campo de email          |
| Contraseña | `<input type="password">`           | Campo de contraseña     |
| Fecha      | `<input type="date">`               | Selector de fecha       |
| Radio      | `<input type="radio" name="grupo">` | Botón de opción         |
| Checkbox   | `<input type="checkbox">`           | Casilla de verificación |
| Archivo    | `<input type="file">`               | Subir archivo           |

### Otros Elementos de Formulario

```html
<!-- Área de texto -->
<textarea rows="4" cols="50">Texto predeterminado</textarea>

<!-- Lista desplegable -->
<select>
  <option value="opcion1">Opción 1</option>
  <option value="opcion2">Opción 2</option>
</select>

<!-- Botones -->
<button type="submit">Enviar</button>
<button type="reset">Limpiar</button>
```

## Tablas

```html
<table>
  <caption>
    Título de la tabla
  </caption>
  <thead>
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
    </tr>
  </tbody>
</table>
```

## Elementos Semánticos

| Etiqueta    | Descripción                    |
| ----------- | ------------------------------ |
| `<header>`  | Encabezado de página o sección |
| `<nav>`     | Navegación principal           |
| `<main>`    | Contenido principal            |
| `<section>` | Sección temática               |
| `<article>` | Contenido independiente        |
| `<aside>`   | Contenido lateral              |
| `<footer>`  | Pie de página                  |

## Atributos Globales Importantes

| Atributo | Descripción           | Ejemplo                  |
| -------- | --------------------- | ------------------------ |
| `id`     | Identificador único   | `<div id="header">`      |
| `class`  | Clase para CSS        | `<p class="destacado">`  |
| `title`  | Información adicional | `<img title="Más info">` |
| `lang`   | Idioma del elemento   | `<p lang="en">Hello</p>` |

## Buenas Prácticas

- ✅ Usa HTML semántico (`<header>`, `<main>`, `<footer>`)
- ✅ Incluye siempre el atributo `alt` en imágenes
- ✅ Usa `lang` en el elemento `<html>`
- ✅ Estructura el contenido con encabezados jerárquicos
- ✅ Valida tu HTML en [validator.w3.org](https://validator.w3.org/)
- ✅ Usa comentarios para explicar secciones complejas
