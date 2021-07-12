const XTroid = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {

   XTroid.addCMD({pattern: 'apkmod', fromMe: true}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMMANDS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     *.nova*\n\n┠⊷️ ↘️ CM Launcher:\n     *.cml*\n\n┠⊷️ ↘️ Apex Launcher:\n     *.apex*\n\n\n┠⊷️ ↘️ Kinemaster:\n     *.kinemaster*\n\n┠⊷️ ↘️ PicsArt Gold:\n     *.picsart*\n\n┠⊷️ ↘️ Canva Pro:\n     *.canva*\n\n┠⊷️ ↘️ Ligthrom:\n     *.lightroom*\n\n┠⊷️ ↘️ Photoshop Express:\n     *.pshop*\n\n┠⊷️ ↘️ Snapseed:\n     *.snaps*\n\n┠⊷️ ↘️ Retouch:\n     *.retouch*\n\n\n┠⊷️ ↘️ Vanced Manager:\n     *.vanced*\n\n┠⊷️ ↘️ Crunchyroll:\n     *.crunchy*\n\n┠⊷️ ↘️ Freezer Mod:\n     *.freez*\n\n┠⊷️ ↘️ Deezer Premium:\n     *.deezer*\n\n┠⊷️ ↘️ RadioBox:\n     *.rbox*\n\n┠⊷️ ↘️ Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ ↘️ Power AMP:\n     *.amp*\n\n┠⊷️ ↘️ JetAudio:\n     *.jetau*\n\n\n┠⊷️ ↘️ ExpressVpn:\n     *.xpress*\n\n┠⊷️ ↘️ Hospot Shield:\n     *.hshield*\n\n┠⊷️ ↘️ TurboVpn:\n     *.Turbo*\n\n┠⊷️ ↘️ File Manager:\n     *.flmanager*\n\n┠⊷️ ↘️ CallRecorder:\n     *.callr*\n\n┠⊷️ ↘️ FingScanner:\n     *.fing*\n\n┠⊷️ ↘️ Shazam Encore:\n     *.shazam*\n\n┠⊷️ ↘️ QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ ↘️ Screen Recorder:\n     *.srecorder*\n\n┠⊷️ ↘️ TikTok Mod:\n     *.tiktok*\n\n┠⊷️ ↘️ Photomath:\n     *.pmath*\n\n┠⊷️ ↘️ WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *Public Bot* 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));

   XTroid.addCMD({pattern: 'fatp', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));

   XTroid.addCMD({pattern: 'nova', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *NOVA LAUNCHER* 💎\npremium unlocked .\n📌 bit.ly/drknova');
   }));

   XTroid.addCMD({pattern: 'cml', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CM LAUNCHER* 💎\npremium unlocked.\n😞 No disponible en este momento.');
   }));

   XTroid.addCMD({pattern: 'apex', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *APEX LAUNCHER* 💎\npremium unlocked.\n📌 bit.ly/drkapex');
   }));

   XTroid.addCMD({pattern: 'kinemaster', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *KINEMASTER MOD* 💎\npremium unlocked.\n👉https://bit.ly/2RSyFVr.\n pass: 3456');
   }));

   XTroid.addCMD({pattern: 'inshot', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *INSHOT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3zyNjlZ');
   }));

   XTroid.addCMD({pattern: 'alight', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *ALIGHT MOTION MOD* 💎\npremium unlocked.\n👉https://bit.ly/3cHUBdg');
   }));

   XTroid.addCMD({pattern: 'capcut', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CAP CUT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3pSSlFu');
   }));
   XTroid.addCMD({pattern: 'picsart', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PICSART GOLD* 💎\npremium unlocked.\n📌 bit.ly/drkpicsart');
   }));

   XTroid.addCMD({pattern: 'canva', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CANVA PRO* 💎\npremium unlocked.\n📌 bit.ly/canvapro');
   }));

   XTroid.addCMD({pattern: 'lightr', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *LIGTHROM* 💎\npremium unlocked.\n📌 bit.ly/drklightr');
   }));

   XTroid.addCMD({pattern: 'pshop', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOSHOP EXPRESS* 💎\npremium unlocked.\n📌 bit.ly/drkphotoshop');
   }));

   XTroid.addCMD({pattern: 'snaps', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SNAPSEED* 💎\npremium unlocked.\n📌 bit.ly/drksnaps');
   }));

   XTroid.addCMD({pattern: 'retouch', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *RETOUCH* 💎\npremium unlocked.\n📌 bit.ly/drkretouch');
   }));

   XTroid.addCMD({pattern: 'vanced', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *VANCED MANAGER* 💎\nyoutube vanced.\n📌 bit.ly/drkytubev');
   }));

   XTroid.addCMD({pattern: 'freez', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FREEZER MOD* 💎\nPremium Unlocked.\n📌 bit.ly/drkfreezer');
   }));

   XTroid.addCMD({pattern: 'deezer', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *DEEZER MOD* 💎\npremium unlocked.\n📌 bit.ly/drkdeezer');
   }));

   XTroid.addCMD({pattern: 'rbox', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *RADIO BOX* 💎\npremium unlocked.\n📌 bit.ly/drkradiobox');
   }));

   XTroid.addCMD({pattern: 'mxpro', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *MX PLAYER PRO* 💎\npremium unlocked.\n⚠️ Versión Premium.\n📌 bit.ly/drkmxplayer');
   }));

   XTroid.addCMD({pattern: 'amp', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *POWERAMP* 💎\npremium unlocked.\n📌 bit.ly/drkampplayer');
   }));

   XTroid.addCMD({pattern: 'jetau', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *JetAudio* 💎\npremium unlocked.\n📌 bit.ly/drkjetau');
   }));

   XTroid.addCMD({pattern: 'xpress', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *EXPRESS VPN* 💎\npremium unlocked.\n📌 bit.ly/drkXpress');
   }));

   XTroid.addCMD({pattern: 'hshield', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *HOSPOT SHIELD VPN* 💎\npremium unlocked.\n📌 bit.ly/drkHShield');
   }));

   XTroid.addCMD({pattern: 'avguard', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *TURBO VPN* 💎\npremium unlocked.\n📌 bit.ly/drkguard');
   }));

   XTroid.addCMD({pattern: 'flmanager', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FILE MANAGER* 💎\npremium unlocked.\n📌 bit.ly/drkesfile');
   }));

   XTroid.addCMD({pattern: 'callr', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CALL RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkcallr');
   }));

   XTroid.addCMD({pattern: 'fing', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FING SCANNER* 💎\npremium unlocked.\n📌 bit.ly/drkfing');
   }));

   XTroid.addCMD({pattern: 'shazam', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SHAZAM ENCORE* 💎\npremium unlocked.\n📌 bit.ly/drkshaz');
   }));

   XTroid.addCMD({pattern: 'qrcode', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *QR CODE SCANER* 💎\npremium unlocked.\n📌 bit.ly/drkqrscanner');
   }));

   XTroid.addCMD({pattern: 'srecorder', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SCREEN RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkgrabr');
   }));

   XTroid.addCMD({pattern: 'tiktok', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *TIKTOK MOD* 💎\npremium unlocked.\n📌 bit.ly/drktiktok');
   }));

   XTroid.addCMD({pattern: 'pmath', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOMATH* 💎\npremium unlocked.\n📌 bit.ly/drkphotomath');
   }));

   XTroid.addCMD({pattern: 'waplus', fromMe: true, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *WHATSAPP PLUS* 💎\nwhattsapp mod.\n📌 bit.ly/drkWaPlus');
   }));
}

