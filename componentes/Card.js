export const Card = (producto) =>{
    return `
        <div class = 'bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition'>
            <img 
            src = "${producto.image}"
            class = "h-40 w-full object-contain mb-4" />
            <h2 class = "text-lg font-semibold mb-2 line-clamp-2">${producto.title}</h2>
            <p class = "text-gray-500 line-clamp-2">${producto.description}</p>
            <span class = "text-blue-600 font-bold text-lg line-clamp-2">${producto.price}</span>
            <button 
            class = "btn-agregar w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            data-id="${producto.id}"
            >
            Agregar al carrito
            </button>
            </div> 
    `
}
