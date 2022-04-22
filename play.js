const { connect } = require('./client.js');
const { setupInput } = require('./input.js');

console.log('Connecting to the server ...');

setupInput(connect());
