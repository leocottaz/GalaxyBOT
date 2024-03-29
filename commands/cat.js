const Discord = require("discord.js");
const superagent = require("superagent")
module.exports.run = async (bot, message, args) => {
 
  {
        const { body } = await superagent.get(`http://aws.random.cat/meow`);
    
      
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
         .setTitle(`Chat`)
        .setImage(body.file)
       
    
        message.channel.send(embed);
    }
}
module.exports.help = {
    name: "cat"
}