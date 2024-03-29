const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n'as pas la permission: **Gérer les message** ! :sweat_smile:");
if(message.author.id !== "435104377439780866") return;
  if(!args[0]) return message.channel.send("__**ERROR**__ \n Tu as oublier de mettre un numéro ! ;(");
  
    message.channel.send("Chargement..").then(function (u1) {



         message.delete().catch();
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`${args[0]} messages ont été supprimer`).then(message => message.delete({ timeout: 3000, reason: `Clear demandé par ${message.author.username}` })) 
})
  });
  console.log ("La commande Clear a été utiliser !"); 

}
module.exports.help = {
    name: "clear"
    }