else if (Config.WORKTYPE == 'public') {

   XTroid.addCMD({pattern: 'apkmod', fromMe: false}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMANDOS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     *.nova*\n\n┠⊷️ ↘️ CM Launcher:\n     *.cml*\n\n┠⊷️ ↘️ Apex Launcher:\n     *.apex*\n\n\n┠⊷️ ↘️ Kinemaster:\n     *.kinemaster*\n\n┠⊷️ ↘️ PicsArt Gold:\n     *.picsart*\n\n┠⊷️ ↘️ Canva Pro:\n     *.canva*\n\n┠⊷️ ↘️ Ligthrom:\n     *.lightroom*\n\n┠⊷️ ↘️ Photoshop Express:\n     *.pshop*\n\n┠⊷️ ↘️ Snapseed:\n     *.snaps*\n\n┠⊷️ ↘️ Retouch:\n     *.retouch*\n\n\n┠⊷️ ↘️ Vanced Manager:\n     *.vanced*\n\n┠⊷️ ↘️ Crunchyroll:\n     *.crunchy*\n\n┠⊷️ ↘️ Freezer Mod:\n     *.freez*\n\n┠⊷️ ↘️ Deezer Premium:\n     *.deezer*\n\n┠⊷️ ↘️ RadioBox:\n     *.rbox*\n\n┠⊷️ ↘️ Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ ↘️ Power AMP:\n     *.amp*\n\n┠⊷️ ↘️ JetAudio:\n     *.jetau*\n\n\n┠⊷️ ↘️ ExpressVpn:\n     *.xpress*\n\n┠⊷️ ↘️ Hospot Shield:\n     *.hshield*\n\n┠⊷️ ↘️ TurboVpn:\n     *.Turbo*\n\n┠⊷️ ↘️ File Manager:\n     *.flmanager*\n\n┠⊷️ ↘️ CallRecorder:\n     *.callr*\n\n┠⊷️ ↘️ FingScanner:\n     *.fing*\n\n┠⊷️ ↘️ Shazam Encore:\n     *.shazam*\n\n┠⊷️ ↘️ QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ ↘️ Screen Recorder:\n     *.srecorder*\n\n┠⊷️ ↘️ TikTok Mod:\n     *.tiktok*\n\n┠⊷️ ↘️ Photomath:\n     *.pmath*\n\n┠⊷️ ↘️ WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *Public Bot* 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));
    
   XTroid.addCMD({pattern: 'fatp', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));

   XTroid.addCMD({pattern: 'nova', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *NOVA LAUNCHER* 💎\npremium unlocked.\n📌 bit.ly/drknova');
   }));

   XTroid.addCMD({pattern: 'cml', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CM LAUNCHER* 💎\npremium unlocked.\n😞 No disponible en este momento.');
   }));

   XTroid.addCMD({pattern: 'apex', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *APEX LAUNCHER* 💎\npremium unlocked.\n📌 bit.ly/drkapex');
   }));

   XTroid.addCMD({pattern: 'kinemaster', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *KINEMASTER MOD* 💎\npremium unlocked.\n👉https://bit.ly/2RSyFVr.');
   }));

