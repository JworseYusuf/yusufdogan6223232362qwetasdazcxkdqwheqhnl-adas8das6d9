const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  var channel = client.channels.find('id', '513016715139874826')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("» MasterBOT | Sunucu Tanıt")
  .setDescription("**Sunucun Tanıtıldı » SUNUCUNUZUN LİNKİ**")
  .setFooter("Sunucu Tanıtıldı")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» MasterBOT | Sunucu Tanıt")
  .addField('**» Tanıtan: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-tanıt',
  description: '',
  usage: 'sunucu-tanıt'
};