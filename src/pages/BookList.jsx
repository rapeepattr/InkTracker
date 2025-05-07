import { Link } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BookList = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token')

        axios.get('http://localhost:3000/api/books/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setBooks(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    const handleFavourite = () => {
        console.log('fav')
    }

    return (
        <ul className="list bg-base-100 rounded-box mx-auto w-[75%]">
            {books.length === 0 && (
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-primary-600 dark:text-primary-500">No Books Yet</h2>
                            <p className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                                Your library is empty.
                            </p>
                            <p className="mb-6 text-lg font-light text-gray-500 dark:text-gray-400">
                                Start adding books to build your personal reading list.
                            </p>
                            <Link to='/add' className="btn btn-soft btn-info font-bold">+ Add Book</Link>
                        </div>
                    </div>
                </section>

            )}
            {books && books.map((book) => {
                let process = (book.pages_read / book.pages_total) * 100

                return (
                    <li className="list-row" key={book.id}>
                        <div><img className="size-10 rounded-box" src={`https://api.dicebear.com/7.x/initials/svg?seed=${book.title.charAt(0)}`} /></div>
                        <div>
                            <p className='font-bold'>{book.title}</p>
                            <div className="text-xs font-semibold opacity-60">{book.author}</div>
                            <p className="list-col-wrap text-xs mt-5">
                                {book.description}
                            </p>
                            <progress className="progress progress-warning w-100 mt-3" value={process} max="100"></progress>
                        </div>
                        <Link to={`/books/${book.id}`} className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                        </Link>
                        <Link
                            className="btn btn-square btn-ghost"
                            onClick={handleFavourite}
                        >
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default BookList