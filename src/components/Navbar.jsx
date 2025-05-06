import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { useAuth } from '../contexts/authContext'

const Navbar = () => {
    const { isLoggedIn, userEmail, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start flex gap-5">
                <Link to='/' className="btn btn-ghost text-2xl font-extrabold">📚 InkTrack</Link>
                <Link to='/books' className="btn btn-soft btn-secondary font-bold">View Books</Link>
                <Link to='/add' className="btn btn-soft btn-success font-bold">+ Add Book</Link>
            </div>
            <div className="navbar-end flex gap-5">
                {isLoggedIn ? (
                    <>
                        <span className="font-semibold">👤 {userEmail}</span>
                        <button onClick={handleLogout} className="btn btn-outline btn-error">Logout</button>
                    </>
                ) : (
                    <Link to='/register' className="btn btn-info font-bold text-white">Sign In
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Navbar