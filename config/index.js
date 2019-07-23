const os = require('os')
const { ENV } = process.env
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
    development: localIP()[0],
    production: localIP()[0]
  }[ENV]
}

const getPort = () => {
  return {
    development: 2020,
    production: 9102
  }[ENV]
}

const getBaseUrl = () => {
  return {
    development: 'https://cnodejs.org/api/v1',
    production: 'https://cnodejs.org'
  }[ENV]
}

module.exports = {
  host: getHost(),
  port: getPort(),
  baseUrl: getBaseUrl(),
  hostName: `http://${getHost()}:${getPort()}`
}
