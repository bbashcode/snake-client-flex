const {moveCommands} = require("./constants");
let connection;

const setupInput = function(conn){
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (input) => handleUserInput(input));
  return stdin;
 };

 const handleUserInput = function (input) {
  if (input === "\u0003") {
     console.log("Exiting the game ...");
     process.exit();   
  }

  if(input in moveCommands) {
    connection.write(moveCommands[input]);
  }
 };



module.exports = {setupInput};