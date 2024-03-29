const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let user = message.mentions.users.first() || message.author || message.id.members.first();
        let pdp = user.displayAvatarURL({dynamic: true, size: 512});
let avatar_embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${user.username}`)
    .setImage(pdp)
    message.channel.send(avatar_embed)
}
module.exports.help = {
    name: "avatar"
}