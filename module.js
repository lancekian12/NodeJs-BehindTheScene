// console.log(arguments)
// console.log(require('module').wrapper)

const C = require('./test-module-1')
const calc1 = new C();
console.log(calc1.add(2,5))

//exports
const { add, multiple , subtract } = require('./test-module-2')
console.log(subtract(500, 250))

//caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();