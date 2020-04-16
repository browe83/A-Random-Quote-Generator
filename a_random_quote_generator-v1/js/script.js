/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {quote: `A goal without a plan is a wish.`,
  source: `Antoine de Saint-Exupéry`,
  citation: null,
  year: null,
  nationality: `French`
},

  {quote: `Every result that you desire is preceded by a process that is required to produce the result. When you define YOUR process and commit to it for an extended period of time, the results take care of themselves.`,
  source: `Hal Elrod`,
  citation: `The Miracle Morning for Salespeople`,
  year: 2015,
  nationality: `American`
},

  {quote: `If you want to increase your success rate, double your failure rate.`,
  source: `Thomas Watson`,
  citation: null,
  year: null,
  nationality: `American`
},

  {quote: `The impediment to action advances action...  What stands in the way becomes the way.`,
  source: `Marcus Aurelius`,
  citation: `Meditations`,
  year: `161 - 180 CE`, 
  nationality: `Roman`
},

  {quote: `Being busy is most often used as a guise for avoiding the few critically important but uncomfortable actions.`,
  source: `Timothy Ferriss`,
  citation: `The 4-Hour Workweek`,
  year: 2007,
  nationality:`American`
},

  {quote: `Nothing in the world is worth having or worth doing unless it means effort, pain, difficulty… I have never in my life envied a human being who led an easy life.`,
  source: `Theodore Roosevelt`,
  citation: null,
  year: null,
  nationality: `American`
}

] 


/***
 * `getRandomQuote` function
***/


function getRandomQuote() {
  let text = ``; 
  const randNum = Math.floor(Math.random() * quotes.length);
  for (let prop in quotes[randNum]) {
      if(quotes[randNum][prop]) {
        text += quotes[randNum][prop];
      }
    } 

  return text;
}

console.log(getRandomQuote()); 

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//**document.getElementById('load-quote').addEventListener("click", printQuote, false);