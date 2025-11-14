# Tareas Pendientes - Auréthica Site

**Fecha de análisis**: 14 de noviembre de 2025  
**Rama analizada**: copilot/pending-tasks-follow-up  
**Rama base**: main

## Resumen Ejecutivo

Este documento identifica todas las tareas pendientes, issues abiertos, y pull requests que requieren atención en el repositorio aurethica-site.

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

### PR #27: Clean up repository - Remove obsolete frontend files
- **Estado**: Borrador (Draft)
- **Autor**: Copilot
- **Fecha**: 14 de septiembre de 2025
- **Descripción**: Propone eliminar todo el frontend (HTML, CSS, JS, imágenes) y mantener solo el backend/API funcional, ya que el frontend ahora se gestiona completamente en Figma
- **Archivos a eliminar según esta PR**:
  - Todos los archivos HTML (index, gallery, current, onboarding, legal, result)
  - Archivos CSS y assets estáticos
  - Configuración frontend (vercel.json, dependencias de http-server y concurrently)
- **Conflicto**: Esta PR contradice la PR #26 que propone integrar el API con el frontend
- **Acción recomendada**: Decidir la estrategia del proyecto antes de continuar

### PR #26: Integrate API client and remove static assets
- **Estado**: Abierto (no draft)
- **Autor**: direccionaurethica-droid
- **Fecha**: 10 de septiembre de 2025
- **Label**: codex
- **Descripción**: Propone reemplazar las llamadas estáticas a JSON con llamadas a la API de Aurethica, y eliminar el directorio de datos estáticos
- **Cambios propuestos**:
  - Integrar cliente API en las páginas de onboarding, gallery, current y result
  - Eliminar directorio de datos estáticos
  - Expandir orígenes CORS por defecto
  - Documentar configuración del backend con el puerto correcto
- **Conflicto**: Esta PR asume que el frontend se mantiene, contradice PR #27
- **Acción recomendada**: Decidir si el frontend permanece antes de mergear

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

## 🎯 Conflictos y Decisiones Pendientes

### 1. **Decisión Crítica: Frontend vs API-Only**
**Conflicto**: Las PRs #26 y #27 proponen estrategias opuestas:
- **PR #27**: Eliminar todo el frontend, mantener solo API (gestión en Figma)
- **PR #26**: Mantener y mejorar el frontend, integrándolo con la API

**Impacto**: Esta decisión afecta la arquitectura completa del proyecto

**Opciones**:
- **Opción A**: Aceptar PR #27 - Repositorio API-only
  - ✅ Pros: Separación clara de responsabilidades, frontend en Figma
  - ❌ Contras: Se pierde el frontend actual funcional
  
- **Opción B**: Aceptar PR #26 - Integración frontend/API
  - ✅ Pros: Mantiene funcionalidad completa en el repo
  - ❌ Contras: Duplicación si hay frontend en Figma

**Recomendación**: Clarificar con el equipo si realmente existe un frontend en Figma que reemplaza el actual, o si el frontend actual debe mantenerse y mejorarse.

### 2. **Banner Obsoleto (Issue #22)**
- **Acción**: Una vez definida la estrategia del frontend, resolver el issue #22
- **Si se mantiene el frontend**: Actualizar o eliminar el banner en los archivos HTML
- **Si se elimina el frontend**: El issue se resuelve automáticamente al eliminar los archivos

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

## 🚀 Plan de Acción Recomendado

### Paso 1: Decisión de Arquitectura (URGENTE)
- [ ] Reunión con stakeholders para decidir entre:
  - API-only (PR #27)
  - Frontend + API integrado (PR #26)
- [ ] Documentar la decisión y la justificación

### Paso 2: Según decisión - Opción A (API-only)
Si se decide ir con API-only:
- [ ] Revisar y aprobar PR #27
- [ ] Cerrar PR #26 como "won't fix" con explicación
- [ ] Cerrar Issue #22 (se resuelve con eliminación del frontend)
- [ ] Actualizar README para reflejar naturaleza API-only
- [ ] Revisar y mergear PR #1 (archivos de gobernanza)

### Paso 2: Según decisión - Opción B (Frontend + API)
Si se decide mantener el frontend:
- [ ] Cerrar PR #27 como "won't fix" con explicación
- [ ] Revisar y aprobar PR #26 (integración API)
- [ ] Resolver Issue #22 identificando y eliminando/actualizando el banner obsoleto
- [ ] Revisar y mergear PR #1 (archivos de gobernanza)
- [ ] Actualizar documentación para reflejar arquitectura dual

### Paso 3: Completar Esta PR (#28)
- [ ] Incorporar feedback del equipo
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
