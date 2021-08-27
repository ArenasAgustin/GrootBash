const fs = require('fs'); //npm i fs
const cowsay = require('cowsay'); //npm i cowsay
const axios = require('axios'); //npm i axios

const print = (arg) => process.stdout.write(arg);
const printPromp = () => print('\nI´m Goot > ');

let helpList = [];

const timer = (seg) => {
	fs.readFile(__dirname + `/text/counter/${seg}.txt`, 'utf8', (err, data) => {
	 	if(err) throw err;

		print(`${data}`);
		if(seg === 1) printPromp();
	})
}

const cmd = {
	cat: (arg) => {
    	fs.readFile(__dirname + `/text/${arg}.txt`, 'utf8', (err, data) => {
		 	if(err) throw err;

			print(`${data}`);
			printPromp();
		})
    },

    count5s: () => {
    	for(i = 5; i > 0; i--){
    		setTimeout(timer(i), 1000);
    	}
    },

    cowsay: (arg) => {  
    	print(cowsay.say({
    		text : `${arg}`,
    		e : 'oO',
    		T : 'U '
    	}));

    	printPromp();
    },

    cowthink: (arg) => {  
    	print(cowsay.think({
    		text : `${arg}`,
    		e : '==',
    		T : 'U '
    	}));

    	printPromp();
    },

    curl: function(arg) {
        axios(arg[0])
        .then(function(res) {
            print(res.data.toString());
        })
        .catch(err => {
            print(err);
        })

        printPromp();
    },

    date: () => {
    	print(`\t${Date()}`);
    	printPromp();
    },

    echo: (arg) => {
    	print(`\t${arg.join(' ')}`);
    	printPromp();
    },
    
    head: (arg) => {
    	fs.readFile(__dirname + `/text/${arg}.txt`, 'utf8', (err, data) => {
		 	if(err) throw err;
		 	let aux = data.split('\n').slice(0, 6);

	    	print(`\n\n${aux.join('\n')}\n`);
	    	printPromp();
    	})
    },

	help: () => {
		print(`\n\t- ${helpList.join('\n\t- ')}\n`);
		printPromp();
	},

    ls: () => {
    	fs.readdir('.', (err, files) => {
			if (err) throw err;

			print(`\n\t${files.join('\n\t')}\n`);
			printPromp();
		});
    },
    
    mrTurnerSay: (arg) => {
    	fs.readFile(__dirname + '/text/mrturner.txt', 'utf8', (err, data) => {
		 	if(err) throw err;

	    	print(`\n\n\t\t\t\t\t\t\t${arg}\n`);
			print(`${data}\n`);
			printPromp();
    	})
    },

    pwd: () => {
    	print(`\t${process.cwd()}`);
    	printPromp();
	},

    tail: (arg) => {
    	fs.readFile(__dirname + `/text/${arg}.txt`, 'utf8', (err, data) => {
		 	if(err) throw err;
		 	let aux = data.split('\n').slice(-6);

	    	print(`\n\n${aux.join('\n')}\n`);
	    	printPromp();
    	})
    },

    randomsay: (arg) => {  
    	print(cowsay.say({
    		text : `${arg}`,
    		e: '^^',
    		r: true,
    	}));

    	printPromp();
    },

    randomthink: (arg) => {  
    	print(cowsay.think({
    		text : `${arg}`,
    		e: '^^',
    		r: true,
    	}));

    	printPromp();
    },
}

helpList = Object.getOwnPropertyNames(cmd)

module.exports = cmd;
