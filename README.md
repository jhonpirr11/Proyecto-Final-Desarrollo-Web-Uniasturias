# 🎸 Historia del Rock y sus Derivados: Una Página Interactiva

## ¿De qué trata esta web?

Esta es una página interactiva dedicada a explorar la fascinante evolución del rock a lo largo de los años. Desde sus humildes comienzos en los años 50 con leyendas como Elvis Presley y Chuck Berry, pasando por la revolución de los 60 con The Beatles y The Rolling Stones, hasta la era del hard rock y heavy metal de los 70 con bandas icónicas como Led Zeppelin, Black Sabbath y Deep Purple.

El proyecto profundiza en cómo el rock evolucionó hacia sus derivados más agresivos y complejos, especialmente el thrash metal con bandas como Metallica, explorando la riqueza de subgéneros que surgieron de ese tronco común.

La web está diseñada con un estilo rock/metal característico (colores rojo y negro) y permite a los visitantes no solo conocer la historia, sino también dejar sus comentarios y reflexiones sobre las leyendas presentadas.

## Cómo fue construida: Las Tecnologías Utilizadas

### 🎯 Frontend (Lo que ves en tu navegador)
- **HTML5**: Estructura semántica y moderna para la página
- **CSS3**: Diseñamos la interfaz visual usando Flexbox, Grid y animaciones para una experiencia responsive que se adapta a cualquier dispositivo (móvil, tablet, computadora)
- **Bootstrap 5**: Framework CSS que nos ayudó a construir rápidamente una interfaz profesional y consistente
- **JavaScript**: Manejamos la interactividad de la página, permitiendo que el formulario de comentarios funcione en tiempo real y se comunique con el servidor

### ⚙️ Backend (Lo que ocurre detrás de escenas)
- **Node.js**: Plataforma que ejecuta JavaScript en el servidor
- **Express**: Framework web ligero que nos permite crear una API REST (interfaz para comunicarse con el frontend)
- **API REST**: Dos endpoints principales:
  - `GET /api/comments`: Obtiene todos los comentarios guardados
  - `POST /api/comments`: Permite guardar nuevos comentarios

### 💾 Almacenamiento
- Los comentarios se guardan en memoria del servidor, lo que permite que sean visibles en tiempo real para todos los visitantes mientras el servidor esté activo

## Estructura del Proyecto

```
Proyecto-Final-Desarrollo-Web-Uniasturias/
├── package.json              # Configuración del proyecto y dependencias
├── server.js                 # Servidor Express y API de comentarios
├── README.md                 # Este archivo
├── TODO.md                   # Tareas completadas y estado del proyecto
└── public/                   # Archivos accesibles desde el navegador
    ├── index.html            # Página principal (intro, galería, formulario, comentarios)
    ├── style.css             # Estilos personalizados con tema rock/metal
    ├── script.js             # Lógica JavaScript para la interactividad
    └── images/               # Carpeta con imágenes de leyendas del rock
```

## Funcionalidades Principales

✅ **Introducción Histórica**: Una sección que cuenta la evolución del rock desde sus orígenes  
✅ **Galería de Leyendas**: Imágenes y biografías de artistas y bandas icónicas del rock y metal  
✅ **Formulario Interactivo**: Los visitantes pueden dejar comentarios con su nombre y opinión  
✅ **Comentarios Dinámicos**: Los comentarios aparecen en tiempo real sin necesidad de recargar la página  
✅ **Diseño Responsive**: La página se ve perfecta en cualquier dispositivo  
✅ **Estética Rock/Metal**: Tema visual con colores oscuros, rojo y negro que refleja la esencia del genre  

## 🚀 Visita la Página en Vivo

¡La página ya está desplegada en Replit y lista para usar! No necesitas instalar nada localmente si solo quieres explorarla:

👉 **[Abre la página en Replit](https://proyecto-final-desarrollo-web-uniasturias--jruizbautista11.replit.app/)**

Desde aquí puedes ver la galería de leyendas del rock, leer la introducción y dejar tus comentarios de manera inmediata.

## Cómo Ejecutar la Página Localmente

Si prefieres ejecutar el proyecto en tu computadora:

### Primer paso: Instalar las dependencias
```bash
npm install
```

### Segundo paso: Iniciar el servidor
```bash
npm start
```

El servidor se ejecutará en `http://localhost:3001`

### Tercer paso: Disfrutar
Abre tu navegador y ve a `http://localhost:3001` para explorar la página, conocer la historia del rock y dejar tus comentarios.

---

**Desarrollado como proyecto final de Desarrollo Web en Uniasturias** 🎸🎤

## Anexo IA (conversación)
- Se interactuó con IA (Copilot).
- Ajustes realizados con IA:
  - Implementación de rutas para CRUD básico de comentarios.
  - Fetch y render en la misma página.
  - Mejora de texto de la galería (leyendas de rock/metal).
  - Inclusión de timestamp (`Date`).
- Resumen: “Fue útil; implementé rutas + frontend dinámico”.

## Conclusión
El proyecto cumple los requisitos mínimos:
- Estructura de secciones (introducción, galería, formulario, comentarios).
- Backend mínimo funcional.
- Interactividad completa en front-end.
- Documentación de la interacción con IA incluida.

