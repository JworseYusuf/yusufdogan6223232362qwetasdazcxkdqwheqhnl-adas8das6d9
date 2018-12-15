const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message) => {
  {

    let kategoriEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username ,message.author.displayAvatarURL)
      .setTitle("__Ana Komutlar__")
      .setThumbnail(client.user.displayAvatarURL)
      .setColor("#4286f4")
      .setDescription(
        "❯ **?tavsiye** = Botun sahibine tavsiyede bulanabilirsiniz. \n"
        +                        
        "❯ **?kullanıcıbilgim** = Kullanıcı Bilgini Gösterir. \n"
        +                        
        "❯ **?döviz** = Döviz Durumunu Gösterir. \n"
        +                        
        "❯ **?sayaç** = Sayaç Adlı Kanal Açmanız Gerekir. \n"
        +                        
        "❯ **?topla** = ÖRN: d?topla 1 1 \n"
        +                        
        "❯ **?çıkar** = ÖRN: d?çıkar 1 1 \n"
        +                        
        "❯ **?çarp** = ÖRN: d?çarp 1 1 \n"
        +                        
        "❯ **?böl**= ÖRN: d?böl 1 1 \n"
        +                        
        "❯ **?canlıdestek**= Canlı Destek Başlatırsınız. \n"
        +                        
        "❯ **?talep**= Destek Talebi Açarsın. \n"
        +                        
        "❯ **?yapımcı**= Bot Yapımcısını Gösterir. \n"
        +                        
        "❯ **?roller**= Rolleri Gösterir. \n"
        )
      .addField(" Bağlantılar", "[Bot Destek Sunucusu](https://discord.gg/D6J2wAB) | [Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=507596455947796481&scope=bot&permissions=1064811583) | ")
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
  name: 'anakomutlar',
  description: 'Tüm komutları gösterir.',
  usage: 'anakomutlar'
};