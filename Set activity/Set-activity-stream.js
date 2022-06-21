bot.on('ready', () => {
  bot.user.setStatus('available')
  bot.user.setPresence({
    game: {
      name: 'placeholder_name',
      type: "STREAMING",
          url: "placeholder_link"
      }
  });
});

//Comments
//Only links from Twitch channels are allowed
//Placeholders must be changed
