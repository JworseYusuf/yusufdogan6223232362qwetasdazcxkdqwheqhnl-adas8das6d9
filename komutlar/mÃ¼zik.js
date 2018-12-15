const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message) => {
  {

    let kategoriEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username ,message.author.displayAvatarURL)
      .setTitle("__MÜZİK__")
      .setThumbnail(client.user.displayAvatarURL)
      .setColor("#4286f4")
      .setDescription(
        "❯ **?çal** - ismini yazdığınız şarkıyı çalar. \n"
        +                        
        "❯ **?kapat** - şarkıyı kapatır. \n"     
        +                        
        "❯ **?geç** - bir sonraki şarkıya geçersiniz. \n" 
        +        
        "❯ **?durdur** - şarkıyı durdurur. \n"
        +
        "❯ **?devam** - duran şarkıyı devam ettirir. \n"
        +
        "❯ **?ses** - şarkının ses seviyesini ayarlarsınız 1-10.\n"
        )
      .addField(" Bağlantılar", "[Bot Destek Sunucusu](https://discord.gg/D6J2wAB) | [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=507596455947796481&scope=bot&permissions=1064811583)")
    message.channel.send(kategoriEmbed)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};