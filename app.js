import express from 'express'
import logger from 'morgan'
import cors from 'cors'


import postRoutes from './routes/posts.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/api', postRoutes);

export default app;