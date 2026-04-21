import { Buscador } from "./componentes/Buscador.js";
import { Card } from "./componentes/Card.js";
import { Paginacion } from "./componentes/Paginacion.js";
import { productos } from "./data/productos.js";

const app = document.getElementById('app')

let paginaActual = 1
const porPagina = 4
let productosFiltrados = [...productos]

const renderLayout = () =>{
    app.innerHTML =`
    ${Buscador()}
    <div  class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4" id ="contenedorProductos"></div>
    ${Paginacion()}
    `
}

const renderProductos = ()=>{
    const contenedor = document.getElementById('contenedorProductos')
    const inicio = (paginaActual -1 ) * porPagina
    const fin = inicio + porPagina
    const productosPagina = productosFiltrados.slice(inicio,fin)
    contenedor.innerHTML = productosPagina.map((producto)=>{return Card(producto)}).join('')
}

const actualizarPagina =()=>{
    const totalPaginas = Math.ceil(productosFiltrados.length / porPagina)
    document.getElementById('paginaActual').textContent = `Paginación ${paginaActual} de ${totalPaginas}`

}

const activarPaginacion = ()=>{
    document.getElementById('prev').addEventListener('click',()=>{
        if (paginaActual>1) {
            paginaActual --
            renderProductos()
            actualizarPagina()
        }
    })
    
    document.getElementById('next').addEventListener('click',()=>{
        const totalPaginas = Math.ceil(productosFiltrados.length/ porPagina)
        if (paginaActual< totalPaginas) {
            paginaActual ++
            renderProductos()
            actualizarPagina()
        }
    })
}

const activarBuscador = ()=>{
    const input = document.getElementById('inputBusqueda')
    input.addEventListener('input', (e)=>{
        const texto = e.target.value.toLowerCase()
        productosFiltrados = productos.filter(p=>p.title.toLocaleLowerCase().includes(texto))
        paginaActual = 1
        renderProductos()
        actualizarPagina()
    })
}

renderLayout()
renderProductos()
actualizarPagina()
activarBuscador()
activarPaginacion()