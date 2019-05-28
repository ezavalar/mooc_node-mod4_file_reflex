    // Imports user module mod4-quote_of_the_day.js
let my_mod = require("./mod4_quote_of_the_day.js");
let fs = require("fs");   // Imports file system module

console.log();
my_mod.quote_of_the_day();

let delay = ((Math.ceil(Math.random()*5))*1000).toFixed(0);
setTimeout(reflexes, delay);


function reflexes() {

    // ... include code here
    //Implementado por Ericka Zavala
    let t= new Date();
    console.log("Press return:");
    process.stdin.on("data", function(line){
    	console.log("Your time is: "+t.getMilliseconds()+"ms");
    	process.exit(0);
    });

};

