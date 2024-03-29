const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
                                                    
    let reportedUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if (!reportedUser) {
       return message.channel.send("L'utilisateur n'existe pas!");
   }
        let reportedReason = args.join(" ").slice(22)
        if(!reportedReason) return message.channel.send("Aucune raison...")

message.channel.send("Votre demande est en cours d'envoie !")
.then(function(test) {

    let reportedEmbed = new Discord.MessageEmbed()
    .setColor("#66c2ff")
  .setThumbnail("https://cdn.discordapp.com/attachments/544336309897003009/544350818657370113/aaaaa.jpg")
    .setDescription(":red_circle: Report :red_circle: ")
    .addField(":bust_in_silhouette: Utilisateur reporte:", `${reportedUser} (ID: ${reportedUser.id})`)
    .addField(":speaking_head: Utilisateur ayant reporte:", `${message.author} (ID: ${message.author.id})`)
    .addField(":door: Salon:", message.channel)
    .addField(":question: Raison", reportedReason)
    .setTimestamp()
    .setFooter("Encore en développement !")//bas de page

    let reportedChannel = message.guild.channels.find('name', "reports");
    if (!reportedChannel) {
        return test.edit("Une erreur est survenue lors de l'envoie.. : Salon 'reports' introuvable..")
    }
    message.delete();
    reportedChannel.send(reportedEmbed);
  console.log("La commande Report a été utiliser !"); 

test.edit("Vérification de l'envoie")
     message.delete();
    reportedChannel.send(reportedEmbed);
  console.log("La commande Report a été utiliser !"); 
test.edit("Votre demande a été finaliser et envoyer ! \nMerci beaucoup pour votre aide !")

});
}

module.exports.help = {
    name: "report"
}