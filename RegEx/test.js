let myString = "Hello, World!";
let myRegex = /Hello/;

let result = myRegex.test(myString); // true
// .test()

// | OR Alternation
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;

// i - ignore case
let myFccString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;

// .match()
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); // ["expressions"]

// g - global search
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
twinkleStar.match(starRegex); // [ 'Twinkle', 'twinkle' ]

// /hu./ -> .  
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./; // hum & hug 

// []
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bogStr.match(bgRegex); // null

// []
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex1 = /[a-e0-5]at/; // a through e 
matStr.match(bgRegex1); // null


// ^ exclude characters
let myExcludeRegex = /[^aeiou0-9]/gi;

// a+ -> one or more 
let difficultSpelling = "Mississippi";
let myRegex2 = /s+/g; // ss ss

// a* -> zero or more 
let soccerWord = "gooooooooal!"; // ["goooooooo"]
let gPhrase = "gut feeling"; // ["g"]
let oPhrase = "over the moon"; // null
let goRegex = /go*/;

let text = "<h1>Winter is coming</h1>";
let myGreedyRegex = /<.*>/;
text.match(myGreedyRegex);
/*
[
  '<h1>Winter is coming</h1>',
  index: 0,
  input: '<h1>Winter is coming</h1>',
  groups: undefined
]
*/
let myLazyRegex = /<.*?>/;
text.match(myLazyRegex);
/*
[
  '<h1>',
  index: 0,
  input: '<h1>Winter is coming</h1>',
  groups: undefined
]
*/

// beginning
let firstString = "Ricky is first and can be found."; // true
let firstRegex = /^Ricky/;
let notFirst = "You can't find Ricky now."; // false

// ending
let theEnding = "This is a never ending story"; // true
let storyRegex = /story$/;
let noEnding = "Sometimes a story will have to end"; // false

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;

let shortHand2 = /\W/;
let numbers = "42%"; // ["%"]
let sentence = "Coding!"; // ["!"]

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
let nonSpaceRegex = /\S/g;

let A4 = "aaaah"; // true
let A2 = "aah"; // false
let multipleA = /a{3,5}h/;

let multipleA3 = /ha{3,}h/; // >=3
let multipleHA = /ha{3}h/; // ==3

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/; // true true 

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
// ["q"]

let password = "abc123";
// for between 3 and 6 characters and at least one number:
let checkPass = /(?=\w{3,6})(?=\D*\d)/;

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");