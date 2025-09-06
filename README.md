# Auréthica Site

Este repositorio contiene la interfaz web estática del test y landing de Auréthica, una experiencia diseñada para ayudar a las usuarias a explorar su identidad estética de forma ética y no-juiciosa.

## Estructura

- `index.html`: Portada principal con hero banner, llamada a la acción y enlaces básicos.
- `test.html`: Página del test de estilos (prototipo).
- `style.css`: Hoja de estilos con tipografía, colores y layout.
- `legal.html`: Aviso legal y privacidad.

## Desarrollo

### Configuración del entorno de desarrollo

Este proyecto incluye tanto el frontend estático como una API backend. Para levantar el entorno completo de desarrollo, ejecuta estos tres comandos:

```bash
# 1. Instalar dependencias (frontend + API)
npm run install:all

# 2. Configurar variables de entorno
cp api/.env.example api/.env

# 3. Iniciar servidores de desarrollo
npm run dev
```

Esto iniciará:
- **Frontend**: http://localhost:3000 (servidor de archivos estáticos)
- **API**: http://localhost:3001 (servidor Express)

### Comandos individuales

Si necesitas ejecutar solo una parte:
- **Solo frontend**: `npm run dev:frontend`
- **Solo API**: `npm run dev:api`

### Verificación del entorno

Para verificar que todo funciona correctamente, visita:
- Frontend: http://localhost:3000
- API Health Check: http://localhost:3001/health

**Script de verificación automática:**
```bash
# Ejecutar script de verificación del entorno
./verify-setup.sh
```

Este script verifica que todas las dependencias estén instaladas y el entorno esté configurado correctamente.

### Troubleshooting

#### Puerto ocupado
Si encuentras errores de puerto ocupado:
```bash
# Para puerto 3000 (frontend)
lsof -ti:3000 | xargs kill -9

# Para puerto 3001 (API)  
lsof -ti:3001 | xargs kill -9
```

#### Problemas de CORS
Si hay errores de CORS en el navegador:
1. Verifica que `api/.env` existe y contiene `CORS_ORIGIN=http://localhost:3000`
2. Reinicia el servidor API: `npm run dev:api`
3. Limpia caché del navegador

#### Variables de entorno
Si el API no inicia correctamente:
1. Verifica que existe `api/.env`: `ls -la api/.env`
2. Compara con `api/.env.example` para asegurar que contiene todas las variables necesarias
3. Revisa los logs del servidor para errores específicos

#### Problemas de dependencias
Si hay errores durante la instalación:
```bash
# Limpiar caché de npm
npm cache clean --force

# Eliminar node_modules y reinstalar
rm -rf node_modules api/node_modules
npm run install:all
```

#### Health check falla
Si http://localhost:3001/health no responde:
1. Verifica que el servidor API está ejecutándose (revisa logs en consola)
2. Confirma que no hay firewall bloqueando el puerto 3001
3. Intenta acceder desde otra terminal: `curl http://localhost:3001/health`

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
- **Clean URLs**: URLs sin extensión `.html` (ej: `/test` en lugar de `/test.html`)
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
3. Copia el archivo de configuración: `cp .env.example .env`
4. Inicia el servidor: `npm start`
5. El servidor quedará disponible en `http://localhost:3001`.

**Nota**: Para un setup completo (frontend + API), usa `npm run dev` desde la raíz del proyecto.

---
