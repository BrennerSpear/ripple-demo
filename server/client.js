const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:9000');
const msg = {"id": 2, "command": "ledger_closed"}

ws.on('open', function open(data) {
    console.log('opening connection to', ws.url)
    ws.send(JSON.stringify(msg))
})

ws.on('message', function incoming(data) {
  console.log('message regarding', msg.command, ':', data)
})