/*modules:
discord.js v13.0.0 (DEV)
express v4.17.1
*/
process.on("unhandledRejection", console.error);
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("works");
});

// require the discord.js module
const Discord = require("discord.js");
const token = process.env.TOKEN;

let toecho;
let saidp;

let errorsc = [];
let echobl = ["603635602809946113"];

const https = require("https");

const client = new Discord.Client({
  allowedMentions: { parse: ["users"], repliedUser: false },
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"]
});
let prefix = "^";
let evalauth = ["493131233514225674"];

const readyembed = new Discord.MessageEmbed()
  .setTitle("Started!")
  .setDescription("I'm ready for action! Prefix: `" + prefix + "`")
  .setColor("#0000ff")
  .setTimestamp();
client.on("ready", () => {
  client.channels.cache
    .get("871808158669078558")
    .send({ embeds: [readyembed] });
  client.channels.cache
    .get("871808158669078558")
    .send("<@493131233514225674> I'm ready!");
});

client.on("messageCreate", message => {
  try {
    if (message.content.includes("735624534220079174")) {
      let help = new Discord.MessageEmbed()
        .setTitle("SodaBot Help (1/1)")
        .setDescription(
          "**Pro tip: click a reaction to flip pages!**\n*Prefix:* `^`\n>>> `help`: show this list\n`eval`: evaluate javascript code\n`ping`: show ping\n`echo`: echo some words! \n`echo`: Optional: add `[d]` to delete the command\n`clr`: turn a hex code into a color\n`coin`: flip a coin\n`die6`: roll a 6-sided die\n`die12`: roll a 12-sided die\n`die20`: roll a 20-sided die\n`lotto`: enter the lotto, will you be lucky?\n`saidby`: who sent that echo message?\n`invite`: get the bot invite link\n\n[Discord developer ToS](https://discord.com/developers/docs/legal)\n[Full bot Javascript on Github](https://github.com/Soft-Drinks-Software/sodabot/)\nMade with `discord.js v13.0.0` \nvia `npm i discord.js@dev`"
        )
        .setColor("#00ffff")
        .setTimestamp();
      message.reply({ embeds: [help] });
    }
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
          .setTitle(":ping_pong: Pong!")
          .setDescription("`" + client.ws.ping + "` ms")
          .setTimestamp();
        message.reactions.removeAll();
        message.react("<a:check:871428234976301168>");
        message.reply({ embeds: [ping] });
      }, 1000);
    } else if (command == "eval") {
      message.react("<a:emoji_2:871428955008290876>");
      if (
        message.author == "493131233514225674" ||
        message.author == "478823932913516544" ||
        message.author == "573733348393091083"
      ) {
        var result = message.content
          .split(" ")
          .slice(1)
          .join(" ");
        try {
          message.reactions.removeAll();
          eval(result);
          message.react("<a:check:871428234976301168>");
        } catch (err) {
          message.reactions.removeAll();
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
          message.reply({ embeds: [errorEmbed] });
          message.react("❌");
        }
      } else {
        message.reactions.removeAll();
        let errorUEmbed = new Discord.MessageEmbed()
          .setTitle("Could not eval that!")
          .setDescription(
            "You put:\n```js\n" +
              result +
              "```\nAnd here's the error:\n```" +
              "You do not have permissions to run this command." +
              "```"
          );
        message.reply({ embeds: [errorUEmbed] });
        message.react("❌");
      }
    } else if (command == "help") {
      message.react("<a:emoji_2:871428955008290876>");
      try {
        let help = new Discord.MessageEmbed()
          .setTitle("SodaBot Help (1/1)")
          .setDescription(
            "**Pro tip: click a reaction to flip pages!**\n*Prefix:* `^`\n>>> `help`: show this list\n`eval`: evaluate javascript code\n`ping`: show ping\n`echo`: echo some words! \n`echo`: Optional: add `[d]` to delete the command\n`clr`: turn a hex code into a color\n`coin`: flip a coin\n`die6`: roll a 6-sided die\n`die12`: roll a 12-sided die\n`die20`: roll a 20-sided die\n`lotto`: enter the lotto, will you be lucky?\n`saidby`: who sent that echo message?\n`invite`: get the bot invite link\n\n[Discord developer ToS](https://discord.com/developers/docs/legal)\n[Full bot Javascript on Github](https://github.com/Soft-Drinks-Software/sodabot/)\nMade with `discord.js v13.0.0` \nvia `npm i discord.js@dev`"
          )
          .setColor("#00ffff")
          .setTimestamp();
        message.reply({ embeds: [help] });
        message.reactions.removeAll()("<a:check:871428234976301168>");
      } catch (err) {
        message.reactions.removeAll();
        let errorEmbed = new Discord.MessageEmbed()
          .setTitle("Something went wrong.")
          .setDescription("Error:\n```" + err.message + "```")
          .setColor("#ff0000")
          .setTimestamp();
      }
    } else if (command == "evalraw") {
      message.react("<a:emoji_2:871428955008290876>");
      if (evalauth.includes(message.author.id)) {
        var result = message.content
          .split(" ")
          .slice(1)
          .join(" ");
        try {
          message.reactions.removeAll();
          let evaled = eval(result);
          message.react("<a:check:871428234976301168>");
        } catch (err) {
          message.reactions.removeAll();
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
              .setDescription("Here's the error:\n```" + err.message + "```")
              .setColor("#ff0000")
              .setTimestamp();
          }
          message.reply({ embeds: [errorEmbed] });
          message.react("❌");
        }
      } else {
        message.reactions.removeAll();
        let errorUEmbed = new Discord.MessageEmbed()
          .setTitle("Could not eval that!")
          .setDescription(
            "You put:\n```js\n" +
              result +
              "```\nAnd here's the error:\n```" +
              "'message.author' does not match condition" +
              "```"
          );
        message.reply({ embeds: [errorUEmbed] });
        message.react("❌");
      }
    } else if (command == "echo") {
      if (
        message.author != "603635602809946113" ||
        message.author != "794506641923244083"
      ) {
        if (
          message.content.includes("@everyone") ||
          message.content.includes("@here")
        ) {
          message.reply(
            "❌ I'm not going to echo your message when it has the ability to ping everyone!"
          );
        } else {
          if (args[0] == "[d]") {
            message.delete({ timeout: 0 });
            toecho = message.content.slice(9, message.content.length);
          } else {
            toecho = message.content.slice(5, message.content.length);
          }
          saidp = message.author;
          message.channel.send(toecho);
        }
      }
    } else if (command == "die6") {
      let rndInt = Math.floor(Math.random() * 6) + 1;
      message.reply(":game_die: You rolled a D6! You got " + rndInt + ".");
    } else if (command == "die20") {
      let rndInt = Math.floor(Math.random() * 20) + 1;
      message.reply(":game_die: You rolled a D20! You got " + rndInt + ".");
    } else if (command == "die12") {
      let rndInt = Math.floor(Math.random() * 12) + 1;
      message.reply(":game_die: You rolled a D12! You got " + rndInt + ".");
    } else if (command == "coin") {
      let rndInt = Math.floor(Math.random() * 2) + 1;
      let face;
      if (rndInt == 1) {
        face = "heads";
      } else if (rndInt == 2) {
        face = "tails";
      }
      message.reply(":coin: You flipped a coin! You got " + face + ".");
    } else if (command == "pong") {
      setTimeout(() => {
        message.react("<a:emoji_2:871428955008290876>");
        let ping = new Discord.MessageEmbed()
          .setColor("#00ffff")
          .setTitle(":ping_pong: Ping!")
          .setDescription("`" + client.ws.ping + "` ms")
          .setTimestamp();
        message.reactions.removeAll();
        message.react("<a:check:871428234976301168>");
        message.reply({ embeds: [ping] });
      }, 1000);
    } else if (command == "saidby") {
      let saidby = new Discord.MessageEmbed()
        .setTitle("The last echo message was...")
        .setDescription(
          "```\n" + toecho + "\n```\nSaid by:\n```\n" + saidp + "\n```"
        )
        .setColor("#00ff00")
        .setTimestamp();
      message.channel.send({ embeds: [saidby] });
    } else if (command == "lotto") {
      let wn1 = Math.floor(Math.random() * 99) + 1;
      let wn2 = Math.floor(Math.random() * 99) + 1;
      let wn3 = Math.floor(Math.random() * 99) + 1;
      let wn4 = Math.floor(Math.random() * 99) + 1;
      let wn5 = Math.floor(Math.random() * 99) + 1;
      if (args == "hack.js" && message.author == "493131233514225674") {
        message.reply(
          "YOU WON! You are now a bajillionaire.\n:coin: +50,000,000,000,000,000 H-tokens added to your balance."
        );
      } else if (args == "" || args.length > 5 || args.length < 5) {
        message.reply("Please specify 5 numbers between 1 and 99.");
      } else {
        try {
          let in1 = parseInt(args[0]);
          let in2 = parseInt(args[1]);
          let in3 = parseInt(args[2]);
          let in4 = parseInt(args[3]);
          let in5 = parseInt(args[4]);
          if (
            isNaN(in1) ||
            isNaN(in2) ||
            isNaN(in3) ||
            isNaN(in4) ||
            isNaN(in5)
          ) {
            return message.channel.send("are you braindead");
          }
          message.channel.send(
            `Your numbers are: ${in1}, ${in2}, ${in3}, ${in4}, ${in5}.`
          );
          message.channel.send(
            `Winning numbers are: ${wn1}, ${wn2}, ${wn3}, ${wn4}, ${wn5}.`
          );
          if (
            in1 == wn1 &&
            in2 == wn2 &&
            in3 == wn3 &&
            (in4 == wn4) & (in5 == wn5)
          ) {
            message.reply(
              "YOU WON! You are now a bajillionaire.\n:coin: +50,000,000,000,000,000 H-tokens added to your balance."
            );
          } else {
            message.reply(
              "You lost. Better luck next time. <:pensivesunglasses:805049776387129415>"
            );
          }
        } catch (er) {
          message.channel.send(
            "Literally, how hard is it to put in 5 integers?\n\nBecause " +
              er.message +
              ". :pensive:"
          );
        }
      }
    } else if (command == "clr") {
      let clrem = new Discord.MessageEmbed()
        .setTitle(args[0] + " ")
        .setColor(args[0].toString())
        .setTimestamp();
      message.channel.send({ embeds: [clrem] });
    } else if (command == "invite" || command == "inviteme") {
      let invite = new Discord.MessageEmbed()
        .setTitle("Invite me to your server!")
        .setDescription(
          "[Invite me!](https://discord.com/api/oauth2/authorize?client_id=735624534220079174&permissions=260050385984&scope=bot%20applications.commands)"
        )
        .setColor("#f0f0f0")
        .setTimestamp();
      message.reply({ embeds: [invite] });
    } else {
      let noc = new Discord.MessageEmbed()
        .setTitle("That command does not exist!")
        .setDescription(
          "`" +
            command +
            "` is not a valid command. Check your spelling and try again."
        )
        .setColor("#ff0000")
        .setTimestamp();
      message.reply({ embeds: [noc] });
    }
  } catch (e) {
    message.channel.send(e.message);
  }
});

