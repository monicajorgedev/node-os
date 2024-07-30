import os from 'node:os'

const getInterfaces = () => {
    return os.networkInterfaces();
}


export default getInterfaces;