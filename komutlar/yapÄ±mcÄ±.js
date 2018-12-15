const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bot yapımıcısı:** @!   HaylazDeath#3548")
  .setFooter('Dinle ve Eğlen | dvebot.rf.gd', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=505709958621429760&scope=bot&permissions=393477183)` + "**\n**"+`[Bota Oyver](https://discordbots.org/bot/460723895268278283)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/D6J2wAB)`, false)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=505709958621429760&scope=bot&permissions=393477183')
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapımcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'yapımcı'
};
