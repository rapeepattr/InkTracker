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
            <div className='flex gap-3'>
                <div>
                    <div className="stats border border-base-300 flex justify-center">
                        <div className="stat">
                            <div className="stat-title">Total Pages</div>
                            <div className="stat-value">356</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Page Reads</div>
                            <div className="stat-value">132</div>
                        </div>

                        <div className="stat">
                            <div className="stat-value">46%</div>
                            <div className="stat-title">Reads done</div>
                            <div className="stat-desc text-secondary">224 pages remaining</div>
                        </div>
                    </div>

                    <div class="stats border border-base-300 flex mt-3">
                        <div class="stat">
                            <div className="stat-figure text-secondary">
                                <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                        <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${book.title.charAt(0)}`} />
                                    </div>
                                </div>
                            </div>
                            <div class="stat-value">Atomic Habit</div>
                            <div class="stat-desc">James Clear</div>
                            <div class="stat-desc mt-[2rem]">A practical guide to building good habits and breaking bad ones.</div>
                        </div>
                    </div>
                </div>

                <div className="stats border border-base-300 w-full">
                    <div className="stat justify-items-center items-center text-center">
                        <div className="stat-title text-gray-500 text-sm">Total Pages You've Read</div>
                        <div className='flex gap-4 justify-center items-center mt-3'>
                            <button className="btn btn-circle btn-error text-white text-lg btn-sm font-bold">
                                -
                            </button>
                            <div>
                                <div className="stat-value text-5xl">132</div>
                            </div>
                            <button className="btn btn-circle btn-success text-white text-lg btn-sm font-bold">
                                +
                            </button>
                        </div>

                        <progress className="progress progress-warning w-56" value="70" max="100"></progress>
                        <button className="btn btn-soft btn-warning mt-4 font-semibold">
                            Save My Progress
                        </button>

                        <div className="text-xs text-gray-400 mt-2">
                            Update the number of pages you've read so far 📘
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto mt-8">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Action</th>
                            <th>Pages read</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>24 Apr 2025</td>
                            <td>12:10 AM</td>
                            <td>Add reads</td>
                            <td>16</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default BookDetail