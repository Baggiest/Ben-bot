/* eslint-disable no-unused-vars */
const Client = require('../client/client')
const { MessageEmbed, ButtonInteraction, MessageActionRow, MessageButton } = require('discord.js')


const labEmotes = {
    "Green": "<:Green:958421373527674940>",
    "Blue": "<:Blue:958421259815895131>",
    "LightBlue": "<:Skyblue:958421313771405353>",
    "Yellow": "<:minionCum:958421349037125672>",
    "Pink": "<:Lean:958421209094184980>",
    "gifLeMeme": "https://cdn.discordapp.com/attachments/883245986166759437/959316443399352350/no-bitches-gclik-gif.gif"
}

const labReactions = {
    "Burned": "https://cdn.discordapp.com/attachments/883245986166759437/960565011091193936/Media_220404_160019.gif",
    // yellow and cyan
    "ExplosiveDrink": 'https://cdn.discordapp.com/attachments/883245986166759437/960597935589036152/20220404_222300.gif',
    // yellow and pink
    "Lava": 'https://cdn.discordapp.com/attachments/883245986166759437/960565225927635034/20220404_201256.gif',
    // yellow and Blue
    "FireExplotion": "https://cdn.discordapp.com/attachments/883245986166759437/960593711908159558/20220404_220538.gif",
    // green and cyan
    "Boom": 'https://cdn.discordapp.com/attachments/883245986166759437/960594779920560138/20220404_220757.gif',
    // green and pink
    "Plant": 'https://cdn.discordapp.com/attachments/883245986166759437/960565603289169961/20220404_201425.gif',
    // green and blue
    "fire": 'https://media.discordapp.net/attachments/883245986166759437/960597193289519114/20220404_221957.gif',
    // green and yellow
    "FireBreath": "https://cdn.discordapp.com/attachments/883245986166759437/960594515322863628/20220404_220920.gif",
    // cyan and pink 
    "lightning": "https://cdn.discordapp.com/attachments/883245986166759437/960565983469244496/20220404_201558.gif",
    // cyan and blue 
    "tornado": 'https://cdn.discordapp.com/attachments/883245986166759437/960593100789678190/20220404_201859.gif'
    // pink and blue
}

const labEmbed = new MessageEmbed()
    .setTitle('mix your potions')
    .setImage('https://cdn.discordapp.com/attachments/883245986166759437/960154015616868432/unknown.png')
    .setColor('PURPLE')

const gifEmbed = new MessageEmbed()
    .setImage(labEmotes.gifLeMeme)
    .setTitle('cant mix the same 2 potions')
    .setColor("LUMINOUS_VIVID_PINK")

module.exports = {

    name: 'lab',
    description: 'lab stuff, lean lab hohoho',
    async execute(message) {


        const row = new MessageActionRow()
            .addComponents(

                new MessageButton()
                    .setCustomId('yellow')
                    .setStyle('SECONDARY')
                    .setEmoji(labEmotes.Yellow),

                new MessageButton()
                    .setCustomId('green')
                    .setStyle('SECONDARY')
                    .setEmoji(labEmotes.Green),

                new MessageButton()
                    .setCustomId('cyan')
                    .setStyle('SECONDARY')
                    .setEmoji(labEmotes.LightBlue),

                new MessageButton()
                    .setCustomId('pink')
                    .setStyle('SECONDARY')
                    .setEmoji(labEmotes.Pink),

                new MessageButton()
                    .setCustomId('blue')
                    .setStyle('SECONDARY')
                    .setEmoji(labEmotes.Blue)
                    .setDisabled(false)
            )

        message.reply({
            embeds: [labEmbed],
            components: [row]
        })

        const filter = (interaction) => {
            if (interaction.user.id === message.author.id) {
                return true;
            }
        }

        const collector = message.channel.createMessageComponentCollector({
            filter,
            max: 2
        })

        collector.on("collect", (butIntr) => {
            let id = butIntr.customId;

            switch (id) {
                case "yellow": {
                    butIntr.reply(`mixing yellow ${labEmotes.Yellow}`)
                    row.components[0].setDisabled(true);
                    break;
                }

                case "green": {
                    butIntr.reply(`mixing green ${labEmotes.Green}`)
                    row.components[1].setDisabled(true);
                    break;
                }

                case "cyan": {
                    butIntr.reply(`mixing cyan ${labEmotes.LightBlue}`)
                    row.components[2].setDisabled(true);
                    break;
                }

                case "pink": {
                    butIntr.reply(`mixing lean ${labEmotes.Pink}`)
                    row.components[3].setDisabled(true);
                    break;
                }

                case "blue": {
                    butIntr.reply(`mixing blue ${labEmotes.Blue}`)
                    row.components[4].setDisabled(true);
                    break;
                }

                default: {
                    butIntr.reply("Idek how you got here");
                }
            }
        });

        collector.on('end', (butIntr) => {

            const buttons = [...butIntr.values()];
            const [firstIntr, secondIntr] = buttons;

            let first = firstIntr.customId;
            let second = secondIntr.customId;

            console.log(`${first} and ${second}`)

            switch (first) {


                case 'yellow':

                    switch (second) {

                        case "blue":
                            message.reply(labReactions.Lava)
                            break;

                        case "yellow":
                            message.reply({ embeds: [gifEmbed] })
                            break;

                        case "green":
                            message.reply(labReactions.fire)
                            break;

                        case "cyan":
                            message.reply(labReactions.Burned)
                            break;

                        case "pink":
                            message.reply(labReactions.ExplosiveDrink)

                    }
                    break;


                case 'green':
                    switch (second) {

                        case "blue":
                            message.reply(labReactions.Plant)
                            break;

                        case "yellow":
                            message.reply(labReactions.fire)
                            break;

                        case "green":
                            message.reply({ embeds: [gifEmbed] })
                            break;

                        case "cyan":
                            message.reply(labReactions.FireExplotion)
                            break;

                        case "pink":
                            message.reply(labReactions.Boom)
                    }

                    break;


                case 'cyan':

                    switch (second) {

                        case "blue":
                            message.reply(labReactions.lightning)
                            break;

                        case "yellow":
                            message.reply(labReactions.Burned)
                            break;

                        case "green":
                            message.reply(labReactions.FireExplotion)
                            break;

                        case "cyan":
                            message.reply({ embeds: [gifEmbed] })
                            break;

                        case "pink":
                            message.reply(labReactions.FireBreath)
                    }

                    break;


                case 'pink':

                    switch (second) {

                        case "blue":
                            message.reply(labReactions.tornado)
                            break;

                        case "yellow":
                            message.reply(labReactions.ExplosiveDrink)
                            break;

                        case "green":
                            message.reply(labReactions.Boom)
                            break;

                        case "cyan":
                            message.reply(labReactions.FireBreath)
                            break;

                        case "pink":
                            message.reply({ embeds: [gifEmbed] })
                            break;
                    }

                    break;

                case 'blue':

                    switch (second) {

                        case "blue":
                            message.reply({ embeds: [gifEmbed] })
                            break;

                        case "yellow":
                            message.reply(labReactions.Lava)
                            break;

                        case "green":
                            message.reply(labReactions.Plant)
                            break;

                        case "cyan":
                            message.reply(labReactions.lightning)
                            break;

                        case "pink":
                            message.reply(labReactions.tornado)
                    }

            }
        })
    }
}