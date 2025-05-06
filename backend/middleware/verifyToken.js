import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No token provided' })
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret')
        req.user = decoded
        next()
    } catch (err) {
        console.error(err)
        return res.status(403).json({ message: 'Invalid token' })
    }
}
