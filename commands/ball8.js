const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
 
   let tte = args.join(" ")
     if(tte.length > 1000) 
    return message.channel.send("Vous avez mit trop de caractère..");
 if(!tte) return message.channel.send("Merci de poser une question au bot")
 var replys = [
      "```OUI```",
        "```NON```",
        "```PEUT ÊTRE```",
        "```JE SAIS PAS```",
        "```JE NE VAIS PAS REPONDRE ```"
    
   
    ];
    let reponse = (replys[Math.floor(Math.random() * replys.length)])
    var bembed = new Discord.MessageEmbed()
    .setColor("#00FFDD")
    .setDescription(":8ball: 8ball")
    .addField("**Question**", tte)
    .addField("**Réponse**", reponse)
    message.channel.send(bembed);
   

 }
exports.help = {
  name: "8ball"
}