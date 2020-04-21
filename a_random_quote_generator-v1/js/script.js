/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
script.js by Brandon Rowe
******************************************/

// Randomly changes the background color.
function randBgColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = `rgb(${x}, ${y}, ${z})`;

  document.body.style.background = bgColor;
}

let quotes = [
  {
    quote: `A goal without a plan is a wish.`,
    source: `Antoine de Saint-Exupéry`,
    citation: null,
    year: null,
    nationality: `French`,
  },
  {
    quote: `Every result that you desire is preceded by a process that is required to produce the result. When you define YOUR process and commit to it for an extended period of time, the results take care of themselves.`,
    source: `Hal Elrod`,
    citation: `The Miracle Morning for Salespeople`,
    year: 2015,
    nationality: `American`,
  },
  {
    quote: `If you want to increase your success rate, double your failure rate.`,
    source: `Thomas Watson`,
    citation: null,
    year: null,
    nationality: `American`,
  },

  {
    quote: `The impediment to action advances action...  What stands in the way becomes the way.`,
    source: `Marcus Aurelius`,
    citation: `Meditations`,
    year: `161 - 180 CE`,
    nationality: `Roman`,
  },

  {
    quote: `Being busy is most often used as a guise for avoiding the few critically important but uncomfortable actions.`,
    source: `Timothy Ferriss`,
    citation: `The 4-Hour Workweek`,
    year: 2007,
    nationality: `American`,
  },

  {
    quote: `Nothing in the world is worth having or worth doing unless it means effort, pain, difficulty… I have never in my life envied a human being who led an easy life.`,
    source: `Theodore Roosevelt`,
    citation: null,
    year: null,
    nationality: `American`,
  },
];

//Randomly selects a quote from the above quotes array.
function getRandomQuote() {
  const randNum = Math.floor(Math.random() * quotes.length);
  return quotes[randNum];
}

//Creates an html string using the information supplied by the getRandomQuote function.  It then uses the html to change the body accordingly.

function printQuote() {
  randBgColor();
  let randQuoteObj = getRandomQuote();
  let html = ``;
  html += `<p class="quote">${randQuoteObj.quote} </p>
  <p class="source">${randQuoteObj.source}`;
  if (randQuoteObj.citation) {
    html += `<span class="citation">${randQuoteObj.citation}</span>`;
  }
  if (randQuoteObj.year) {
    html += `<span class="year">${randQuoteObj.year}</span>`;
  }
  if (randQuoteObj.nationality) {
    html += `<span class="nationality">${randQuoteObj.nationality}</span>`;
  }
  html += `</p>`;

  document.getElementById("quote-box").innerHTML = html;
}

// Calls the printQuote function and then auto-refreshes the page every ten seconds with a new quote.

printQuote();
setInterval(printQuote, 10000);

/***The code and message below were provided in the starter files for this project.
 
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
