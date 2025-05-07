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
            <div className="navbar-center flex gap-5">
                {isLoggedIn && (
                    <Link to='/ranking' className="btn btn-soft btn-warning font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clipRule="evenodd" />
                        </svg>
                        Ranking
                    </Link>
                )}
            </div>
            <div className="navbar-end flex gap-5">
                {isLoggedIn ? (
                    <>
                        <div className="avatar avatar-online avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                <span className="text-md font-black uppercase">{userEmail[0]}</span>
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