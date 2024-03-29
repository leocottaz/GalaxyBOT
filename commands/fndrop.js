const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var drop = [
    "**Craggy Cliffs**",
    "**Steamy Stacks**",
    "**Pleasent Park**",
    "**Frenzy Farm**",
    "**Sweaty Sands**",
    "**Salty Springs**",
    "**Dirty Docks**",
    "**Holly Hedges**",
    "**Weeping Woods**",
    "**Retail Row**",
    "**Lazy Lake**",
    "**Slurpy Swamp**",
    "**Misty Meadows**"
  ];

  var fndrop = new Discord.MessageEmbed()
    .setColor("#9E01D7")
    .setDescription(`Vous pouvez aller à : ${drop[Math.floor(Math.random() * drop.length)]}`)
    .setImage("https://www.breakflip.com/uploads/Azilliz/fortnite-map-chapitre-2-carte-villes-map.jpg")

  message.channel.send(fndrop);
};

module.exports.help = {
  name: "fndrop"
};
