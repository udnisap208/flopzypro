const XTroid = require('../events');
const Config = require('../config');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('_xtroid');
const axios = require('axios');

if (Config.WORKTYPE == 'private') {

        XTroid.addCMD({pattern: 'grp', fromMe: true, deleteCommand: false,}, (async (message, match) => {

        var lasiimg = await axios.get(`https://telegra.ph/file/3073bc9bf04f00fead6a4.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.image, {mimetype: Mimetype.png, caption: '   _Welcome to the new universe_ \n\n\n              🥇YouTube🔔\n      ```http://y2u.be/mDnJ7q3S3eY```\n*දැනුම Telegram*\n```https://t.me/danuma01```\n\n*උසස් පෙල සවිය* \n ```http://t.me/alxams```\n\n*සාමාන්‍ය පෙල සවිය* \n ```http://t.me/olxams``` \n\n*Mod Apps* \n ```http://t.me/danuma``` \n\n*Film Store*\n```http://t.me/films_SL_x``` \n\n*Bot Project* \n ```http://t.me/danumabots``` \n\n*දැනුම blog* \n```https://danumagroup.blogspot.com/?m=1``` \n\n*දැනුම පොත් Web Site එක*\n ```https://danuma.danuma.workers.dev/``` \n\n\n       💡දැනුම Whatsapp 📚සමූහ  \n\n*Group 10* \n```https://chat.whatsapp.com/LSvMNWDgtcmJTzKRJ7gzkh``` \n\n*Group 9* \n```https://chat.whatsapp.com/Gd4zEu4zXuUG1IgKIbBLRI``` \n\n*Group 8*  \n```https://chat.whatsapp.com/Brn9KwB4vf29PFvvV2LV4x``` \n\n*Group 7* \n```https://chat.whatsapp.com/DMhkJIM1NCm8Nsh5iBeNaF``` \n\n*Group 6* \n```https://chat.whatsapp.com/GsqFiZpJhC61zOIwmyrTD0``` \n\n*group 5* \n```https://chat.whatsapp.com/FaPZBiAK37Y2my4RenHm5K``` \n\n*group 4* \n```https://chat.whatsapp.com/DJzGuFUOXZOFRlG6APWR6a``` \n\n*group 3* \n```https://chat.whatsapp.com/DjG7hi3kL7mCzP9UwRe38m``` \n\n*group 2* \n```https://chat.whatsapp.com/Le60XJtUJMK1zZBwyJfstu``` \n\n*group 1* \n```https://chat.whatsapp.com/JVEdzU42Qmw3KsOkBApTOM```\n\n '})
    }));
}

if (Config.WORKTYPE == 'public') {
  
        XTroid.addCMD({pattern: 'grp', fromMe: false, deleteCommand: false,}, (async (message, match) => {

        var lasiimg = await axios.get(`https://telegra.ph/file/3073bc9bf04f00fead6a4.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.image, {mimetype: Mimetype.png, caption: '   _Welcome to the new universe_ \n\n\n              🥇YouTube🔔\n      ```http://y2u.be/mDnJ7q3S3eY```\n*දැනුම Telegram*\n```https://t.me/danuma01```\n\n*උසස් පෙල සවිය* \n ```http://t.me/alxams```\n\n*සාමාන්‍ය පෙල සවිය* \n ```http://t.me/olxams``` \n\n*Mod Apps* \n ```http://t.me/danuma``` \n\n*Film Store*\n```http://t.me/films_SL_x``` \n\n*Bot Project* \n ```http://t.me/danumabots``` \n\n*දැනුම blog* \n```https://danumagroup.blogspot.com/?m=1``` \n\n*දැනුම පොත් Web Site එක*\n ```https://danuma.danuma.workers.dev/``` \n\n\n       💡දැනුම Whatsapp 📚සමූහ  \n\n*Group 10* \n```https://chat.whatsapp.com/LSvMNWDgtcmJTzKRJ7gzkh``` \n\n*Group 9* \n```https://chat.whatsapp.com/Gd4zEu4zXuUG1IgKIbBLRI``` \n\n*Group 8*  \n```https://chat.whatsapp.com/Brn9KwB4vf29PFvvV2LV4x``` \n\n*Group 7* \n```https://chat.whatsapp.com/DMhkJIM1NCm8Nsh5iBeNaF``` \n\n*Group 6* \n```https://chat.whatsapp.com/GsqFiZpJhC61zOIwmyrTD0``` \n\n*group 5* \n```https://chat.whatsapp.com/FaPZBiAK37Y2my4RenHm5K``` \n\n*group 4* \n```https://chat.whatsapp.com/DJzGuFUOXZOFRlG6APWR6a``` \n\n*group 3* \n```https://chat.whatsapp.com/DjG7hi3kL7mCzP9UwRe38m``` \n\n*group 2* \n```https://chat.whatsapp.com/Le60XJtUJMK1zZBwyJfstu``` \n\n*group 1* \n```https://chat.whatsapp.com/JVEdzU42Qmw3KsOkBApTOM```\n\n '})
    }));
        
        XTroid.addCMD({pattern: 'grp', fromMe: true, deleteCommand: false,}, (async (message, match) => {

        var lasiimg = await axios.get(`https://telegra.ph/file/3073bc9bf04f00fead6a4.jpg`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(lasiimg.data), MessageType.image, {mimetype: Mimetype.png, caption: '   _Welcome to the new universe_ \n\n\n              🥇YouTube🔔\n      ```http://y2u.be/mDnJ7q3S3eY```\n*දැනුම Telegram*\n```https://t.me/danuma01```\n\n*උසස් පෙල සවිය* \n ```http://t.me/alxams```\n\n*සාමාන්‍ය පෙල සවිය* \n ```http://t.me/olxams``` \n\n*Mod Apps* \n ```http://t.me/danuma``` \n\n*Film Store*\n```http://t.me/films_SL_x``` \n\n*Bot Project* \n ```http://t.me/danumabots``` \n\n*දැනුම blog* \n```https://danumagroup.blogspot.com/?m=1``` \n\n*දැනුම පොත් Web Site එක*\n ```https://danuma.danuma.workers.dev/``` \n\n\n       💡දැනුම Whatsapp 📚සමූහ  \n\n*Group 10* \n```https://chat.whatsapp.com/LSvMNWDgtcmJTzKRJ7gzkh``` \n\n*Group 9* \n```https://chat.whatsapp.com/Gd4zEu4zXuUG1IgKIbBLRI``` \n\n*Group 8*  \n```https://chat.whatsapp.com/Brn9KwB4vf29PFvvV2LV4x``` \n\n*Group 7* \n```https://chat.whatsapp.com/DMhkJIM1NCm8Nsh5iBeNaF``` \n\n*Group 6* \n```https://chat.whatsapp.com/GsqFiZpJhC61zOIwmyrTD0``` \n\n*group 5* \n```https://chat.whatsapp.com/FaPZBiAK37Y2my4RenHm5K``` \n\n*group 4* \n```https://chat.whatsapp.com/DJzGuFUOXZOFRlG6APWR6a``` \n\n*group 3* \n```https://chat.whatsapp.com/DjG7hi3kL7mCzP9UwRe38m``` \n\n*group 2* \n```https://chat.whatsapp.com/Le60XJtUJMK1zZBwyJfstu``` \n\n*group 1* \n```https://chat.whatsapp.com/JVEdzU42Qmw3KsOkBApTOM```\n\n '})
    }));
}
