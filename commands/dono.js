const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'dono',
    description: 'plz help an opensource dev eat and feed his 5 wive and children',
    async execute(message) {

        const donoEmbed = new MessageEmbed()
        .setTitle('Donations!')
        .setDescription('As you might know Ben is a free and opensource software, and I get 0 bitches \n so it would be very nice of you do buy me some Head at \n \n https://www.buymeacoffee.com/MrBaggieBug')
        .setURL('https://www.buymeacoffee.com/MrBaggieBug')
        .setImage('https://tenor.com/bQRdb.gif')

        message.reply({embeds:[donoEmbed]})
    }
}