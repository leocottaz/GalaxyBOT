const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => { 
 
  if (message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.fetchMessages()
        .then(function(list){
            message.channel.bulkDelete(list);   
            message.channel.send("Suppression des messages fait avec succès").then(message => message.delete(2000))
        }, function(err){message.channel.send("Une erreur a été détecter ! \nSi ce problème ce reproduit merci de contacter le staff du bot !")})}
}

module.exports.help = {
    name: "clearall"
}