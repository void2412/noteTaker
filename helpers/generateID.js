const fs = require('fs');
const crypto = require('crypto').webcrypto
const path = require('path')

// generate 32-bit non-negative integer, maximum value is 4294967295
const generateId =  () => {	 
	var data = fs.readFileSync(path.join(__dirname, '../db/db.json'))
	let idArray = []
		if(data.length > 0){
			jsonData = JSON.parse(data)
			if (jsonData.length > 0){
				jsonData.forEach(element => {
					idArray.push(element.id)
				})
			}
		}

		var randomID = new Uint32Array(1)
		crypto.getRandomValues(randomID)
		while (idArray.includes(randomID[0])){
			crypto.getRandomValues(randomID)
		}
		
		return randomID[0]
}

module.exports = generateId