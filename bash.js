const commands = require('./commands/index.js');

const print = (arg) => process.stdout.write(arg);

print('Welcome to the Groot bash');
print('\nI´m Groot > ');

process.stdin.on('data', function (data) {
  let arg = data.toString().trim().split(' ');
  let cmd = arg.shift()

  if(commands[cmd]) {
    commands[cmd](arg);  
  }
  else {
    print(`"${cmd}" is not recognized as an internal command, \nlist of commands with "help" command\n`);
    print('\nI´m Groot > ');
  }
});
