import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'

const BookDetail = () => {
    const { id } = useParams()
    const [book, setBook] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/api/books/${id}`)
            .then(res => setBook(res.data[0]))
            .catch(err => console.error(err))
    }, [id])

    const handleRemove = (id) => {
        console.log(id)
        axios.delete(`http://localhost:3000/api/books/${id}`)
            .then(navigate('/books'))
    }

    if (!book) return <div className="text-center mt-10">Loading...</div>
    return (
        <div className='flex w-fit mx-auto gap-5'>
            <div className="stats stats-vertical shadow">
                <div className="stat">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>
                <div className="stat">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>

            <div className="flex card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <span className="badge badge-xs badge-warning">Self Improvement</span>
                    <div>
                        <h2 className="text-2xl font-bold">{book.title}</h2>
                        <p>{book.author}</p>
                    </div>
                    <div className='mt-3'>
                        <p className='opacity-70'>{book.description}</p>
                    </div>
                    <div className="mt-6 flex flex-col gap-2">
                        <button
                            className="btn btn-outline btn-warning btn-block font-extrabold"
                        >
                            Edit Book
                        </button>
                        <button
                            className="btn btn-outline btn-error btn-block font-extrabold"
                            onClick={() => handleRemove(book.id)}
                        >
                            Remove Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BookDetail