const superagent = require("superagent");
const Discord = require("discord.js");

//const botconfig = require("../botconfig.json");
 // if(!message.content.startsWith(botconfig.prefix)) return; 
 module.exports.run = async (bot, message, args) => {
 
var attente = new Discord.MessageEmbed()

.setTitle(":o: Votre demande est en cours d'envoie... :o:")

var traitement = new Discord.MessageEmbed()

.setTitle(":o: Traitement de la demande... :o:")

message.channel.send(attente).then(function (att) {
  att.edit(traitement)
  
  var achievement = args.join(" ");
 var request = require('request');
 var fs = require('fs');
   function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    if (typeof obj !== "object") return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
  }
        var wembed = new Discord.MessageEmbed()
          .setColor('#DC3545')
          .setAuthor(`${message.author.username} réessayer`, `${message.author.avatarURL}`)
          .addField("**//achi votre achievement pour réaliser cette commande")
          .setTimestamp()
          .setFooter('Client', `${bot.user.avatarURL()}`);
        if (isEmpty(achievement)) return message.channel.send(wembed);
        var download = function(uri, filename, callback){
          request.head(uri, function(err, res, body){
            //console.log('content-type:', res.headers['content-type']);
            //console.log('content-length:', res.headers['content-length']);
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        var dir = `achievement.png`;
        download('https://www.minecraftskinstealer.com/achievement/a.php?i=13&h=Achievement%20unlocked&t='+achievement, dir, function(){
        message.channel.send(`${message.author} a débloquez un achievement`, {file: dir});
       }).catch((err) => {
                if(err) {
                  
                  var erreur = new Discord.MessageEmbed()
                  .addField("Une erreur c'est produite ! N'hesitez pas a en faire part au staff du BOT !",`Erreur : ${err}`)
                  .setColor("#FE0101")
          return att.edit(erreur)
                }
                })
  att.delete()
})
      }
 module.exports.help = {
  name: "achi" 
}