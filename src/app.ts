//  Library
import express from 'express'

//  Initialize Express App
const app = express()

app.get('/', (req, res) => {
    res.json({
        message: "Hello World!"
    })
})

//  ==============
export default app
//  ==============
