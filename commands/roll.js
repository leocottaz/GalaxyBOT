const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
if(message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")){
message.delete();
}
  
  if(!args[0]) return message.channel.send("Veuillez entrer un nombre").then(m => m.delete(5000));
  if(isNaN(args[0])) return message.channel.send("Veuillez entrer un nombre valide").then(m => m.delete(5000));
  if(args[0] < 1) return message.channel.send("Veuillez mettre un plus grand nombre !").then(m => m.delete(5000));
  
  var nombre = getRandomInt(1, args[0])
      
  var embed = new Discord.MessageEmbed()
  .setColor("#01FE6F")
  .addField(`:game_die: **${message.author.username}** :game_die:\n\n`,`**Vous avez tirez :** ${nombre}`)

  message.channel.send(embed)
      
}

module.exports.help = {
	name: "roll"
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  