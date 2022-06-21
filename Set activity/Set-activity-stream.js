bot.on('ready', () => {
  bot.user.setStatus('available')
  bot.user.setPresence({
    game: {
      name: 'YOUR TEXT',
      type: "STREAMING",
          url: "LINK"
      }
  });
});

//Comments
//Only links from Twitch channels are allowed
