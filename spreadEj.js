const frutas =['naranja','banana','manzana','pera']

const frutas2 = [...frutas]
console.log(frutas2);
frutas2.push('kiwi')
console.log(frutas);
console.log(frutas2);


const usuarios = [
    {id:1,nombre:'jose'},
    {id:2,nombre:'maria'},
    {id:3,nombre:'alvaro'},
    {id:4,nombre:'alejandro'},
]

const copiaUsuarios = [...usuarios]
console.log(copiaUsuarios);

const copiaUsuarios2 = [...usuarios,{id:5,nombre:'pedro'}]
console.log(copiaUsuarios2);



const usuario ={
    id:1,
    nombre:'jose'   
}

const copiaUsuario = {...usuario}
console.log(copiaUsuario);


const nombres =['jose','maria','alvaro','alejandro']
// desestructuracion
const [usuario1, usuario2, usuario3] = nombres
console.log(usuario1,usuario2, usuario3);


const usuario1 ={
    id:1,
    nombre:'jose'
}

const {id,nombre} = usuario1
console.log(id,nombre);


const numeros =[1,2,3,4,5]

// numeros.reduce((suma,numero)=>suma+numero,0)
console.log(numeros.reduce((suma, numero)=> suma+ numero,0));
console.log(numeros.reduce((resta, numero)=> resta- numero,0));
console.log(numeros.reduce((multi, numero)=> multi* numero,1));


const listaUsuarios =[
    {id:1, nombre:'jose',edad:20},
    {id:2, nombre:'maria',edad:30},    
    {id:3, nombre:'alvaro',edad:40},
    {id:4, nombre:'alejandro',edad:50},
]

const usuariosFind = listaUsuarios.find(usuario=>usuario.id===6)
console.log(usuariosFind);
