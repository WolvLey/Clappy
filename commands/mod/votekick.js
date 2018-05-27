const commando = require('discord.js-commando');

var countVote = 0;

class VoteToKick extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'mod',
            memberName: 'votekick',
            description: 'Starts a vote to kick a player'
        });
    }

    async run(message, args) {
        return;
        let targetPlayer = args;
        // max vote for kick
        let maxVote =5;

        let votetPlayer=[];
        let member = message.mentions.members.first();

        //TODO: forbid serveral names
        if (args.length <= 0 && args.length >0) {
            message.reply('bitte Namen angeben | !vkick [Name]');
            return;
        }

        if (countVote <= 0) {
            countVote++;
            message.reply(`startete die Abstimmung um ${targetPlayer} zu kicken`);
            message.reply(`${countVote}/5 sind für ${targetPlayer}`);
        } else {
            message.reply(`${++countVote}/5 sind für ${targetPlayer}`);
        }


        if (countVote >= maxVote) {
            //kick the voted user

            // member.kick().then((member) => {
            //     message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
            // }).catch(() => {
            //     message.channel.send("Access Denied");
            // });
            countVote = 0;
        }
    }
}
module.exports = VoteToKick;