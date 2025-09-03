# Auréthica Site

Este repositorio contiene la interfaz web estática del test y landing de Auréthica, una experiencia diseñada para ayudar a las usuarias a explorar su identidad estética de forma ética y no-juiciosa.

## Estructura

- `index.html`: Portada principal con hero banner, llamada a la acción y enlaces básicos.
- `test.html`: Página del test de estilos (prototipo).
- `style.css`: Hoja de estilos con tipografía, colores y layout.
- `legal.html`: Aviso legal y privacidad.

## Desarrollo

El sitio está basado en HTML y CSS puro para este MVP y se sirve mediante GitHub Pages. Puedes desplegar una versión local clonando el repositorio y abriendo `index.html` en tu navegador.

---

Auréthica – “Elevamos la estética a ética”.

## API / Backend

Este repositorio también contiene un servidor de API para el test. La carpeta `api/` incluye:

- `server.js`: servidor Node/Express que sirve los datos del test.
- `package.json`: dependencias (`express`, `cors`) y scripts de inicio.
- `data/`: ficheros JSON con estilos (`styles.json`), preguntas iniciales (`onboarding.json`), mensajes puente (`messages.json`) y sugerencias (`tips.json`).

### Endpoints

- `GET /styles`: devuelve la lista de estilos disponibles con sus metadatos.
- `GET /styles/:id`: devuelve los detalles de un estilo específico por `id`.
- `GET /health`: endpoint de salud.

### Cómo ejecutar el backend

Para arrancar el servidor de datos localmente:

1. Navega a la carpeta `api/`: `cd api`
2. Instala las dependencias: `npm install`
3. Inicia el servidor: `node server.js`
4. El servidor quedará disponible en `http://localhost:3000`.

---
