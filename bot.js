const Discord = require('discord.js');
const client = new Discord.Client();
const mohaa = new Discord.Client();
const roiis = new Discord.Client();
const rois = new Discord.Client();



client.on('message', message => {
  if (message.content.startsWith('play')) {
  if (message.author.id !== '479090634813341696') return;
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {

      });
  }
})
client.login(process.env.BOT_TOKEN);
mohaa.login(process.env.BOT_TOKEN1);
roiis.login(process.env.BOT_TOKEN2);
rois.login(process.env.BOT_TOKEN3);

