const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullaným: c!baþvuru <açýklama>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Baþvurunuz bildirildi !!')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlý kullanýcýnýn baþvurusu:`)
.addField(`Kulanýcý Bilgileri`, `Kullanýcý ID: ${message.author.id}\nKullanýcý Adý: ${message.author.username}\nKullanýcý Tagý: ${message.author.discriminator}`)
.addField("Baþvuru", type)
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
  name: 'baþvuru',
  description: 'Ekip için baþvuru.',
  usage: 'baþvuru <açýklama>'
};