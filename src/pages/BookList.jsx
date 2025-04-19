import { Link } from 'react-router-dom'
import React from 'react'

const BookList = () => {
    return (
        <ul className="list bg-base-100 rounded-box shadow-md mx-auto w-[75%]">
            <li className="list-row">
                <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                <div>
                    <p className='font-bold'>Atomic Habits</p>
                    <div className="text-xs uppercase font-semibold opacity-60">James Clear</div>
                </div>
                <p className="list-col-wrap text-xs">
                    A book about building good habits and breaking bad ones.
                </p>
                <Link to='/books/3' className="btn btn-square btn-ghost">
                    <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                </Link>
                <Link className="btn btn-square btn-ghost">
                    <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                </Link>
            </li>
        </ul>
    )
}

export default BookList