# Guía de Contribución

¡Gracias por tu interés en contribuir a Auréthica! Esta guía te ayudará a empezar.

## Código de Conducta

Al participar en este proyecto, te comprometes a mantener un ambiente respetuoso y acogedor para todos. Esperamos que todas las interacciones sean profesionales y constructivas.

## Cómo Contribuir

### Reportar Bugs

Antes de crear un reporte de bug:
- Verifica que el bug no haya sido reportado ya
- Incluye pasos detallados para reproducir el problema
- Especifica tu entorno (navegador, SO, dispositivo)

### Sugerir Funcionalidades

- Usa las plantillas de issue para solicitudes de funcionalidad
- Explica claramente el problema que resuelve tu sugerencia
- Considera si la funcionalidad encaja con los objetivos del proyecto

### Contribuir Código

1. **Fork el repositorio**
2. **Crea una rama** para tu funcionalidad: `git checkout -b feature/mi-funcionalidad`
3. **Realiza tus cambios** siguiendo las convenciones del proyecto
4. **Asegúrate de que todo funciona**: prueba localmente
5. **Commit tus cambios**: usa mensajes descriptivos
6. **Push a tu fork**: `git push origin feature/mi-funcionalidad`
7. **Abre un Pull Request**

### Convenciones de Código

#### HTML
- Usa indentación de 2 espacios
- Incluye atributos `alt` en imágenes
- Usa etiquetas semánticas cuando sea apropiado

#### CSS
- Usa indentación de 2 espacios
- Prefiere clases reutilizables
- Comenta secciones complejas

#### JavaScript
- Usa indentación de 2 espacios
- Prefiere `const` y `let` sobre `var`
- Usa nombres descriptivos para variables y funciones

### Configuración de Desarrollo

#### Frontend
El sitio es estático, simplemente abre `index.html` en tu navegador.

#### Backend (API)
```bash
cd api
npm install
node server.js
```

El servidor estará disponible en `http://localhost:3000`.

### Testing

- Prueba manualmente todas las páginas del sitio
- Verifica que la API responde correctamente
- Asegúrate de que no hay errores en la consola del navegador

### Pull Requests

- Usa la plantilla de PR proporcionada
- Describe claramente qué cambios introduces
- Incluye capturas de pantalla para cambios visuales
- Asegúrate de que no rompes funcionalidad existente

### Estructura del Proyecto

```
aurethica-site/
├── index.html          # Página principal
├── test.html           # Página del test
├── style.css           # Estilos principales
├── legal.html          # Términos legales
├── api/                # Backend Node.js
│   ├── server.js       # Servidor Express
│   ├── package.json    # Dependencias
│   └── data/           # Datos del test
├── .github/            # Configuración GitHub
└── README.md           # Documentación
```

## Proceso de Review

1. Todos los PRs requieren review
2. Los cambios deben pasar las verificaciones automáticas
3. Se dará feedback constructivo cuando sea necesario
4. Una vez aprobado, el PR será merged

## Preguntas

Si tienes preguntas sobre el desarrollo o necesitas ayuda:
- Abre un issue con la etiqueta "question"
- Revisa issues existentes por si tu pregunta ya fue respondida

¡Gracias por contribuir a Auréthica! 💜