const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var attente = new Discord.MessageEmbed()
  .setDescription(
    "**Veuillez patientez...**"
  );
  message.channel.send(attente).then(function(att) {
    var bot_permission = new Discord.MessageEmbed()
      .setColor("#40E0D0")
      .addField("Erreur...", "Je n'ai pas les permissions de supri");

    //  if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGE")) return message.channel.send(bot_permission)

    console.log("la commande help a été utiliser !");

    var embed = new Discord.MessageEmbed()

      .setColor("#40E0D0")
      .setTitle("Commande Help")
      .setImage("")
      .addField(
        "Les commande help :",
        `**$utihelp**: Commandes utilitaires !
        **$funhelp**: Commandes fun !
        **$mohelp**: Commande de modération !
        **$imhelp**: Commande Image !
        **$infohelp**: Pour les informations sur le BOT !
        **$muhelp**: Commande de musique !
        **$config**: Pour configurer le bot sur son serveur !`
      )
      .addField(
        "Les liens utiles :",
        `[Support](https://discord.gg/6egdQ8u) • [Invite moi](https://discordapp.com/oauth2/authorize?client_id=535113488125788191&scope=bot&permissions=8) • [Elkir](https://elkir.fr/)`
      )
      .setFooter("Merci au groupe Elkir d'héberger le site du bot.");

    att.delete();
    message.channel.send(embed);
    message.delete().catch();
  });
};
module.exports.help = {
  name: "help"
};
