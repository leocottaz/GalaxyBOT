const Discord  = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
  let cc = args.slice(0).join('-');
  var embed = new Discord.MessageEmbed()
  .setColor("00FFFF")
  .addField("<a<a:chargement:583573151146049537>648075612094988318> Voici votre compteur", `https://livecounts.net/channel/${cc}`)
  message.channel.send(embed)
}
module.exports.help = {
  name: "counter"
}