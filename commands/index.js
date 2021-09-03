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
  counter
} = require ('./utils.js')

let helpList = [];

const cmd = {
	cat: arg => {
	reader(`${__dirname}/text/${arg}.txt`)
		.then(data => printConPromp(`${data}`))
		.catch(err => printConPromp(`${err}`))
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
    
  head: arg => {
  	reader(`${__dirname}/text/${arg[0]}.txt`)
		.then(data => {
			const lines = arg[1] ? parseInt(arg[1]) : 6;
			let aux = data.split('\n').slice(0, lines);

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

		else printConPromp(`\n\t${files.join('\n\t')}\n`);
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

  sort: () => printConPromp(`\n\nComing soon\n`),

  tail: arg => {
  	reader(`${__dirname}/text/${arg[0]}.txt`)
		.then(data => {
			const lines = arg[1] ? parseInt(arg[1]) : 6;
			let aux = data.split('\n').slice(-lines);

			printConPromp(`\n\n${aux.join('\n')}\n`);
		})
		.catch(err => printConPromp(`${err}`));
  },

  uniq: () => printConPromp(`\n\nComing soon\n`),

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