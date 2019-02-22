    /*
*@file owner Thomas Weland
*@type discord.js
*@npm (nothing)


*/
    
    // JOUEURS ENTRANTS
bot.on('ready', () => {
  console.log("Activity OK")
  //CHANGE {type: 2} in 
  //1 FOR PLAYING
  //2 FOR LISTENING
  //3 FOR WATCHING
  bot.user.setActivity("YOUR TEXT", {type: 3});
});