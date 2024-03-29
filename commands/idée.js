const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  var attente = new Discord.MessageEmbed()
  .setDescription("Votre demande est en cours de traitement...");
  
  let tte = args.join(" ");
  if(!tte) return message.channel.send("Donner votre idée");
  
  message.channel.send(attente).then(function(time) {
    time.edit("Votre demande a bien été envoyé au staff").then(m => m.delete(10000))
  });
  
  var chan = bot.channels.get("598522497029111839");
  var sugg = new Discord.MessageEmbed()
  .setTitle("Suggestions")
  .addField("Pseudo :", `${message.author.username} (${message.author.id})`)
  .addField("Serveur :",  `${message.guild.name} ( ${message.guild.id} )`)
  .addField("Heure :", message.createdAt)
  .addField("Contenu :", tte)
  .setTimestamp()
  
  chan.send(sugg)
  
}
module.exports.help = {
    name: "idée"
}