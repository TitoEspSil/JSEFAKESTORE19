import { Buscador } from "./componentes/Buscador.js";
import { Card } from "./componentes/Card.js";
import { productos } from "./data/productos.js";

const app = document.getElementById('app')

app.classList.add('text-right')

const renderLayout = () =>{
    app.innerHTML =`
    ${Buscador()}
    <div  class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4" id ="contenedorProductos"></div>
    `
}

const renderProductos = (lista)=>{
    const contenedor = document.getElementById('contenedorProductos')
    contenedor.innerHTML = lista.map((producto)=>{return Card(producto)}).join('')
}

const activarBuscador = ()=>{
    const input = document.getElementById('inputBusqueda')
    input.addEventListener('input', (e)=>{
        const texto = e.target.value.toLowerCase()
        const filtrados = productos.filter(p=>p.title.toLocaleLowerCase().includes(texto))
        renderProductos(filtrados)
    })
}

renderLayout()
renderProductos(productos)
activarBuscador()
