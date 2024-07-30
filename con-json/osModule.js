import os from 'node:os'

//si lo exportamos directamente, nos lo guarda en un objeto por lo que al importarlo hay que deseestructurar
export const getOs = () => {
    return {
        nombre : os.platform(),
        tipo : os.type(),
        version : os.version(),
        arquitectura : os.arch(),
        cpus : os.cpus().length,
       //devuelve bytes por lo que hay que hacer el cambio a MB
        memoriatotal : (os.totalmem() / (1024 * 1024)),
        memorialibre : (os.freemem() / (1024 *1024))
    }
} 


