const connect = require("./client").connect;
const setupInput = require("./input").setupInput;

console.log("Connecting ...");
setupInput(connect());