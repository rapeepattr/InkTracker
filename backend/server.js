import cors from 'cors'
import express from 'express'
import bookRoute from './routes/book.js'
import authRoute from './routes/auth.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/books', bookRoute)
app.use('/api/auth', authRoute)

app.listen(3000, () => {
    console.log('🚀 Server running at http://localhost:3000');
})
