import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '9772A84A',
    database: 'booksdb'
})

connection.connect(() => {
    console.log('Connected to MySQL')
})

export default connection
