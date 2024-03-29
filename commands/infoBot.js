const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
      function calcUptime() {
        var time = 0;
        var days = 0;
        var hrs = 0;
        var min = 0;
        var sec = 0;
        var temp = Math.floor(bot.uptime / 1000);
        sec = temp % 60;
        temp = Math.floor(temp / 60);
        min = temp % 60;
        temp = Math.floor(temp / 60);
        hrs = temp % 24;
        temp = Math.floor(temp / 24);
        days = temp;
        var dayText = " days ";
        if (days == 1) {
            dayText = " day ";
        }
        
        var upText = `**Temps en ligne du bot: ${days}${dayText} ${hrs} : ${min} : ${sec}**`;
        
        return upText;
    }
  
    let botIcon = bot.user.iconURL
    var embed =  new Discord.MessageEmbed()
    .setColor("#66c2ff")
    .setThumbnail(botIcon)
    .setDescription("__Information sur le bot !__")
    .addField('Nom du bot :', bot.user.username)
    .addField('Créer le :', bot.user.createdAt)
    .addField("Prefix du bot :", "$")
    .addField('En ligne depuis: ', calcUptime())
    .setTimestamp()
    
    message.channel.send(embed)
    message.delete(100);
 console.log("La commande InfoBOT a été utiliser !"); 
                                                    
}

module.exports.help = {
    name: "bot-info"
}