const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#author-text");
const twitterBtn = document.querySelector(".twitter");
const newQuoteBtn = document.querySelector(".new-quote");
let quoteArray = [];

//* new Quote
function newQuote() {
  const quote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
  // if author is null
  if (!quote.author) {
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = "Unknown";
  } else {
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author;
  }
}
// get quotes
async function getQuotes() {
  const apiURL = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    quoteArray = data;
    newQuote();
  } catch (error) {
    console.log(error);
  }
}
document.addEventListener("DOMContentLoader", getQuotes);
//* newquote btn
newQuoteBtn.addEventListener("click", getQuotes);
// tweet btn
function tweetQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${quoteAuthor.innerText}`;
  window.open(twitterURL, "_blank");
}
twitterBtn.addEventListener("click", tweetQuote);

//onload
getQuotes();
