const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
    }
    let Question = args.join(" ")
   if (!Question) {
       return message.channel.send("Veuillez dire une question");
   }
   const pollEmbed = new Discord.MessageEmbed()
   .setColor("#66c2ff")
   .setThumbnail("https://cdn.discordapp.com/attachments/544336309897003009/544350818657370113/aaaaa.jpg")
   .setTitle(`Sondage créer par ${message.author.username}`)
   .setDescription(Question)
   .addField('Appuyez sur les reactions ci dessous.', ":white_check_mark: = oui/d'accord, :x: = non/pas d'accord, :heavy_minus_sign: = Peut-être/je ne sais pas")
   .setTimestamp()
   .setFooter("")//bas de page

   let msg = await message.channel.send(pollEmbed);
   await msg.react('✅');
   await msg.react('➖');
   await msg.react('❌');
                                                    
   message.delete();
}

module.exports.help = {
    name: "poll"
}