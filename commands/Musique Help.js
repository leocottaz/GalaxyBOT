const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var embed = new Discord.MessageEmbed()

    .setColor("#40E0D0")
    .addField(
      "***Commande de musique***",
      `**$play,$join,$p [Nom de la musique]**: Pour que le BOT joue une musique,
       **$pause**: Pour mettre en pause la musique,
       **$replay,$resume**: Pour reprendre la musique quand elle est en pause,
       **$queue,$musiclist,$songlist**: Pour voir la liste des musique empiler,
       **$skip**: Pour passer a la musique suivante dans la queue (si il y en a une),

    `
    );

  message.channel.send(embed);

  console.log("la commande Musique Help a été utiliser !");
};

module.exports.help = {
  name: "muhelp"
};
