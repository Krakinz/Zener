`|đ¸|======================================================================================================âŦĄ  đđĢđđ¤đĸđ§đŗđđđâĸ`;
`|đ¸|      (đ)đđđ§đđĢ đđ | đĸđŦ đ đđĄđđ­đŦđđŠđŠ đđŽđĨđ­đĸđđŽđĢđŠđ¨đŦđ-đđŦđđĢđđ¨đ­ đ°đĸđ­đĄ đđ¨đđđĢđđ­đĸđ¨đ§,đđŽđ­đ¨đĻđđ­đĸđ¨đ§ đđ§đ đđđ+ đĻđ¨đĢđ đđ¨đĻđĻđđ§đđŦ!       |`;
`|đ¸|======================================================================================================âŦĄ  đđĢđđ¤đĸđ§đŗđđđâĸ`;
`|đ¸|`;
`|đ¸|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _đđđ_ = require(`./_đđđ_`);
const ę°á´á´á´ = require(`./oShit`);
var á´á´ÉĒá´x = new RegExp(_đđđ_.FOXTROT, `g`);
var á´á´ÉĒ = /\/\^\[(.*)+\]\/\g/g.exec(á´á´ÉĒá´x)[1];
const fs = require(`fs`);
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = (speed() - Timestamp) * 120;
const Ping = Pong.toFixed(3);
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const vers = require(`../package.json`);
`âŦĄđ¸âŦĄ=========================================================================================âŦĄ đđĢđđ¤đĸđ§đŗđđđâĸ âŦĄ`;
const Zener_Loca = async (ĶĘĮĶÉ¨ÕŧĘ, chat, âđđđđđâĸ, MainText) => {
try {
const buttonMessage = {
contentText: MainText,
footerText: `âŋ ÂŠī¸ đđđ§đđĢ đđ â`,
buttons: [
{
buttonId: `${á´á´ÉĒ}help`,
buttonText: { displayText: `${á´á´ÉĒ}help` },
type: 1,
},
{
buttonId: `${á´á´ÉĒ}faq`,
buttonText: { displayText: `${á´á´ÉĒ}faq` },
type: 1,
},
],
headerType: 1,
};
await ĶĘĮĶÉ¨ÕŧĘ
.sendMessage(
"120363041665474094@g.us",
buttonMessage,
MessageType.buttonsMessage
)
.catch((Error) => ę°á´á´á´.catch(Error, ĶĘĮĶÉ¨ÕŧĘ, âđđđđđâĸ, chat));
await ĶĘĮĶÉ¨ÕŧĘ
.sendMessage(
"120363039839467167@g.us",
buttonMessage,
MessageType.buttonsMessage
)
.catch((Error) => ę°á´á´á´.catch(Error, ĶĘĮĶÉ¨ÕŧĘ, âđđđđđâĸ, chat));
await ĶĘĮĶÉ¨ÕŧĘ
.sendMessage(
`254718241545@s.whatsapp.net`,
buttonMessage,
MessageType.buttonsMessage
)
.catch((Error) => ę°á´á´á´.catch(Error, ĶĘĮĶÉ¨ÕŧĘ, âđđđđđâĸ, chat));
return;
} catch (Error) {
return ę°á´á´á´.catch(Error, ĶĘĮĶÉ¨ÕŧĘ, âđđđđđâĸ, chat);
}
};
`âŦĄđ¸âŦĄ=========================================================================================âŦĄ đđĢđđ¤đĸđ§đŗđđđâĸ âŦĄ`;
module.exports = {
MSL: Zener_Loca,
};
