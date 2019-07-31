const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  var msgc = parseInt(args[0]);
  
  if(args[0] === "0") {
    var msgq = ("Impossível deletar 0 mensagens");
  } else if (args[0] === "1") {
    msgq = (`1 mensagem deletada`);
  } else {
    msgq = (`${msgc} mensagens deletadas`);
  };
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "Gerenciar Mensagens");
  if(!args[0]) return message.delete().then(errors.noMsgQuantity(message.channel));
  
  message.delete();
  message.channel
    .bulkDelete(msgc)
    .then(() => {message.channel.send(`${msgq}.`).then(msg => msg.delete(5000))
    .catch(console.error);
  });
}

module.exports.help = {
  name: "clear"
}
