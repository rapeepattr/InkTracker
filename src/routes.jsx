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
    const { user } = useContext(AuthContext)

    return (
        <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/add" element={user ? <AddBook /> : <Navigate to="/login" />} />
            <Route path="/edit/:id" element={user ? <EditBook /> : <Navigate to="/login" />} />
            <Route path="/books" element={user ? <BookList /> : <Navigate to="/login" />} />
            <Route path="/books/:id" element={user ? <BookDetail /> : <Navigate to="/login" />} />
            <Route path="/ranking" element={user ? <Ranking /> : <Navigate to="/login" />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default AppRoutes