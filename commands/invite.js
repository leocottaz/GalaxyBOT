const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    message.author.send("https://discordapp.com/oauth2/authorize?client_id=535113488125788191&scope=bot&permissions=2146958847");
//.setDesc("[Lien](https://discordapp.com/oauth2/authorize?client_id=535113488125788191&scope=bot&permissions=2146958847)")
     message.channel.send(":envelope: Vous avez reçu un MP :envelope:")                                               
                                                    console.log ("La commande Invite a été utiliser !");  
                                                  
                                                   }
module.exports.help = {
    name: "invite"
    }