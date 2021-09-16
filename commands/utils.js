const fs = require('fs'); //npm i fs
const Promise = require('bluebird');

const print = arg => process.stdout.write(arg);

const printConPromp = arg => {
  print(arg);
  print('\nI´m Groot > ');
};

const readFile = (filename, callback) => {
  fs.readFile(filename, (err, buffer) => {
    if(err) callback(err);
    else callback(null, buffer.toString());
  });
};

const reader = filename => {
  return new Promise((resolve, reject) => {
    readFile(filename, (err, str) => {
      if(err) reject(err);
      else resolve(str);
    });
  });
};

const timer = (seg, cb) => {
  setTimeout(() => {
    cb(seg)
  }, 1000);
};

const promisifiedtimer = (seg) => {
	return new Promise((resolve, reject) => {
		timer(seg, (str, err) => {
			if (err) reject(err);
			else resolve(str);
		});
	});
};

const counter = async seg => {
  seg = parseInt(seg);
  if(!typeof seg === 'number' || seg < 1) printConPromp('Solo numeros positivos')
  
  else {
    for(let i = seg; i >= 0; i--){
      var j = await promisifiedtimer(i);
      print(`\n${j}`)
    }
  }
  printConPromp('\ndone\n')
};

const binarios = (x, pos) => {
  if (pos > 0) return binario(parseInt(x / 2), pos - 1) + (x % 2).toString();
  else return (x % 2);
};

String.prototype.toBinFunc = function() {

  function binario(x, pos) {
    if (pos > 0) return binario(parseInt(x / 2), pos - 1) + (x % 2).toString();
    else return (x % 2);
  }

  var cadena = "";

  for (i = 0, total = this.length; i < total; i ++){
    cadena += binario(this.charCodeAt(i), 7);
  }

  return cadena.trim();
}

String.prototype.toCharFunc = function(fromBase) {
    
    var cadena = "", primero = 0, ultimo = 1;

    while(ultimo <= this.length){
        var convertido = this.substring(primero, ultimo);
        convertido = parseInt(convertido, fromBase);

        while(Number(convertido) < 65 || Number(convertido) > 122){
            ultimo++;
            convertido = this.substring(primero, ultimo);
            convertido = parseInt(convertido, fromBase);
        }
      
        cadena  += String.fromCharCode(convertido);
        
        primero = ultimo; ultimo++;
    }
    
    return cadena;
}

module.exports = {
  print,
  printConPromp,
  readFile,
  reader,
  timer,
  promisifiedtimer,
  counter
}