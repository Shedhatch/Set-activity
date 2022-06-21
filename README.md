# Set activity
Set activity will allow you to customize your bot status and activity.
This file Is split between three files. 
Two are based on activities customization and one Is based on status customization.

![alt text](https://i.imgur.com/5i0TbsS_d.webp?maxwidth=760&fidelity=grand)

# Modules

```
- npm i discord.js
- npm i node.js
```

# How to use <b>Set-activity</b> ?

## Activities

> You'll be able to choose between 4 types of activities:

<details>
  <summary>🎥 Streaming</summary>
  
  ## Streaming
 - Streaming will allow you to set your bot activity to streaming.
 - <a href=https://github.com/Shedhatch/Set-activity/blob/0f945360f901f2c933943f6f4c8dc74f44cf289e/Set-Activities/Set-Streaming-Activity.js>Link to repo </a>
 - Code: 
  ```js
     game: {
      name: 'Streaming guys !',
      type: "STREAMING",
          url: "https://www.twitch.tv/shedhatch"
      }
  ```
 
</details>
<details>
  <summary>🔊 Listening</summary>
  
  ## Listening
 - Listening will allow you to set your bot activity to listening.
 - <a href=https://github.com/Shedhatch/Set-activity/blob/0f945360f901f2c933943f6f4c8dc74f44cf289e/Set-Activities/Set-Streaming-Activity.js>Link to repo </a>
 - Code: 
  ```js
  bot.user.setActivity("Placeholder_text", {type: 2});
  ```
 
</details>
<details>
  <summary>👀 Watching</summary>
  
  ## Watching
 - Watching will allow you to set your bot activity to watching.
 - <a href=https://github.com/Shedhatch/Set-activity/blob/0f945360f901f2c933943f6f4c8dc74f44cf289e/Set-Activities/Set-Streaming-Activity.js>Link to repo </a>
 - Code: 
  ```js
  bot.user.setActivity("Placeholder_text", {type: 3});
  ```
  
</details>
<details>
  <summary>🎮 Playing</summary>
  
  ## Playing
 - Playing will allow you to set your bot activity to playing.
 - <a href=https://github.com/Shedhatch/Set-activity/blob/0f945360f901f2c933943f6f4c8dc74f44cf289e/Set-Activities/Set-Streaming-Activity.js>Link to repo </a>
 - Code: 
  ```js
  bot.user.setActivity("Placeholder_text", {type: 1});
  ```
  
</details>

## Status

> You'll be able to choose between 4 types of status:


<details>
  <summary>🟢 Online</summary>
  
  ## Online
 - Online will allow you to set your bot status to online.
 - <a href=https://github.com/Shedhatch/Set-activity/blob/0f945360f901f2c933943f6f4c8dc74f44cf289e/Set-Status/Set-Status.js>Link to repo </a>
 - Code: 
  ```js
   bot.user.setStatus("online");
  ```
  
</details>
<details>
  <summary>🟠 Idle</summary>
  
  ## Idle
 - Idle will allow you to set your bot status to Idle.
 - <a href=https://github.com/Shedhatch/Set-activity/blob/0f945360f901f2c933943f6f4c8dc74f44cf289e/Set-Status/Set-Status.js>Link to repo </a>
 - Code: 
  ```js
   bot.user.setStatus("idle");
  ```
</details>
<details>
  <summary>🔴 Dnd</summary>
  
  ## Dnd
 - Dnd will allow you to set your bot status to Do Not Disturb.
 - <a href=https://github.com/Shedhatch/Set-activity/blob/0f945360f901f2c933943f6f4c8dc74f44cf289e/Set-Status/Set-Status.js>Link to repo </a>
 - Code: 
  ```js
   bot.user.setStatus("dnd");
  ```
  
</details>
<details>
  <summary>⚫ Offline </summary>
  
  ## Offline
 - Offline will allow you to set your bot status to offline.
 - <a href=https://github.com/Shedhatch/Set-activity/blob/0f945360f901f2c933943f6f4c8dc74f44cf289e/Set-Status/Set-Status.js>Link to repo </a>
 - Code: 
  ```js
   bot.user.setStatus("offline");
  ```
  
</details>

# Version V11 -> V12

- [x] The following code Is <strong>not up to date</strong> (running under V11)<br>
- You can learn more V12 It by following <a href=https://discordjs.guide/additional-info/changes-in-v13.html#before-you-start>this link</a>
