const commando = require('discord.js-commando');

class SomCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'som',
            group: 'sound',
            memberName: 'som',
            description: 'Solta um som'
        });
    }

    async run(message, args){
        
        if (!message.guild) return;

        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
                .then(connection => { // Connection is an instance of VoiceConnection
                    var nome_som = args;
                    const som = connection.playFile('./sons/'+ nome_som +'.mp3');
                })
        } else {
            message.reply("Por favor pare de tentar ser um trolladorzinho.");
        }
    }
}

module.exports = SomCommand;