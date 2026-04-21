export const Paginacion = ()=>{
    return `
    <div class="flex justify-center items-center gap-4 mt-8" id="paginacion">
    <button 
    id="prev"
    class = "
        px-4 py-2
        bg-gray-200
        rounded-lg
        hover:bg-gray-300
        disabled:opacity-50
        disabled:cursor-not-allowed
    "
    >Anterior</button>
    <span 
    id="paginaActual"
    class = "font-semibold text-gray-700"
    ></span>
    <button 
    id="next"
    class = "
        px-4 py-2
        bg-gray-200
        rounded-lg
        hover:bg-blue-600
        disabled:opacity-50
        disabled:cursor-not-allowed
    "
    >Siguiente</button>
    </div>`
}