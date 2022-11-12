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