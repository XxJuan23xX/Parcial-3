function transformarYFiltrar() {
    const numeros = [1, 5, 10, 15, 20, 25];
    const cuadradosMayoresDe20 = numeros.map(num => num * num).filter(cuadrado => cuadrado > 20);
    const resultadoDiv = document.getElementById('resultado2');
    resultadoDiv.innerHTML = ''; 

    cuadradosMayoresDe20.forEach(cuadrado => {
        const cuadradoDiv = document.createElement('div');
        cuadradoDiv.textContent = `Número al cuadrado: ${cuadrado}`;
        resultadoDiv.appendChild(cuadradoDiv);
    });
}
