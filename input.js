
let connection; //declared here for handleUserInput function declaration to use

const setupInput = function(conn) {
  connection = conn; //declared here for function invokation to use
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) { //binding movements
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === 'z') { //canned msgs below
    connection.write('Say: wah?');
  } else if (key === 'x') {
    connection.write('Say: bro!');
  } else if (key === 'c') {
    connection.write('Say: wadaa?');
  }
};


module.exports = { setupInput };