import express from 'express'
import db from '../db.js'

const router = express.Router()

router.get('/pages-ranking', (req, res) => {
    const sql = `
        SELECT 
            users.id,
            users.email,
            COALESCE(SUM(books.pages_read), 0) AS total_pages_read
        FROM users
        LEFT JOIN books ON users.id = books.user_id
        GROUP BY users.id
        ORDER BY total_pages_read DESC
    `

    db.query(sql, (err, result) => {
        if (err) {
            console.error('Database error:', err)
            return res.status(500).json({ message: 'Server error' })
        }
        res.json(result)
    })
})

export default router
