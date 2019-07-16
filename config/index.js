const { ENV = 'development' } = process.env
const os = require('os')
const localIP = () => {
  const ip = []
  const networkInterfaces = os.networkInterfaces()
  Object.keys(networkInterfaces).map(devName => {
    networkInterfaces[devName].map(item => {
      if (item.family === 'IPv4' && !item.internal) {
        ip.push(item.address)
      }
    })
  })
  return ip
}

const getHost = () => {
  return {
    localhost: '127.0.0.1',
    development: localIP()[0],
    production: localIP()[0]
  }[ENV]
}

const getPort = () => {
  return {
    localhost: 2019,
    development: 2020,
    production: 2021
  }[ENV]
}

module.exports = {
  host: getHost(),
  port: getPort(),
  hostName: `http://${getHost()}:${getPort()}`
}

