const Discord = require("discord.js")
const axios =  require("axios");
module.exports.run = async (bot, message, args) => { 

let target = message.mentions.users.first() || message.author;
    let profilepic = target.displayAvatarURL();
    let url = `https://eclyssia-api.tk/api/v1/sepia?url=${profilepic}&username=${target.username}`;
   
    var attente = new Discord.MessageEmbed()
    .setDescription("**Veuillez patientez...**")                 
    message.channel.send(attente).then(function (att) {
                     
message.channel.startTyping();

axios.get(url, { responseType: 'arraybuffer' }).then(async res => {
  
  await message.channel.send({
           files: [{
               attachment: await res.data,
               name: `${target.username}-sepia.gif`
            
           }]
        })
  
 
    .then(() => message.channel.stopTyping());
    message.delete().catch();   
   att.delete()

}).catch((err) => {
                if(err) {
                  console.log(err) 
                  var erreur = new Discord.MessageEmbed()
                  .addField("Une erreur c'est produite ! N'hesitez pas a en faire part au staff du BOT !","Il réglerons le problème.")
                  .setColor("#FE0101")
         return att.edit(erreur)
                  .then(() => message.channel.stopTyping());
                }
                })
    })        
        }                                            
    module.exports.help = {
    name: "sepia"
}