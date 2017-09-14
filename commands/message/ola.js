const commando = require('discord.js-commando');

class OlaCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'ola',
            group: 'testing',
            memberName: 'ola',
            description: 'Sauda todo mundo'
        });
    }

    async run(message, args){
        message.channel.send("Boa Manhã/Tarde/Noite para todo mundo! (PS: Entrem no canal seus bando de macaco)");
    }
}

module.exports = OlaCommand;