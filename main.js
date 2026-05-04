import { Buscador } from "./componentes/Buscador.js";
import { Card } from "./componentes/Card.js";
import { Carrito } from "./componentes/Carrito.js";
import { Paginacion } from "./componentes/Paginacion.js";
import { productos } from "./data/productos.js";

const app = document.getElementById('app')

let paginaActual = 1
const porPagina = 4
let productosFiltrados = [...productos]
let carrito = JSON.parse(localStorage.getItem('carrito')) || []

const renderLayout = () =>{
    app.innerHTML =`
    ${Buscador()}
    ${Carrito()}
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

    activarBotonesAgregar()
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


const activarBotonesAgregar = () =>{
    const botones = document.querySelectorAll('.btn-agregar')

    botones.forEach(boton=>{
        boton.addEventListener('click', ()=>{
            const id = Number(boton.dataset.id)
            agregarAlCarrito(id)
        })
    })

}


const agregarAlCarrito = (id)=>{
    const producto = productos.find(p=>p.id === id)
    const existe = carrito.find(p=>p.id === id)

    if(existe){
        existe.cantidad +=1
    }else{
        carrito.push({
            ...producto,
            cantidad: 1
        })
    }
    renderCarrito()
}

const renderCarrito = () => {
    const contenedor = document.getElementById('itemsCarrito')
    const totalElement = document.getElementById('totalCarrito')
    const cantidadElement = document.getElementById('cantidadCarrito')
   if (carrito.length === 0) {
        contenedor.innerHTML = `<p class="text-gray-500">El carrito esta vacio</p>`
        totalElement.textContent = "$0.00"
        cantidadElement.textContent = "0"
        return
    } 
    contenedor.innerHTML = carrito.map(item =>{
        return `
        <div class="flex flex-col gap-2 border-b  pb-3 mb-3">
            <img src="${item.image}" alt="${item.title}" class="w-16 h-16 object-contain">
            <h4 class="font-semibold">${item.title}</h4>
            <p class="text-sm text-gray-600">Precio: $${item.price}</p>        
            <p class="text-sm text-gray-600">Cantidad ${item.cantidad}</p>
            <div class = "flex gap-2">
                <button class = "btn-sumar bg-green-600 text-white px-3 py-1 rounded"  data-id="${item.id}">+</button>
                <button class = "btn-restar bg-yellow-500 text-white px-3 py-1 rounded" data-id="${item.id}">-</button>
                <button class = "btn-eliminar bg-red-600 text-white px-3 py-1 rounded" data-id="${item.id}">Eliminar</button>
            </div>
        </div>
   
   `
    }).join('')
   const total = carrito.reduce((acc,item)=> acc + item.price * item.cantidad ,0)
   const cantidadTotal = carrito.reduce((acc,item)=> acc + item.cantidad ,0)

   totalElement.textContent =`${total.toFixed(2)}`
   cantidadElement.textContent =`${cantidadTotal}`
   localStorage.setItem('carrito',JSON.stringify(carrito))
   activarEventosCarrito()
}


const activarEventosCarrito = ()=>{
    document.querySelectorAll('.btn-sumar').forEach(boton=>{
        boton.addEventListener('click',()=>{
            const id = Number(boton.dataset.id)
            const item = carrito.find(p=>p.id === id)
            if (item) {
                item.cantidad += 1
                renderCarrito()
            } 
        })
    })
    document.querySelectorAll('.btn-restar').forEach(boton=>{
        boton.addEventListener('click',()=>{
            const id = Number(boton.dataset.id)
            const item = carrito.find(p=>p.id === id)
            if (item) {
                item.cantidad -= 1
                if(item.cantidad <= 0){
                   carrito = carrito.filter(p=>p.id !== id)
                }
                renderCarrito()
            } 
        })
    })
    document.querySelectorAll('.btn-eliminar').forEach(boton=>{
        boton.addEventListener('click',()=>{
            const id = Number(boton.dataset.id)
            carrito = carrito.filter(p=>p.id !== id)
            localStorage.setItem('carrito',JSON.stringify(carrito))
            renderCarrito() 
        })
    })

    const vaciarBtn = document.getElementById('vaciarCarrito')
    if(vaciarBtn){
        vaciarBtn.addEventListener('click',()=>{
            carrito = []
            localStorage.setItem('carrito',JSON.stringify(carrito))
            renderCarrito()
        })
    }
}


renderLayout()
renderProductos()
actualizarPagina()
activarBuscador()
activarPaginacion()
renderCarrito()