const moment = require('moment');

module.exports = {
    name: 'help',
    description: 'send help',
    cooldown: 5,
    async execute(message) {
        let time = moment().format("LTS")

        message.channel.send(`for talking use "yo ben [question]" \n do not turn off "use external emotes" in bot permissions \n it will break the bot and you'll need to reinvite`)
        console.log(`[${time}] H`)
    },
  };
  