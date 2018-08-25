const fs = require('fs'); 

//write out data 
function done(output) {
	process.stdout.write(output); 
	process.stdout.write('\nprompt > '); 
}

//where we will store our commands 
function evaluateCmd(userInput) {
	//parses the user input to understand which command was typed 
	const userInputArray = userInput.split(" "); 
	const command = userInputArray[0]; 

	switch (command) {
		case 'echo':
			commandLibrary.echo(userInputArray.slice(1).join(" ")); 
			break;
		case 'cat':
			commandLibrary.cat(userInputArray.slice(1)); 
			break; 
		default: 
			console.log('Command not found');  
	}
}

//where we will store the logic of our commands 
const commandLibrary = {
	'echo': function(userInput) {
		done(userInput); 
	}, 
	'cat' : function(fullPath) {
		const fileName = fullPath[0]; 
		//use readFile function from fs module to read the contents of fileName
		fs.readFile(fileName, (err, data) => {
			if (err) throw err; 
			done(data); 
		}); 
	}
}; 


module.exports.commandLibrary = commandLibrary; 
module.exports.evaluateCmd = evaluateCmd; 