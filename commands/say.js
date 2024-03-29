const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) {
if (!botmessage) return message.channel.send("Ton message ! (``$say [message]``) :sweat_smile:")
let botmessage = args.join(" ").replace("@everyone", "");
let final = botmessage.replace("@", "")
  message.channel.send(final.replace("@here", ""));
    console.log(`Commande Say: ""${botmessage}"" a été dit`)
  } else {
    let botmessage = args.join(" ");
   if (!botmessage) return message.channel.send("Ton message ! (``$say [message]``) :sweat_smile:")
message.channel.send(botmessage);
    console.log(`Commande Say: ""${botmessage}"" a été dit`)
    message.delete().catch(console.error);  
}}
module.exports.help = {
    name: "say"
}