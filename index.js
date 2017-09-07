const commando = require('discord.js-commando');
const bot = new commando.Client();
const path = require('path');

//const util = require('./utils.js');

const settings = require('./settings.json');

bot.on('ready', () => {
    console.log(`${bot.user.tag} is Ready to go`);
});

/**greet new member*/
/* bot.on('guildMemberAdd', member => {
	// Send the message to the guilds default channel (usaually #general), mentioning the member
	member.send(`Welcome to the server, ${member}! 
					Regeln:
						${rules}`);
}); */


/*****************************************Command Area*********************************************/
bot.registry
    .registerGroups([['random', 'Random'], ['fun', 'Fun'], ['mod', 'Moderation'], ['games', 'Games']]);

bot.registry.registerDefaults();

bot.registry.registerCommandsIn(path.join(__dirname, "commands"));
/***************************************************************************************************/


bot.login(settings.token).catch((e)=>console.error(e));