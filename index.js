const commando = require('discord.js-commando')
const bot = new commando.Client()
const path = require('path')

//const util = require('./utils.js') 
const LocalStorage = require('node-localstorage').LocalStorage
localStorage = new LocalStorage('./scratch')

const settings = require('./settings.json')

bot.on('ready', () => {
	console.log(`${bot.user.tag} is Ready to go`)
})

bot.on('guildMemberRemove', (member) => {

	let isCoreMember=false
	let guild = member.guild

	settings.core_member.forEach((id)=>{
		if (member.id===id){
			isCoreMember=true
			return
		}
	})

	if (isCoreMember){
		guild.addMember(member)
			.catch(e=>console.log(e))
	}
})

/**greet new member*/
/* bot.on('guildMemberAdd', member => {
	// Send the message to the guilds default channel (usually #general), mentioning the member
	member.send(`Welcome to the server, ${member}! 
					Regeln:
						${rules}`) 
})  */

/*****************************************Command Area*********************************************/
bot.registry
	.registerGroups([['random', 'Random'], ['fun', 'Fun'], ['mod', 'Moderation'], ['games', 'Games']])

bot.registry.registerDefaults()

bot.registry.registerCommandsIn(path.join(__dirname, 'commands'))
/***************************************************************************************************/

bot.login(settings.discord_token).catch((e) => console.error(e))