# Política de Seguridad

## Versiones Soportadas

Actualmente mantenemos las siguientes versiones del proyecto:

| Versión | Soportada          |
| ------- | ------------------ |
| main    | :white_check_mark: |

## Reportar una Vulnerabilidad

Si descubres una vulnerabilidad de seguridad en Auréthica, te pedimos que la reportes de manera responsable.

### Cómo Reportar

**NO** crees un issue público para vulnerabilidades de seguridad.

En su lugar:

1. **GitHub Security Advisories** (Recomendado)
   - Ve a https://github.com/direccionaurethica-droid/aurethica-site/security/advisories
   - Haz clic en "New draft security advisory"
   - Completa todos los detalles de la vulnerabilidad

2. **Email directo**
   - Envía un email a [direccionaurethica@example.com] con:
     - Descripción detallada de la vulnerabilidad
     - Pasos para reproducir el problema
     - Impacto potencial
     - Cualquier mitigación sugerida

### Qué Incluir

Cuando reportes una vulnerabilidad, incluye:

- **Descripción**: Una descripción clara de la vulnerabilidad
- **Ubicación**: ¿Dónde se encuentra la vulnerabilidad en el código?
- **Reproducción**: Pasos detallados para reproducir el problema
- **Impacto**: ¿Qué tipo de información o sistemas están en riesgo?
- **CVE**: Si ya existe un CVE relacionado
- **Solución**: Si tienes sugerencias para solucionarlo

### Proceso de Respuesta

1. **Confirmación** (24-48 horas): Confirmaremos la recepción de tu reporte
2. **Evaluación** (3-5 días hábiles): Evaluaremos la vulnerabilidad y su impacto
3. **Resolución**: Trabajaremos en una solución
4. **Divulgación**: Coordinaremos la divulgación pública una vez que la vulnerabilidad esté solucionada

### Divulgación Responsable

Pedimos que:

- No divulgues públicamente la vulnerabilidad hasta que hayamos tenido oportunidad de solucionarla
- No accedas a datos que no te pertenecen
- No realices pruebas destructivas
- No uses la vulnerabilidad para propósitos maliciosos

### Reconocimiento

Reconocemos públicamente a los investigadores responsables que reportan vulnerabilidades válidas (a menos que prefieran permanecer anónimos).

## Consideraciones de Seguridad

### Datos del Usuario

- Este sitio no recopila información personal identificable
- Los resultados del test se almacenan localmente en el navegador
- No se transmite información sensible al servidor

### API

- La API es de solo lectura para datos públicos
- No requiere autenticación
- No almacena datos de usuario

### Hosting

- El sitio se hostea en GitHub Pages
- Utiliza HTTPS por defecto
- No se almacenan secretos en el repositorio público

## Actualizaciones de Seguridad

Las actualizaciones de seguridad se publican:
- En GitHub Security Advisories
- En las release notes del proyecto
- Via Dependabot para dependencias

---

Gracias por ayudar a mantener Auréthica seguro para todos. 🔒