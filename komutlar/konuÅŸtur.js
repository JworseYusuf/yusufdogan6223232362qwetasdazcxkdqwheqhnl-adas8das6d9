//Konuştur komudu ile, botu konuşturabilirsiniz.//

const Discord = require('discord.js') //Bizim için en önemli olan, discord.js modülünü indiriyoruz.

module.exports.run = async (bot, message, args) => { //Kodlarımızı gireceğimiz yeri ayarlıyoruz.
    const yazi = args.join(" ") //Yazımızı, kullanıcının bota yazdırmasını istediği şey olarak ayarlıyoruz.
    if(!yazi) return message.channel.send('Ne yazdırmak istersin koçum?') //Eğer kullanıcı sadece komudu girip, bir şey yazmadıysa bu yazıyı göndersin.
    message.channel.send(yazi) //Yazıyı gönderiyoruz.
}//Komudumuzu bitiriyoruz.

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['konuştur'],
  permLevel: 0
};

exports.help = {
  name: "konuştur",
  description: "AÇIKLAMA",
  usage: "konuştur"
};