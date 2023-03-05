const quotes = [
	{
		quote: "Good communication is as stimulating as black coffee and just as hard to sleep after.",
		author: "Anne Morrow Lindbergh"
	},
	{
		quote: "The worst is not So long as we can say, \"This is the worst.\"",
		author: "William Shakespeare"
	},
	{
		quote: "Self-respect is the cornerstone of all virtue.",
		author: "John Herschel"
	}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