XTroid.addCMD({pattern: 'inshot', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *INSHOT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3zyNjlZ');
   }));

XTroid.addCMD({pattern: 'alight', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *ALIGHT MOTION MOD* 💎\npremium unlocked.\n👉https://bit.ly/3cHUBdg');
   }));

XTroid.addCMD({pattern: 'capcut', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CAP CUT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3pSSlFu');
   }));
   XTroid.addCMD({pattern: 'picsart', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PICSART GOLD* 💎\npremium unlocked.\n📌 bit.ly/drkpicsart');
   }));

   XTroid.addCMD({pattern: 'canva', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CANVA PRO* 💎\npremium unlocked.\n📌 bit.ly/canvapro');
   }));

   XTroid.addCMD({pattern: 'lightr', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *LIGTHROM* 💎\npremium unlocked.\n📌 bit.ly/drklightr');
   }));

   XTroid.addCMD({pattern: 'pshop', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOSHOP EXPRESS* 💎\npremium unlocked.\n📌 bit.ly/drkphotoshop');
   }));

   XTroid.addCMD({pattern: 'snaps', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SNAPSEED* 💎\npremium unlocked.\n📌 bit.ly/drksnaps');
   }));

   XTroid.addCMD({pattern: 'retouch', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *RETOUCH* 💎\npremium unlocked.\n📌 bit.ly/drkretouch');
   }));

   XTroid.addCMD({pattern: 'vanced', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *VANCED MANAGER* 💎\nYouTube Premium  YouTube Music.\n📌 bit.ly/drkytubev');
   }));

   XTroid.addCMD({pattern: 'crunchy', fromMe: false, dontAddCMDList: true}, (async (message, match) => {

        var chyroll = await axios.get('https://gitlab.com/DrkBotPublic/botarchives/-/raw/master/Sin_t%C3%ADtulo_2_540p.mp4', { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(chyroll.data), MessageType.video, {mimetype: Mimetype.mp4})
        await message.sendMessage('🔰 *CRUNCHYROLL(vrv)* 🔰\n💳 *BIN:* 55703976xxx62xxx\n📫 *Codigo Postal:* 10080, 10090\n *Ip:* USA 🇺🇸');
   }));

   XTroid.addCMD({pattern: 'freez', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FREEZER MOD* 💎\npremium unlocked - spotify\n📌 bit.ly/drkfreezer');
   }));

   XTroid.addCMD({pattern: 'deezer', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *DEEZER MOD* 💎\npremium unlocked.\n📌 bit.ly/drkdeezer');
   }));

   XTroid.addCMD({pattern: 'rbox', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *RADIO BOX* 💎\npremium unlocked.\n📌 bit.ly/drkradiobox');
   }));

   XTroid.addCMD({pattern: 'mxpro', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *MX PLAYER PRO* 💎\npremium unlocked.\n📌 bit.ly/drkmxplayer');
   }));

   XTroid.addCMD({pattern: 'amp', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *POWERAMP* 💎\npremium unlocked.\n📌 bit.ly/drkampplayer');
   }));

   XTroid.addCMD({pattern: 'jetau', fromMe: false}, (async (message, match) => {
      await message.sendMessage('💎 *JetAudio* 💎\npremium unlocked.\n📌 bit.ly/drkjetau');
   }));

   XTroid.addCMD({pattern: 'xpress', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *EXPRESS VPN* 💎\npremium unlocked.\n📌 bit.ly/drkXpress');
   }));

   XTroid.addCMD({pattern: 'hshield', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *HOSPOT SHIELD VPN* 💎\npremium unlocked.\n📌 bit.ly/drkHShield');
   }));

   XTroid.addCMD({pattern: 'avguard', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *TURBO VPN* 💎\npremium unlocked.\n📌 bit.ly/drkguard');
   }));

   XTroid.addCMD({pattern: 'flmanager', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FILE MANAGER* 💎\npremium unlocked.\n📌 bit.ly/drkesfile');
   }));

   XTroid.addCMD({pattern: 'callr', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CALL RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkcallr');
   }));

   XTroid.addCMD({pattern: 'fing', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FING SCANNER* 💎\npremium unlocked.\n📌 bit.ly/drkfing');
   }));

   XTroid.addCMD({pattern: 'shazam', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SHAZAM ENCORE* 💎\npremium unlocked.\n📌 bit.ly/drkshaz');
   }));

   XTroid.addCMD({pattern: 'qrcode', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *QR CODE SCANER* 💎\npremium unlocked.\n📌 bit.ly/drkqrscanner');
   }));

   XTroid.addCMD({pattern: 'screen recorder', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SCREEN RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkgrabr');
   }));

   XTroid.addCMD({pattern: 'tiktok', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *TIKTOK MOD* 💎\npremium unlocked.\n📌 bit.ly/drktiktok');
   }));

   XTroid.addCMD({pattern: 'pmath', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOMATH* 💎\npremium unlocked.\n📌 bit.ly/drkphotomath');
   }));

   XTroid.addCMD({pattern: 'waplus', fromMe: false, dontAddCMDList: true}, (async (message, match) => {
      await message.sendMessage('💎 *WHATSAPP PLUS* 💎\nmhatsapp mod.\n📌 bit.ly/drkWaPlus');
   }));
}
