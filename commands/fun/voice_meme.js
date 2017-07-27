const commando = require('discord.js-commando');

class VoiceMemeCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'meme',
			group: 'fun',
			memberName: 'meme',
			description: 'Shout out a random meme'
		});
	}

	async run(message, args) {
		message.channel.send(args, { tts: true });
	}
}

module.exports = VoiceMemeCommand;