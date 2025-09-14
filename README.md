# Auréthica API

Este repositorio contiene únicamente el backend/API de Auréthica, un servicio diseñado para servir datos relacionados con estilos estéticos. El frontend se gestiona completamente en Figma.

## API / Backend

La carpeta `api/` incluye:

- `server.js`: servidor Node/Express que sirve los datos del servicio.
- `package.json`: dependencias (`express`, `cors`, `dotenv`) y scripts de inicio.
- `data/`: ficheros JSON con estilos (`styles.json`), preguntas iniciales (`onboarding.json`), mensajes puente (`messages.json`) y sugerencias (`tips.json`).

## Endpoints Disponibles

- `GET /health` - Health check del servidor
- `GET /api` - Información de la API y endpoints disponibles
- `GET /api/styles` - Lista completa de estilos disponibles
- `GET /api/styles/:id` - Detalles de un estilo específico por ID
- `GET /api/tips` - Consejos y sugerencias
- `GET /api/messages` - Mensajes de la aplicación
- `GET /api/onboarding` - Datos del proceso de onboarding

## Desarrollo Local

### Prerrequisitos

- Node.js 16.0.0 o superior
- npm (incluido con Node.js)

### Instalación y Ejecución

1. **Instalar dependencias:**
   ```bash
   npm run install:api
   ```

2. **Configurar variables de entorno:**
   ```bash
   cp api/.env.example api/.env
   ```
   
   Edita `api/.env` según sea necesario. Los valores por defecto funcionan para desarrollo local.

3. **Iniciar el servidor:**
   ```bash
   npm start
   ```
   
   El servidor estará disponible en `http://localhost:3001`

## Despliegue

### Variables de Entorno de Producción

```
NODE_ENV=production
PORT=10000
CORS_ORIGIN=https://tu-dominio-frontend.com
```

### Configuración CORS

El servidor utiliza configuración CORS basada en variables de entorno:
- La variable `CORS_ORIGIN` controla los orígenes permitidos
- Múltiples orígenes se pueden separar por comas
- Por defecto en desarrollo: `http://localhost:3000,http://localhost:5173`

---

Auréthica – "Elevamos la estética a ética".
