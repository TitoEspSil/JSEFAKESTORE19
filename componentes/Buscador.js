export const Buscador = ()=>{
    return `
    <div class = "max-w-4xl mx-auto mb-6 px-4">
    <div class = "flex items-center w-80 border border-gray-300 rounded-xl shadow-sm px-3 focus:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
    <input
          type = "text"
          id = "inputBusqueda"
          placeholder = "Ej: laptop, camisa ..."
          class = "
            w-full
            p-3
            outline-none
            rounded-xl
          "    >
    </div>
    </div>
    `
}