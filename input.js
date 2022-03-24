const { monitorEventLoopDelay } = require("perf_hooks");

// In the handleUserInput function, you'll specify what happens when a particular key is pressed on the keyboard input.
const handleUserInput = function (input) {
  // your code here 
    if (input === '\u0003') {
     process.exit();   
    }
  
};
// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;