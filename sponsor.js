const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = (client,message,args)=>{
    let komut = new Discord.MessageEmbed()
    .setTitle("Sponsorumuz")//komutun ismi
    .setImage("https://cdn.discordapp.com/attachments/811533768555757568/818079866845921290/cyrexmorgifim.gif")//gifin linki
    .setDescription(`
    <:Panda:808663430546456598> Vds Alan Adı vb... Şeylermi İstiyorsun Tamda Yerine Geldin!
    <:Panda:808663430546456598> %100 Ddos Korumalı Vdsler
    <:Panda:808663430546456598> En Güvenilir Ve En Korumalı Vdslerin Sahibi
    <:Panda:808663430546456598> Kendi Makineleri
    <:Panda:808663430546456598> Türkiye Lokasyonu
    <:Panda:808663430546456598> Daha Ne Duruyorsun Haydi Sende Sunucusuna Gel Ve Efsane Vds'lerin Sahibi Ol
    <:Panda:808663430546456598> Giriş Linki: https://discord.gg/gXakP3NGtu
    <:Panda:808663430546456598> Website: https://webvoserver.net/
    <:Panda:808663430546456598> Webvo Yardımınıza Her Zaman Yetişir!
    `)//mesajlar
    message.channel.send(komut)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sponsor",
  description: "Sporsonuzu belirtir.",
  usage: "sponsor"
};  