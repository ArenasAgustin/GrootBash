const fs = require('fs'); //npm i fs
const cowsay = require('cowsay'); //npm i cowsay
const axios = require('axios'); //npm i axios
var Promise = require('bluebird');

let helpList = [];

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

const cmd = {
	cat: arg => {
		reader(`${__dirname}/text/${arg}.txt`)
			.then(data => printConPromp(`${data}`))
			.catch(err => printConPromp(`${err}`))
    },

    countseg: seg => {
    	if(seg < 0) printConPromp('Only positive numbers');

    	do{
    		setTimeout(s => {
    			print(`\n${s}s`);
    			seg--;
    		}, 1000);
    	}while(seg > 0)

    	printConPromp('\n0s')
    },

    cowsay: arg => {  
    	printConPromp(cowsay.say({
    		text : `${arg}`,
    		e : 'oO',
    		T : 'U '
    	}));
    },

    cowthink: arg => {  
    	printConPromp(cowsay.think({
    		text : `${arg}`,
    		e : '==',
    		T : 'U '
    	}));
    },

    curl: arg => {
        axios(arg[0])
	        .then(res => printConPromp(res.data.toString()))
	        .catch(err => printConPromp(err));
    },

    date: () => {
    	printConPromp(`\t${Date()}`);
    },

    echo: arg => {
    	printConPromp(`\t${arg.join(' ')}`);
    },
    
    head: arg => {
    	reader(`${__dirname}/text/${arg}.txt`)
			.then(data => {
				let aux = data.split('\n').slice(0, 6);

				printConPromp(`\n\n${aux.join('\n')}\n`);
			})
			.catch(err => printConPromp(`${err}`));
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
    
    mts: arg => {
    	reader(`${__dirname}/text/mrturner.txt`)
			.then(data => {
				let aux = data.split('\n').slice(-6);

				print(`\n\n\t\t\t\t\t\t\t${arg}\n`);
				printConPromp(`${data}\n`);
			})
			.catch(err => printConPromp(`${err}`));
    },

    pwd: () => {
    	printConPromp(`\t${process.cwd()}`);
	},

    randomsay: arg => {  
    	printConPromp(cowsay.say({
    		text : `${arg}`,
    		e: '^^',
    		r: true,
    	}));
    },

    randomthink: arg => {  
    	printConPromp(cowsay.think({
    		text : `${arg}`,
    		e: '^^',
    		r: true,
    	}));
    },

    sort: () => {},

    tail: arg => {
    	reader(`${__dirname}/text/${arg}.txt`)
			.then(data => {
				let aux = data.split('\n').slice(-6);

				printConPromp(`\n\n${aux.join('\n')}\n`);
			})
			.catch(err => printConPromp(`${err}`));
    },

    uniq: () => {},

    wc: arg => {
    	reader(`${__dirname}/text/${arg}.txt`)
			.then(data => {
				let aux = data.split('\n');

				printConPromp(`\n\nlines: ${aux.length}\n`);
			})
			.catch(err => printConPromp(`${err}`));
    },
}

helpList = Object.getOwnPropertyNames(cmd)

module.exports = cmd;
