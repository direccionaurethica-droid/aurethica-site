# Guía de Despliegue en Vercel

Esta guía detalla el proceso completo para desplegar el frontend de Auréthica en Vercel con soporte para previews de PR.

## Configuración Inicial

### 1. Preparación del Repositorio
El repositorio ya está configurado con:
- ✅ `vercel.json` optimizado para sitios estáticos
- ✅ `.vercelignore` para exclusión de archivos innecesarios
- ✅ Headers de cache y seguridad configurados
- ✅ URLs limpias habilitadas

### 2. Crear Proyecto en Vercel

1. **Acceder a Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub

2. **Importar Repositorio**:
   - Haz clic en "New Project"
   - Busca el repositorio `direccionaurethica-droid/aurethica-site`
   - Haz clic en "Import"

3. **Configurar Proyecto**:
   - **Project Name**: `aurethica-site` (o el nombre que prefieras)
   - **Framework Preset**: `Other` (sitio estático)
   - **Root Directory**: `./` (raíz del proyecto)
   - **Build Command**: Se autodetecta como `npm install`
   - **Output Directory**: Se autodetecta como `.`
   - **Install Command**: Se autodetecta como `npm install`

4. **Deploy**:
   - Haz clic en "Deploy"
   - Espera a que termine el proceso de build

## URLs de Despliegue

### Producción
- **URL Principal**: `https://aurethica-site.vercel.app`
- **URLs Alternativas**: Vercel genera múltiples URLs automáticamente

### Preview de PRs
- **Formato**: `https://aurethica-site-git-[branch-name]-[team].vercel.app`
- **Automático**: Se genera en cada PR
- **Comentarios**: Vercel comenta automáticamente en las PRs con las URLs

### Desarrollo Local
- **Frontend**: `http://localhost:3000`
- **API**: `http://localhost:3001`

## Configuración de Dominios

### Dominio Temporal
Vercel asigna automáticamente:
- Dominio primario: `aurethica-site.vercel.app`
- Dominios de preview: `aurethica-site-git-*.vercel.app`

### Dominio Personalizado
Para configurar un dominio propio:

1. **Acceder a Configuración**:
   - Ve al dashboard del proyecto en Vercel
   - Settings > Domains

2. **Añadir Dominio**:
   - Introduce tu dominio personalizado
   - Sigue las instrucciones de configuración DNS

3. **Configuración DNS**:
   ```
   Tipo: CNAME
   Nombre: www (o @)
   Valor: cname.vercel-dns.com
   ```

## Features Activadas

### ✅ PR Previews
- Se generan automáticamente en cada PR
- URLs únicas para cada branch
- Comentarios automáticos en GitHub
- Cancelación automática de builds obsoletos

### ✅ Headers de Cache
- **Assets estáticos**: 1 año de cache
- **HTML**: 1 hora con revalidación
- **Security headers**: Protección XSS, clickjacking, etc.

### ✅ URLs Limpias
- `/test` en lugar de `/test.html`
- `/onboarding` en lugar de `/onboarding.html`
- Redirecciones automáticas

## Verificación del Despliegue

### Checklist Post-Despliegue
- [ ] ✅ URL de producción accesible
- [ ] ✅ Todas las páginas se cargan correctamente
- [ ] ✅ Assets (CSS, imágenes) se sirven con cache apropiado
- [ ] ✅ URLs limpias funcionan
- [ ] ✅ PR previews se generan automáticamente
- [ ] ✅ Headers de seguridad activos

### URLs de Prueba
Verificar que estas URLs funcionan:
- `/` - Página principal
- `/test` - Test de estilos
- `/onboarding` - Proceso de onboarding
- `/gallery` - Galería de estilos
- `/legal` - Información legal

## Monitoreo y Mantenimiento

### Analytics
Vercel proporciona analytics automáticos:
- Visitas por página
- Performance metrics
- Errores de carga

### Logs
Acceso a logs de deployment:
- Dashboard > Functions/Edge Network
- Información de errores en tiempo real

## Troubleshooting

### Problemas Comunes

1. **Build Failures**:
   - Verificar que `package.json` esté actualizado
   - Revisar logs de build en dashboard de Vercel

2. **404 en URLs Limpias**:
   - Verificar configuración `cleanUrls: true` en `vercel.json`

3. **Assets no Cargan**:
   - Verificar rutas relativas en HTML
   - Comprobar que archivos existen en el repositorio

### Contacto de Soporte
- Documentación: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)