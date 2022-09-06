//  Library
import express from 'express'

//  Routers
import api from './api'

//  Middlewares
import * as middleware from './middlewares'

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

app.use(middleware.notFound)
app.use(middleware.errorHandler)

//  ==============
export default app
//  ==============
