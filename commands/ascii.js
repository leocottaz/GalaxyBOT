const figlet = require('figlet');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
 if(!args.join(" ")) {
    message.channel.send('Mauvaise syntaxe. utilisation : $ascii [message]')
 } else {
 
figlet.text(args.join(" "), {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
 if (data === null) {
   message.channel.send("Un caractère que vous avez entrée n'est surement pas valide, nous sommes désoler de la gêne occasionnés !")
 } else {
       message.channel.send("```" + data + "```")
 }
});
 }
}
module.exports.help = {
    name: "ascii"
}