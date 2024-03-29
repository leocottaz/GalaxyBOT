const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let oubli = new Discord.MessageEmbed()
  
  .setColor("#FE0101")
  .setDescription(":x: Vous avez oublier de mettre un numéro... :x:")
  
  let autre = new Discord.MessageEmbed()
  
  .setColor("#FE0101")
  .setDescription(":x: Vous avez mit autre chose qu'un numéro... :x:")
  
   let load = new Discord.MessageEmbed()
  
  .setColor("#FE0101")
  .setDescription(":o: Chargement en cours... :o:")
   
   const tempCel = args[0];
  
  if(!tempCel) return message.channel.send(oubli)
  
  if(isNaN(args[0])) return message.channel.send(autre)

   message.channel.send(load).then(function (calcul) {
 
  const F = tempCel;  
const C = ( F - 32 ) * 5/9;
  
 let resultat = new Discord.MessageEmbed()
  
  .setColor("#01FE55")
  .setDescription(`:white_check_mark: ${F} degrés Fahrenheit (°F) est égale a ${C} degrés celsius (°C) :white_check_mark:`)
  
calcul.edit(resultat)  
       message.delete().catch();
   });
}
module.exports.help = {
    name: "FtoC"
    } 