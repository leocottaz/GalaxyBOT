const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var embed = new Discord.MessageEmbed()

    .setColor("#40E0D0")
    .addField(
      "__**Commande des Modérateur**__",
      `
       **$ban [@mention] [raison]**: Permet de bannir un utilisateur,
       **$mute [@mention] [raison]**: Permet du rendre muet un utilisateur,
       **$unmute [@mention]**: Permet de rendre la parole à un utilisateur (Fonctionne que avec le $mute),
       **$tempmute [@mention] [temps du mute] **: Permet de rendre muet un utilisateur avec un temp défini,
       **$addrole [@mention] [@mention du rôle]**: Permet de donner un rôle à un utilisateur,
       **$send [couleur] [texte]**: Permet d'écrire un message avec le bot,
       `
    )
    .addField(
      "Pour l'instant la couleur est obligatoire.",
      `
      **$poll [texte]**: Permet de faire un sondage,
      **$giveaways [nombre de gagnants] [temps du giveaways (1m, 1h, 1d)] [chose a gagner]**: Permet de faire un giveaways,
      **$clear [nombre de message a supprimer]**: Pour supprimer des messages,
      **$clearall**: Pour supprimer le maximum de messages possible,
      **$report [mention] [raison]**: Pour report des utilisateur au staff du serveur,
      **$warn [@mention] [raison]**: Warner les utilisatuer de votre serveur pour pouvoir le voir plus tard,
      **$warn-level <@mention>**: Pour voir le level de warn de quelqu'un,
    `
    )
    .setFooter("<> = facultatif  [] = obligatoire");

  message.channel.send(embed);

  console.log("la commande modérateur help a été utiliser !");
};

module.exports.help = {
  name: "mohelp"
};
