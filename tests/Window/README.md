# 🪟 Window Handling - LetCode

Este conjunto de pruebas automatizadas usa Playwright para interactuar con múltiples ventanas en la página [LetCode Windows](https://letcode.in/windows).

## 🧪 Objetivos

- Abrir nuevas pestañas y ventanas
- Capturar el título de cada página
- Cerrar ventanas específicas
- Validar navegación entre pestañas

## 🚀 Aprendizajes técnicos

- `page.context().pages()` – lista todas las páginas abiertas
- `page.waitForEvent('popup')` – captura nuevas ventanas
- `page.title()` – obtiene el título de una ventana
- `page.close()` – cierra una ventana específica

---

## 📁 Archivo
- `windows.spec.js`: contiene todos los tests relacionados con el manejo de ventanas.
