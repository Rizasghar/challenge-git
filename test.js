const tape = require('tape')
const jsonist = require('jsonist')
const server = require('./server')
import {API_BASE_URL} from "./API.config"

tape('should respond hello', (t) => {
  jsonist.get(API_BASE_URL, (err, body) => {
    if (err) t.error(err)

    t.equal(body.msg, 'hello')
    t.end()
  })
})

tape('cleanup', function (t) {
  server.close()
  t.end()
})
