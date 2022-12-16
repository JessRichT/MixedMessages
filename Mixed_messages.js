//Make a random message appear when a button is pressed

const article = ['A', 'The'];

const adjective = ['floppy', 'huge', 'clumsy', 'beautiful', 'ticklish'];

const noun = ['jellyfish', 'bear', 'deer', 'bird', 'whale'];

const verb = ['flies', 'eats', 'spins', 'swims', 'prances'];

const adverb = ['prettily', 'quickly', 'happily', 'moodily'];

const sentenceMaker = () =>{
  
let newSentenceArr = [];
  
  //general function to create random index for arrays:
const getRandomIndex = arr => Math.floor(Math.random()*(arr.length));

//use general function for each word type:  
  const randomArticle = article[getRandomIndex(article)];
newSentenceArr.push(randomArticle); 
  
  const randomAdjective = adjective[getRandomIndex(adjective)];
newSentenceArr.push(randomAdjective); 
  
  const randomNoun = noun[getRandomIndex(noun)];
newSentenceArr.push(randomNoun); 
  
  const randomVerb = verb[getRandomIndex(verb)];
newSentenceArr.push(randomVerb);
  
  const randomAdverb = adverb[getRandomIndex(adverb)];
newSentenceArr.push(randomAdverb); 

//join the words together to make a new sentence:
  
  console.log(newSentenceArr);
  const finalSentence = newSentenceArr.join(" ");

//make the sentence appear on the website:
  document.getElementById('textElement').innerHTML = finalSentence+".";
}

//link to button and add event listener:

document.getElementById('btn');

btn.addEventListener('click', sentenceMaker);