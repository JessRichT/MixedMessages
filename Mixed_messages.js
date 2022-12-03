//Make a random message appear when a button is pressed

var quotes = [
    "Hi five",
    "Don't worry",
    "Be happy",
    "If it rains",
    "Be Positive",
    "Keep going",
    "Touch the rainbow",
    "Fight for your rights",
    "Party"
  ]
  
  function newQuote() {
    var randomNumber = Math.floor(Math.random()*(quotes.length)); document.getElementById('textElement').innerHTML = quotes[randomNumber];
  }