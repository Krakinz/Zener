`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐙𝐞𝐧𝐞𝐫 𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const Zener_Buttons = require(`../../🗄server/Zener_Buttons`);
const Zener_Static = require(`../../🗄server/Zener_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜰᴜᴄᴋ = require(`../../🗄server/oShit`);
const _𝔏𝔞𝔟_ = require(`../../🗄server/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸 𝐙𝐞𝐧𝐞𝐫 𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
ƈօʀȶǟռǟӄǟɨʐօ: `*${ᴋᴇɪ}cooldown (number) (chat/s/h)*
🛸will set autocooldown for particular group`,
async handle(ӄʀǟӄɨռʐ, chat, ƈօʀȶǟռǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
const defaultnm = ƈօʀȶǟռǟ.commandName;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐙𝐞𝐧𝐞𝐫 𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
const hold = require("../../🗄server/Hold");
await hold.Hold(ƈօʀȶǟռǟ);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐙𝐞𝐧𝐞𝐫 𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
if (!ƈօʀȶǟռǟ.fromMe && !ƈօʀȶǟռǟ.isSenderDev) {
return Zener_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`❌𝐃𝐞𝐧𝐢𝐞𝐝: _Owner/Dev Only.You Are Not Allowed!_`
);
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐙𝐞𝐧𝐞𝐫 𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
var child = require(`child_process`).exec(
`python3 🗄server/Heroku.py`
);
child.stdout.pipe(process.stdout);
child.on(`exit`, async function () {
process.exitCode = 1;
var data = fs.readFileSync(`./🗄server/𝐇𝐞𝐫𝐨𝐤𝐮.txt`, `utf8`);
console.log(data.toString());
return Zener_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ} (Owner)\n\n${data.toString()}`,
_𝔏𝔞𝔟_.MEE
);
});

`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐙𝐞𝐧𝐞𝐫 𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
} catch (Error) {
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
return;
}
},
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐙𝐞𝐧𝐞𝐫 𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
