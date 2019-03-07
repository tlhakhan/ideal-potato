'use strict'
const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const redis = require('redis')
const sub = redis.createClient({ host: 'docker-00'})
const pub = redis.createClient({ host: 'docker-00'})

sub.subscribe("smos-kstats")

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/publish', (req, res) => {
  let msg = `a new message ${(new Date).toString()}`
  pub.publish('news', msg)
  res.send(`published: ${msg}`)
})

io.on('connection', function (socket) {
  sub.on('message', (chan, msg) => {
    socket.emit('news', { news: msg })
  })
})

server.listen(8081)
