const os = require('node:os')

const getOs = ()=>{
    return {
        nombre : os.platform(),
        tipo : os.type(),
        version : os.version(),
        arquitectura : os.arch(),
        cpus : os.cpus().length,
       //devuelve bytes por lo que lo divido entre 1 millón para hacer el cambio a MB
        memoriatotal : os.totalmem()/1000000,
        memorialibre : os.freemem()/1000000
    }
} 

export { getOs};
