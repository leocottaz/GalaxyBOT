const Discord = require("discord.js"); 
const fs = require("fs");
const welcome = JSON.parse(fs.readFileSync("./welcome.json"));

module.exports.run = async (bot, message, args) => { 

  console.log(message)
 var chan = message.mentions.channels.first();
  if(!chan) return message.channel.send("Mentionnez un channel !");
  
 
welcome[message.guild.id] = chan.id
  fs.writeFileSync("./welcome.json", JSON.stringify(welcome, null, 4), (err) => {
          if (err) console.log(err);
        });

}
module.exports.help = {
    name: "bvn-channel"
}