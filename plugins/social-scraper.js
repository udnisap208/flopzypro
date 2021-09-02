/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const XTroid = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const axios = require('axios');
const fs = require('fs')

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')
const Lang = Language.getString('instagram')
const Tlang = Language.getString('tiktok')

if (Config.WORKTYPE == 'private') {

    XTroid.addCMD({ pattern: 'insta ?(.*)', fromMe: true, desc: Lang.DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `https://bx-hunter.herokuapp.com/api/igstalk?text=${match[1]}&apikey=Ikyy69`
	const response = await got(url);
	const lasijson = JSON.parse(response.body);
	
	let msg = '';
	msg += '*Username:*\n' + '```' + lasijson.username + '```' + '\n\n';
	msg += '*Full Name:*\n' + '```' + lasijson.fullname + '```' + '\n\n';
	msg += '*Bio:*\n' + '```' + lasijson.biography + '```' + '\n\n';
	msg += '*Followers:*\n' + '```' + lasijson.follower_count + '```' + '\n\n';
	msg += '*Following:*\n' + '```' + lasijson.following_count + '```' + '\n\n';
	msg += '*Post Count:*\n' + '```' + lasijson.post_count + '```' + '\n\n';
	

	var lasiimage = await axios.get(lasijson.Urlprofile, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.png, caption: msg });
}));


    /*
    XTroid.addCMD({ pattern: 'tiktok ?(.*)', fromMe: true, desc: Tlang.TİKTOK }, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid, Tlang.NEED, MessageType.text)

        await message.client.sendMessage(message.jid, Tlang.DOWN, MessageType.text)

        await axios
          .get(`https://shinoa-rest.herokuapp.com/dl/tiktok?link=${userName}`)
          .then(async (response) => {
            const {
              data,
            } = response.data

            const profileBuffer = await axios.get(data.mp4, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
              caption: Config.CAPTION_KEY,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Tlang.NOT + userName, MessageType.text),
          )
      },
    )
    */
}
else if (Config.WORKTYPE == 'public') {

   
    XTroid.addCMD({ pattern: 'insta ?(.*)', fromMe: false, desc: Lang.DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `https://bx-hunter.herokuapp.com/api/igstalk?text=${match[1]}&apikey=Ikyy69`
	const response = await got(url);
	const lasijson = JSON.parse(response.body);
	
	let msg = '';
	msg += '*Username:*\n' + '```' + lasijson.username + '```' + '\n\n';
	msg += '*Full Name:*\n' + '```' + lasijson.fullname + '```' + '\n\n';
	msg += '*Bio:*\n' + '```' + lasijson.biography + '```' + '\n\n';
	msg += '*Followers:*\n' + '```' + lasijson.follower_count + '```' + '\n\n';
	msg += '*Following*:\n' + '```' + lasijson.following_count + '```' + '\n\n';
	msg += '*Post Count:*\n' + '```' + lasijson.post_count + '```' + '\n\n';

	var lasiimage = await axios.get(lasijson.Urlprofile, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.png, caption: msg });
}));

    /*
    XTroid.addCMD({ pattern: 'tiktok ?(.*)', fromMe: false, desc: Tlang.TİKTOK }, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid, Tlang.NEED, MessageType.text)

        await message.client.sendMessage(message.jid, Tlang.DOWN, MessageType.text)

        await axios
          .get(`https://api.xteam.xyz/dl/tiktok?url=${userName}&APIKEY=ab9942f95c09ca89`)
          .then(async (response) => {
            const {
              server_1,
            } = response.data

            const profileBuffer = await axios.get(server_1, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
              caption: Config.CAPTION_KEY,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Tlang.NOT + userName, MessageType.text),
          )
      },
    )
    XTroid.addCMD({ pattern: 'tiktok ?(.*)', fromMe: true, desc: Tlang.TİKTOK }, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid, Tlang.NEED, MessageType.text)

        await message.client.sendMessage(message.jid, Tlang.DOWN, MessageType.text)

        await axios
          .get(`https://shinoa-rest.herokuapp.com/dl/tiktok?link=${userName}`)
          .then(async (response) => {
            const {
              data,
            } = response.data

            const profileBuffer = await axios.get(data.mp4, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
              caption: Config.CAPTION_KEY,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Tlang.NOT + userName, MessageType.text),
          )
      },
    )
    */
}