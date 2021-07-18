
const XTroid = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
const IMdsc = "You can turn on/off .img commad"
const ALIMGON = "already on : කලින්ම ලබාදී ඇත"
const ALIMGOF = "already off : කලින්ම වසාදමා ඇත"
const SUON = "Successfully .img on command: සාර්ථකව අවසර ලබාදෙන ලදී "
const SUOF = "Successfully .img off command: සාර්ථකව අවහිර කරන ලදී "
const IMDC = "you tuerned off .img command plz tuern on *.cimg on*"
let baseURI = '/apps/' + config.HEROKU.APP_NAME;const axios = require('axios');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const Slang = Language.getString('lyrics');
const Clang = Language.getString('covid');

const wiki = require('wikijs').default;
var gis = require('g-i-s');
const { on } = require('events');


if (config.WORKTYPE == 'private') {
XTroid.addCMD({pattern: 'img ?(.*)', fromMe: true, desc: Lang.IMG_DESC}, (async (message, match) => { 
    if (config.IMG !== ON) return await message.sendMessage('Option turned off');

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
    gis(match[1], async (error, result) => {
        for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
            var get = got(result[i].url, {https: {rejectUnauthorized: false}});
            var stream = get.buffer();
            
            stream.then(async (image) => {
                await message.client.sendMessage(message.jid,image, MessageType.image);
            });
        }

        message.reply(Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]));
    });
}));
}



else if (config.WORKTYPE == 'public') {
XTroid.addCMD({pattern: 'img ?(.*)', fromMe: false,desc: Lang.IMG_DESC }, (async (message, match) => { 
    if (config.IMG !== ON) return await message.sendMessage('Option turned off');

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
    gis(match[1], async (error, result) => {
        for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
            var get = got(result[i].url, {https: {rejectUnauthorized: false}});
            var stream = get.buffer();
            
            stream.then(async (image) => {
                await message.client.sendMessage(message.jid,image, MessageType.image);
            });
        }

        message.reply(Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]));
    });
}));

}



XTroid.addCMD({ pattern: 'keyimg ?(.*)',  fromMe: true, usage: '.keyimg on / off' }, (async (message, match) => {
    var IMG = `${conf.IMG}`
    if (match[1] == 'on') {
        if (IMG == 'ON') {
            return await message.client.sendMessage(message.jid, '*ON*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['IMG']: 'ON'
                } 
            });
            await message.client.sendMessage(message.jid, '*Image opened*', MessageType.text)
        }
    }
    else if (match[1] == 'off') {
        if (IMG !== 'ON') {
            return await message.client.sendMessage(message.jid, '*OFF*', MessageType.text)
        }
        else {
            await heroku.patch(baseURI + '/config-vars', { 
                body: { 
                    ['IMG']: 'OFF'
                } 
            });
            await message.client.sendMessage(message.jid, '*Image Off*', MessageType.text)
        }
    }
}));
