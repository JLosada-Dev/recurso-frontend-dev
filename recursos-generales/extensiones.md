# ⚙️ Extensiones recomendadas para Visual Studio Code

Estas extensiones optimizan el entorno de desarrollo para proyectos en JavaScript, TypeScript, HTML, CSS y frameworks como Angular o React.

---

## 📦 Instalación rápida

Ejecuta este comando en la terminal de VS Code para instalar todas las extensiones de una sola vez:

```bash
code --install-extension dbaeumer.vscode-eslint \
--install-extension esbenp.prettier-vscode \
--install-extension formulahendry.code-runner \
--install-extension ritwickdey.liveserver \
--install-extension wallabyjs.quokka-vscode \
--install-extension usernamehw.errorlens
```

---

## 🧩 Descripción de extensiones

| Extensión | ID | Descripción |
|-----------|-----|-------------|
| **ESLint** | `dbaeumer.vscode-eslint` | Detecta errores de sintaxis y estilo en JS/TS |
| **Prettier** | `esbenp.prettier-vscode` | Formatea automáticamente el código |
| **Code Runner** | `formulahendry.code-runner` | Ejecuta fragmentos de código rápidamente |
| **Live Server** | `ritwickdey.liveserver` | Servidor local con recarga automática |
| **Quokka.js** | `wallabyjs.quokka-vscode` | Muestra resultados de JS/TS en tiempo real |
| **Error Lens** | `usernamehw.errorlens` | Resalta errores directamente en el código |

---

## ⚙️ Configuración recomendada

**Paso 1:** Abre la configuración de VS Code:
- Presiona `Ctrl + ,` (o `Cmd + ,` en Mac)
- Busca "Settings (JSON)"
- Haz clic en el ícono de archivo en la esquina superior derecha

**Paso 2:** Agrega la siguiente configuración:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript", "html"],
  "prettier.singleQuote": true,
  "prettier.semi": false,
  "prettier.tabWidth": 2,
  "prettier.trailingComma": "es5",
  "files.autoSave": "onWindowChange",
  "code-runner.runInTerminal": true,
  "liveServer.settings.port": 5500
}
```

---

## 💡 Consejos útiles

✅ **Después de instalar:**
- Reinicia VS Code para aplicar los cambios

✅ **Atajos de teclado:**
- `Ctrl + Shift + I` → Formatear archivo manualmente
- `Alt + Shift + F` → Formatear documento (alternativa)

✅ **Requisitos previos:**
- Tener **Node.js** instalado para que ESLint y Prettier funcionen correctamente

✅ **Para proyectos Angular:**
- Prettier y ESLint mantienen el código limpio y consistente automáticamente

---

📚 *Configuración diseñada para entornos académicos y proyectos de desarrollo web moderno.*
