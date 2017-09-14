const commando = require('discord.js-commando');

class ConchaCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'concha',
            group: 'random',
            memberName: 'concha',
            description: 'Concha Magica'
        });
    }

    async run(message, args){
        var roll = Math.floor(Math.random() * 6) + 1;
        
        if (roll % 2 == 0){
            message.channel.send("" , {
            files: [
                "./images/concha_no.png"
            ]
            });
        }else{
            message.channel.send("" , {
            files: [
                "./images/concha_yes.jpg"
            ]
            });
    }
}}

module.exports = ConchaCommand;