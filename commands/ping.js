module.exports = {
  name: 'ping',
  description: 'pong!',
  cooldown: 5,
  async execute(message) {
    const m = await message.channel.send('ping?');
    m.edit(
      `Pong! Latency is \`${
        m.createdTimestamp - message.createdTimestamp
      }ms\`. API Latency is \`${message.client.ws.ping}ms\``
    );
    message.channel.send(
      'https://cdn.discordapp.com/attachments/902930216354189395/904810433129639956/yuPWpNo.png'
    );
  },
};
