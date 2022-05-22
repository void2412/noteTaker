const notes = require('express').Router()
const {v4: uuidv4} = require('uuid')
const {readAndAppend, readFromFile, writeToFile} = require('../helpers/fsUtils')
const {generateID} = require('../helpers/generateID')
notes.get('/', (req, res) => {
	readFromFile('./db/db.json').then((data) => {
		res.json(JSON.parse(data))
	})
})

notes.post('/', (req, res) => {
	const data = req.body
	const payload  = {
		id: uuidv4(),
		data
	}
	readAndAppend(payload, './db/db.json')
	res.json('Successfully saved note')
})

note.delete('/:id', (req, res) => {
	const noteID = req.params.id
	readFromFile('./db/db.json').then((data) =>{
		jsonData = JSON.parse(data)
	})
})






module.exports = notes