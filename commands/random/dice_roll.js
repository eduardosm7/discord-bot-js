const commando = require('discord.js-commando');

class DadoCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'dado',
            group: 'random',
            memberName: 'dado',
            description: 'Rola um dado'
        });
    }

    async run(message, args){
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("Você rolou " + roll);
    }
}

module.exports = DadoCommand;