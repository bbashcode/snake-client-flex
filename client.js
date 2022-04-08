const net = require("net");
const {IP, PORT} = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
  });

  conn.on("connect", () => {
    conn.write("Name: M1R");
  });

  conn.on("connect", () => {
    conn.write("Say: Heyo folks!");
  });

  conn.on("data", (data) => {
    console.log(data.toString());
    conn.end();
  });
  
  return conn;
};

module.exports = connect;