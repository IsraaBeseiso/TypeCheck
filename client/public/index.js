//this is where code for things like creating the coding test will go


//creates the text for the normal text prompt
let article = txtgen.article();
//const?


function generateNormTest(){



    //use article var
}

//tried to regex this out, could use the package at http://fent.github.io/randexp.js/

var charArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "%", "^", "&", "*", ".", "~", "|", "_", "+", "="];


//75 chars

//generate random string of 1000 characters cap/lowercase/symbols


function generateChaosTest(){
//generate random string of 1000 characters cap/lowercase/symbols
var chaosString = "";
for (let i = 1; i < 1000; i++) {

    let newLetter = charArray[Math.floor(Math.random() * 75)];
    chaosString += newLetter;
}



//regex test that didn't work, but might with a package
//let chaosString = new random_string(/^[0-9,A-Z,a-z,$&+,:;=?@#|'<>.^*()%!-]{1000}$/);


}


//does the countdown 
function testTimer(){
 

    var timer=60;
clockTimer = setInterval(function () {
    //if we want to use jquery instead of react to change the html
    //timerLeft.innerHTML = "TimeLeft: " + timer;
    timer--;
    if (timer < 1)
    { clearInterval(timer);
    //put when time is out function name here
    }
    }, 1000);
    //input_area.disabled = true; 

    
}

//note the scoring and error check functions haven't been tested

function errorCheck(){
    for (let i = 0; i < userinput.length; i++) {
        if (userinput[i] != article[i]) {
            errors++;
            //if we want to subtract score
            wpm--;
        }
      
     
     }
     
     
     
 }
    //checks the number of characters in what the user typed and trims the prompt down to that amount, then compares the letters and adds an error each time that they don't match up.


function scoreResultsNorm(){
//scores results of a normal test


userLength = userinput.length;

let wpm = 0;
//trims the article down the how many character the user typed so they can be compared character by character
var trimmedArticle = article.substring(0, userLength);

for (let i = 0; i < userinput.length; i++) {
    //counts the number of spaces in the original trimmed article and that is your word count
    if (article[i] === " ") {
        wpm++;
    }
    
    }

    errorCheck();



//wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60));
}

function scoreResultsNorm(){
    //scores the results of a chaos test

    //let userinput = however we get the user input

    userLength = userinput.length;


//trims the prompt down the how many character the user typed so they can be compared character by character
var trimmedChaos = chaosString.substring(0, userLength);
userLength = userinput.length;
let wpm = userLength;

errorCheck();



}



