const Discord = require("discord.js"); 
const fs = require("fs");
const welcome = JSON.parse(fs.readFileSync("./welcome.json"));

module.exports.run = async (bot, message, args) => { 
  
 if(!welcome[message.guild.id]) {
    var bvn_channel = ":x:"
  } else {
    var bvn_channel = `:white_check_mark: (<#${welcome[message.guild.id]}>)`
  }
  
  
  message.channel.send(bvn_channel)
  
  
  
  
  if(args[0] === "on") {

    var config_on = new Discord.MessageEmbed()
    
    message.channel.send(config_on)
  }

 var help = new Discord.MessageEmbed()

.addField("Menu des configurations.", "Pour voir les configurations actuel du bot sur le serveur faites ``$config on``.")
.addField("Configuration disponible :", `
**$bvn-channel [#salon]** : Pour choisir le salon ou le message de bienvenue du bot serat postés.
**$leave-channel [#salon]** : Pour choisir le salon ou le message d'au revoir du bot serat postés.
`)
.setFooter("<> = facultatif  [] = obligatoire");
 
 
 message.channel.send(help);
  
}
module.exports.help = {
    name: "config"
}