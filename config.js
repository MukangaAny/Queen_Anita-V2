//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Zimbabwe";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "263 78 539 6010";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://tenor.com/view/power-chainsawman-gif-25501450";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOExGdGJsRTBiOHZqQWNGalg3MFJjSkk2Sm5JMWRGTjQrTm11c29pWkQzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidldkc2tVNUQwdGZTL29lT1ZkTXlZdEhISlNVVERJQm5JRWh2UERkSzdqVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4THdMYlVmdzlTMjBESnJkZWNDUlhFVlNIek9WZDJjSS9PMzJzT0c5c0ZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrYzZ2bE1aSE55ZnQ2bmpFNWNuWk0zTnJQeVJhaFpVbWtKK2ptQjZCWWxZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNQKzJ1YXFzSUYxcmJZeWFmSEpXeDgvOWxIVUMwTUdwN1V1Mm9xREtRMVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZGOHNnWVJrM1RieldOU0NKcGdscnlvaUR3U3dpS251Nk1kSno3UE1xRzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJ6bFJ1ZzBCanBDcnZVaStDTlJzSTZuZ2lqM0lKa0NXczRUdk1zaS8yOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3RqdTRKWDNxazFOK2ppUGFsSW9IM054Skxub01HbTY2TE9PU3RINWszRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlXcGtUWFBqSVFjSHJ0OWU5UG42a3pGcS9LNFBRWXVIdzJMQUpHd00zcEpXaEFBdisrTTBlM202K2ljLzl2ZE16cEE5ODlOaFBMRmdBVTBYQkE4TWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6IkhpM2o0MHF3QkxLT3Q5S1BMTGppZlVMb0Q1UzNnRTBKaThLMFJOZ0lFQTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZkejU2M213UU1xU0RXbzBjeE04eEEiLCJwaG9uZUlkIjoiYWRhMjY2ODItZTE3Ny00YzE1LThjMmItY2JmYWY1Y2ZhOWU1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdvSmpFOGdYS0NmNFdZeEtCc1QzSUNhZ2tPTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVMmljZzYxaWIzMU5JaWRFSXNHTUdiUldHS0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU0hQODZOS0YiLCJtZSI6eyJpZCI6IjI2Mzc4NTM5NjAxMDo0NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJESiBERUxCT1kgQU5JRVkgTUlYVEFQRVMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xLVWxzd0VFTEsxdDdVR0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNKT1U1SHVYVUV5OEU4NFVLMGtNcWtFSzF2cjJnbkM1d1NWWk1SaEZMbUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlEyU2hJOXErQkdyYjRsekR4bktFaWpqOXlReVpWTDRrNGxLWnZLalpPRmwrL0dlalR0MENyY1E2djJQSDZIUnpuRDgyb3JnTnVwZFc1dHFpdmdnckJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5dCtxeU1OVnh0YktCVWxRTGpwejRWcUVRMm1PUXR2UHY2VFo3K3FXbktUYjZQNk9qMFlsTHdscVhOVStmOXRibEVibzlCbjVZSlU0L29rMEVtZ1BnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4NTM5NjAxMDo0NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYQ1RsT1I3bDFCTXZCUE9GQ3RKREtwQkN0YjY5b0p3dWNFbFdURVlSUzVnIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNjY5NzU5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFFWiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
