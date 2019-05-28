//Implementado por Ericka Zavala
exports.quote_of_the_day= function()
{
	let fs = require("fs");
	let content= fs.readFileSync("tests/mod4_quotes_of_the_day.json");
	let jsonContent=JSON.parse(content);
	console.log("quote_of_the_day:");

	//Generamos numero random entre 0 y 3
	let num= Math.floor(Math.random()*3);
	console.log(jsonContent[num]);
};