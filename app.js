const express = require("express");
const app = express();
const dataLoader = require("./data-loader");
const getPhrase = require("./phrase-generator");

app.get("/get-phrase", function(req, res) {
	
	let response = {};
	
	res.setHeader('Content-Type', 'application/json');	
	res.set({ 'content-type': 'application/json; charset=utf-8' });

	dataLoader("data.json", function(data) {
		response.phrase = getPhrase(data);
	});

    res.end(JSON.stringify(response));
    
})

app.listen(process.argv[2])