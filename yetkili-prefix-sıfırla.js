const Discord = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client()
client.emojis.cache.get('784518934711762976');
client.emojis.cache.get('784518943423463484');

module.exports.run = async (client, message, args) => {   
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (kontrol == "yokagayok") {

        if (!prefix) {
          const embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`Prefix zaten ayarlanmamış!`)

          message.channel.send(embed);
          return;
        }
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Prefix başarıyla sıfırlandı!`)

        message.channel.send(embed);
        db.delete(`prefix_${message.guild.id}`);
      
  } else {
    
        if (!prefix) {
          const embed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setDescription(`Prefix Zaten Ayarlanmamış!`)

          message.channel.send(embed);
          return;
        }
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Prefix Başarıyla Sıfırlandı!`)

        message.channel.send(embed);
        db.delete(`prefix_${message.guild.id}`);
      
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["prefix-reset"],
  permLevel: 3,
  kategori: "sunucu"
};

module.exports.help = {
  name: "prefix-sıfırla",
  description: "prefix-sıfırla",
  usage: "prefix-sıfırla"
};