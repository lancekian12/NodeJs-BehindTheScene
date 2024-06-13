// const EventEmitter = require("events");
// const http = require("http");

// class Sales extends EventEmitter {
//     constructor(){
//         super();
//     }
// }
// const myEmitter = new Sales();

// myEmitter.on("newSale", () => {
//   console.log("There was new sale");
// });

// myEmitter.on("newSale", () => {
//     console.log("Customer name: Jonas" )
// });

// myEmitter.on('newSale', stock => {
//     console.log(`There are now ${stock} item left in stock`)
// })

// myEmitter.emit("newSale", 5);

// const server = http.createServer();
// server.on('request', (req, res) => {
//     console.log('Request recieved!')
//     res.end('Request received')
// })
// server.on('request', (req, res) => {
//     console.log('Another request!')
// })

// server.on('close', () => {
//     console.log('Server closed')
// })

// server.listen(8000, '127.0.0.1', () => {
//     console.log("Waiting for request")
// })

// const Event
