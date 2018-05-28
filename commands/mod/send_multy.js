const commando = require('discord.js-commando')

class SendToMulty extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'send',
			group: 'mod',
			memberName: 'send_multy',
			description: 'Send a message to multiple people.'
		})
	}

	async run(message, args) {
		let text = ''
		let destChannel
		let channels = message.guild.channels
		// destChannel = channels.find('name', argsAr[0])

		// if (args.length === 0) {
		// 	message.reply('!send @Nutzer1 @Nutzer2 ... Deine Nachricht die du senden willst.')
		// 	return
		// }

		args = args.split(' ')

		let member = message.mentions.members.array()

		for (let i = member.length; i < args.length; i++) {
			text += args[i]
			if (i < args.length - 1) {
				text += ' '
			}
		}

		if (!args[0].include('@')) {
			this.sendToChannel(args, text)
		}


		for (let i = 0; i < member.length; i++) {
			member[i].send(message.author + ': ' + text)
		}
		message.delete(3000)
	}

	sendToChannel(args, text) {
		destChannel = channels.find('name', args[0])

		destChannel.members.forEach((member) => {
			member.send(message.author + ': ' + text)
		})
	}
}

module.exports = SendToMulty