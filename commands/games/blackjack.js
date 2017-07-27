const commando = require('discord.js-commando');
const playCards = [2, 3, 4, 5, 6, 7, 8, 9, 10];

class PlayBlackJack extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bjack',
            group: 'games',
            memberName: 'blackjack',
            description: 'Plays Blackjack with the bot.'
        });
    }

    async run(message, args) {
        var dealerPoints;
        var playerPoints;

        message.channel.send("Lust auf eine Runde Blackjack?");

        //first round
        //sendC("Lust auf eine Runde Blackjack?");
        dealerPoints += randomCard();
        sendC(dealerPoints);

        playerPoints += randomCard();
        sendC(dealerPoints);


    }
    sendC(channelText) {
        message.channel.send(channelText);
    }
}

function randomCard() {
    var random = Math.floor(Math.random() * playCards.length - 1) + 1;
    return playCards[random];
}

module.exports = PlayBlackJack;