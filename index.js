//Webex Bot Starter - featuring the webex-node-bot-framework - https://www.npmjs.com/package/webex-node-bot-framework
const dotenv = require('dotenv');
const express = require('express');
const axios = require('axios');
const https = require('https');
const fs = require('fs'); 
const {XMLParser}=require('fast-xml-parser');
const framework = require("webex-node-bot-framework");
const webhook = require("webex-node-bot-framework/webhook");

dotenv.config();
const today = new Date();
const formattedDate = today.getDate().toString().padStart(2, '0') + '/' + (today.getMonth() + 1).toString().padStart(2, '0') + '/' + today.getFullYear();

const commandList = `
**Available Commands:**
- **say hi to everyone**: Sends a greeting to all members in the space.
- **info**: Get your personal details.
- **space**: Get details about this space.
- **check diagnostics**: Checks the diagnostics of the Room Kit Mini.
- **check room status**: Checks the occupancy status of the Room Kit Mini in VENUS ROOM.
- **check people count**: Checks the number of people in VENUS room.
- **check bookings**: Checks the bookings of VENUS room for (${formattedDate})
- **check network details**: YET TO IMPLEMENT Checks the network details of Room Kit Mini
- **check noise and sound**: Checks the ambient noise and sound level in VENUS ROOM
- **check proximity services**: Checks the availability of proximity services in VENUS ROOM.
- **check standby state**: Checks the standby state of the Room Kit Mini.
- **check system unit details**: Checks the system unit details of the Room Kit Mini.
- **check google meet**: Checks whether Google Meet is available or not.
- **check microsoft teams**: Checks whether Microsoft Teams is available or not.
- **card me**: A customizable card with your personal details.
- **reply**: Sends a threaded reply to your message.
- **framework**: Learn more about the Webex Bot Framework.
- **help**: Shows this help message.
`;

// Create an HTTPS agent that ignores self-signed certificates
const agent = new https.Agent({  
  rejectUnauthorized: false
});

const app = express();
app.use(express.json());
app.use(express.static("images"));

const config = {
  token: process.env.WEBEX_BOT_TOKEN,
};

// Only pass the webhook URL and port if it has been set in the environment
if (process.env.WEBHOOKURL && process.env.PORT) {
  config.webhookUrl = process.env.WEBHOOKURL;
  config.port = process.env.PORT;
}
// Initialize Webex bot framework
const frameworkInstance = new framework(config);
frameworkInstance.start();
console.log("Starting framework, please wait...");

frameworkInstance.on("initialized", () => {
  console.log("framework is all fired up! [Press CTRL-C to quit]");
});

// Function to send a command to the Room Kit Mini
async function updateParsedData() {
  try {
    const url = `https://192.168.10.167/status.xml`;

    const response = await axios.get(url, {
      auth: {
        username: 'Test123',
        password: 'admin@123',
      },
      headers: {
        'Content-Type': 'text/xml',
      },
      httpsAgent: agent 
    });

    // Log response headers and body
    console.log("Response Headers:", response.headers);
    console.log("Response Body:", response.data);

    // Check if the response is actually XML
    if (response.headers['content-type'] && response.headers['content-type'].includes('xml')) {
      console.log("Connection to Room Bar Mini has been established.");

      // Parse XML response
      const xmlData = response.data;
      const parser = new XMLParser();
      const jsonObj = parser.parse(xmlData);

      const jsonString = JSON.stringify(jsonObj, null, 2);

      fs.writeFileSync('parsed-data.js', `const parsedData = ${jsonString};\n\nmodule.exports = parsedData;`);

      console.log('Parsed data has been updated in parsed-data.js');
    } else {
      throw new Error("Expected XML response but received different content.");
    }
  } catch (error) {
    console.error("Error updating room status:", error);
  }
}

// Update parsed-data.js every 10 seconds
setInterval(updateParsedData, 10000);

