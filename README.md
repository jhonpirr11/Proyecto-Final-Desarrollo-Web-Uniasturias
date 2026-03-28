# Proyecto Final: Historia del Rock y sus Derivados (Metal)

## Tema Elegido
Historia del Rock desde sus orígenes en los 50s (Elvis, Chuck Berry) pasando por los 60s (Beatles), 70s (Led Zeppelin) hasta el Heavy Metal y subgéneros como Thrash (Metallica).

## Tecnologías Utilizadas
- **Frontend**: HTML5 semántico, CSS3 (Grid, Flexbox, Animaciones, Responsive), JavaScript (Fetch API, async/await).
- **Backend**: Node.js + Express (API REST: GET/POST /api/comments), almacenamiento en memoria.
- **Diseño**: Tema oscuro rock/metal (rojo/negro), galería responsive.

## Estructura del Proyecto
```
.
├── package.json      # Dependencias (express)
├── server.js         # Servidor Express + API comentarios
├── public/
│   ├── index.html    # Página principal (intro, galería, form, comentarios)
│   ├── style.css     # Estilos rock-themed
│   └── script.js     # Interactividad (form + fetch)
├── TODO.md           # Progreso implementación
└── README.md         # Este archivo
```

## Instrucciones de Ejecución
1. En terminal (en este directorio): `npm install`
2. Iniciar servidor: `npm start`
3. Abrir: http://localhost:3000
4. Probar: Agregar comentarios → se muestran dinámicamente.

## Funcionalidades Cumplidas
- ✅ Introducción al tema.
- ✅ Galería imágenes (6 leyendas rock/metal, Wikimedia).
- ✅ Formulario interactivo (nombre + comentario).
- ✅ Backend: Guarda/muestra comentarios en tiempo real.
- ✅ Diseño responsive y estético.

# Proyecto Final - Historia del Rock y Metal

## Tema elegido
Rock / Metal. Página personal sobre leyendas del rock y evolución hacia el heavy metal.

## Tecnologías utilizadas
- HTML
- CSS (Bootstrap + estilos propios)
- JavaScript (DOM, Fetch API)
- Node.js + Express

## Estructura de la web
1. Introducción al tema (historia general).
2. Galería de imágenes + mini biografías:
   - Elvis Presley
   - The Beatles
   - Led Zeppelin
   - Black Sabbath
   - Metallica
   - Iron Maiden
3. Sección interactiva:
   - Formulario con campos `Nombre` y `Comentario`.
4. Lista dinámica de comentarios en la misma página.

## Backend y API
- `server.js` con Express:
  - `GET /api/comments`: retorna comentarios guardados en memoria.
  - `POST /api/comments`: recibe JSON `{name, comment}` y lo almacena con `timestamp`.
- Los datos no se guardan en base de datos persistente (se reinician en reinicio del servidor), pero el comportamiento es funcional para el enunciado.

## Frontend dinámico
- `public/script.js`:
  - Carga inicial de comentarios (`loadComments()`).
  - Renderizado con `displayComments()`.
  - Envío de formulario y recarga inmediata.
  - Gestión de errores.

## Pruebas
- Iniciar servidor: `node server.js`.
- Abrir `http://localhost:3000`.
- Enviar varios comentarios con nombre y texto.
- Ver comentarios en el panel y en recargas posteriores de página (mientras el servidor esté activo).

## Anexo IA (conversación)
- Se interactuó con IA (ChatGPT, Raptor mini).
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

