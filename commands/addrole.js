const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => { 

  if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply(no_permission);
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(mention_permission);
  let role = message.mentions.roles.first();
  if(!role) return message.channel.send(rs_permission);
  let gRole = message.guild.roles.cache.find(r => r.id === role.id);
  if(!gRole) return message.channel.send(uu_permission);

  
const ll_permission = new Discord.MessageEmbed()
  .addTitle(`:white_check_mark:  **Vous avez reçu le role  ${gRole.name} / <@${rMember.id}>.** :white_check_mark:`)
  .setColor(0xFF0000);
                                                    
  const no_permission = new Discord.MessageEmbed()
  .addTitle(":x: **Permission insuffisante** :x:")
  .setColor(0xFF0000);

  const rs_permission = new Discord.MessageEmbed()
  .addTitle(":x: **Rôle manquant** :x:")
  .setColor(0xFF0000);
  
const mention_permission = new Discord.MessageEmbed()
  .addTitle(":x: **Mentionnez un utilisateur valide** :x:")
  .setColor(0xFF0000);

  const uu_permission = new Discord.MessageEmbed()
  .addTitle(":x: **Rôle non-valide** :x:")
  .setColor(0xFF0000);

  const gg_permission = new Discord.MessageEmbed()
  .addTitle(":x: **L'utilisateur a déjà ce rôle** :x:")
  .setColor(0xFF0000);
  
  //!addrole @andrew Dog Person
  
  
  console.log("Addrole demandé !")

if(rMember.roles.has(gRole.id)) return message.reply(gg_permission);
  await(rMember.addRole(gRole.id));
   try{
    await message.channel.send(`<@${rMember.id}> a reçu le rôle ${gRole.name}.`)
  }catch(e){
    console.log(e.stack);
  }
                                                    
  }

module.exports.help = {
  name: "addrole"
}