// Function to send a command to the Room Kit Mini
async function sendCommandToRoomKit() {
  try {
    const parsedData = require('./parsed-data');
    console.log("Parsed Data:", parsedData);

    // Check if parsedData contains the expected structure
    if (parsedData.html) {
      throw new Error('Unexpected HTML content in parsed data');
    }

    const status = parsedData.Status || {};

    const bookings = status.Bookings || {};
    const diagnostics = status.Diagnostics || {};
    //const network = status.Network || {};
    const proximityServices =status.Proximity || {};
    const roomAnalytics = status.RoomAnalytics || {};
    const standby = status.Standby || {};
    const systemUnit = status.SystemUnit || {};
    const webRTCS = status.WebRTC || {};
    //const video = status.Video || {};


    // To Check Bookings
    const availabilityStatus = bookings.Availability ? bookings.Availability.Status : "BookedUntil";
    const availabilityTimeStamp = bookings.Availability ? bookings.Availability.TimeStamp :" ";

    // To Check Diagnostics
    const diagnosticsMessages = [];
    if (diagnostics.Message) {
      const messages = Array.isArray(diagnostics.Message) ? diagnostics.Message : [diagnostics.Message];
      messages.forEach(message => {
        const description = message.Description;
        const level = message.Level;
        diagnosticsMessages.push(`**Description:** ${description}\n**Level:** ${level}`);
      });
    }

    // // To Check Network Details
    // const activeInterface = network.ActiveInterface[0] ;
    // const cdp = network.CDP[0].Address[0];
    // const dnsServerAddress = network.DNS[0].Server.map(server => server.Address[0]);
    // const ethernet = {
    //   macAddress: network.Ethernet[0].MacAddress[0],
    //   speed: network.Ethernet[0].Speed[0],
    // };;
    // const ipV4 = {
    //   address: network.IPv4[0].Address[0],
    //   gateway: network.IPv4[0].Gateway[0],
    //   subnetMask: network.IPv4[0].SubnetMask[0],
    // };
    // const ipV6 = {
    //   address: network.IPv6[0].Address[0],
    //   gateway: network.IPv6[0].Gateway[0],
    //   linkLocalAddress: network.IPv6[0].LinkLocalAddress[0],
    // };
    // const wifi = {
    //   ssid: network.Wifi[0].SSID[0],
    //   speed: network.Wifi[0].Speed[0],
    //   status: network.Wifi[0].Status[0],
    // };

    // To Check Proximity Services Availability
    const services = proximityServices.Services ? proximityServices.Services.Availability : "Available";

    // To Check Room Analytics 
    //const roomInUse = roomAnalytics.RoomInUse === 'True' ? 'False' : 'Available';
    const peoplePresence = roomAnalytics.PeoplePresence === 'Yes' ? 'No' : 'people are present';
    const peopleCount = roomAnalytics.PeopleCount ? roomAnalytics.PeopleCount.Current : 0;
    const ambientNoise = roomAnalytics.AmbientNoise && roomAnalytics.AmbientNoise.Level ? roomAnalytics.AmbientNoise.Level.A : 0;
    const soundLevel = roomAnalytics.Sound && roomAnalytics.Sound.Level ? roomAnalytics.Sound.Level.A : 0;

    // To check Standby details
    const standbyState = standby.State;

    // To check System Unit details
    const broadcastName = systemUnit.BroadcastName;
    const productId = systemUnit.ProductId;
    const productType = systemUnit.ProductType;
    const hardwareDram = systemUnit.Hardware.DRAM;
    const hardwareHasWifi = systemUnit.Hardware.HasWifi;
    const softwareDisplayName = systemUnit.Software.DisplayName;
    const softwareVersion = systemUnit.Software.Version;
    const softwareReleaseDate = systemUnit.Software.ReleaseDate;

    // To check Video Details
    

    // To Check WebRTC Provider Details
    const webRTCProvider = webRTCS.Provider;
    const googleMeet = webRTCProvider.GoogleMeet;
    const msTeams = webRTCProvider.MicrosoftTeams;

    console.log('Room Status:', parsedData);
    return {
      roomStatus: availabilityStatus,
      peoplePresence: peoplePresence,
      peopleCount: peopleCount,
      availabilityStatus: availabilityStatus,
      availabilityTimeStamp: availabilityTimeStamp,
      ambientNoise: ambientNoise,
      soundLevel: soundLevel,
      standbyState: standbyState,
      broadcastName: broadcastName,
      productId: productId,
      productType: productType,
      hardwareDram: hardwareDram,
      hardwareHasWifi: hardwareHasWifi,
      softwareDisplayName: softwareDisplayName,
      softwareVersion: softwareVersion,
      softwareReleaseDate: softwareReleaseDate,
      googleMeet: googleMeet,
      msTeams: msTeams,
      services: services,
      diagnosticsMessages: diagnosticsMessages,
    };
  } catch (error) {
    console.error("Error fetching room status:", error);
    throw error; // Re-throw to be handled by the caller
  }
}

