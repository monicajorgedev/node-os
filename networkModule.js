const os = require('node:os')

const interfaces = os.networkInterfaces();

/* Esto nos da un array de objetos entonces hay que iterar con forEach para que nos de la clave valor 
y a su vez con un bucle for para por cada valor que nos dé, nos de la famiia, dirección e interno*/ 

console.log(Object.entries(interfaces).forEach(([key, value]) => {
    console.log(`Interfaz ${key}:`)
    for(let i = 0; i < value.length; i++){
        console.log(`  Familia: ${value[i].family}`)
        console.log(`  Dirección: ${value[i].address}`)
        console.log(`  Interno: ${value[i].internal}`)
    }
  }))

