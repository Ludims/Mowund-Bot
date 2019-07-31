const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "Gerenciar Mensagens");
  
  if(args[0] === "/tts") {
  var tts = ("true");
  var bmsg = args[1].join(" ");
  } else {
  tts = ("false")
  bmsg = args.join(" ");
  };
  
  
  message.channel.send(bmsg, {tts: tts});
}

module.exports.help = {
  name: "say"
}
