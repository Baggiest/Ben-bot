/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
module.exports = {
    name: 'ben',
    description: 'answers',
    cooldown: 5,
    async execute(message) {


        //saving the emotes as variables 
        const BenEmotes = {
            yes: "<a:BenYes:945670382281687080>",
            no: "<a:BenNo:945670479711187034>",
            hoho: "<a:BenHohoho:945670730891264102>",
            hangup: "<a:BenHangup:945682532962291802>",
            ugh: "<a:BenUgh:945670730442473472>"
        }
        //get the incoming message and make sure everything is an string

        let mString = message.content.toString()

        //temporary solution to making sure that the incoming message is just "ayo ben"
        //and its response to that should always be Yes

        if (mString.length === 6) {
            //default response to ayo ben
            message.channel.send(`${BenEmotes.yes} yea`)
        }
        else {

            //random 1 to 10 number generator
            let randN =  Math.floor(Math.random() * 10) + 1;
            console.log(randN)
            switch(randN){

                case 1||2||3:
                    //yes
                    message.channel.send(`${BenEmotes.yes} yes`)
                break;

                case 4||5:
                    //no
                    message.channel.send(`${BenEmotes.no} no`)
                break;

                case 6||7:
                    //hohoho
                    message.channel.send(`${BenEmotes.hoho} hohoho`)
                break;

                case 8||9:
                    //ugh
                    message.channel.send(`${BenEmotes.ugh} ughhh`)
                break;

                case 10:
                    //hangup
                    message.channel.send(`${BenEmotes.hangup} ...`)
                break

            }
        }

    },
};
