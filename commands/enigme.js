const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
 
  var replys = [
        
        `Avant-hier, Catherine avait 17 ans ; l'année prochaine, elle aura 20 ans. Comment est-ce possible ?

         ||Hier, on était le 31 décembre, elle a eu 18 ans. Cette année, elle va avoir 19 ans et l'année prochaine, 20 ans.||

`,
      `Un père et un fils ont à eux deux 36 ans.
Sachant que le père a 30 ans de plus que le fils, quel âge a le fils ?
  
  ||Il faut soustraire la différence d'âge au total de leurs âges, puis diviser par deux le résultat obtenu : ce sera l'âge du fils. Ensuite, on ajoute ce même nombre à la différence d'âge pour obtenir l'âge du père.

36 - 30 = 6
6/2 = 3
30 + 3 = 33

Le fils a 3 ans et le père a 33 ans.
||
`,
      `La souris mange le fromage, le chat mange la souris. Qui reste-t-il ?

||le chat||
`,
      `Quel nombre divisé par lui-même donne son double ?

 ||La réponse est : 0.5. Tout nombre différent de 0 divisé par lui-même donne 1.||
`,
     `1=5
2=25
3=325
4=4325
5=?

||5=1||
`,
      `Quel est le nombre qui achève cette suite ?
0-2-5-7-8-9-11

||La réponse est 100

ce n'est pas de faire des calculs mais de les transformer en lettres. Ce qui donne:
Zéro-Deux-Cinq-Sept-Huit-Neuf-Onze-Cent

Ils ont tous 4 lettres||
`,
      `Je suis le premier à la ligne d'arrivée mais je ne suis pas le vainqueur.
Qui suis-je ?

||Je suis le deuxième car ce n'est pas le verbe être dans "je suis le premier ..." mais le verbe suivre.||
`,
    `j'ai 2 pieds, 6 jambes, 8 bras, 2 têtes et un oeil, qui suis-je ?

||Une menteuse||
`, 
    `
Avec seulement le chiffre 9, essayez d'obtenir 100 sachant que vous pouvez utiliser la multiplication, la division, l'addition et la soustraction. 

Vous pouvez utilisez autant de fois que possible le chiffre 9.

||Une réponse possible : 99/99 + 99

Ou bien (9/9 + 9)*(9/9 + 9) si vous préférez.||
`
    ];
    let reponse = (replys[Math.floor(Math.random() * replys.length)])
    var bembed = new Discord.MessageEmbed()
    .setColor("#00FFDD")
    .setDescription("Commande Enigme")
    .addField("``Enigme``", reponse)
  
    message.channel.sendEmbed(bembed);
   
}
module.exports.help = {
    name: "eng"
}