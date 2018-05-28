const commando = require('discord.js-commando')
const https = require('https')
const settings = require('../../settings.json')

class Nitrado extends commando.Command {

	constructor(client) {
		super(client, {
			name: 'nitrado',
			group: 'mod',
			memberName: 'nitrado',
			description: 'Some mod function for the nitrado server',
			examples: [
				'!nitrado playerlist',
				'!nitrado restart'
			]
		})
	}

	async run(message, args) {
		if (args.replace(' ', '').length === 0) {
			message.reply(`Usage: !nitrado [playerlist/restart]`)
			return
		}

		switch (args) {
			case 'playerlist':
				this.printPlayerList(message)
				break
			case 'restart':
				this.restartServer(message)
				break
			default:
				message.reply(`Usage: !nitrado [playerlist/restart]`)
				break
		}
	}

	printPlayerList(message) {
		let playersOnline = ''
		let url = `https://api.nitrado.net/services/2491626/gameservers/games/players?access_token=${settings.nitrado_token}`
		this.httpsGet(url, (resp) => {
			if (resp.status === 'success') {
				resp.data.players.forEach((item, i, array) => {
					if (i === array.length - 1) {
						playersOnline += `${item.name}`
					} else {
						playersOnline += `${item.name}, `
					}
				})

				message.reply(`In Minecraft are following players online: ${playersOnline}`)
			}
		})
	}

	//TODO: Implement message like restartServer(message)?
	restartServer(message) {
		if (!(message.member.roles.has('168653588359413760'))) {
			message.reply('You have not necessary rights!')
			return
		}

		let url = `https://api.nitrado.net/services/2491626/gameservers/restart?access_token=${settings.nitrado_token}`

		this.httpsGet(url, (resp) => {
			message.reply(resp.message)
		})
	}

	httpsGet(url, callback) {
		https.get(url, resp => {
			let data = ''
			// A chunk of data has been recieved.
			resp.on('data', (chunk) => {
				data += chunk
			})
			// The whole response has been received. Print out the result.
			resp.on('end', () => {
				callback(JSON.parse(data))
			})
		}).on('error', (err) => {
			console.log('Error: ' + err.message)
		})
	}
}

module.exports = Nitrado