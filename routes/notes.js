const fs = require('fs')
const notes = require('express').Router()
const {readAndAppend, readFromFile, writeToFile} = require('../helpers/fsUtils')

notes.get('/', (req, res) => {
	readFromFile('./db/db.json').then((data) => {
		res.json(JSON.parse(data))
	})
})










module.exports = notes