client.on("interactionCreate", async interaction => {
  switch (interaction.commandName) {
    case "ping":
      const ping = new Discord.MessageEmbed()
        .setColor("#00ffff")
        .setTitle("🏓 Ping!")
        .setDescription(`\`${client.ws.ping}\` ms`)
        .setTimestamp();
      interaction.reply({ embeds: [ping] });
      break;

    case "help":
      try {
        let help = new Discord.MessageEmbed()
          .setTitle("SodaBot Help (1/1)")
          .setDescription(
            "**Pro tip: click a reaction to flip pages!**\n*Prefix:* `^`\n>>> `help`: show this list\n`eval`: evaluate javascript code\n`ping`: show ping\n`echo`: echo some words! [d]"
          )
          .setColor("#00ffff")
          .setTimestamp();
        interaction.reply({ embeds: [help] });
      } catch (err) {
        let errorEmbed = new Discord.MessageEmbed()
          .setTitle("Something went wrong.")
          .setDescription("Error:\n```" + err.message + "```")
          .setColor("#ff0000")
          .setTimestamp();
      }
      break;

    case "echo":
      if (
        interaction.user.id == "603635602809946113" ||
        interaction.user.id == "794506641923244083"
      )
        return interaction.reply({ content: "no", ephemeral: true });

      saidp = interaction.user;

      if (interaction.options.getBoolean("hidden")) {
        await interaction.defer();
        await interaction.deleteReply();
        return interaction.channel.send(interaction.options.getString("text"));
      }

      interaction.reply(interaction.options.getString("text"));
      break;

    case "die":
      const faces = interaction.options.getInteger("faces");
      const rndInt = Math.floor(Math.random() * faces) + 1;

      interaction.reply(`🎲 You rolled a D${faces}! You got ${rndInt}.`);

      break;

    case "saidby":
      let saidby = new Discord.MessageEmbed()
        .setTitle("The last echo message was...")
        .setDescription(
          "```\n" + toecho + "\n```\nSaid by:\n```\n" + saidp + "\n```"
        )
        .setColor("#00ff00")
        .setTimestamp();
      interaction.reply({ embeds: [saidby] });
      break;

    case "lotto":
      const wn1 = Math.floor(Math.random() * 99) + 1;
      const wn2 = Math.floor(Math.random() * 99) + 1;
      const wn3 = Math.floor(Math.random() * 99) + 1;
      const wn4 = Math.floor(Math.random() * 99) + 1;
      const wn5 = Math.floor(Math.random() * 99) + 1;

      const int1 = interaction.options.getInteger("int1");
      const int2 = interaction.options.getInteger("int2");
      const int3 = interaction.options.getInteger("int3");
      const int4 = interaction.options.getInteger("int4");
      const int5 = interaction.options.getInteger("int5");

      let text = `Your numbers are: ${int1}, ${int2}, ${int3}, ${int4}, ${int5}.\nWinning numbers are: ${wn1}, ${wn2}, ${wn3}, ${wn4}, ${wn5}.`;

      if (
        int1 == wn1 &&
        int2 == wn2 &&
        int3 == wn3 &&
        (int4 == wn4) & (int5 == wn5)
      ) {
        text +=
          "\nYOU WON! You are now a bajillionaire.\n:coin: +50,000,000,000,000,000 H-tokens added to your balance.";
      } else {
        text +=
          "\nYou lost. Better luck next time. <:pensivesunglasses:805049776387129415>";
      }

      interaction.reply(text);
      break;
  }
});

client.login(token);
