var ws = new WebSocket("ws://localhost:9000");

var id = 1
var command = 'ledger_closed'
var msg = {"id": id, "command": command}

console.log(ws)
ws.onopen = function(data) {
  console.log('opening connection to', ws.url)
}

ws.onmessage = function(data) {
  console.log('data from ripple:',data.data)
  document.getElementById('message').innerHTML = data.data
}

function sendCommand() {
  console.log('hello')
  ws.send(JSON.stringify(msg))
  msg.id++
}