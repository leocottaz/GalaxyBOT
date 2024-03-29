const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var embed = new Discord.MessageEmbed()
    .setTitle("Commande pour les Informations")
    .setColor("#40E0D0")
    .addField(
      "Commande D'informations",
      `**$bug**: Pour savoir les bugs du BOT ! 
       **$credit**: Pour voir le staff du BOT ! 
       **$bot-info**: Pour avoir les informations du BOT ! 
       **$serveur-info**: Pour avoir les info sur le serveur ! 
       **$partenaire**: Pour savoir si il ya des partenaires du BOT ! 
    `
    );
  console.log("La commande Commande Informations a été utiliser !");
  message.channel.send(embed);
  message.delete().catch();
};
module.exports.help = {
  name: "infohelp"
};
