import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { useAuth } from '../contexts/authContext'

const Navbar = () => {
    const { isLoggedIn, userEmail, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start flex gap-5">
                {isLoggedIn ? (
                    <>
                        <Link to='/' className="btn btn-ghost text-2xl font-extrabold">📚 InkTrack</Link>
                        <Link to='/books' className="btn btn-soft btn-secondary font-bold">View Books</Link>
                        <Link to='/add' className="btn btn-soft btn-success font-bold">+ Add Book</Link>
                    </>
                ) : (
                    <Link className="btn btn-ghost text-2xl font-extrabold">📚 InkTrack</Link>
                )}
            </div>
            <div className="navbar-end flex gap-5">
                {isLoggedIn ? (
                    <>
                        <div className="avatar avatar-online avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                <span className="text-md font-black">{userEmail[0]}</span>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold'>{userEmail.split('@')[0]}</p>
                            <p className='text-xs text-gray-500'>{userEmail}</p>
                        </div>
                        <button onClick={handleLogout} className="btn btn-outline btn-error font-bold">Logout</button>
                    </>
                ) : (
                    <Link to='/login' className="btn btn-info font-bold text-white">Sign In
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