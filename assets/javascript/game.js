var arc0 = "fool";
var arr0 = [0, 1, 2, 3];
var arc1 = "magician";
var arr1 = [0, 1, 2, 3, 4, 5, 6, 7];
var arc2 = "priestess";
var arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var arc3 = "empress";
var arr3 = [0, 1, 2, 3, 4, 5, 6];
var arc4 = "emperor";
var arr4 = [0, 1, 2, 3, 4, 5, 6];
var arc5 = "hierophant";
var arr5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arc6 = "lovers";
var arr6 = [0, 1, 2, 3, 4, 5];
var arc7 = "chariot";
var arr7 = [0, 1, 2, 3, 4, 5, 6];
var arc8 = "strength";
var arr8 = [0, 1, 2, 3, 4, 5, 6, 7];
var arc9 = "hermit";
var arr9 = [0, 1, 2, 3, 4, 5];
var arc10 = "fortune";
var arr10 = [0, 1, 2, 3, 4, 5, 6];
var arc11 = "justice";
var arr11 = [0, 1, 2, 3, 4, 5, 6];
var arc12 = "hangman";
var arr12 = [0, 1, 2, 3, 4, 5, 6];
var arc13 = "death";
var arr13 = [0, 1, 2, 3, 4];
var arc14 = "temperance";
var arr14 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arc15 = "devil";
var arr15 = [0, 1, 2, 3, 4];
var arc16 = "tower";
var arr16 = [0, 1, 2, 3, 4];
var arc17 = "star";
var arr17 = [0, 1, 2, 3];
var arc18 = "moon";
var arr18 = [0, 1, 2, 3];
var arc19 = "sun";
var arr19 = [0, 1, 2];
var arc20 = "judgement";
var arr20 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var arc21 = "world";
var arr21 = [0, 1, 2, 3, 4];

// chooses random arcana number and corresponding string and array //
var rng = Math.floor(Math.random() * 22);
var currstr = eval("arc" + rng);
var currarr = eval("arr" + rng);
console.log("arcana" + rng);
console.log(currstr);

// sets up blanks with id //
var word = document.getElementById("word");
for (var i = 0; i < currarr.length; i++) {
    var blank = document.createElement("span");
    blank.id = String(i);
    blank.textContent = "_ ";
    word.appendChild(blank);
};

// count wins, guesses, # letters on current word //
var wins = 0;
var guesses = 12;
var lcount = 0;
// guessed list and alphabet check //
var glist = [];
var alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

document.onkeyup = function(event) {
    var guess = event.key;
    if (guesses > 0) {
        // checks string for matched guess //
        for (var i = 0; i < currarr.length; i++) {
            if (guess == currstr.charAt(i) && glist.indexOf(guess) === -1) {
                document.getElementById(String(i)).textContent = guess + " ";
                lcount = lcount + 1;
                console.log(lcount);
            }
        };
        // commands for failed guess //
        if (alph.indexOf(guess) !== -1 && glist.indexOf(guess) === -1 && currstr.indexOf(guess) === -1) {
            guesses = guesses -1;
            document.getElementById("guesscount").textContent = guesses;
            var newguess = document.createElement("span");
            newguess.textContent = guess + "  ";
            document.getElementById("glist").appendChild(newguess);
        };
        glist.push(guess);
        // commands for win //
        if (lcount == currarr.length) {
            wins = wins +1;
            document.getElementById("wincount").textContent = wins;
            document.getElementById("answerimg").src = "assets/images/" + String(rng) + ".jpg";
            document.getElementById("answer").textContent = currstr.toUpperCase();
            // question and variables reset //
            rng = Math.floor(Math.random() * 22);
            currstr = eval("arc" + rng);
            currarr = eval("arr" + rng);
            console.log("arcana" + rng);
            console.log(currstr);
            word.textContent = "";
            for (var i = 0; i < currarr.length; i++) {
                var blank = document.createElement("span");
                blank.id = String(i);
                blank.textContent = "_ ";
                word.appendChild(blank);
            };
            guesses = 12;
            document.getElementById("guesscount").textContent = guesses;
            lcount = 0;
            glist = [];
            document.getElementById("glist").textContent = "";
        };
        //commands for loss//
        if (guesses === 0) {
            glist = alph
            alert("GAME OVER")
            alert("Final Score: " + wins)
            alert("Refresh to try again.")
        }
    }
};