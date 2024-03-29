const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
  let tte = args.join(" ")
    if (!tte) {
        var lembed = new Discord.MessageEmbed()
        .setColor("FF0000")
      .setTitle("Erreur")
      .addField("Type d'erreur", "Manque d'arguments")
      .addField("Aide", "Mettez des arguments devant cette commande | $react + args")
      
      message.channel.send(lembed);
    }
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Manque de la permission MANAGE_MESSAGES")

let emoji = message.guild.emojis.find(`name`, tte);
message.react(emoji);

}
module.exports.help = {
    name: "react"
}