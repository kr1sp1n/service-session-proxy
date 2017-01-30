const tape = require('tape')

const config = {
  port: 3001,
  host: 'localhost'
}

const proxy = require('../proxy')(config)

tape('proxy', (t) => {
  t.test('should have start() function', (t) => {
    t.plan(2)
    t.ok(proxy.hasOwnProperty('start'))
    t.ok(typeof proxy.start, 'function')
  })
})

