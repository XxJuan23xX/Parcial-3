function filtrarMayoresDeEdad() {
    const personas = [
        { nombre: 'Ana', edad: 17 },
        { nombre: 'Luis', edad: 22 },
        { nombre: 'Carlos', edad: 15 },
        { nombre: 'María', edad: 19 }
    ];

    const mayoresDeEdad = personas.filter(persona => persona.edad >= 18);
    const resultadoDiv = document.getElementById('resultado1');
    resultadoDiv.innerHTML = ''; 

    mayoresDeEdad.forEach(persona => {
        const personaDiv = document.createElement('div');
        personaDiv.textContent = `Nombre: ${persona.nombre}, Edad: ${persona.edad}`;
        resultadoDiv.appendChild(personaDiv);
    });
}
