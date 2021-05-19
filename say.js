const westradiscord = require('discord.js');

exports.run = async (client, message, args) => {
  const seskanallari = message.guild.channels.cache.filter(c => c.type === 'voice'); 
  let westracc = 0
  let  westrabroo = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size 
  let metinkanallari = message.guild.channels.cache.filter(m => m.type == "text").size; 
  for (const [id, voiceChannel] of seskanallari) westracc += voiceChannel.members.size;
  const westraembed = new westradiscord.MessageEmbed()
  .setColor("0x36393F")
  .setTitle("Cyrex - Say")
  .setFooter("Cyrex")
  .setTimestamp()
  .setDescription(`
<a:acf06f3a6405432e9fba107f86ddbe78:808663412636647424> Toplam üye sayısı: **${message.guild.memberCount}**
<a:acf06f3a6405432e9fba107f86ddbe78:808663412636647424> Toplam çevrimiçi üye sayısı: **${westrabroo}**
<a:acf06f3a6405432e9fba107f86ddbe78:808663412636647424> Toplam metin kanalı sayısı: **${metinkanallari}**
<a:acf06f3a6405432e9fba107f86ddbe78:808663412636647424> Toplam ses kanalı sayısı: **${seskanallari.size}**
<a:acf06f3a6405432e9fba107f86ddbe78:808663412636647424> Toplam çevrimiçi durumda olan üye sayısı: **${message.guild.members.cache.filter(o => o.presence.status === 'online').size}**
<a:acf06f3a6405432e9fba107f86ddbe78:808663412636647424> Toplam boşta durumda olan üye sayısı: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}**
<a:acf06f3a6405432e9fba107f86ddbe78:808663412636647424> Toplam rahatsız etme durumda olan üye sayısı: **${message.guild.members.cache.filter(i => i.presence.status === 'dnd').size}**
`)
  message.channel.send(westraembed)
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bilgi", "sunucubilgi", "sunucu-bilgi", "sb"],
  permLevel: 0,
  kategori: "bot",
};

exports.help = {
  name: 'say',
  description: 'westra',
  usage: 'westra',

};