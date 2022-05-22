const fs = require('fs')
const crypto = require('crypto').webcrypto

// generate 32-bit non-negative integer, maximum value is 4294967295
function generateID(){
	data = JSON.parse(fs.readFileSync('./db/db.json'))
	let idArray = []
	data.forEach(element => {
		idArray.push(element.id)
	})


	var randomID = new Uint32Array(1)
	crypto.getRandomValues(randomID)
	while (idArray.includes(randomID[0])){
		crypto.getRandomValues(randomID)
	}

	return randomID[0]
}

