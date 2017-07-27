const commando = require('discord.js-commando');

let jokesArray=[[]];
class VoiceMemeCommand extends commando.Command{
	constructor(client){
		super(client, {
			name: 'joke',
			group: 'fun',
			memberName: 'joke',
			description: 'Bot tells a Joke'
		});
	}

	async run(message, args){
		message.channel.send(jokesArray,{tts: true});
	}
}

 module.exports=VoiceMemeCommand;