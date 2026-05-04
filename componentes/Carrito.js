export const Carrito = () => {
    return `
    <div class = "max-w-6xl mx-auto px-4 py-6 shadow-lg mb-4">
        <div class = "bg-white rounded-lg p-4">
            <div class = "flex flex-col sm:flex-row sm:justify-between gap-3 mb-4">
                <div>
                    <h2 class = "text-2xl font-bold">Carrito de compras</h2></div>
                    <p class = "text-sm text-gray-600">  Productos en carrito: <span id="cantidadCarrito">0</span></p>
                </div>
                <button 
                    id="vaciarCarrito"
                    class = "bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
                    >
                    Vaciar carrito
                </button>
            </div>
            <div id="itemsCarrito" class ="mb-4">
                <p class = "text-gray-500"> Tu carrito esta vacio</p>
            </div>
            <div class = "boder-t pt-4">
                <p class="text-xl font-bold">Total: <span id="totalCarrito">$0.00</span></p>
            </div>
        </div>
    </div>
    `
}