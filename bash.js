const commands = require('./commands/index.js');

process.stdout.write('I´m Goot > ');

process.stdin.on('data', function (data) {
  let arg = data.toString().trim().split(' ');
  let cmd = arg.shift()

  if(commands[cmd]) {
    commands[cmd](arg);  
  }
  else {
    process.stdout.write('\nComando no bálido, lista de comandos help');
    process.stdout.write('\nI´m Goot > ');
  }
});
