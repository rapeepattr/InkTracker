import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [books, setBooks] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token') 

        if (!token) {
            setError('Token is missing. Please log in again.')
            return
        }

        axios.get('http://localhost:3000/api/books/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setBooks(res.data)
            })
            .catch((err) => {
                if (err.response && err.response.status === 401) {
                    setError('Unauthorized access. Please log in again.')
                } else {
                    console.error(error)
                    setError('An error occurred. Please try again later.')
                }
            })
    }, [])

    const getTotalPagesRead = () => {
        let total = 0
        books.forEach(book => {
            total += book.pages_read
        })
        return total
    }

    const getTopGenres = () => {
        const genreCount = {}
        books.forEach(book => {
            const genre = book.category
            genreCount[genre] = (genreCount[genre] || 0) + 1
        })

        let topGenre = ''
        let maxCount = 0

        for (const genre in genreCount) {
            if (genreCount[genre] > maxCount) {
                maxCount = genreCount[genre]
                topGenre = genre
            }
        }

        return topGenre
    }

    const getTotalFinishedBooks = () => {
        let totalFinished = 0
        books.forEach(book => {
            if (book.status === "success") {
                totalFinished += 1
            }
        })
        return totalFinished
    }

    const getMostReadAuthor = () => {
        const authorCount = {}
        books.forEach(book => {
            const author = book.author
            authorCount[author] = (authorCount[author] || 0) + 1
        })

        let topAuthor = ''
        let maxCount = 0

        for (const author in authorCount) {
            if (authorCount[author] > maxCount) {
                maxCount = authorCount[author]
                topAuthor = author
            }
        }

        return topAuthor
    }

    const totalPagesRead = getTotalPagesRead()
    const topGenre = getTopGenres()
    const totalFinishedBooks = getTotalFinishedBooks()
    const mostReadAuthor = getMostReadAuthor()

    const uniqueAuthors = [...new Set(books.map(book => book.author))];

    return (
        <div>
            <div className="flex mx-auto stats border border-base-300">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                        </svg>
                    </div>
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">{totalPagesRead}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Total Books Finished</div>
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                        </svg>
                    </div>
                    <div className="stat-value">{totalFinishedBooks}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                    <div className="stat-title">Total Authors</div>
                    <div className="stat-value">{uniqueAuthors.length}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                    </div>
                    <div className="stat-title">Total Books</div>
                    <div className="stat-value">{books.length}</div>
                </div>
            </div>

            <div className="flex mx-auto stats border border-base-300 mt-2">
                <div className="stat">
                    <div className="stat-title">Last Added</div>
                    <div className='flex items-center gap-3'>
                        <div className="stat-value text-lg">
                            {books.length > 0 ? books[books.length - 1].title : '-'}
                        </div>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title">Top Genres</div>
                    <div className='flex items-center gap-3'>
                        <div className="stat-value text-lg capitalize">
                            {topGenre}
                        </div>
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title">Most Read Author</div>
                    <div className='flex items-center gap-3'>
                        <div className="stat-value text-lg">
                            {mostReadAuthor}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative overflow-x-auto mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Number</th>
                            <th scope="col" className="px-6 py-3">Book title</th>
                            <th scope="col" className="px-6 py-3">Author</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Last Update</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={book.id}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</th>
                                <td className="px-6 py-4">{book.title}</td>
                                <td className="px-6 py-4">{book.author}</td>
                                <td className="px-6 py-4 capitalize">{book.category}</td>
                                <td className="px-6 py-4">
                                    {new Date(book.updated_at).toLocaleString('en-GB', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: false,
                                        timeZone: 'Asia/Bangkok'
                                    })}
                                </td>
                                <td className="px-6 py-4">
                                    <div className={`badge badge-soft font-semibold capitalize ${book.status === "success" ? 'badge-success' : 'badge-warning'}`}>
                                        {book.status}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {books.length === 0 ? <><p className="text-center mt-5 text-gray-400">No books to display. Please add a book</p></> : ''}
            </div>
        </div>
    )
}

export default Home
