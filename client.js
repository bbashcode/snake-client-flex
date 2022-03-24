const net = require("net");

// establishes a connection with the game server
const connect = function (){
  const conn = net.createConnection({
    host: localhost, // IP address here,
    port: 8765 // PORT number here,
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");

  //The "connect" event is triggered on a connection as soon as it is successfully established.
  conn.on("connect", ()=> {
    console.log("Successfully connected to game server!");
    conn.write("Name: MM6");
    // conn.write("Move: up"); // move up one square (unless facing down)
  });

  //Update the connect function to handle incoming data and console.log it for the player.
  conn.on("data", (data) =>{
    console.log(data.toString());
  });
  
  return conn;
};


console.log("Connecting ...");
connect();

module.exports = connect;