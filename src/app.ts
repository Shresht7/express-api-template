//  Library
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

//  Routers
import api from './api'

//  Middlewares
import * as middleware from './middlewares'

//  Type Definitions
import { MessageResponse } from './types'

//  dotenv
import dotenv from 'dotenv'
dotenv.config()

//  -----------------
const app = express()
//  -----------------

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get<{}, MessageResponse>('/', (req, res) => {
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
