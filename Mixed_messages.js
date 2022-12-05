//Make a random message appear when a button is pressed

const article = ['A', 'The'];

const adjective = ['floppy', 'huge', 'clumsy', 'beautiful', 'ticklish'];

const noun = ['jellyfish', 'bear', 'deer', 'bird', 'whale'];

const verb = ['flies', 'eats', 'smells', 'swims', 'prances'];

const adverb = ['prettily', 'quickly', 'happily', 'moodily'];

const sentenceMaker = () =>{  

let newSentenceArr = [];
  
let randomArticleInd = Math.floor(Math.random()*(article.length));
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

  console.log(newSentenceArr);
  const finalSentence = newSentenceArr.join(" ");

  document.getElementById('textElement2').innerHTML = finalSentence+".";
};