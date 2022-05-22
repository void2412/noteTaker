const notes = require('express').Router()
const path = require('path')
const {readAndAppend, readFromFile, writeToFile} = require('../helpers/fsUtils')
const generateId  = require('../helpers/generateID')
notes.get('/', (req, res) => {
	readFromFile('./db/db.json').then((data) => {
		if (data.length > 0) {
			res.json(JSON.parse(data))
		}
		
	})
})

notes.post('/', (req, res) => {
	const data = req.body
	const payload  = {
		id: generateId(),
		title: data.title,
		text: data.text
	}
	readAndAppend(payload, './db/db.json')
	res.json('Successfully saved note')
})

notes.delete('/:id', (req, res) => {
	const noteID = req.params.id
	readFromFile('./db/db.json').then((data) =>{
		if(data.length > 0) {
			jsonData = JSON.parse(data)
			if (jsonData.find(object => object.id == noteID) != undefined){
				var filteredData = jsonData.filter(function(object){
					return object.id != noteID
				})
				writeToFile(path.join(__dirname, '../db/db.json'), filteredData)
				res.json('Successfully deleted note')
			}
			else{
				res.json("Could not find any note with that ID")
			}
			
		}
	})
})






module.exports = notes