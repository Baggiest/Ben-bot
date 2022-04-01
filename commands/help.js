const moment = require('moment');

module.exports = {
    name: 'help',
    description: 'send help',
    cooldown: 5,
    async execute(message) {
        let time = moment().format("LTS")

        message.channel.send(`for talking use "yo ben [question]" \n \n **do not** turn off "use external emotes" in bot permissions \n it will break the bot and you'll need to reinvite \n \n ben should have a 100% response rate, if it ignored your messages, kick and reinvite with the latest invite link with all the appropriate roles :) \n \n and if you want to contribute say "yo code" to learn more \n ask ben to make some lean for you, "yo ben make some lean"`)
        console.log(`[${time}] H`)
    },
  };
  