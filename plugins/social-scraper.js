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
	let url = `https://hardianto-chan.herokuapp.com/api/igstalk?username=${match[1]}&apikey=hardianto`
	const response = await got(url);
	const lasijson = JSON.parse(response.body);
	
	let msg = '';
	msg += '*Username:*\n' + '```' + lasijson.username + '```' + '\n\n';
	msg += '*Full Name:*\n' + '```' + lasijson.fullname + '```' + '\n\n';
	msg += '*Verified:*\n' + '```' + lasijson.verified + '```' + '\n\n';
	msg += '*Bio:*\n' + '```' + lasijson.bio + '```' + '\n\n';
	msg += '*Followers:*\n' + '```' + lasijson.followers + '```' + '\n\n';
	msg += '*Following:*\n' + '```' + lasijson.follow + '```' + '\n\n';
	

	var lasiimage = await axios.get(lasijson.thumbnail, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.png, caption: msg });
}));

XTroid.addCMD({ pattern: 'gsmarena ?(.*)', fromMe: true, desc: Lang.DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `https://docs-jojo.herokuapp.com/api/gsm_arena?q=${match[1]}`
	const response = await got(url);
	const lasijson = JSON.parse(response.body);
	
	let msg = '';
	msg += '*Title:*\n' + '```' + lasijson.title + '```' + '\n\n';
	msg += '*Release:*\n' + '```' + lasijson.released + '```' + '\n\n';
	msg += '*OS:*\n' + '```' + lasijson.os_version + '```' + '\n\n';
	msg += '*Specs:*\n' + '```' + lasijson.spec.list + '```' + '\n\n';	

	var lasiimage = await axios.get(lasijson.img, { responseType: 'arraybuffer' })
	
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
	let url = `https://hardianto-chan.herokuapp.com/api/igstalk?username=${match[1]}&apikey=hardianto`
	const response = await got(url);
	const lasijson = JSON.parse(response.body);
	
	let msg = '';
	msg += '*Username:*\n' + '```' + lasijson.username + '```' + '\n\n';
	msg += '*Full Name:*\n' + '```' + lasijson.fullname + '```' + '\n\n';
	msg += '*Verified:*\n' + '```' + lasijson.verified + '```' + '\n\n';
	msg += '*Bio:*\n' + '```' + lasijson.bio + '```' + '\n\n';
	msg += '*Followers:*\n' + '```' + lasijson.followers + '```' + '\n\n';
	msg += '*Following:*\n' + '```' + lasijson.follow + '```' + '\n\n';
	

	var lasiimage = await axios.get(lasijson.thumbnail, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.png, caption: msg });
}));	
	
	XTroid.addCMD({ pattern: 'gsmarena ?(.*)', fromMe: false, desc: Lang.DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `https://docs-jojo.herokuapp.com/api/gsm_arena?q=${match[1]}`
	const response = await got(url);
	const lasijson = JSON.parse(response.body);
	
	let msg = '';
	msg += '*Title:*\n' + '```' + lasijson.title + '```' + '\n\n';
	msg += '*Release:*\n' + '```' + lasijson.released + '```' + '\n\n';
	msg += '*OS:*\n' + '```' + lasijson.os_version + '```' + '\n\n';
	msg += '*Specs:*\n' + '```' + lasijson.spec.list + '```' + '\n\n';	

	var lasiimage = await axios.get(lasijson.img, { responseType: 'arraybuffer' })
	
	await message.client.sendMessage(message.jid, Buffer.from(lasiimage.data), MessageType.image, {mimetype: Mimetype.png, caption: msg });
}));

	XTroid.addCMD({ pattern: 'insta ?(.*)', fromMe: true, desc: Lang.DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `https://hardianto-chan.herokuapp.com/api/igstalk?username=${match[1]}&apikey=hardianto`
	const response = await got(url);
	const lasijson = JSON.parse(response.body);
	
	let msg = '';
	msg += '*Username:*\n' + '```' + lasijson.username + '```' + '\n\n';
	msg += '*Full Name:*\n' + '```' + lasijson.fullname + '```' + '\n\n';
	msg += '*Verified:*\n' + '```' + lasijson.verified + '```' + '\n\n';
	msg += '*Bio:*\n' + '```' + lasijson.bio + '```' + '\n\n';
	msg += '*Followers:*\n' + '```' + lasijson.followers + '```' + '\n\n';
	msg += '*Following:*\n' + '```' + lasijson.follow + '```' + '\n\n';
	

	var lasiimage = await axios.get(lasijson.thumbnail, { responseType: 'arraybuffer' })
	
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
