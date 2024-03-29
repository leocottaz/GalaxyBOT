const shorten = require('isgd');
 
module.exports.run = (bot, message, args) => {
  
  if (!args[0]) return message.channel.send('**Usage : $shorten <lien> [NOM]**')
 
  if (!args[1]) { 
    
    shorten.shorten(args[0], function(res) { 
      if (res.startsWith('Erreur:')) return message.channel.send('**Entrer une url valide**'); 
      message.channel.send(`**<${res}>**`); 
    })
   
  } else { 
   
    shorten.custom(args[0], args[1], function(res) { 
      if (res.startsWith('Error:')) return message.channel.send(`**${res}**`); 
      message.channel.send(`Votre lien a été générer : **<${res}>** *Attention ! Un abus de cette commande peut ammener a des sanctions !*`); 
     
    }) 
  }
 
}
module.exports.help = {
  name: "shorten"
}