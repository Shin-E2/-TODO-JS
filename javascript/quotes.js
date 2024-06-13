//10개의 명언(객체 형식으로) 담긴 array
const quotes = [
 {
  quote: 'I never dreamed about success, I worked for it',
  author: 'Estee Lauder',
 },
 {
  quote: 'Do not try to be original, just try to be good.',
  author: 'Paul Rand',
 },
 {
  quote: 'Do not be afraid to give up the good to go for the great',
  author: 'John D. Rockefeller',
 },
 {
  quote:
   'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
  author: 'Martin Luther King Jr.',
 },
 {
  quote:
   'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
  author: 'Thomas Edison',
 },
 {
  quote:
   'The fastest way to change yourself is to hang out with people who are already the way you want to be',
  author: 'REid Hoffman',
 },
 {
  quote:
   'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
  author: 'Tim O Reilly',
 },
 {
  quote:
   'Some people dream of success, while other people get up every morning and make it happen',
  author: 'Wayne Huizenga',
 },
 {
  quote:
   'The only thing worse than starting something and falling.. is not starting something',
  author: 'SEth Godin',
 },
 {
  quote:
   'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
  author: 'Jim Rohn',
 },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

/*
 * 배열[0~9]까지의 랜덤을 나타내려면 Math.round(Math.random() * 10)을 하면 된다.
 * 그러면 0 ~ 9의 랜덤 숫자를 찾을 수 있다
 * 배열의 개수만큼 할면 10을 지우고 quotes.length를 사용한다
 */
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
