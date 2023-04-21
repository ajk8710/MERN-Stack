// `` - Use backticks to write any kind of string or html element and JS engine will take care of everything
// ${} - Use ${} to evaluate variable values

let {animalSounds, animalSoundsES6} = require("./day10_shorthands");

console.log("Random string that i wanted to type here for template literals" +
" Random string that i wanted to type here for template literals " +
" Random string that i wanted to type here for template literals \n" +
" Random string that i wanted to type here for template literals " +
" Random string that i wanted to type here for template literals " +
JSON.stringify(animalSounds));

// using backstics
console.log(`Random string that i wanted to type here for template literals 
Random string that i wanted to type here for template literals
    Random string that i wanted to type here for template literals
Random string that i wanted to type here for template literals 
                                Random string that i wanted to type here for template literals 
                                <div><b>Some Values</b></div>
           ${JSON.stringify(animalSoundsES6)}                     `);
