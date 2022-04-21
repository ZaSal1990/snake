const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name:ZSK');
    setInterval(() => {
      // conn.write('Move: up');
      // conn.write('Move: down');
      // conn.write('Move: down');
      // conn.write('Move: down');
    }, 500);
    
  });
  return conn;
};

module.exports = connect;

