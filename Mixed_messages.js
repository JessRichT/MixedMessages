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

//using general function for each word type to make sentences:  
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
  
  //alternative longer version:
/*let randomArticleInd = Math.floor(Math.random()*(article.length));
let randomArticle = article[randomArticleInd];
newSentenceArr.push(randomArticle);
  
  let randomAdjectiveInd = Math.floor(Math.random()*(adjective.length));
  let randomAdjective = adjective[randomAdjectiveInd]; newSentenceArr.push(randomAdjective);
console.log(randomAdjectiveInd);
  
  let randomNounInd = Math.floor(Math.random()*(noun.length));
  const randomNoun = noun[randomNounInd];
  newSentenceArr.push(randomNoun);

  const randomVerbInd = Math.floor(Math.random()*(verb.length));
  const randomVerb = verb[randomVerbInd];
  newSentenceArr.push(randomVerb);
  

  const randomAdverbInd = Math.floor(Math.random()*(adverb.length));
  const randomAdverb = adverb[randomAdverbInd]; newSentenceArr.push(randomAdverb);
*/
  
  console.log(newSentenceArr);
  const finalSentence = newSentenceArr.join(" ");

  document.getElementById('textElement').innerHTML = finalSentence+".";
}

//To link button to function eg. sentenceMaker in Javascript:

////Method 1:
//let btn = document.querySelector('button');

//btn.onclick = sentenceMaker;

//Method 2 button to function:
document.getElementById('btn');

btn.addEventListener('click', sentenceMaker);

////If want to remove eventlistener:
//btn.removeEventListener('click', sentenceMaker)