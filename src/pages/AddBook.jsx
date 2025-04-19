import React from 'react'

const AddBook = () => {
    return (
        <div className='flex justify-center mx-auto gap-10'>
            <div className='flex flex-col gap-6'>
                <p className='text-xl font-bold'>Please fill in your book information.</p>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Name</legend>
                    <input type="text" className="input" placeholder="Type here" />
                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Author</legend>
                    <input type="text" className="input" placeholder="Type here" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Description</legend>
                    <input type="text" className="input" placeholder="Type here" />
                </fieldset>
            </div>

            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <span className="badge badge-xs badge-warning">Self Improvement</span>
                    <div>
                        <h2 className="text-2xl font-bold">Atomic Habit</h2>
                        <p>James Clear</p>
                    </div>
                    <div className='mt-3'>
                        <p className='opacity-70'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia amet rem deserunt. Numquam dolores quod explicabo vero! Consectetur, consequatur repellat.</p>
                    </div>
                    <div className="mt-6">
                        <button className="btn btn-outline btn-success btn-block font-extrabold">+ Add Book</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBook