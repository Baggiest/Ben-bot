const moment = require('moment');

module.exports = {
    name: 'invite',
    description: 'inforemations about it',
    cooldown: 5,
    async execute(message) {
        let time = moment().format("LTS")

        message.reply(`/`)
        console.log(`[${time}] Invite`)
    },
  };
  