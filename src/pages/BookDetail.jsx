import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'

const BookDetail = () => {
    const { id } = useParams()
    const [book, setBook] = useState(null)
    const [pagesRead, setPagesRead] = useState(0)
    const [progress, setProgress] = useState(0)
    const [page, setPage] = useState(0)
    const [pagesRemain, setPagesRemain] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/api/books/${id}`)
            .then(res => {
                setBook(res.data[0])
                setPage(res.data[0].pages_read)
                setPagesRead(res.data[0].pages_read)
                setProgress(((res.data[0].pages_read / res.data[0].pages_total) * 100).toFixed(2))
                setPagesRemain(res.data[0].pages_total - res.data[0].pages_read)
            })
            .catch(err => console.error(err))
    }, [id])

    const handleRemove = (id) => {
        console.log(id)
        axios.delete(`http://localhost:3000/api/books/${id}`)
            .then(() => navigate('/books'))
    }

    const handleSave = () => {
        axios.put(`http://localhost:3000/api/books/${id}`, {
            pages_read: page
        }).then(() => {
            setPagesRead(page)
            setProgress(((page / book.pages_total) * 100).toFixed(2))
            setPagesRemain(book.pages_total - page)
        })
    }

    if (!book) return <div className="text-center mt-10">Loading...</div>
    return (
        <div className='w-[80%] mx-auto'>
            <div className='flex gap-3'>
                <div>
                    <div className="stats border border-base-300 flex justify-center">
                        <div className="stat">
                            <div className="stat-title">Total Pages</div>
                            <div className="stat-value">{book.pages_total}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Page Reads</div>
                            <div className="stat-value">{pagesRead}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-value">{progress} %</div>
                            <div className="stat-title">Reads done</div>
                            <div className="stat-desc text-secondary">{pagesRemain} pages remaining</div>
                        </div>
                    </div>

                    <div className="stats border border-base-300 flex mt-3">
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                        <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${book.title.charAt(0)}`} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className="stat-value">{book.title}</div>
                            </div>
                            <div className="stat-desc">{book.author}</div>
                            <div className="stat-desc mt-[2rem] whitespace-pre-line break-words min-w-md">
                                {book.description}
                            </div>

                            <div className='mt-5 flex gap-2'>
                                <button className="btn btn-circle btn-soft btn-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </button>
                                <button className="btn btn-circle btn-soft btn-error" onClick={() => handleRemove(id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="stats border border-base-300 w-full">
                    <div className="stat justify-items-center items-center text-center">
                        <div className="stat-title text-gray-500 text-sm">Total Pages You've Read</div>
                        <div className='flex gap-4 justify-center items-center mt-3'>
                            <button
                                className="btn btn-circle btn-error text-white text-lg btn-sm font-bold"
                                onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                            >
                                -
                            </button>
                            <div>
                                <div className="stat-value text-5xl">{page}</div>
                            </div>
                            <button
                                className="btn btn-circle btn-success text-white text-lg btn-sm font-bold"
                                onClick={() => setPage((prev) => Math.min(prev + 1, book.pages_total))}
                            >
                                +
                            </button>
                        </div>

                        <progress className="progress progress-warning w-56" value={progress} max="100"></progress>
                        <button
                            className="btn btn-soft btn-warning mt-4 font-semibold"
                            onClick={() => handleSave()}
                        >
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