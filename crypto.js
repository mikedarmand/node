const crypto = require('crypto');
console.log(Object.keys(crypto))
// per visualizzare i metodi node js

const RandomId = crypto.randomBytes(10).toString('hex');

console.log(RandomId);