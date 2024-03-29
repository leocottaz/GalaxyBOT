const Discord = require("discord.js"); 
const fs = require("fs");
const leave = JSON.parse(fs.readFileSync("./leave.json"));

module.exports.run = async (bot, message, args) => { 

  console.log(message)
 var chan = message.mentions.channels.first();
  if(!chan) return message.channel.send("Mentionnez un channel !");
  
 
leave[message.guild.id] = chan.id
  fs.writeFileSync("./leave.json", JSON.stringify(leave, null, 4), (err) => {
          if (err) console.log(err);
        });

}
module.exports.help = {
    name: "leave-channel"
}