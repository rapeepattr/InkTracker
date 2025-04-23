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
        <div className='w-[80%] mx-auto'>
            <div className="stats shadow flex justify-center">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Total Pages</div>
                    <div className="stat-value text-primary">356</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Page Reads</div>
                    <div className="stat-value text-secondary">132</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${book.title.charAt(0)}`} />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">46%</div>
                    <div className="stat-title">Reads done</div>
                    <div className="stat-desc text-secondary">224 pages remaining</div>
                </div>
            </div>
        </div>
    )

}

export default BookDetail