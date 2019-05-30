const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`End Bot`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=564004808185610240&scope=bot&permissions=2146958847) | | [Discord Sunucu](https://discord.gg/krsAhpf)\n\n**Ping**:" + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`End Bot - Ana Komutlar`, `:white_small_square: | **+otorol-ayarla @rol #kanal**: Otorol Rol'ü Belirler!\n:white_small_square: | **+hoşgeldin-ayarla** = Resimli Hoşgeldin Kanalı Ayarlar!\n|:white_small_square:  **+sayaç-ayarla <sayı> #kanal**: Sunucuya Sayaç Kanalı Belirler!\n:white_small_square: | **+log-ayarla #kanal**: Kullanıcılar için komutlar.\n:white_small_square: | **+küfür aç/kapat**: Küfür Açar Veya Kapatır.\n:white_small_square: | **+link-engel aç/kapat**: Link  Engel Açar Veya Kapatır.`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['anakomut', 'anakomutlar', 'anacommand',],
    permLevel: 0
  };
  
  exports.help = {
    name: 'anakomutlar',
    description: 'anakomutlar',
    usage: 'anakomutlar'
  };