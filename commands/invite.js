const moment = require('moment');

module.exports = {
    name: 'invite',
    description: 'inforemations about it',
    cooldown: 5,
    async execute(message) {
        let time = moment().format("LTS")

        message.reply(`as you guys know ben isnt verified yet, and its because of the growth it had, ben bot hit 100 servers under 24 hours and 250 servers 80k users under 48 hours and i confirmed my identity for verification \n \n the problem however is the amount of growth made discord suspicious of the whole thing \n and they asked me to wait for "natural growth" welp its 0 now hope it qualifies \n \n and discord support ghosted me harder than my crush ever did \n seriously thank you for your patience, we will be verified`)
        console.log(`[${time}] Invite`)
    },
  };
  