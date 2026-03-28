// script.js - Interactividad Frontend

const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

let comments = [];

// Cargar comentarios al iniciar
async function loadComments() {
    try {
        const response = await fetch('/api/comments');
        comments = await response.json();
        displayComments();
    } catch (error) {
        console.error('Error cargando comentarios:', error);
    }
}

// Mostrar comentarios en la lista
function displayComments() {
    commentsList.innerHTML = '';
    comments.forEach(comment => {
        const li = document.createElement('li');
        li.className = 'comment-item';
        li.innerHTML = `
            <div class="comment-item">
                <strong class="text-danger">${comment.name}</strong> 
                <small class="text-muted">(${new Date(comment.timestamp).toLocaleString('es-ES')})</small>:<br>
                <p class="mb-0">${comment.comment}</p>
            </div>
        `;
        commentsList.appendChild(li);
    });
}

// Manejar submit del formulario
commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();
    
    if (!name || !comment) return;
    
    try {
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, comment })
        });
        
        if (response.ok) {
            // Limpiar formulario
            commentForm.reset();
            // Recargar comentarios
            await loadComments();
        } else {
            alert('Error al enviar comentario');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión');
    }
});

// Cargar inicial
loadComments();

