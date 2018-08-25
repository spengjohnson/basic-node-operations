const commands = require('./commands.js'); 

//prompt the user for input 
process.stdout.write('prompt > '); 

//stdin 'data' event triggers after a user types in a line 
process.stdin.on('data', (userInput) => {
	userInput = userInput.toString().trim(); 
	//evaluateCmd = a function which will be created in command.js 
	commands.evaluateCmd(userInput); 
}); 
