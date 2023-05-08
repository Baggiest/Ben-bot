//feel free to star and contribute in https://github.com/mrbaggiebug/Ben-bot

const moment = require('moment');

module.exports = {
    name: 'code',
    description: 'star this repo so i can feed my 5 children',
    cooldown: 5,
    async execute(message) {
        let time = moment().format("LTS")

        message.reply(`you can start coding your ideas and my lazyass will most likely accept it \n feel free to star and contribute in \n https://github.com/mrbaggiebug/Ben-bot`)
        console.log(`[${time}] Github`)
    },
  };
  