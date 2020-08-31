// alert('hey....');
// console.log('hello world');

const quotes = [{
    quote: `"I'm not a great programmer; I'm just a good programmer with great habits."`,
    author: `- Kent Beck`
}, {
    quote: ` “Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.”`,
    author: `- Helen Keler`
}, {
    quote: `"Programs must be written for people to read, and only incidentally for machines to execute."`,
    author: `- "Harold Abelson"`
}, {
    quote: `“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.”`,
    author: `- Unknown`
}, {
    quote: `"Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime."`,
    author: `- Muhammad Waseem`
}, {
    quote: `“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.”`,
    author: `- Johann Wolfgang`
}, {
    quote: `"The most disastrous thing that you can ever learn is your first programming language."`,
    author: `- Alan Kay`
}, {
    quote: `"The most important property of a program is whether it accomplishes the intention of its user."`,
    author: `- C.A.R. Hoare`
}, {
    quote: ` “People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.`,
    author: `- Rob Siltanen`
}, {
    quote: `“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.”`,
    author: `- Og Mandino`
}, ];
// creating new Quote Button
const quoteBtn = document.getElementById('quote-btn');
// selecting  Quote and author using queryselector
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// adding an Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})