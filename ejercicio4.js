function agregarItem() {
    const lista = document.getElementById('lista');
    const nuevoItem = document.createElement('li');
    nuevoItem.className = 'list-item';
    nuevoItem.textContent = 'Nuevo ítem';
    
    const botonEliminar = document.createElement('button');
    botonEliminar.className = 'btn-eliminar';
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = () => nuevoItem.remove();
    
    nuevoItem.appendChild(botonEliminar);
    lista.appendChild(nuevoItem);
}
