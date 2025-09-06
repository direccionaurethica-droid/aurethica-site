# Deprecation Notice for hairlab-data-service

This file contains the recommended updates for the hairlab-data-service repository to mark it as deprecated and point users to the new API.

## README.md Updates

Replace the existing README.md with:

```markdown
# ⚠️ DEPRECATED: hairlab-data-service

**Este repositorio ha sido DEPRECADO** y reemplazado por el API integrado en [aurethica-site](https://github.com/direccionaurethica-droid/aurethica-site).

## 🔄 Migración Completada

El nuevo API en `aurethica-site` es un **superconjunto** de este servicio con funcionalidad mejorada:

- ✅ Todos los endpoints migrados
- ✅ Datos actualizados y mejorados  
- ✅ Nuevos endpoints adicionales
- ✅ Mejor configuración y mantenibilidad

## 🎯 Nuevo API

**URL del nuevo API**: https://github.com/direccionaurethica-droid/aurethica-site/tree/main/api

### Migración de endpoints:

| Legacy (este repo) | Nuevo API | 
|-------------------|-----------|
| `GET /health` | `GET /health` |
| `GET /styles` | `GET /api/styles` |
| `GET /styles/:id` | `GET /api/styles/:id` |

### Nuevos endpoints disponibles:
- `GET /api` - Información del API
- `GET /api/tips` - Consejos de cuidado capilar
- `GET /api/messages` - Mensajes de aplicación
- `GET /api/onboarding` - Preguntas de onboarding

## 📚 Documentación

- [Documentación completa de migración](https://github.com/direccionaurethica-droid/aurethica-site/blob/main/docs/MIGRATION_HAIRLAB.md)
- [Guía de desarrollo](https://github.com/direccionaurethica-droid/aurethica-site/blob/main/docs/DEVELOPMENT.md)

## ⏰ Timeline

- **Agosto 2025**: Desarrollo inicial hairlab-data-service
- **Septiembre 2025**: Migración completada a aurethica-site
- **Septiembre 2025**: Marcado como deprecated

---

**⚡ Para nuevos desarrollos, usa el API en [aurethica-site](https://github.com/direccionaurethica-droid/aurethica-site)**

---

## Legacy Documentation (Archivo)

Backend y API de Hair Lab Data Service. Dataset con 500+ estilos capilares normalizados, 4 vistas 6K, metadatos técnicos y emocionales. 

**🚫 Este proyecto ya no está en desarrollo activo.**
```

## Repository Settings

1. **Archive the repository**: 
   - Go to Settings > General > Danger Zone
   - Click "Archive this repository"
   - Confirm archival

2. **Update repository description**:
   ```
   ⚠️ DEPRECATED - Migrated to aurethica-site API. Backend y API legacy de Hair Lab Data Service.
   ```

3. **Add topics/tags**:
   - `deprecated`
   - `archived` 
   - `legacy`
   - `migrated`

## Branch Protection

- Remove any branch protection rules since repo will be archived
- Ensure main branch has the deprecation notice

---

**Note**: These changes should be applied to the hairlab-data-service repository to properly mark it as deprecated and guide users to the new API location.