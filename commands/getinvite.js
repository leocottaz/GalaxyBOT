const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
 
  if (message.author.id !== "435104377439780866") return;
  let args = message.content.split(" ").slice(1);

  let sv =  bot.guilds.cache.get(args[0])
  if (!sv) return message.channel.send(`Entrez un id de guild valide`)
  sv.channels.random().createInvite().then(a => message.channel.send(a.toString()))
  message.delete().catch(); 
}
module.exports.help = {
  name: "getinvite"
}