frameworkInstance.on('spawn', (bot, addedBy) => {
  if (!addedBy) {
    // The bot was added to a space without a specific user doing so (like in a group space)
    console.log('Bot was added to a space');
    bot.say('markdown', commandList).catch((e) => console.error(`Error in spawn handler: ${e.message}`));
  }
});

// Webex bot hears "check diagnostics" command
frameworkInstance.hears(
  "check diagnostics",
  async (bot) => {
    console.log("Diagnostics check requested");
    try {
      const state = await sendCommandToRoomKit();
      const responseMessage = `**Diagnostics Messages**:\n\n${state.diagnosticsMessages.join('\n\n')}`;
      await bot.say("markdown", responseMessage);
    } catch (error) {
      await bot.say("markdown", "Sorry, I couldn't check the diagnostics due to an error.");
    }
  },
  "**check diagnostics**: (checks the diagnostics of the Room Kit Mini)",
  0
);

// Webex bot hears "check room status" command
frameworkInstance.hears(
  "check room status",
  async (bot) => {
    console.log("Room status check requested");
    try {
      const state = await sendCommandToRoomKit();
      let responseMessage = '';

      if (state.roomStatus === "BookedUntil") {
        responseMessage = 'The room is not available.';
      }else{
        responseMessage = 'The room is available.';
        if (state.peopleCount > 0) {
          responseMessage += ` However, there are people present in the room.`;
        }
      }await bot.say("markdown", responseMessage);
    } catch (error) {
      await bot.say("markdown", "Sorry, I couldn't check the room status due to an error.");
    }
  },
  "**check room status**: (checks the occupancy status of the Room Kit)",
  0
);

// Webex bot hears "check people count" command
frameworkInstance.hears(
  "check people count",
  async (bot) => {
    console.log("People count check requested");
    try {
      const state  = await sendCommandToRoomKit();
      const responseMessage = `There are ${state .peopleCount} people in the room.`;
      await bot.say("markdown", responseMessage);
    } catch (error) {
      await bot.say("markdown", "Sorry, I couldn't check the number of people in the room due to an error.");
    }
  },
  "**check people count**: (checks the number of people in the room)",
  0
);

