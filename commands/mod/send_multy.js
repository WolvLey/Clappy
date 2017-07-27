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
		console.log(args.id);
	}
}
module.exports = SendToMulty;