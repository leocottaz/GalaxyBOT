const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
                  //vérification
  let user = message.mentions.members.first()
 var gif = [ "https://media1.tenor.com/images/be5eb05dbbcb8652e497973f121fdb0e/tenor.gif?itemid=12149903" ,"","gif3" , ""]
                     //commande
  
  var embed = new Discord.MessageEmbed()

  .setDescription(`${message.author} a dit salut a ${user}`)
  .setImage("https://media1.tenor.com/images/ab69d5243d1411244bf6a4f2395ece05/tenor.gif?itemid=5029909")
  
  message.channel.send(embed)

 console.log ("La commande Salut a été utiliser !");                                    

  
}

exports.help = {
name: "salut"
}