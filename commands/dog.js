const Discord = require("discord.js");
const superagent = require("superagent")
module.exports.run = async (bot, message, args) => {
 
  {
        const { body } = await superagent.get(`https://random.dog/woof.json`);
    
      
        let DogEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
         .setTitle(`Chien`)
        .setImage(body.url)
       
    
        message.channel.send(DogEmbed);
    }
}
module.exports.help = {
    name: "dog"
}