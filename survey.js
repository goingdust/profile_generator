const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  profile["name"] = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    profile["activity"] = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      profile["music"] = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        profile["meal"] = answer;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          profile["food"] = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            profile["sport"] = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              profile["superpower"] = answer;
              rl.question(`How's this for your profile?: ${profile["name"]} loves listening to ${profile["music"]} while ${profile["activity"]}, devouring ${profile["food"]} for ${profile["meal"]}, prefers ${profile["sport"]} over any other sport, and is amazing at ${profile["superpower"]}. `, (answer) => {
                console.log(`Thank you for your valuable feedback: ${answer}`);
              
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});

// questions = {
//   name: 'What\'s your name? Nicknames are also acceptable :) ',
//   activity: 'What\'s an activity you like doing? ',
//   music: 'What do you listen to while doing that? ',
//   meal: 'Which meal is your favourite (eg: dinner, brunch, etc.) ',
//   food: 'What\'s your favourite thing to eat for that meal? ',
//   sport: 'Which sport is your absolute favourite? ',
//   superpower: 'What is your superpower? In a few words, tell us what you are amazing at! '
// };