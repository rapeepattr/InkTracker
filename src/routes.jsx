import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './contexts/authContext'
import Home from './pages/Home'
import AddBook from './pages/AddBook'
import EditBook from './pages/EditBook'
import BookDetail from './pages/BookDetail'
import BookList from './pages/BookList'
import Login from './pages/Login'
import Register from './pages/Register'
import Ranking from './pages/Ranking'

const AppRoutes = () => {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <Routes>
            <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
            <Route path="/add" element={isLoggedIn ? <AddBook /> : <Navigate to="/login" />} />
            <Route path="/edit/:id" element={isLoggedIn ? <EditBook /> : <Navigate to="/login" />} />
            <Route path="/books" element={isLoggedIn ? <BookList /> : <Navigate to="/login" />} />
            <Route path="/books/:id" element={isLoggedIn ? <BookDetail /> : <Navigate to="/login" />} />
            <Route path="/ranking" element={isLoggedIn ? <Ranking /> : <Navigate to="/login" />} />

            <Route
                path="/login"
                element={isLoggedIn ? <Navigate to="/" /> : <Login />}
            />
            <Route
                path="/register"
                element={isLoggedIn ? <Navigate to="/" /> : <Register />}
            />
        </Routes>
    )
}

export default AppRoutes