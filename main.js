const Discord = require("discord.js");

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

const prefix = "me!";

client.once("ready", () => {
  console.log("Bot is Online");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("pong!");
  } else if (command == "whitelist") {
    message.channel.send(
      "Here is the **Whitelist** Form link: <https://forms.gle/Swq3bePBs6x1X2848> "
    );
  } else if (command == "serverip") {
    message.channel.send(
      "Here is the Server IP : ||connect play.merpindia.in||"
    );
  }
});

client.login("OTIxMTQ2MDcxMDgwNjU2OTg3.YbuqIQ.CrkT1-_cv0n42jjoBLkvJCxyUww");
