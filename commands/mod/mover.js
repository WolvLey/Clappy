const commando = require('discord.js-commando')

class Mover extends commando.Command {

	constructor(client) {
		super(client, {
			name: 'move',
			group: 'mod',
			memberName: 'mover',
			description: 'Moves member from a channel to another'
		})
	}

	// /mover vc2 //takes current channel which user is in
	// /mover vc1 vc2

	async run(message, args) {
		let inidUser = message.author

		if (!(message.member.roles.has('168653588359413760'))) {
			message.reply("You have not necessary rights!")
			return
		}

		if (args.length === 0) {
			message.reply(`Usage: !move ["Voicechannel1"] "Voicechannel2"`)
			return
		}

		let argsAr = args.split(/"(.*?)"/)
		argsAr.forEach((item, i, array) => {
			if((item.replace(' ','').length===0)){
				array.splice(i,1)
			}
		})

		let originChannel
		let destChannel

		let curChannel = message.member.voiceChannelID
		let channels = message.guild.channels

		//message.member.setVoiceChannel('334123573797060619')
		// console.log(channels.find('name', argsAr[0]))

		// Get of the current channel
		if (argsAr.length == 1) {
			originChannel = message.member.voiceChannel
			destChannel = channels.find('name', argsAr[0])
		} else {
			originChannel = channels.find('name', argsAr[0])
			destChannel = channels.find('name', argsAr[1])
		}

		originChannel.members.forEach((member) => {
			member.setVoiceChannel(destChannel.id)
				.then()
				.catch(e => console.error(e))
		})
	}
}

module.exports = Mover