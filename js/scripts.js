var scrabbleLetter = function(letter) {
  var letterScores = {"a": 1, "e": 1, "i": 1, "o": 1, "u": 1,
                      "l": 1, "n": 1, "r": 1, "s": 1, "t": 1,
                      "d": 2, "g": 2,
                      "b": 3, "c": 3, "m": 3, "p": 3,
                      "f": 4, "h": 4, "v": 4, "w": 4, "y": 4,
                      "k": 5,
                      "j": 8, "x": 8,
                      "q": 10, "z": 10};
  return letterScores[letter.toLowerCase()];
};

var scrabble = function(word) {
  var score=0;
  for(var i=0; i < word.length; i++) {
    score += scrabbleLetter(word[i]);
  }
  return score;
};


$(document).ready(function () {
  $("form#scrabble-form").submit(function(event) {

    var word = $("#scrabble-word").val();
    var result = scrabble(word);
    $("#results").empty();

    word.split("").forEach(function(letter) {
      $("#results").append("<img src='img/" + letter + ".jpg'>");
    });

    if (word.toLowerCase() === 'hammer') {
      $("#results").prepend("<img src='img/mchammer.gif'>");
      $("#results").append("<img src='img/mchammer.gif'>");
    }

    $("#results").append("<h2>Score = " + result + "</h2>");
    event.preventDefault();
  });
});
