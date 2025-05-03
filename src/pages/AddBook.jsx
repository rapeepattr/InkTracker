import React, { useState } from 'react'
import Toast from '../components/Toast'
import axios from 'axios'

const AddBook = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [totalPages, setTotalPages] = useState(0)
    const [category, setCategory] = useState('')
    const [toast, setToast] = useState(null)

    const showToast = ({ message, type = 'success' }) => {
        setToast({ message, type })
    }

    const handleSubmit = () => {
        if (!title || !author || !description) {
            showToast({ message: 'Please fill in all fields before submitting', type: 'error' })
            return
        }

        axios.post('http://localhost:3000/api/books/', {
            title: title,
            author: author,
            description: description,
            pages_total: totalPages,
            category: category,
            status: "reading"
        }).then(() => {
            setTitle('')
            setAuthor('')
            setDescription('')
            setCategory(''),
            setTotalPages(0)
            showToast({ message: 'Add book successfully' })
        })
            .catch(() => showToast({ message: 'Something went wrong', type: 'error' }))
    }

    return (
        <>
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
            <div className='flex justify-center mx-auto gap-10'>
                <div className='flex flex-col gap-2'>
                    <p className='text-xl font-bold'>Please fill in your book information.</p>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Title</legend>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Type here"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Author</legend>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Type here"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Description</legend>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Type here"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </fieldset>
                    <div className='flex gap-3'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Total Pages</legend>
                            <input
                                type="number"
                                className="input w-full"
                                placeholder="Type here"
                                value={totalPages}
                                onChange={(e) => setTotalPages(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset flex-1">
                            <legend className="fieldset-legend">Category</legend>
                            <select
                                className="select w-full"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}>
                                <option value='' disabled>Choose a category</option>
                                <option value="fiction">Fiction</option>
                                <option value="non-fiction">Non-fiction</option>
                                <option value="sci-fi">Sci-fi</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="biography">Biography</option>
                                <option value="psychology">Psychology</option>
                                <option value="self-help">Self-help</option>
                                <option value="personal-development">Personal-development</option>
                                <option value="bussiness">Bussiness</option>
                                <option value="history">History</option>
                                <option value="education">Education</option>
                                <option value="romance">Romance</option>
                                <option value="mystery">Mystery</option>
                                <option value="horror">Horror</option>
                            </select>
                        </fieldset>

                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <span className="badge badge-sm font-bold badge-warning capitalize">{category ? category : 'Your category'}</span>
                        <div>
                            <h2 className="text-2xl font-bold">{title ? title : 'Book Title'}</h2>
                            <p className='mt-2 font-semibold'>{author ? author : 'Author name'}</p>
                        </div>
                        <div className='mt-3'>
                            <p className='opacity-70'>{description ? description : 'The description will be displayed here'}</p>
                        </div>
                        <div className='mt-3'>
                            <p className='opacity-10 text-3xl font-extrabold'>{totalPages} <span className='text-xl'>PAGES</span></p>
                        </div>
                        <div className="mt-6">
                            <button onClick={() => handleSubmit()} className="btn btn-outline btn-success btn-block font-extrabold">+ Add Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBook