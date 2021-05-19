const Discord = require("discord.js");

exports.run = (client, message) => {
  let üye = new Discord.MessageEmbed()
    .setAuthor("Cyrex Sunucu Üyedurum")
    .setColor("RED")
   .addField("**<a:hype2:810223233537933314> Toplam Kullanıcı**",message.guild.memberCount )
    .addField("**<a:yrnex_tiks:810222648113496075> Çevrimiçi Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'online').size)
  .addField("**<a:bidiribidiri:810223381819162694> Boşta Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'idle').size)
.addField("**<a:9053_monkey_christmas_dash:808663330470101013> Rahatsız Etmeyindeki Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'dnd').size)
.addField("**<a:9851_Loading:808663331136864326> Çevrimdışı Kullanıcılar**",message.guild.members.cache.filter(o => o.presence.status === 'offline').size)

    .setTimestamp()
  return message.channel.send(üye);
};

module.exports.conf = {
  aliases: ["üyedurum"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "üyedurum",
  description: "",
  usage: ""
};
