const Discord = require("discord.js");
const fs = require("fs");
const pre = require("../prefix.json");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas les permissions de faire cela !")
  let Prefix = args[0]
  if(!Prefix) return message.channel.send("Veuillez inserer un nouveau préfix !");
  
  message.channel.send(`Préfix changé en ${Prefix}`)
  bot.prefix[message.guild.id] = {
    prefix: Prefix
  }
  fs.writeFile("./prefix.json", JSON.stringify(bot.prefix, null, 4), (err) => console.error);

}
module.exports.help = {
    name: "setprefix",
}