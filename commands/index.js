const fs = require('fs'); //npm i fs
const cowsay = require('cowsay'); //npm i cowsay
const request = require('request'); //npm i request

const {
  print,
  printConPromp,
  readFile,
  reader,
  timer,
  promisifiedtimer,
  counter,
  maxValue
} = require ('./utils.js')

let helpList = [];

const cmd = {
	cat:async arg => {
		const data = await reader(`${__dirname}/text/${arg[0]}.txt`)
			
		try{ printConPromp(`${data}`) }
		catch(err){ printConPromp(`${err}`) }
  },

  count: seg => {
  	counter(seg);
  },

  cowsay: arg => {  
  	printConPromp(`\n${cowsay.say({
  	  		text : `${arg}`,
  	  		e : 'oO',
  	  		T : 'U '
  	  	})}\n`);
  },

  cowthink: arg => {  
  	printConPromp(`\n${cowsay.think({
  		text : `${arg}`,
  		e : '==',
  		T : 'U '
  	})}\n`);
  },

  curl: arg => {
      request(arg[0], function(err, res, body){
      	if(err) printConPromp(err);

      	else printConPromp(body);
      })
  },

  date: () => {
  	printConPromp(`\t${Date()}`);
  },

  echo: arg => {
  	printConPromp(`\t${arg.join(' ')}`);
  },
    
  head:async arg => {
  	let data = await reader(`${__dirname}/text/${arg[0]}.txt`)
		try{ 
			const lines = arg[1] ? parseInt(arg[1]) : 6;
			let aux = data.split('\n').slice(0, lines);

			printConPromp(`\n${aux.join('\n')}\n`);
		}

		catch(err){ printConPromp(`${err}`) }
  },

	help: () => {
		printConPromp(`\n\t- ${helpList.join('\n\t- ')}\n`);
	},

  ls: () => {
  	fs.readdir('.', (err, files) => {
		if (err) printConPromp(err);

		else printConPromp(`\n\t${files.join('\n\t')}\n`);
	});
  },
  
  mts:async arg => {
  	let data = await reader(`${__dirname}/text/mrturner.txt`)
		try{ 
			let aux = data.split('\n').slice(-6);

			print(`\n\t\t\t\t\t\t\t${arg}\n`);
			printConPromp(`${data}\n`);
		}

		catch(err){ printConPromp(`${err}`) }
  },

  pwd: () => {
  	printConPromp(`\t${process.cwd()}`);
	},

  randomsay: arg => {  
  	printConPromp(`\n${cowsay.say({
  		text : `${arg}`,
  		e: '^^',
  		r: true,
  	})}\n`);
  },

  randomthink: arg => {  
  	printConPromp(`\n${cowsay.think({
  		text : `${arg}`,
  		e: '^^',
  		r: true,
  	})}\n`);
  },

  sort:async arg => {
		const data = await reader(`${__dirname}/text/${arg[0]}.txt`)
		try{
			printConPromp(`\n${data.split('\n').sort().join('\n')}\n`)
		}
		catch(err){ printConPromp(`${err}`) }
  },

  tail:async arg => {
  	let data = await reader(`${__dirname}/text/${arg[0]}.txt`)
		try{ 
			const lines = arg[1] ? parseInt(arg[1]) : 6;
			let aux = data.split('\n').slice(-lines);

			printConPromp(`\n${aux.join('\n')}\n`);
		}

		catch(err){ printConPromp(`${err}`) }
  },

  toBin: arg => {
  	try{ printConPromp(`\n\t${arg[0].toBinFunc()}\n`); }
  	catch(err){ printConPromp(`${err}`); }
  },

  toChar: arg => {
  	try{ printConPromp(`\n\t${arg[0].toCharFunc(2)}\n`); }
  	catch(err){ printConPromp(`${err}`); }
  },

  uniq: () => printConPromp(`\nComing soon\n`),

  wc:async arg => {
  	let data = await reader(`${__dirname}/text/${arg[0]}.txt`)
		try{ 
			let lines = data.split('\n');
			let words = lines.join(' ').split(' ');
			let characters = words.join('').split('');

			print(`\n\tlines: ${lines.length}\n`);
			print(`\twords: ${words.length}\n`);
			printConPromp(`\tcharacters: ${characters.length}\n`);
		}

		catch(err){ printConPromp(`${err}`) }
  },
}

helpList = Object.getOwnPropertyNames(cmd)

module.exports = cmd;