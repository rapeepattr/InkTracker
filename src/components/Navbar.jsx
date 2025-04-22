import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost text-xl font-extrabold">📚 Reading Tracker</Link>
            </div>
            <Link to='/books' className="btn btn-soft btn-secondary font-bold">View Books</Link>
            <div className="navbar-end">
                <Link to='/add' className="btn btn-soft btn-success font-bold">+ Add Book</Link>
            </div>
        </div >
    )
}

export default Navbar