const fs = require('fs'); //npm i fs
const cowsay = require('cowsay'); //npm i cowsay
const axios = require('axios'); //npm i axios

const print = (arg) => process.stdout.write(arg);
const printConPromp = (arg) => {
	print(arg);
	print('\nI´m Groot > ');
};

let helpList = [];

const readFile = function (filename, callback) {
	fs.readFile(filename, function (err, buffer) {
		if (err) callback(err);
		else callback(null, buffer.toString());
	});
};

const reader = function (filename) {
	return new Promise(function (resolve, reject) {
		readFile(filename, function (err, str) {
			if (err) reject(err);
			else resolve(str);
		});
	});
};

const cmd = {
	cat: (arg) => {
		reader(`${__dirname}/text/${arg}.txt`)
			.then((data) => printConPromp(`${data}`))
			.catch((err) => printConPromp(`${err}`))
    },

    count5s: () => {
    	for(i = 5; i > 0; i--){
    		setTimeout(() => {
    			reader(`${__dirname}/text/counter/${i}.txt`)
					.then((data) => {
						if(i > 1) print(`${data}`);

						else printConPromp(`${data}`);
					})
					.catch((err) => {
						printConPromp(`${err}`);
					})
			}, 1000);
    	}
    },

    cowsay: (arg) => {  
    	printConPromp(cowsay.say({
    		text : `${arg}`,
    		e : 'oO',
    		T : 'U '
    	}));
    },

    cowthink: (arg) => {  
    	printConPromp(cowsay.think({
    		text : `${arg}`,
    		e : '==',
    		T : 'U '
    	}));
    },

    curl: function(arg) {
        axios(arg[0])
	        .then(res => printConPromp(res.data.toString()))
	        .catch(err => printConPromp(err));
    },

    date: () => {
    	printConPromp(`\t${Date()}`);
    },

    echo: (arg) => {
    	printConPromp(`\t${arg.join(' ')}`);
    },
    
    head: (arg) => {
    	reader(`${__dirname}/text/${arg}.txt`)
			.then((data) => {
				let aux = data.split('\n').slice(0, 6);

				printConPromp(`\n\n${aux.join('\n')}\n`);
			})
			.catch((err) => printConPromp(`${err}`));
    },

	help: () => {
		printConPromp(`\n\t- ${helpList.join('\n\t- ')}\n`);
	},

    ls: () => {
    	fs.readdir('.', (err, files) => {
			if (err) printConPromp(err);

			printConPromp(`\n\t${files.join('\n\t')}\n`);
		});
    },
    
    mrTurnerSay: (arg) => {
    	reader(`${__dirname}/text/mrturner.txt`)
			.then((data) => {
				let aux = data.split('\n').slice(-6);

				print(`\n\n\t\t\t\t\t\t\t${arg}\n`);
				printConPromp(`${data}\n`);
			})
			.catch((err) => printConPromp(`${err}`));
    },

    pwd: () => {
    	printConPromp(`\t${process.cwd()}`);
	},

    tail: (arg) => {
    	reader(`${__dirname}/text/${arg}.txt`)
			.then((data) => {
				let aux = data.split('\n').slice(-6);

				printConPromp(`\n\n${aux.join('\n')}\n`);
			})
			.catch((err) => printConPromp(`${err}`));
    },

    randomsay: (arg) => {  
    	printConPromp(cowsay.say({
    		text : `${arg}`,
    		e: '^^',
    		r: true,
    	}));
    },

    randomthink: (arg) => {  
    	printConPromp(cowsay.think({
    		text : `${arg}`,
    		e: '^^',
    		r: true,
    	}));
    },
}

helpList = Object.getOwnPropertyNames(cmd)

module.exports = cmd;