// Webex bot hears "check bookings" command
frameworkInstance.hears(
  "check bookings",
  async (bot) => {
    console.log("Bookings check requested");
    try {
      const state = await sendCommandToRoomKit();

      let responseMessage = '';
      const date = new Date(state.availabilityTimeStamp);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); //adding 1 because months are zero-indexed
      const year = date.getFullYear();
      const bookingEndTime=`${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
      // if (state.availabilityStatus === "BookedUntil") {
      //   // If the room is booked, show the timestamp until when it is booked
      //   const bookingEndTime = new Date(state.availabilityTimeStamp).toLocaleString();
      //   responseMessage = `The room is booked until ${bookingEndTime}.`;
      // } else {
      //   // If the room is not booked, indicate it's free
      //   responseMessage = `The room is currently free ${formattedDate}.`;
      // }
      if (state.availabilityStatus === "BookedUntil"){
          responseMessage=`The room is booked until ${bookingEndTime}.`;
      }else if(state.availabilityStatus === "FreeUntil"){
          responseMessage=`The room is free now but there is a booking from ${bookingEndTime}.`;
      }else if(state.availabilityStatus === "Free"){
          responseMessage=`The room is free for the entire day for ${formattedDate}.`;
      }else{
          responseMessage='ERROR 404.';
      }
      await bot.say("markdown", responseMessage);
    } catch (error) {
      await bot.say("markdown", "Sorry, I couldn't check the bookings due to an error.");
    }
  },
  "**check bookings**: (checks the bookings for the room)",
  0
);

// // Webex bot hears "check network details"
// frameworkInstance.hears(
//   "check network details",
//   async (bot) => {
//     console.log("Network details check requested");
//     try {
//       const state = await sendCommandToRoomKit();
//       const responseMessage = `Network Details:
// - Active Interface: ${state.activeInterface}
// - CDP Address: ${state.cdpAddress}
// - DNS Server Address: ${state.dnsServerAddress.join(', ')}
// - Ethernet MAC Address: ${state.ethernetMACAddress}
// - Ethernet Speed: ${state.ethernetSpeed}
// - IPv4 Address: ${state.ipV4Address}
// - IPv6 Address: ${state.ipV6Address}
// - WiFi SSID: ${state.wifiSSID}
// - WiFi Speed: ${state.wifiSpeed}
// - WiFi Status: ${state.wifiStatus}`;
//       await bot.say("markdown", responseMessage);
//     }
//     catch (error) {
//       await bot.say("markdown", "Sorry, I couldn't check the network details due to an error.");
//     }
//   },
//   "**check network details**: (checks the network details)",
//   0
// );

// Webex bot hears "check ambient noise and sound level in the room"
frameworkInstance.hears(
  "check noise and sound",
  async (bot) => {
    console.log("Noise and sound level check requested");
    try {
      const state = await sendCommandToRoomKit();
      const responseMessage = `The ambient noise level in the room is ${state.ambientNoise} dB and the sound level is ${state.soundLevel} dB.`;
      await bot.say("markdown", responseMessage);
    } catch (error) {
      await bot.say("markdown", "Sorry, I couldn't check the ambient noise and sound level in the room due to an error.");
    }
  },
  "**check noise and sound **: (checks the ambient noise and sound level in the room)",
  0
);

// Webex bot hears "check proximity services availability"
frameworkInstance.hears(
  "check proximity services",
  async (bot) => {
    console.log("Proximity services availability check requested");
    try {
      const state = await sendCommandToRoomKit();
      let responseMessage = '';

      if(state.services === "Available"){
        responseMessage = 'The proximity services are available.';
      }else{
        responseMessage = `Proximity services are ${state.services}.`;
      }
      await bot.say("markdown", responseMessage);
    } catch (error) {
      await bot.say("markdown", "Sorry, I couldn't check the proximity services availability due to an error.");
    }
  },
  "**check proximity services**: (checks the proximity services availability)",
  0
);

// Webex bot hears "check standby state"
frameworkInstance.hears(
  "check standby state",
  async (bot) => {
    console.log("Standby state check requested");
    try {
      const state = await sendCommandToRoomKit();
      const responseMessage = `The standby state is ${state.standbyState}.`;
      await bot.say("markdown", responseMessage);
    } catch (error) {
      await bot.say("markdown", "Sorry, I couldn't check the standby state due to an error.");
    }
  },
  "**check standby state**: (checks the standby state)",
  0
);

// Webex bot hears "check system unit details"
frameworkInstance.hears(
  "check system unit details",
  async (bot) => {
    console.log("System unit details check requested");
    try {
      const state = await sendCommandToRoomKit();
      const responseMessage = `The system unit details are as follows:
- Broadcast Name: ${state.broadcastName}
- Product ID: ${state.productId}
- Product Type: ${state.productType}
- Hardware DRAM: ${state.hardwareDram} GB
- Hardware Has Wifi: ${state.hardwareHasWifi}
- Software Display Name: ${state.softwareDisplayName}
- Software Version: ${state.softwareVersion}
- Software Release Date: ${state.softwareReleaseDate}`;
      await bot.say("markdown", responseMessage);
    }
    catch (error) {
      await bot.say("markdown", "Sorry, I couldn't check the system unit details due to an error.");
    }
  },
  "**check system unit details**: (checks the system unit details)",
  0
);

// Webex bot hears "check whether Google Meet is available or not"
frameworkInstance.hears(
  "check google meet",
  async (bot) => {
    console.log("Google Meet check requested");
    try {
      const state = await sendCommandToRoomKit();
      const responseMessage = `Google Meet is ${state.googleMeet ? 'available' : 'not available'}.`;
      await bot.say("markdown", responseMessage);
    } catch (error) {
      await bot.say("markdown", "Sorry, I couldn't check whether Google Meet is available or not due to an error.");
    }
  },
  "**check google meet**: (checks whether Google Meet is available or not)",
  0
);

// Webex bot hears "check whether Microsoft Teams is available or not"
frameworkInstance.hears(
  "check microsoft teams",
  async (bot) => {
    console.log("Microsoft Teams check requested");
    try {
      const state = await sendCommandToRoomKit();
      const responseMessage = `Microsoft Teams is ${state.msTeams ? 'available' : 'not available'}.`;
      await bot.say("markdown", responseMessage);
    } catch (error) {
      await bot.say("markdown", "Sorry, I couldn't check whether Microsoft Teams is available or not due to an error.");
    }
  },
  "**check microsoft teams**: (checks whether Microsoft Teams is available or not)",
  0
);


frameworkInstance.hears(
  "framework",
  (bot) => {
    console.log("framework command received");
    bot.say(
      "markdown",
      "The primary purpose for the [webex-node-bot-framework](https://github.com/WebexCommunity/webex-node-bot-framework) was to create a framework based on the [webex-jssdk](https://webex.github.io/webex-js-sdk) which continues to be supported as new features and functionality are added to Webex. This version of the project was designed with two themes in mind: \n\n\n * Mimimize Webex API Calls. The original flint could be quite slow as it attempted to provide bot developers rich details about the space, membership, message and message author. This version eliminates some of that data in the interests of efficiency, (but provides convenience methods to enable bot developers to get this information if it is required)\n * Leverage native Webex data types. The original flint would copy details from the webex objects such as message and person into various flint objects. This version simply attaches the native Webex objects. This increases the framework's efficiency and makes it future proof as new attributes are added to the various webex DTOs "
    );
  },
  "**framework**: (learn more about the Webex Bot Framework)",
  0
);

/* On mention with command, using other trigger data, can use lite markdown formatting
ex User enters @botname 'info' phrase, the bot will provide personal details
*/
frameworkInstance.hears(
  "info",
  (bot, trigger) => {
    console.log("info command received");
    //the "trigger" parameter gives you access to data about the user who entered the command
    let personAvatar = trigger.person.avatar;
    let personEmail = trigger.person.emails[0];
    let personDisplayName = trigger.person.displayName;
    let outputString = `Here is your personal information: \n\n\n **Name:** ${personDisplayName}  \n\n\n **Email:** ${personEmail} \n\n\n **Avatar URL:** ${personAvatar}`;
    bot.say("markdown", outputString);
  },
  "**info**: (get your personal details)",
  0
);

/* On mention with bot data
ex User enters @botname 'space' phrase, the bot will provide details about that particular space
*/
frameworkInstance.hears(
  "space",
  (bot) => {
    console.log("space. the final frontier");
    let roomTitle = bot.room.title;
    let spaceID = bot.room.id;
    let roomType = bot.room.type;

    let outputString = `The title of this space: ${roomTitle} \n\n The roomID of this space: ${spaceID} \n\n The type of this space: ${roomType}`;

    console.log(outputString);
    bot
      .say("markdown", outputString)
      .catch((e) => console.error(`bot.say failed: ${e.message}`));
  },
  "**space**: (get details about this space) ",
  0
);

/*
   Say hi to every member in the space
   This demonstrates how developers can access the webex
   sdk to call any Webex API.  API Doc: https://webex.github.io/webex-js-sdk/api/
*/
frameworkInstance.hears(
  "say hi to everyone",
  (bot) => {
    console.log("say hi to everyone.  Its a party");
    // Use the webex SDK to get the list of users in this space
    bot.webex.memberships
      .list({ roomId: bot.room.id })
      .then((memberships) => {
        for (const member of memberships.items) {
          if (member.personId === bot.person.id) {
            // Skip myself!
            continue;
          }
          let displayName = member.personDisplayName
            ? member.personDisplayName
            : member.personEmail;
          bot.say(`Hello ${displayName}`);
        }
      })
      .catch((e) => {
        console.error(`Call to sdk.memberships.get() failed: ${e.messages}`);
        bot.say("Hello everybody!");
      });
  },
  "**say hi to everyone**: (everyone gets a greeting using a call to the Webex SDK)",
  0
);

// Buttons & Cards data
let cardJSON = {
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  type: "AdaptiveCard",
  version: "1.0",
  body: [
    {
      type: "ColumnSet",
      columns: [
        {
          type: "Column",
          width: "5",
          items: [
            {
              type: "Image",
              url: "Your avatar appears here!",
              size: "large",
              horizontalAlignment: "Center",
              style: "person",
            },
            {
              type: "TextBlock",
              text: "Your name will be here!",
              size: "medium",
              horizontalAlignment: "Center",
              weight: "Bolder",
            },
            {
              type: "TextBlock",
              text: "And your email goes here!",
              size: "small",
              horizontalAlignment: "Center",
              isSubtle: true,
              wrap: false,
            },
          ],
        },
      ],
    },
  ],
};

/* On mention with card example
ex User enters @botname 'card me' phrase, the bot will produce a personalized card - https://developer.webex.com/docs/api/guides/cards
*/
frameworkInstance.hears(
  "card me",
  (bot, trigger) => {
    console.log("someone asked for a card");
    let avatar = trigger.person.avatar;

    cardJSON.body[0].columns[0].items[0].url = avatar
      ? avatar
      : `${config.webhookUrl}/missing-avatar.jpg`;
    cardJSON.body[0].columns[0].items[1].text = trigger.person.displayName;
    cardJSON.body[0].columns[0].items[2].text = trigger.person.emails[0];
    bot.sendCard(
      cardJSON,
      "This is customizable fallback text for clients that do not support buttons & cards"
    );
  },
  "**card me**: (a cool card!)",
  0
);

/* On mention reply example
ex User enters @botname 'reply' phrase, the bot will post a threaded reply
*/
frameworkInstance.hears(
  "reply",
  (bot, trigger) => {
    console.log("someone asked for a reply.  We will give them two.");
    bot.reply(
      trigger.message,
      "This is threaded reply sent using the `bot.reply()` method.",
      "markdown"
    );
    var msg_attach = {
      text: "This is also threaded reply with an attachment sent via bot.reply(): ",
      file: "https://media2.giphy.com/media/dTJd5ygpxkzWo/giphy-downsized-medium.gif",
    };
    bot.reply(trigger.message, msg_attach);
  },
  "**reply**: (have bot reply to your message)",
  0
);

/* On mention with command
ex User enters @botname help, the bot will write back in markdown
 *
 * The framework.showHelp method will use the help phrases supplied with the previous
 * framework.hears() commands
*/
frameworkInstance.hears(
  /hello|hi|help|what can i (do|say)|what (can|do) you do/i,
  (bot, trigger) => {
    console.log(`someone needs help! They asked ${trigger.text}`);
    bot
      .say(`Hello ${trigger.person.displayName}.`)
      .then(() => bot.say("markdown", commandList))
      .catch((e) => console.error(`Problem in help hander: ${e.message}`));
  },
  "**help**: (what you are reading now)",
  0
);

/* On mention with unexpected bot command
   Its a good practice is to gracefully handle unexpected input
   Setting the priority to a higher number here ensures that other
   handlers with lower priority will be called instead if there is another match
*/
frameworkInstance.hears(
  /.*/,
  (bot, trigger) => {
    // This will fire for any input so only respond if we haven't already
    console.log(`catch-all handler fired for user input: ${trigger.text}`);
    bot
      .say(`Sorry, I don't know how to respond to "${trigger.text}"`)
      .then(() => bot.say("markdown", commandList))
      .catch((e) =>
        console.error(`Problem in the unexpected command handler: ${e.message}`)
      );
  },
  "**catch-all**: (handles unexpected inputs)",
  100
);

// Server config & housekeeping
// Health Check
app.get("/", (req, res) => {
  res.send(`I'm alive.`);
});

app.post("/", webhook(frameworkInstance));

var server = app.listen(config.port, () => {
  frameworkInstance.debug("framework listening on port %s", config.port);
});

// gracefully shutdown (ctrl-c)
process.on("SIGINT", () => {
  console.log("Stopping server...");
  server.close(() => {
    console.log("Server stopped.");
    frameworkInstance.stop().then(() => {
      console.log("Framework stopped.");
      process.exit(0);
    }).catch(err => {
      console.error("Error stopping framework:", err);
      process.exit(1);
    });
  });
});