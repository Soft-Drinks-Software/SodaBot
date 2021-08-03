//modules: discord.js v13.0.0 (DEV)

process.on("unhandledRejection", console.error);

const Discord = require("discord.js");
const token = process.env.TOKEN;

let errorsc = []
let echobl = ['603635602809946113']

const https = require('https');

const client = new Discord.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS']
});
let prefix = "^";

  const readyembed = new Discord.MessageEmbed()
  .setTitle("Started!")
  .setDescription("I'm ready for action! Prefix: `" + prefix + "`")
  .setColor("#0000ff")
  .setTimestamp();

  client.on("ready", () => {
    client.channels.cache.get('ID').send({embeds: [readyembed]});
  })

client.on("messageCreate", message => {
  if (message.author.bot) return;
  if (message.content.startsWith("^ ")) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();
  if (command == "ping") {
    setTimeout(() => {
      message.react("<a:emoji_2:871428955008290876>");
      let ping = new Discord.MessageEmbed()
        .setColor("#00ffff")
        .setTitle("Pong!")
        .setDescription("`" + client.ws.ping + "` ms")
        .setTimestamp();
      message.reactions.removeAll();
      message.react("<a:check:871428234976301168>");
      message.reply({embeds: [ping]});
    }, 1000);
  } else if (command == "eval") {
    message.react("<a:emoji_2:871428955008290876>")
    if (message.author == "493131233514225674" || message.author == "478823932913516544" || message.author == "573733348393091083") {
      var result = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      try {
        message.reactions.removeAll()
        eval(result)
        message.react("<a:check:871428234976301168>")
      } catch (err) {
        message.reactions.removeAll()
        let errorEmbed = new Discord.MessageEmbed()
          .setTitle("Could not eval that!")
          .setDescription(
            "You put:\n```js\n" +
              result +
              "```\nAnd here's the error:\n```" +
              err.message +
              "```"
          )
          .setColor("#ff0000")
          .setTimestamp();
        message.reply({embeds: [errorEmbed]});
        message.react(":x:")
      }
    } else {
      message.reactions.removeAll()
      let errorUEmbed = new Discord.MessageEmbed()
          .setTitle("Could not eval that!")
          .setDescription(
            "You put:\n```js\n" +
              result +
              "```\nAnd here's the error:\n```" +
              "\'message.author\' does not match condition" +
              "```"
          )
      message.reply({embeds: [errorUEmbed]});
      message.react(":x:")
    } 
  } else if (command == "help") {
    message.react("<a:emoji_2:871428955008290876>")
    try {
    let help = new Discord.MessageEmbed()
      .setTitle("SodaBot Help (1/1)")
      .setDescription("**Pro tip: click a reaction to flip pages!**\n*Prefix:* `^`\n>>> `help`: show this list\n`eval`: evaluate javascript code\n`ping`: show ping\n`echo`: echo some words! [d]")
      .setColor("#00ffff")
      .setTimestamp();
      message.reply({ embeds: [help] })
      message.reactions.removeAll()
      ("<a:check:871428234976301168>")
    } catch(err) {
      message.reactions.removeAll()
      message.react(":x:")
      let errorEmbed = new Discord.MessageEmbed()
          .setTitle("Something went wrong.")
          .setDescription(
            "Error:\n```" +
              err.message +
              "```"
          )
          .setColor("#ff0000")
          .setTimestamp();
    }
  } else if (command == "evalraw") {
    message.react("<a:emoji_2:871428955008290876>")
    if (evalauth.includes(message.author.id)) {
      var result = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      try {
        message.reactions.removeAll()
        let evaled = eval(result);
        message.react("<a:check:871428234976301168>")
      } catch (err) {
        message.reactions.removeAll()
        if (!result.length > 950) {
          let errorEmbed = new Discord.MessageEmbed()
          .setTitle("Could not eval that!")
          .setDescription(
            "You put:\n```js\n" +
              result +
              "```\nAnd here's the error:\n```" +
              err.message +
              "```"
          )
          .setColor("#ff0000")
          .setTimestamp();
        } else {
          let errorEmbed = new Discord.MessageEmbed()
          .setTitle("Could not eval that!")
          .setDescription(
            "Here's the error:\n```" +
              err.message +
              "```"
          )
          .setColor("#ff0000")
          .setTimestamp();
        }
        message.reply({ embeds: [errorEmbed]});
        message.react(":x:")
      }
    } else {
      message.reactions.removeAll()
      let errorUEmbed = new Discord.MessageEmbed()
          .setTitle("Could not eval that!")
          .setDescription(
            "You put:\n```js\n" +
              result +
              "```\nAnd here's the error:\n```" +
              "You do not have permissions to run this command." +
              "```"
          )
      message.reply({embeds: [errorUEmbed]});
      message.react(":x:")
    } 
  } else if (command == "echo") {
    if (message.author != "603635602809946113") {
    let toecho
    if (message.content.includes("@everyone") || message.content.includes("@here")) {
      message.reply(":x: I'm not going to echo your message when it has the ability to ping everyone!")
    } else {
    if (args[0] == "[d]") {
      message.delete({ timeout: 0 })
      toecho = message.content.slice(9, message.content.length)
    } else {
      toecho = message.content.slice(5, message.content.length)
    }
    message.channel.send(toecho)
  }
    }
  } else if (command == "die6") {
    let rndInt = Math.floor(Math.random() * 6) + 1
    message.reply(":game_die: You rolled a D6! You got " + rndInt + ".")
  } else if (command == "die20") {
    let rndInt = Math.floor(Math.random() * 20) + 1
    message.reply(":game_die: You rolled a D20! You got " + rndInt + ".")
  } else if (command == "die12") {
    let rndInt = Math.floor(Math.random() * 12) + 1
    message.reply(":game_die: You rolled a D12! You got " + rndInt + ".")
  } else {
    let noc = new Discord.MessageEmbed()
      .setTitle("That command does not exist!")
      .setDescription("`" + command + "` is not a valid command. Check your spelling and try again.")
      .setColor("#ff0000")
      .setTimestamp();
    message.reply({ embeds: [noc] })
  }
});
client.login(token);
