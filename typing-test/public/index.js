//this is where code for things like creating the coding test will go


//creates the text for the normal text prompt
let article = txtgen.article();
//const?


function generateNormTest(){



    //use article var
}

function generateChaosTest(){
//generate random string of 1000 characters cap/lowercase/symbols
let chaosString = new random_string(/^[0-9,A-Z,a-z,$&+,:;=?@#|'<>.^*()%!-]{1000}$/);
//the symbols might break things
//not tested

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

//let userinput = however we get the user input



//step 1: convert the user's imput to a string.

//step 2: count the number of words in the imput string (number of spaces +1? there might also be a javascript method)

//step 3: maybe convert both strings into an array of words and do a for loop for the number of words in the imput string, then compare the words? Or it's probably be better to compare the indivdual letters since you can compare var indexes on strings, that way one letter wrong takes a point off instead of a word wrong takes a point off. This method can also be used on choas mode. Step 3 might just be the errorCheck function.



//wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60));
}

function scoreResultsChaos(){
    //scores the results of a chaos test


}



