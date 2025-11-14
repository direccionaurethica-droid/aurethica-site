# Resumen de Tareas Pendientes

**Pregunta**: ¿Qué queda pendiente?

## 🎯 Respuesta Rápida

Hay **1 issue abierto** y **4 pull requests pendientes** que requieren decisiones críticas sobre la arquitectura del proyecto.

## 📌 Lo Más Urgente

### Decisión Crítica Requerida
**Conflicto entre PRs #26 y #27**:
- **PR #27** propone eliminar TODO el frontend (gestión en Figma)
- **PR #26** propone mantener e integrar el frontend con la API

**Impacto**: Esta decisión define la arquitectura completa del proyecto.

**Acción requerida**: Reunión con stakeholders para decidir la estrategia.

---

## 📋 Issues Abiertos

### Issue #22: Banner de web obsoleta
- Hay un banner obsoleto que debe eliminarse o actualizarse
- **Ubicación probable**: `index.html` contiene una imagen base64 grande como hero banner
- **Resolución**: Depende de la decisión sobre mantener o eliminar el frontend

---

## 🔄 Pull Requests Pendientes

### PR #28 (Esta PR)
Análisis de tareas pendientes - documento actual

### PR #27 - Limpieza de repositorio
- **Propone**: Eliminar frontend completo, mantener solo API
- **Justificación**: Frontend gestionado en Figma
- **Estado**: Borrador

### PR #26 - Integración API/Frontend
- **Propone**: Mantener frontend e integrarlo con la API
- **Estado**: Abierto
- **Conflicto**: Contradice PR #27

### PR #1 - Archivos de gobernanza
- **Propone**: LICENSE, CONTRIBUTING.md, SECURITY.md, templates, etc.
- **Estado**: Borrador
- **Acción**: Revisar y mergear (independiente de la decisión de arquitectura)

---

## 🚀 Plan de Acción Recomendado

1. **URGENTE**: Decidir entre API-only (PR #27) o Frontend+API (PR #26)
2. Según decisión, aprobar PR correspondiente y cerrar la otra
3. Resolver Issue #22 (se resuelve automáticamente si se elimina el frontend)
4. Revisar y mergear PR #1 (archivos de gobernanza)
5. Completar esta PR (#28) con el análisis

---

## 📄 Documentación Detallada

Para análisis completo, ver: `/docs/PENDING_TASKS.md`

---

**Última actualización**: 14 de noviembre de 2025
