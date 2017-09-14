const commando = require('discord.js-commando');

class HelpSomCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'helpsom',
            group: 'sound',
            memberName: 'helpsom',
            description: 'Lista os sons'
        });
    }

    async run(message, args){

        message.reply("13\n37\n8000\nairhorn\najuda\narvore\nbichona\nbirl\nbodybuilder\nboiola\nbora\nbrincation\nburro\nchatuba\ncilada\ndelicia\nfibra\nfilhodaputa\nfogo\ngas\njaula\nmentira\nmorre\nnaovaidar\nnegativa\npao\nsopa\ntrapezio\nwombo\nxfiles");
    }
}

module.exports = HelpSomCommand;