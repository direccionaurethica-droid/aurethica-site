# Tareas Pendientes - Auréthica Site

**Fecha de análisis**: 14 de noviembre de 2025  
**Rama analizada**: copilot/pending-tasks-follow-up  
**Rama base**: main

> **✅ ACTUALIZACIÓN**: Decisión arquitectónica confirmada por @direccionaurethica-droid el 14 de noviembre de 2025.  
> **El frontend se está diseñando completamente en Figma. Este repositorio será API-only.**

## Resumen Ejecutivo

Este documento identifica todas las tareas pendientes, issues abiertos, y pull requests que requieren atención en el repositorio aurethica-site. La decisión arquitectónica ha sido confirmada: el repositorio se enfocará exclusivamente en el backend/API.

---

## 📋 Issues Abiertos (1 activo)

### Issue #22: Eliminar o actualizar banner de web obsoleta
- **Estado**: Abierto
- **Tipo**: Bug
- **Prioridad**: Media
- **Descripción**: Actualmente se está desplegando un banner de una web obsoleta en el sitio. Este banner debe ser eliminado o actualizado para evitar confusión a los usuarios.
- **Pasos para reproducir**:
  1. Ingresar al sitio web principal de Aurethica
  2. Observar el banner que hace referencia a una web obsoleta
- **Resultado esperado**: No debe aparecer ningún banner relacionado a una web obsoleta, o debe actualizarse con información vigente
- **Acción recomendada**: Revisar los archivos HTML (especialmente index.html) y eliminar o actualizar cualquier banner obsoleto

---

## 🔄 Pull Requests Pendientes (4 activos)

### PR #28: [WIP] Review pending tasks and next steps
- **Estado**: Borrador (Draft)
- **Autor**: Copilot
- **Descripción**: Esta PR analiza las tareas pendientes y próximos pasos (documento actual)
- **Acción**: Completar análisis y solicitar revisión

### PR #27: Clean up repository - Remove obsolete frontend files ✅ RECOMENDADA
- **Estado**: Borrador (Draft) → **DEBE APROBARSE**
- **Autor**: Copilot
- **Fecha**: 14 de septiembre de 2025
- **Descripción**: Propone eliminar todo el frontend (HTML, CSS, JS, imágenes) y mantener solo el backend/API funcional, ya que el frontend ahora se gestiona completamente en Figma
- **Archivos a eliminar según esta PR**:
  - Todos los archivos HTML (index, gallery, current, onboarding, legal, result)
  - Archivos CSS y assets estáticos
  - Configuración frontend (vercel.json, dependencias de http-server y concurrently)
- **✅ Status**: **Confirmada como la dirección correcta** por @direccionaurethica-droid (frontend en Figma)
- **Acción recomendada**: **Revisar y aprobar esta PR para implementar arquitectura API-only**

### PR #26: Integrate API client and remove static assets ❌ NO PROCEDER
- **Estado**: Abierto (no draft) → **DEBE CERRARSE**
- **Autor**: direccionaurethica-droid
- **Fecha**: 10 de septiembre de 2025
- **Label**: codex
- **Descripción**: Propone reemplazar las llamadas estáticas a JSON con llamadas a la API de Aurethica, y eliminar el directorio de datos estáticos
- **Cambios propuestos**:
  - Integrar cliente API en las páginas de onboarding, gallery, current y result
  - Eliminar directorio de datos estáticos
  - Expandir orígenes CORS por defecto
  - Documentar configuración del backend con el puerto correcto
- **❌ Status**: **No proceder** - El frontend ya no estará en este repositorio (gestionado en Figma)
- **Acción recomendada**: **Cerrar esta PR** con la explicación: "Frontend ahora gestionado completamente en Figma, repositorio será API-only según PR #27"

### PR #1: Add repository hygiene files for better project governance
- **Estado**: Borrador (Draft)
- **Autor**: Copilot
- **Fecha**: 4 de septiembre de 2025
- **Descripción**: Agrega archivos fundamentales de gobernanza del proyecto
- **Archivos propuestos**:
  - LICENSE (MIT)
  - .gitignore mejorado
  - robots.txt
  - CODEOWNERS
  - GitHub Actions workflow para link checking
  - Configuración de Dependabot
  - Templates de issues y PRs
  - CONTRIBUTING.md
  - SECURITY.md
