const os = require('node:os')

const nombre = os.platform()
const tipo = os.type()
const version = os.version()
const arquitectura = os.arch()
const cpus = os.cpus().length
//devuelve bytes por lo que lo divido entre 1 millón para hacer el cambio a MB
const memoriatotal = os.totalmem()/1000000
const memorialibre = os.freemem()/1000000

// Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
console.log(`Nombre: ${nombre}`)
console.log(`Tipo: ${tipo}`)
console.log(`Versión: ${version}`)
console.log(`Arquitectura: ${arquitectura}`)
console.log(`CPUs: ${cpus}`)
console.log(`MemoriaTotal: ${memoriatotal.toFixed(2)} MB`)
console.log(`MemoriaLibre: ${memorialibre.toFixed(2)} MB`)

