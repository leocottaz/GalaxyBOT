const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var embed = new Discord.MessageEmbed()
  .setColor("#FF0000").addField(
    "Image :",
    `**$beautiful :** Votre photo de profil est très belle ! 
**$blood :** Un crime a eu lieu ! 
**$blur :** Vous êtes flou ! 
**$paint :** Votre painture est très réussi ! 
**$captcha :** Êtes vous ${message.author} ? 
**$jacko :** Ce n'est pas halloween ? 
**$prison :** Quelle bêtises avez vous fait pour vous retrouver en prison ? 
**$treasure :** Vous êtes le parchemins de la vériter ! 
**$triggered :** Aucune description disponible ! 
**$grey :** Mhh... Voyer votre photo de profil monotone...
**$invert :** Votre photo de profil a été corrompu !!
**$pixel :** Vous vous pixelliser.. Attention...
**$dark :** Vous sombrez dans l'obscuritée..
**$sepia :** Vous en sepia ? Mhh...`
  );
  // .addField("Image","")

  message.channel.send(embed);
};
module.exports.help = {
  name: "imhelp"
};
