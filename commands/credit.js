const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.channel
      .send(
        "Je suis désoler mais tu n'a pas la permissions : Gerer les messages !"
      )
      .catch(console.error);
  message.channel.send(
    "Modérateur du BOT: yololman#2183 \nGraphiste du BOT: Aucun \n CO Fondateur du BOT: Yuki Sato#5840 \n Fondateur du BOT: Galaxy Gamer#7689"
  );

  console.log("La commande Credit a été utiliser !");
};
module.exports.help = {
  name: "credit"
};
