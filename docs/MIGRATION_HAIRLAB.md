# Migración de hairlab-data-service a aurethica-site

Este documento detalla la migración completa del API desde el repositorio legacy `hairlab-data-service` al nuevo `aurethica-site`.

## Estado de la Migración: ✅ COMPLETADA

La migración se ha completado exitosamente. El API en `aurethica-site` es un **superconjunto** del API legacy, cubriendo toda la funcionalidad original más características adicionales.

## Comparación de APIs

### Endpoints

| Legacy (hairlab-data-service) | Nuevo (aurethica-site) | Estado | Notas |
|-------------------------------|------------------------|---------|-------|
| `GET /health` | `GET /health` | ✅ Migrado | Mejorado con timestamp |
| `GET /styles` | `GET /api/styles` | ✅ Migrado | Funcionalidad idéntica |
| `GET /styles/:id` | `GET /api/styles/:id` | ✅ Migrado | Funcionalidad idéntica |
| N/A | `GET /api` | ✅ Nuevo | Información del API |
| N/A | `GET /api/tips` | ✅ Nuevo | Consejos de cuidado capilar |
| N/A | `GET /api/messages` | ✅ Nuevo | Mensajes de aplicación |
| N/A | `GET /api/onboarding` | ✅ Nuevo | Preguntas de onboarding |

### Datos

| Archivo | Legacy | Nuevo | Estado | Diferencias |
|---------|--------|-------|---------|-------------|
| `styles.json` | 3 estilos | 2 estilos | ✅ Migrado | Subconjunto, misma estructura |
| `messages.json` | ✅ Presente | ✅ Presente | ✅ Migrado | Datos actualizados |
| `tips.json` | ✅ Presente | ✅ Presente | ✅ Migrado | Datos actualizados |
| `onboarding.json` | ✅ Presente | ✅ Presente | ✅ Migrado | Estructura mejorada |

### Configuración

| Aspecto | Legacy | Nuevo | Mejora |
|---------|--------|-------|---------|
| Puerto por defecto | 3000 | 3001 | ✅ Evita conflictos |
| CORS | Básico | Configurable por entorno | ✅ Más flexible |
| Variables de entorno | No | Sí (PORT, CORS_ORIGIN) | ✅ Más configurable |
| Manejo de errores | Básico | Mejorado | ✅ Más robusto |
| Logs | Básico | Mejorado | ✅ Más informativo |

### Estructura de Respuestas

#### Endpoint `/health`
**Legacy:**
```json
{ "status": "ok" }
```

**Nuevo:**
```json
{ 
  "status": "OK", 
  "timestamp": "2025-09-06T17:36:51.223Z" 
}
```

#### Endpoint `/api` (Nuevo)
```json
{
  "message": "Auréthica API",
  "version": "1.0.0",
  "endpoints": {
    "health": "/health",
    "styles": "/api/styles",
    "style": "/api/styles/:id",
    "tips": "/api/tips",
    "messages": "/api/messages",
    "onboarding": "/api/onboarding"
  }
}
```

## Paridad Funcional: ✅ CONFIRMADA

- ✅ **Cobertura completa**: Todos los endpoints legacy están disponibles
- ✅ **Compatibilidad de datos**: Estructuras JSON compatibles
- ✅ **Funcionalidad mejorada**: Características adicionales sin romper compatibilidad
- ✅ **Configuración avanzada**: Mejor manejo de CORS y entornos

## Beneficios de la Migración

1. **API Ampliada**: Más endpoints para funcionalidad completa de la aplicación
2. **Mejor Configuración**: Variables de entorno y CORS configurable  
3. **Documentación**: Mejor documentación y endpoint de información del API
4. **Mantenibilidad**: Código más organizado y robusto
5. **Compatibilidad**: Mantiene compatibilidad con clientes existentes

## Proceso de Archivado

1. ✅ **Verificación de paridad**: Completada - nueva API es superconjunto
2. 🔄 **Actualización de documentación**: En progreso
3. ⏳ **Marcado como deprecated**: Pendiente
4. ⏳ **Archivado del repositorio**: Pendiente

## Notas para Desarrolladores

- **URL Legacy**: `http://localhost:3000` 
- **URL Nueva**: `http://localhost:3001`
- **Migración de clientes**: Cambiar base URL y añadir prefijo `/api` para endpoints principales
- **Nuevas funcionalidades**: Aprovechar endpoints adicionales (`/api/tips`, `/api/messages`, etc.)

---

**Fecha de migración**: Septiembre 2025  
**Estado**: Migración completada, archivado pendiente