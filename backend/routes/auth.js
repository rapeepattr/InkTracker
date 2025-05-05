import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" })
        }

        const sql = `INSERT INTO users (email, password) VALUES (?, ?)`
        const values = [email, hashedPassword]

        db.query(sql, values, (err) => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    return res.status(409).json({ message: "Email already registered" })
                }
                console.error(err)
                return res.status(500).json({ message: "Database error" })
            }
            return res.status(201).json({ message: 'User registered successfully' })
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Server error" })
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" })
        }

        const sql = `SELECT * FROM users WHERE email = ?`
        db.query(sql, [email], async (err, results) => {
            if (err) {
                console.error(err)
                return res.status(500).json({ message: "Database error" })
            }

            if (results.length === 0) {
                return res.status(401).json({ message: "Invalid email or password" })
            }

            const user = results[0]
            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(401).json({ message: "Invalid email or password" })
            }

            const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' })

            return res.status(200).json({ message: "Login successful", token })
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Server error"})
    }
})

export default router