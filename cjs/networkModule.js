const os = require('node:os')

const getInterfaces = () => {
    return os.networkInterfaces();
}

console.log(getInterfaces())
module.exports = getInterfaces
