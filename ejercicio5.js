function ordenarPorPropiedad() {
    const objetos = [
        { nombre: 'Ana', edad: 25 },
        { nombre: 'Luis', edad: 22 },
        { nombre: 'Carlos', edad: 32 },
        { nombre: 'María', edad: 19 }
    ];

    const propiedad = 'edad'; 

    objetos.sort((a, b) => a[propiedad] - b[propiedad]);
    const resultadoDiv = document.getElementById('resultado5');
    resultadoDiv.innerHTML = ''; 

    objetos.forEach(objeto => {
        const objetoDiv = document.createElement('div');
        objetoDiv.className = 'objeto';
        objetoDiv.innerHTML = `
            <p><strong>Nombre:</strong> ${objeto.nombre}</p>
            <p><strong>Edad:</strong> ${objeto.edad}</p>
            <hr>
        `;
        resultadoDiv.appendChild(objetoDiv);
    });
}
