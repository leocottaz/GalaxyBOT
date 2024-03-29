const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

var embed= new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Actuellement il y a :")
.addField("Bug :", "Quand vous spammer une commande image, Le BOT va rester bloquez sur la position écriture")
.addField("Problème :", "Aucun")

message.channel.send(embed)

console.log("la commande BUG a été utiliser !")
                                                    
                                                    
}
module.exports.help = {
name: "bug"
}