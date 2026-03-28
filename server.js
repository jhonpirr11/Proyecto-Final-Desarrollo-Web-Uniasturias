const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Almacenamiento en memoria de comentarios (array simple)
let comments = [];

// Middleware
app.use(express.static('public'));
app.use(express.json());

// API Endpoints
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

app.post('/api/comments', (req, res) => {
  const { name, comment } = req.body;
  if (name && comment) {
    comments.push({ name, comment, timestamp: new Date().toISOString() });
    res.json({ success: true });
  } else {
    res.status(400).json({ error: 'Nombre y comentario requeridos' });
  }
});

// Servir página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rock en http://localhost:${port}`);
  console.log('Presiona Ctrl+C para detener.');
});

