const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullan�m: c!ba�vuru <a��klama>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Ba�vurunuz bildirildi !!')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adl� kullan�c�n�n ba�vurusu:`)
.addField(`Kulan�c� Bilgileri`, `Kullan�c� ID: ${message.author.id}\nKullan�c� Ad�: ${message.author.username}\nKullan�c� Tag�: ${message.author.discriminator}`)
.addField("Ba�vuru", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('564204694390702080').send(embed2); // Kanal ID

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ba�vuru',
  description: 'Ekip i�in ba�vuru.',
  usage: 'ba�vuru <a��klama>'
};