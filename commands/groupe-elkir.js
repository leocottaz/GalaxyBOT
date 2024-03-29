const Discord = require("discord.js"); 

module.exports.run = async (bot, message) => { 

 var elkir = new Discord.MessageEmbed()
  
.setColor("#202327")
.addField("**Groupe Elkir**","L’association Groupe Elkir à pour but premier de soutenir des projets bénévolement. Nous soutenons des projets dans la réalisation , dans la communication , dans les démarches et bien plus encore. Nous soutenons 18 créateurs de projets depuis novembre 2018.")
.setImage("https://cdn.glitch.com/6c49e8c0-1236-4b82-98d5-4b9eb58d2801%2FLEGEND_20190809_125925.gif?v=1567888966270")
.addField("Lien :", `[Site Elkir](https://elkir.fr) • [Statut](https://status.elkir.fr/) • [Discord](https://discordapp.com/invite/YCtqryq)`)
.setFooter("Merci a Elkir d'héberger le site du bot !")

 message.channel.send(elkir)
 

}
module.exports.help = {
    name: "elkir"
}