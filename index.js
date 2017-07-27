const commando = require('discord.js-commando');
const bot = new commando.Client();

/** read rules */
const fs = require('fs'),
	path = require('path'),
	filePath = path.join(__dirname, 'rules.info');

let rules;

fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
	if (!err) {
		rules = data;
	} else {
		console.log(err);
	}
});

bot.on('ready', () => {
	console.log(`${bot.user.tag} is Ready to go ${rules}`);
});

/**greet new member*/
bot.on('guildMemberAdd', member => {
	// Send the message to the guilds default channel (usaually #general), mentioning the member
	member.send(`Welcome to the server, ${member}! 
					Regeln:
						${rules}`);
});


/*****************************************Command Area*********************************************/
bot.registry
	.registerGroups([['random', 'Random'], ['fun', 'Fun'], ['mod', 'Moderation'],['games', 'Games']]);

bot.registry.registerDefaults();

bot.registry.registerCommandsIn(path.join(__dirname, "commands"));
/***************************************************************************************************/


bot.login('MzM0MTAxNTE2Nzg2OTkxMTA1.DEWXcQ.PneTvfey6svWwtb6_xrnpGGEGZU');