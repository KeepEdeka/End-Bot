const Discord = require('discord.js');
const loglar = require('../ayarlar.json');



exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** +ban @kullanıcı = Herhangi Bir Kullanıcıyı Banlarsınız.\n**•** +kick = Herhangi Bir Kullanıcıyı Atarsınız.\n**•** +unban @kullanıcı = Herhangi Bir Kullanıcının Banını Açarsınız.\n**•** +otorol rol = İstediğiniz Rolü Girişte Verdirmesini Sağlayabilirsiniz.\n**•** +sunucutanıt = Sunucunuzu Tanıtabilirsiniz.\n**•** +rolbilgi ? İstediğiniz Rolün Bilgilerini Gösterir.\n**•** +temizle = Herhangi Bir Miktarda Mesajları Siler.\n**•** +ses-kanal-aç = Bir Ses Kanalı Oluşturur.\n**•** +yazı-kanal-aç = Bir Yazı Kanalı Oluşturur.\n**•** +slowmode = Sunucuda Yavaş Mod Açar.\n**•** +ailemiz = Botun Sunucularını Gösterir.\n**•** +sustur = Seçtiğiniz Kullanıcıyı İstediğiniz Süre Boyunca Susturur.\n**•** +kanalıkilitle = İstediğiniz Kanalı Kilitler\n**•** +kilitaç = İstediğiniz Kanalın Kilidini Açar.')
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=564004808185610240&scope=bot&permissions=2146958847)` + "**\n**"+`[Destek Sunucusu](https://discord.gg/krsAhpf)`, false)
      .setFooter('End Bot Yetkili')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili '
};