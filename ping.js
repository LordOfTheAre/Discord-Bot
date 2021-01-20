const Discord = require('discord.js');

exports.run = async (client, message, args,) => {
  const useruser = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const userurl = message.author.avatarURL;
  const bayrak = ":flag_tr:";
  const ping = ${Math.round(client.ws.ping)}ms;

let embed = new Discord.MessageEmbed()
.setTitle(':shield: Anlık Gecikme Süresi :shield:')//Komutu Yazınca Kanala Atacağı Mesaj
.setColor("RANDOM")//Mesaj Rengi RANDOM Yani Rastgele Renk Çıkacak
.addField("Ping :", ping)
.addField("Lokasyon :", bayrak)
.setFooter(useruser, userurl)
.setTimestamp();

message.channel.send(embed);

}
//
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//
exports.help = {
  name: 'ping',//Komutun İsmi
  description: 'Botun Gecikme Süresini Açıklar.',//Komutun Açıklaması
  usage: 'ping'//Komutun Kullanımı
};
