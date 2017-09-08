'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.b12ccabb-48e4-42a5-afbd-28872a1531dc';

const SKILL_NAME = 'Virus Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a virus fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
    'A virus is, technically, neither living or not living.',
    'A large percentage of human DNA is made from ancient virus infections.',
    'The average human is infected with various viruses, there are just no symptoms',
    'Some viruses stay in your body forever',
    'The common cold, is actually caused by a collection of different viruses',
    'The Spanish flu of 1918, killed more people than the first world war',
    'Retroviruses are used in cloning and gene therapy',
    'Everyone has herpes',
    'Viruses are either DNA or RNA based',
    'Viruses are the cause of some types of cancer',
    'Some viruses can infect bacteria',
    'Viruses that infect bacteria are being developed as anti-bacterial treatments',
    'Viruses need a living cell to survive',
    'AIDS is not a virus, the virus is called human immunodeficiency virus or HIV',
    'Chicken pox is not a pox virus, it is a herpesvirus',
    'Influenza can infect humans, birds and pigs',
    'Viruses constantly evolve to avoid the immune system',
    'No two colds are the same, you do not get symptoms from the same cold virus twice',
    'Viruses can be spread by infected mosquitos to humans, such as Zika virus',
    'Vaccines can provide lifelong protection against some viruses such as polio',
    'Mankind have successfully eradicated the smallpox virus worldwide',
    'Antibiotics do not treat viral infections',
    'The first virus identified was Tobacco Mosaic Virus in the 1980s',
    'The first human virus identified was Yellow Fever Virus in 1901',
    'There is no vaccine against the common cold as the cold is caused by many different viruses',
    'You can’t see viruses under a regular light microscope'
];


const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};