const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (bot,message,args) => {
 
  var rol = message.content.split(" ").slice(1).join(" ");
 
  let role = message.guild.roles.find("name", `${rol}`)
 
  var hata = new Discord.MessageEmbed()
  .setColor("#36393F")
  .setDescription("❌");
 
  if(!role) return message.channel.send(hata);
 
  var temps = message.createdTimestamp;
 
  var roleinfoEmbed = new Discord.MessageEmbed()
  .setColor(role.hexColor)
  .addField('✏ NOM DU ROLE', role.name, true)
  .addField('🆔 ID', role.id, true)
  .addField('👥 MEMBRE AYANT CE ROLE', role.members.size, true)
  .addField('💙 COULEUR', role.hexColor, true)
  .addField('✅ MENTIONNABLE?', role.mentionable ? '\noui' : 'non', true)
  .addField('📅 DATE DE CREATION', role.createdAt, true)
  .setFooter(`Demandé par ${message.author.username}`);
 
  message.channel.send(roleinfoEmbed)

  console.log("Rôle Info commande ")
  message.delete().catch();  
}
module.exports.help = {
  name: "roleinfo"
}