const commando = require('discord.js-commando');

class SendToMulty extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'send',
			group: 'mod',
			memberName: 'send_multy',
			description: 'Send a message to multiple people.'
		});
	}

	async run(message, args) {

		if (args.length === 0) {
			message.reply('!send @Nutzer1 @Nutzer2 Deine Nachricht die du senden willst.');
		}

		args = args.split(" ");

		let member = message.mentions.members.array();

		let text = '';

		for (var i = member.length; i < args.length; i++) {
			text += args[i];
			if (i < args.length - 1) {
				text += ' ';
			}
		}


		for (var i = 0; i < member.length; i++) {
			member[i].send(message.author+": "+text);
		}
		message.delete(3000);
	}
}
module.exports = SendToMulty;