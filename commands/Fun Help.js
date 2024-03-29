const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Commande pour le Fun")
    .setColor("#40E0D0")
    .addField(
      "Commande Fun",
      `**$ascii [texte de 9 caractère max]**: Pour transformer votre texte ! 
       **$avatar [rien ou @mention]**: Pour voir la photo de profil de quelqu'un ! 
       **$google [chose a rechercher]**: Pour rechercher des choses sur Google !
       **$8ball [une question]**: Un esprit va répondre a vos questions ! 
       **$fndrop**: Laisser le bot choisir ou vous aller sur fortnite !
   `);
  console.log("La commande Commande Fun a été utiliser !");
  message.channel.send(embed);
  message.delete().catch();
};
module.exports.help = {
  name: "funhelp"
};
