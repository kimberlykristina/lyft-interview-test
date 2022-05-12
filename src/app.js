const express = require('express')
const app = express()
const {getEvery} = require('./utils/parsing')

app.use(express.json())

app.post('/test', (req, res) => {

    console.log(req.body)
    
    const {string_to_cut} = req.body
    
    if(!string_to_cut){
        const status = 500
        res.send(`- ${status} - Malformed Request. Try sending request with 'string_to_cut' prop in body`).status(status)
        return 
    }
    
    try{
        const getEveryThirdLetter = getEvery(3)
        const output = getEveryThirdLetter(string_to_cut)
        res.json({return_string : output}).status(200)
    }catch(err){
        console.error(err)
        res.status(500).send(`Oops something went wrong - ${err.message}`)
    }

})

app.all('*', (req, res) => {
    const status = 404
    res.send(`Resource Not Found - ${status}`).status(status)
})

module.exports = app