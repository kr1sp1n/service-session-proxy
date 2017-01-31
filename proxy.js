const http = require('http')

module.exports = (config) => {
  const { port, host } = config

  const handleRequest = (req, res) => {
    console.log(`${req.method} ${req.url}`)
    if (req.url.match(/^\/session$/)) {
      if (req.method === "POST") {
        console.log('MFMFMFM')
      }
    }
    res.end()
  }

  const proxy = http.createServer(handleRequest)

  proxy.start = () => {
    proxy.listen(port, host)
  }

  return proxy 
}

