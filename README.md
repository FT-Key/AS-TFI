# 🎓 Proyecto Final Integrador - Análisis de Sistemas de Información

Trabajo Práctico Final Integrador de la materia **Análisis de Sistemas de Información**, centrado en el relevamiento, análisis y propuesta de solución para una organización real.

## 📋 Sobre el Proyecto

Este proyecto representa el trabajo completo de análisis y diseño de un sistema de información para una empresa real. El trabajo abarca desde el relevamiento inicial de la organización hasta la propuesta de una solución sistematizada, aplicando metodologías profesionales de análisis de sistemas.

### 🎯 Objetivos del Trabajo

- **Relevar una organización real**: Conocer su estructura, procesos y funcionamiento
- **Identificar problemas u oportunidades**: Detectar áreas de mejora susceptibles de automatización
- **Proponer una solución sistematizada**: Diseñar un sistema de información que resuelva la problemática identificada
- **Aplicar metodologías profesionales**: Utilizar el Proceso Unificado y técnicas de ingeniería de software

## 📚 Contenido del Proyecto

### Primera Entrega - Elicitación y Análisis Organizacional
- **Historia, Misión, Visión y Valores** de la organización
- **Organigrama y estructura organizativa** con áreas involucradas
- **Análisis de departamentalización** y funciones
- **Delimitación del sistema** y alcance del proyecto
- **Procesos de negocio**: Descripción y diagramación (BPMN/Actividad)
- **Documento de la Empresa**: Consolidación de toda la información relevada

### Segunda Entrega - Definición de Requerimientos
- **Documento de Visión**: Objetivos y alcance del sistema propuesto
- **Especificación Complementaria**: Requerimientos no funcionales
- **Glosario**: Terminología específica del dominio

### Tercera Entrega - Modelado del Sistema
**Fase de Inicio:**
- **Modelo de Casos de Uso**: Especificaciones completas y diagramas
- **Prototipos no operacionales**: Validación de requerimientos

**Fase de Elaboración:**
- **Modelo del Dominio**: Conceptos clave del negocio
- **Diagramas de Secuencia**: Interacciones del sistema
- **Contratos de operación**: Pre y post condiciones
- **Diagrama de Transición de Estados**: Ciclo de vida de objetos
- **Modelo de Análisis**: Arquitectura preliminar

### Cuarta Entrega - Cierre y Viabilidad
- **Análisis de Viabilidad**: Técnica, económica y operativa
- **Glosario Completo**: Terminología final
- **Conclusiones**: Observaciones y recomendaciones
- **Anexos**: Documentación de respaldo (formularios, planillas, entrevistas)

## 🏢 Metodología Aplicada

- **Proceso Unificado (UP)**: Framework de desarrollo iterativo e incremental
- **UML**: Diagramas de modelado estándar
- **BPMN**: Notación para procesos de negocio
- **Técnicas de Elicitación**: Entrevistas, observación, análisis documental

## 🌐 Sobre esta Aplicación Web

Esta plataforma web fue desarrollada para organizar y presentar de forma profesional toda la documentación generada durante el proyecto. Permite:

- ✅ Navegar fácilmente entre las diferentes etapas
- ✅ Visualizar todos los documentos PDF de forma integrada
- ✅ Acceder rápidamente a la documentación oficial firmada
- ✅ Presentar el trabajo de forma clara y ordenada

## 🛠️ Tecnologías de la Plataforma

- **React** 18 + **Vite** - Interfaz moderna y rápida
- **React Router** - Navegación entre secciones
- **Tailwind CSS** - Diseño responsive y profesional
- **Visor PDF integrado** - Consulta de documentos sin salir de la aplicación

## 🚀 Cómo usar esta plataforma

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/proyecto-integrador.git
cd proyecto-integrador
```

2. Instala dependencias:
```bash
npm install
```

3. Coloca tus PDFs en `public/pdfs/` organizados por etapa

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

### Configuración de Contenido

Edita `src/data/etapas.js` para actualizar los documentos de cada etapa:

```javascript
export const etapas = [
  {
    id: 1,
    titulo: "Primera Entrega - Elicitación",
    consigna: "/pdfs/etapa1/consigna.pdf",
    desarrollo: [
      { nombre: "Documento de la Empresa", archivo: "/pdfs/etapa1/empresa.pdf" },
      { nombre: "Procesos BPMN", archivo: "/pdfs/etapa1/procesos.pdf" }
    ]
  }
];
```

### Build para Presentación

```bash
npm run build
npm run preview
```

## 📱 Características de la Interfaz

- 🌓 **Modo claro/oscuro** - Para presentaciones en cualquier ambiente
- 📄 **Visor fullscreen** - Lectura inmersiva de documentos
- 📥 **Descarga directa** - Acceso rápido a archivos originales
- 📱 **100% Responsive** - Funciona en cualquier dispositivo
- ⚡ **Carga rápida** - Optimizado para presentaciones profesionales

## 👥 Equipo de Trabajo

**Integrantes del Grupo:**
- [Nombre 1]
- [Nombre 2]
- [Nombre 3]

**Docentes:**
- [Profesor/a]

**Comisión:** [Número]  
**Año:** [2024/2025]

## 🏛️ Empresa Analizada

**[Nombre de la Organización]**

[Breve descripción de la empresa y el sistema analizado]

## 📄 Documentación Oficial

La carpeta `/public/pdfs/documentacion/` contiene:
- ✅ Acta de Inicio del Proyecto
- ✅ Nota de Autorización de la Organización
- ✅ Nota de Confirmación Final
- ✅ Declaración Responsable

## 🎯 Resultados y Conclusiones

[Aquí puedes resumir brevemente los hallazgos principales del análisis y la solución propuesta]

## 📚 Referencias

- Sommerville, I. - Ingeniería del Software
- Pressman, R. - Ingeniería del Software: Un Enfoque Práctico
- Jacobson, I. - El Proceso Unificado de Desarrollo de Software
- Material de cátedra - Análisis de Sistemas de Información

---

📌 **Nota**: Este proyecto es parte del trabajo académico de la materia Análisis de Sistemas de Información.

⭐ Desarrollado con dedicación por el equipo de [Nombre del Grupo]