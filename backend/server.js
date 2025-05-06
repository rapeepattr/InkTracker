import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bookRoute from './routes/book.js'
import authRoute from './routes/auth.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/books', bookRoute)
app.use('/api/auth', authRoute)

app.listen(3000, () => {
    console.log('🚀 Server running at http://localhost:3000')
})
