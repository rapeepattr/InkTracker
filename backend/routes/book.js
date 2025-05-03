import express from 'express'
import db from '../db.js'

const router = express.Router()

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM books'

    db.query(sql, (err, result) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ message: 'Database error' })
        }
        res.json(result)
    })
})

router.post('/', (req, res) => {
    const sql = `INSERT INTO books (title, author, description, pages_total, pages_read, category, status, is_favourite) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    const values = [req.body.title, req.body.author, req.body.description, req.body.pages_total, 0, req.body.category, req.body.status, false]

    db.query(sql, values, (err, result) => {
    if (err) {
            console.error(err)
            return res.status(500).json({message: 'Database error'})
        }
        res.json({
            id: result.insertId,
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            pages_total: req.body.pages_total,
            category: req.body.category
        })
    })
})

router.get('/:id', (req, res) => {
    const sql = `SELECT * FROM books WHERE id=${req.params.id}`

    db.query(sql, (err, result) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ message: 'Server Error' })
        }
        res.json(result)
    })
})

router.put('/:id', (req, res) => {
    const sql = `UPDATE books SET title=?, author=?, description=? WHERE id=?`
    const values = [req.body.title, req.body.author, req.body.description, req.params.id]

    db.query(sql, values, (err) => {
        if (err) {
            console.error(err)
            return res.status(500).json({message: 'Database error'})
        }
        res.json({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description
        })
    })
})

router.delete('/:id', (req, res) => {
    const sql = `DELETE FROM books WHERE id=${req.params.id}`

    db.query(sql, (err) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ message: 'Database Error' })
        }
        res.json({message: `Delete item ${req.params.id} succesfully`})
    })
})

export default router