const os = require('node:os')

const getInterfaces = () => {
    return os.networkInterfaces();
}


export { getInterfaces};