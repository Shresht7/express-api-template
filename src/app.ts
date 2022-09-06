//  Library
import express from 'express'
import api from './api'

//  -----------------
const app = express()
//  -----------------

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: "Hello World!"
    })
})

app.use('/api/v1', api)

//  ==============
export default app
//  ==============
