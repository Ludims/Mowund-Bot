const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if(args[0] === "1") {
  var msgq = ("1 mensagem deletada");
  } else {
  msgq = ("${args[0]} mensagens deletadas");
  };
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "Gerenciar Mensagens");
  if(!args[0]) return errors.noMsgQuantity(message.channel);
  
  message.channel.bulkDelete(args[0] + 1).then(() => {
    message.channel.send(`${msgq}.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
