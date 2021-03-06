const Discord = require('discord.js');

module.exports.run = (client, msg, args) => {
 const members = msg.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));
 return msg.channel.send(members.map(member => `\`${member.id}\` ${member.displayName}`).join("\n") || "Kimsenin oynuyor mesajı reklam içermiyor.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklamtaraması'],
  permLevel: 0
};

exports.help = {
  name: "reklam-taraması",
  description: "AÇIKLAMA",
  usage: "d?reklam-taraması"
};
 