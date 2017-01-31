const http = require('http')
const merry = require('merry')

const notFound = merry.notFound
const error = merry.error

module.exports = (config) => {
  const { port, host } = config
  const app = merry()

  app.router([
    [ '/', (req, res, ctx, done) => {
      done(null, 'hello world')
    }],
    [ '/error', (req, res, ctx, done) => {
      done(error({ statusCode: 500, message: 'server error!' }))
    }],
    ['/api', {
      get: (req, res, ctx, done) => {
        done(null, 'hello very explicit GET')
      }
    }],
    [ '/404', notFound() ]
  ])

  const proxy = http.createServer(app.start())

  proxy.start = () => {
    app.log.info(config)
    proxy.listen(port, host, () => {
      app.log.info(`proxy listening on ${host}:${port}`)
    })
  }

  return proxy
}

