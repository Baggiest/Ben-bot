/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const moment = require('moment');


module.exports = {
    name: 'ben',
    description: 'answers',
    cooldown: 5,
    async execute(message) {


        let time = moment().format("LTS");
        //saving the emotes as variables 
        const BenEmotes = {
            ben: "<a:Ben:946330195294584842>",
            yes: "<a:BenYes:945670382281687080>",
            no: "<a:BenNo:945670479711187034>",
            hoho: "<a:BenHohoho:945670730891264102>",
            hangup: "<a:BenHangup:945682532962291802>",
            ugh: "<a:BenUgh:945670730442473472>"
        }
        //get the incoming message and make sure everything is an string

        let mString = message.content.toString().toLowerCase()
        let mSplit = mString.split(' ')


        //temporary solution to making sure that
        //the incoming message is just "yo ben"
        //and its response to that should always be Ben

        if (mString.length === 6) {
            //default response to yo ben

            message.reply(`${BenEmotes.ben} Ben.`)
            console.log(`[${time}] Ben`)
            //random person on reddit got a point
        }
        else if (mSplit[2] == "make" && mSplit[3] == "some" && mSplit[4] == "lean") {

            message.reply('https://cdn.discordapp.com/attachments/883245986166759437/959332263261261864/ezgif-1-16b7bb9a8f.gif')

        }

        else if(mSplit[2] == "ratio"){
            message.reply('https://images-ext-1.discordapp.net/external/hi8ilNzrxnjeIYbLGqx36RnwihV40RM8WpxNkxI1bxE/%3Fc%3DVjFfZGlzY29yZA/https/media.tenor.com/AKkrwSZSpZ0AAAPo/talking-ben.mp4')
        }

        else {

            //random 1 to 10 number generator
            let r = Math.floor(Math.random() * 10) + 1;
            console.log(`[${time}] ${r}`)

            switch (true) {

                case (r == 1 || r == 2 || r == 3):
                    //yes
                    message.reply(`${BenEmotes.yes} yes`)
                    break;

                case (r == 4 || r == 5):
                    //no
                    message.reply(`${BenEmotes.no} no`)
                    break;

                case (r == 6 || r == 7):
                    //hohoho
                    message.reply(`${BenEmotes.hoho} hohoho`)
                    break;

                case (r == 8 || r == 9):
                    //ugh
                    message.reply(`${BenEmotes.ugh} ughhh`)
                    break;

                case (r == 10):
                    //hangup
                    message.reply(`${BenEmotes.hangup} ...`)
                    break

            }
        }

    },
};
