const { getOs } = require('./osModule.js');
const { getInterfaces } = require('./networkModule.js');

// Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
const datosOs = getOs()

console.log(`Nombre: ${datosOs.nombre}`)
console.log(`Tipo: ${datosOs.tipo}`)
console.log(`Versión: ${datosOs.version}`)
console.log(`Arquitectura: ${datosOs.arquitectura}`)
console.log(`CPUs: ${datosOs.cpus}`)
console.log(`MemoriaTotal: ${datosOs.memoriatotal.toFixed(2)} MB`)
console.log(`MemoriaLibre: ${datosOs.memorialibre.toFixed(2)} MB`)

/* Esto nos da un array de objetos entonces hay que iterar con forEach para que nos de la clave valor 
y a su vez con un bucle for para por cada valor que nos dé, nos de la famiia, dirección e interno*/ 

console.log(" ")
console.log('A PARTIR DE AQUI VA LA INTERFACE')
const interfaces = getInterfaces()

console.log(Object.entries(interfaces).forEach(([key, value]) => {
    console.log(`Interfaz ${key}:`)
    for(let i = 0; i < value.length; i++){
        console.log(`  Familia: ${value[i].family}`)
        console.log(`  Dirección: ${value[i].address}`)
        console.log(`  Interno: ${value[i].internal}`)
    }
}))