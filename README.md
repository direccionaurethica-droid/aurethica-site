# Auréthica Site

Este repositorio contiene la interfaz web estática del test y landing de Auréthica, una experiencia diseñada para ayudar a las usuarias a explorar su identidad estética de forma ética y no-juiciosa.

## Estructura

- `index.html`: Portada principal con hero banner, llamada a la acción y enlaces básicos.
- `style.css`: Hoja de estilos con tipografía, colores y layout.
- `legal.html`: Aviso legal y privacidad.

## Desarrollo

El sitio está basado en HTML y CSS puro para este MVP. Puedes desplegar una versión local clonando el repositorio y abriendo `index.html` en tu navegador.

## Despliegue

### GitHub Pages
El sitio se puede servir mediante GitHub Pages para un despliegue simple de archivos estáticos.

### Vercel (Recomendado)
El sitio está configurado para desplegarse en Vercel con soporte completo para el frontend estático y la API backend.

#### URLs de Despliegue y Preview
- **URL de Producción**: Se generará automáticamente al conectar el repositorio con Vercel
- **URLs de Preview**: Cada PR genera automáticamente una URL de preview única
- **URL de Desarrollo**: Disponible localmente en `http://localhost:3000` para el API

#### Configuración del Proyecto Vercel
1. **Crear proyecto en Vercel**:
   - Ve a [vercel.com](https://vercel.com) y conecta tu cuenta de GitHub
   - Importa este repositorio como un nuevo proyecto
   - Vercel detectará automáticamente la configuración desde `vercel.json`

2. **Configurar dominio personalizado** (opcional):
   - En el dashboard del proyecto, ve a Settings > Domains
   - Añade tu dominio personalizado
   - Configura los registros DNS según las instrucciones de Vercel

3. **Variables de entorno** (si es necesario en el futuro):
   - En Settings > Environment Variables
   - Añade las variables necesarias para producción, preview y desarrollo

La configuración en `vercel.json` incluye:
- **Clean URLs**: URLs sin extensión `.html` (ej: `/gallery` en lugar de `/gallery.html`)
- **Cache-Control**: Headers optimizados para assets estáticos (1 año) y HTML (1 hora)
- **API Routes**: El backend en `/api` puede requerir adaptación para funciones serverless de Vercel

> **Nota**: El servidor Express actual está diseñado para ejecución tradicional. Para despliegue en Vercel, considera convertir las rutas del API a funciones serverless individuales en el directorio `/api` si experimentas problemas con el servidor Express completo.

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
