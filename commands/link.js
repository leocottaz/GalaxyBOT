const Discord = require("discord.js"); 

module.exports.run = async (bot, message) => { 

 let user = message.author;
 var lien = new Discord.MessageEmbed()
 
 .setDescription("Liens important !")
 .addField(`Discord liste`,`[Top.gg](https://top.gg/bot/535113488125788191) • [Arcane - Discord Bot](https://arcane-botcenter.xyz/bot/535113488125788191) • [Wonder Bot List](https://wonderbotlist.com/fr/bot/535113488125788191)`)
 .addField("Bot",`[Serveur support](https://discord.gg/6egdQ8u) • [Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=535113488125788191&scope=bot&permissions=8) • [Surprise](#)`)
 .setFooter(`Demandé par ${bot.user.displayAvatarURL} ${message.author.username}.`)
 
 message.channel.send(lien)
}
module.exports.help = {
    name: "link"
}