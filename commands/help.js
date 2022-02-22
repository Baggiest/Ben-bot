module.exports = {
    name: 'ping',
    description: 'pong!',
    cooldown: 5,
    async execute(message) {
        message.channel.send(`for talking use "$$ ben [question]" and "ben" should be lowercase atleast for now`)
    },
  };
  