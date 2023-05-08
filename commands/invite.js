/* eslint-disable no-unused-vars */
const moment = require('moment');

module.exports = {
    name: 'invite',
    description: 'informations about it',
    cooldown: 5,
    async execute(message) {
        let time = moment().format("LTS")

        
        console.log(`[${time}] Invite`)
    },
  };
  