const commando = require('discord.js-commando')
const https = require('https')
const settings = require('../../settings.json')

class Info extends commando.Command {

	constructor(client) {
		super(client, {
			name: 'info',
			group: 'mod',
			memberName: 'info',
			description: 'show with !info players current online users on Minecraft'
		})
	}

	async run(message, args) {
		if (args.replace(' ', '').length === 0) {
			message.reply(`Usage: !info players`)
			return
		}

		let playersOnline = ''

		this.httpsGet((resp) => {
			if (resp.status === 'success') {
				resp.data.players.forEach((item, i, array) => {
					if (i === array.length - 1) {
						playersOnline = `${item.name}`
					} else {
						playersOnline = `${item.name}, `
					}
				})

				message.reply(`In Minecraft are following players online: ${playersOnline}`)
			}
		})
	}

	httpsGet(callback) {
		https.get(`https://api.nitrado.net/services/2491626/gameservers/games/players?access_token=${settings.nitrado_token}`, resp => {
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

module.exports = Info