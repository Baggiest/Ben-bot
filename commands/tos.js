const moment = require('moment');

module.exports = {
    name: 'tos',
    description: 'youre not going to read it anyways',
    cooldown: 5,
    async execute(message) {
        let time = moment().format("LTS");

        message.channel.send(`checkout our TOS and privacy policy at \n https://mrbaggiebug.github.io/Ben-bot/`)
        console.log(`[${time}] TOS`)
    },
  };
  