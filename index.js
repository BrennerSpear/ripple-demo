const WebSocket = require('ws');
const ripplews = new WebSocket('wss://s1.ripple.com:443');
const msg = {"id": 2, "command": "ledger_closed"}


//just console logging
// ripplews.on('open', function open(data) {
//     console.log('opening connection to', ripplews.url)
//     ripplews.send(JSON.stringify(msg))
// })

// ripplews.on('message', function incoming(data) {
//   console.log('message regarding', msg.command, ':', data)
// })


const wss = new WebSocket.Server({port: 9000})

ripplews.on('open', function open(data) {
  console.log('opening connection to', ripplews.url)
})

wss.on('connection', function connection(ws) {
  console.log('client connecting using', ws.upgradeReq.headers.host)

  ws.on('message', function incoming(message) {
    ripplews.send(message)
  })

  ripplews.on('message', function incoming(data) {
    console.log('message regarding', msg.command, ':', data)
    ws.send(data)
  })

})