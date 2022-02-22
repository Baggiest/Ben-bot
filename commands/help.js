module.exports = {
    name: 'help',
    description: 'send help',
    cooldown: 5,
    async execute(message) {
        message.channel.send(`for talking use "$$ ben [question]" and "ben" should be lowercase atleast for now`)
    },
  };
  