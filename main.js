import { Card } from "./componentes/Card.js";
import { productos } from "./data/productos.js";

const app = document.getElementById('app')
const renderProductos = ()=>{
    app.innerHTML = productos.map((producto)=>{return Card(producto)}).join('')
}
renderProductos()