- **Acción recomendada**: Revisar y mergear, ya que estos archivos son fundamentales independientemente de la decisión sobre el frontend

---

## 🎯 Decisión Arquitectónica

### 1. **✅ CONFIRMADO: Arquitectura API-Only**
**Decisión tomada por @direccionaurethica-droid**: 
- El frontend se está diseñando completamente en Figma
- **PR #27** (eliminar todo el frontend, mantener solo API) es la dirección correcta
- **PR #26** (integrar frontend con API) debe cerrarse ya que el frontend ya no estará en este repositorio

**Impacto**: Esta decisión confirma que el repositorio será exclusivamente para el backend/API

**Decisión Final**:
- **✅ Aceptar PR #27** - Repositorio API-only
  - ✅ Separación clara de responsabilidades
  - ✅ Frontend gestionado profesionalmente en Figma
  - ✅ Repositorio enfocado únicamente en la API
  
- **❌ Cerrar PR #26** - No proceder con integración frontend/API
  - Frontend ya no estará en este repositorio
  - Cambios propuestos no son relevantes para arquitectura API-only

**Status**: Decisión confirmada el 14 de noviembre de 2025

### 2. **Banner Obsoleto (Issue #22)**
- **Acción**: ✅ El issue se resolverá automáticamente
- **Razón**: Con la arquitectura API-only confirmada, todos los archivos HTML (incluyendo el banner obsoleto) serán eliminados por PR #27
- **Status**: Se cerrará automáticamente al mergear PR #27

---

## 📊 Estado Actual del Código

### ✅ Componentes Funcionales
- **API Backend**: Totalmente funcional en `/api`
  - Servidor Express en `api/server.js`
  - 6 endpoints funcionales
  - Datos JSON en `api/data/`
  - Configuración en `api/package.json`

### 📄 Frontend Actual (en riesgo según PR #27)
- 6 archivos HTML: index, gallery, current, onboarding, legal, result
- Archivo CSS principal: style.css
- Assets: hero_banner.jpeg, placeholder_light_gray_block.png
- Configuración: vercel.json

### 📦 Configuración
- `package.json` raíz: Gestión dual frontend/API
- Scripts: dev (concurrently), dev:frontend (http-server), dev:api

---

## 🚀 Plan de Acción Actualizado

### ✅ Paso 1: Decisión de Arquitectura - COMPLETADO
- [x] Decisión confirmada por @direccionaurethica-droid
- [x] Arquitectura API-only (frontend en Figma)
- [x] Decisión documentada

### Paso 2: Implementar Arquitectura API-only
- [ ] Revisar y aprobar **PR #27** (eliminar frontend)
- [ ] Cerrar **PR #26** como "won't fix" con explicación: "Frontend ahora gestionado en Figma, repositorio será API-only"
- [ ] Cerrar **Issue #22** automáticamente (se resuelve con eliminación del frontend)
- [ ] Actualizar README para reflejar naturaleza API-only
- [ ] Revisar y mergear **PR #1** (archivos de gobernanza - independiente de arquitectura)

### Paso 3: Completar Esta PR (#28)
- [x] Incorporar feedback del equipo
- [ ] Marcar como ready for review
- [ ] Solicitar aprobación

---

## 📝 Notas Adicionales

### Observaciones sobre el Código Actual
- No se encontraron comentarios TODO/FIXME/PENDING en el código
- El API está bien estructurado y documentado
- El frontend utiliza HTML/CSS/JS vanilla (sin frameworks)

### Ramas Identificadas
Solo hay una rama activa además de main:
- `copilot/pending-tasks-follow-up` (esta rama)

### Próximas Mejoras Sugeridas (Post-decisión)
- Agregar tests automatizados para el API
- Configurar CI/CD para despliegues automáticos
- Implementar versionado de API
- Agregar documentación OpenAPI/Swagger para el API

---

## 📞 Contacto y Seguimiento

Para discutir cualquiera de estos puntos o tomar las decisiones pendientes, contactar a:
- Owner: @direccionaurethica-droid

**Última actualización**: 14 de noviembre de 2025
