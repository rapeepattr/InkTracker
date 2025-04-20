import React, { useState } from 'react'
import Toast from '../components/Toast'
import axios from 'axios'

const AddBook = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
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
            description: description
        }).then(() => {
            setTitle('')
            setAuthor('')
            setDescription('')
            showToast({message: 'Add book successfully'})
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
                <div className='flex flex-col gap-6'>
                    <p className='text-xl font-bold'>Please fill in your book information.</p>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Title</legend>
                        <input
                            type="text"
                            className="input"
                            placeholder="Type here"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Author</legend>
                        <input
                            type="text"
                            className="input"
                            placeholder="Type here"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Description</legend>
                        <input
                            type="text"
                            className="input"
                            placeholder="Type here"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </fieldset>
                </div>

                <div className="card w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <span className="badge badge-xs badge-warning">Self Improvement</span>
                        <div>
                            <h2 className="text-2xl font-bold">{title ? title : 'Book Title'}</h2>
                            <p>{author ? author : 'Author name'}</p>
                        </div>
                        <div className='mt-3'>
                            <p className='opacity-70'>{description ? description : 'The description will be displayed here'}</p>
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