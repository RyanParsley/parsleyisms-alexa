'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.2b1d6879-e616-4dce-8042-a973ba80eeee";

var SKILL_NAME = "Parsleyisms";
var GET_FACT_MESSAGE = "Here's your parsleyism: ";
var HELP_MESSAGE = "You can say tell me a parsleyism, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "I simply sprinkle my wonderfulness around and see what sticks.",
    "Degree scents sound more and more like Dorito Flavors",
    "Ok, so I’m going to respond to your questions with nonsense while he responds with serious stuff. You decide who you want to talk to.",
    "It’s like being from Lima you’re automatically well versed in puns.",
    "He is one metal chair lighter than a car.",
    "DAMN THIS FASHION ADDICTION OF MINE.",
    "I’m not a crazy person, it’s malt vinegar!",
    "Who shines babies?",
    "Leaves of three, pair mozzarella with thee.",
    "It’s like, ‘You got me - I collect new cars!’ Who is their target audience, Jay Leno?",
    "There you are - we were just speculating on your restroom behavior.",
    "That’s the thing about fountains, they look nice but they don’t do a whole lot but keep mosquitos away.",
    "You’re already past the honeymoon phase of thinking “Robots are driving my website!",
    "I like how it’s a wrapper you can’t open, and once you get it open, inside is something you can’t use.",
    "I don’t want to look like a crazy old man but apparently I do!",
    "Otherwise, you could just get soup cans and a two by four.",
    "I love those animations where food is blissfully unaware of it being food and then does something wildly inappropriate.",
    "Hack the dictionary!",
    "It’s hot enough to give me hiccups.",
    "I was just shaving the yak all night long.",
    "The frustrating part is having to try and explain why it’s better that we have stars on our bellies today.",
    "He walked around with bacon in his pocket for a whole week and no one noticed.",
    "An iguana is like a shaved dog with bad skin.",
    "I like to gesticulate.",
    "One man’s ‘stable’ is another man’s ‘beta’.",
    "You know what just burgles my curds?!",
    "Just tastes like regret and bad decisions.",
    "That’s the smell of quality.",
    "Ride the Eagle Home.",
    "One bad joke gets you a groan. Several bad jokes gets you a blog.",
    "It’s a really good place to dip a toe in something terrible.",
    "The more you play with things, the more places you find not to go.",
    "What I do, textbooks can’t keep up.",
    "I crossed those streams more often than I’m comfortable with.",
    "Keep the jelly out of the peanut butter",
    "I like to seize those carps when they come along.",
    "Angular.js is a fairly obtuse topic",
    "So, squirrels hide nuts and they forget about them and then we get oak trees. My business is like that.",
    "Someone had to go through the effort of making that puppet look like a Norman Rockwell painting as envisioned by Michael Bay.",
    "Does it come through as Bang Important!?"
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
