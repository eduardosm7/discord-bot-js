const commando = require('discord.js-commando');

class StreamCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'stream',
            group: 'testing',
            memberName: 'stream',
            description: 'Stream'
        });
    }

    async run(message, args){
        var nome_streamer = args;
        
        if (nome_streamer == "hugo"){
            message.channel.send("https://www.twitch.tv/hugostroukes");
        }
        if (nome_streamer == "jalves" || nome_streamer == "luke"){
            message.channel.send("https://www.twitch.tv/mrluk37");
        }
        if (nome_streamer == "filipe" || nome_streamer == "insane"){
            message.channel.send("https://www.twitch.tv/filipe096");
        } 
    }
}

module.exports = StreamCommand;