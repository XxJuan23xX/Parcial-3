async function obtenerUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await response.json();
        document.getElementById('resultado3').innerHTML = JSON.stringify(usuarios);
    } catch (error) {
        document.getElementById('resultado3').innerHTML = 'Error al obtener usuarios';
        console.error(error);
    }
}
