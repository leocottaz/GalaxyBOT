const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
  const m = await message.channel.send("Calcul en cours..");
  if (Math.round(bot.ping) === NaN) {
      var APIlatence = "Calcul Raté" 
  } else {
      var APIlatence = Math.round(bot.ping)
  }
  if (m.createdTimestamp - message.createdTimestamp < 0) {
    var HebergLatence = "Calcul Faux"
  } else {
    var HebergLatence = m.createdTimestamp - message.createdTimestamp
    }
  
  var pong = new Discord.MessageEmbed()
  .setDescription("Pong! :ping_pong:")
  .addField("Résultat :",`Latence de l'API : ${APIlatence}ms  
                          Latence de l'hebergeur : ${HebergLatence}ms`)

  m.edit(pong)
        console.log(`La commande ping a été utilisé par ${message.author.username} sur le serveur ${message.guild} dans le salon ${message.channel.name} !`)                                
}
module.exports.help = {
  name:"ping"
}