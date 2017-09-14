const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('testing', 'Testing');
bot.registry.registerGroup('sound', 'Sound');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('token');
