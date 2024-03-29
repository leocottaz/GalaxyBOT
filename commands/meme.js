const Discord = require("discord.js");
const randomPuppy = require('random-puppy');
module.exports.run = async (bot, message, args) => {
 
  randomPuppy('memes')
    .then(url => {
        const embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor('#0199FE')
        message.channel.send(embed);
    });
}
  
module.exports.help = {
    name: "meme"
}