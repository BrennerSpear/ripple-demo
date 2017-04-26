const WebSocket = require('ws');
const ripplews = new WebSocket('wss://s1.ripple.com:443');
const msg = {"id": 2, "command": "ledger_closed"}

ripplews.on('open', function open(data) {
    console.log('opening connection to', ripplews.url)
    ripplews.send(JSON.stringify(msg))
})

ripplews.on('message', function incoming(data) {
  console.log('message regarding', msg.command, ':', data)
})


