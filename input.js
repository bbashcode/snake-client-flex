//setup interface to handle user input from stdin
let connection;

const setupInput = function(conn){
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // stdin.on("data", handleUserInput);
  connection = conn;
  // console.log(`This is conn --- ${conn}`);
  return stdin;
 };

 const handleUserInput = process.stdin.on("data", (input) => {
  console.log(input);
  if (input === "w" || input === "W"){
    connection.write("Move: up");
  } 
  if(input === "a" || input === "A"){
    connection.write("Move: left");
  } 
  if(input === "s" || input === "S"){
    connection.write("Move: down");
  } 
  if(input === "d" || input === "D"){
    connection.write("Move: right");
  } 
  if (input === "\u0003") {
    //this if for control + c to exit out of the game
     console.log("Exiting the game ...");
     process.exit();   
   } else {
    //  console.log("good jobsss");
    console.log("");
   }
 });



 module.exports = {
   setupInput,
   connection
 };