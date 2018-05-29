const commando = require('discord.js-commando')

class Set_Nickname extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'nick',
			group: 'mod',
			memberName: 'nick',
			description: 'Change your own nickname.'
		})
	}

	async run(message, args) {

		if (args.replace(' ', '').length == 0) {
			message.reply(`Usage: !nick <Your nickname>`)
			return
		}

		let test = message.member
		message.member.setNickname(args)
			.then()
			.catch(e => console.log(e))
	}
}

module.exports = Set_Nickname