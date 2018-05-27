const commando = require('discord.js-commando');


class VoiceMemeCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'meme',
			group: 'fun',
			memberName: 'meme',
			description: 'Comming soon'
		});
	}

	async run(message, args) {
		return
		message.channel.send(args, { tts: true });
	}
}

module.exports = VoiceMemeCommand;