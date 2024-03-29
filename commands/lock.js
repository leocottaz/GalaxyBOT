const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:emoji_4:568398718915706881> Vous n'avez pas les permissions de faire cela ! <a:emoji_4:568398718915706881>")
 
  const bot_permission = new Discord.MessageEmbed()
  .setDescription("Je n'ai pas les permission pour cela !")
  .setColor(0xFF0000)
  const message_supprimer = new Discord.MessageEmbed()
  .setDescription(`**:white_check_mark: Le channel à été fermé avec succés !**`)
  .setColor(0x00ff6f)

  if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(bot_permission)

  message.channel.overwritePermissions(message.guild.id, {
    SEND_MESSAGES: false
});

message.channel.send(message_supprimer).then(msg => {msg.delete(3000)});
message.delete().catch(); 
}

module.exports.help = {
  name: "lock"
}