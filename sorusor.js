const Discord = require('discord.js')
const cevaplar = [ 
  "Evet", 
	"Hayır", 
	"Muhtemelen", 
	"İmkansız", 
	"Ne yazık ki hayır", 
	"Maalesef", 
	"Tabii ki", 
	"Belki de", 
	"Şimdi söylemeyeceğim",
     "L�tfen K�f�r Etme!", 
  "Odaklan ve tekrar sor"
];
exports.run = function(client, message, args) {
    var soru = args.join(' ');
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
if(!soru) return message.channel.send('Bana sormak istediğin soruyu yazarmısın?')
    else message.reply(cevap)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };  
  exports.help = {
    name: 'sorusor',
    description: 'Bota soru sorarsınız.',
    usage: 'sorusor'
  };
 