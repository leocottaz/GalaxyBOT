const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => { 
  
    if(message.author.id !== "435104377439780866") return;
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permissions __**BAN_MEMBERS**__ !")
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!bUser) return message.channel.send("Veuillez mentionner un utilisateur à bannir !");
    let bReason = args.join(" ").slice(22);
    if (!bReason) return message.channel.send("Aucune raison n'a été entrer.")
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur !");

    let banEmbed = new Discord.MessageEmbed()
    .setDescription("-Ban-")
    .setColor("#bc0000")
    .addField("Le Marteau du bannissement a frappé pour :", `${bUser}, ID : ${bUser.id}`)
    .addField("Banni par", `<@${message.author.id}>, ID : ${message.author.id}`)
    .addField("Banni sur le channel", `${message.channel}`)
    .addField("Date et heure du bannissement :", `${message.createdAt}`)
    .addField("Raison :", `${bReason}`);


    message.guild.member(bUser).ban(bReason);
    message.channel.send(banEmbed);
  
    console.log("Ban demandé !")
}

module.exports.help = {
  name:"ban"
}