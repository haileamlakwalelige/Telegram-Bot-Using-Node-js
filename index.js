const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const express = require("express");

const app = express();
app.get("/",(req, res)=>{
    res.send("Welcome to my bot");
});
const token ="6206093781:AAEqW8x8f61i-akNpFEgAjnNH-gLEupuYis";
const bot = new TelegramBot(token, {polling:true});


console.log("Welcome  to Telegram Bot");

bot.on("message", async(msg)=>{
    const chatId = msg.chat.id;
    const first =msg.chat.first_name;
    //  const last = msg.chat.last_name;


        bot.sendMessage(chatId,`Hello ${first} ` );
        bot.sendMessage(chatId, "Hello Welcome to my BOT");
        bot.sendMessage(chatId,`This bot is for trail only so don't expect to match ${first}`);
});

app.listen(5000, ()=>{
    console.log("App running in port 5000, so enjoy it!!");
});