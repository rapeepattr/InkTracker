import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddBook from './pages/AddBook'
import EditBook from './pages/EditBook'
import BookDetail from './pages/BookDetail'
import BookList from './pages/BookList'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit/:id" element={<EditBook />} />
            <Route path='/books' element={<BookList />} />
            <Route path="/books/:id" element={<BookDetail />}></Route>
        </Routes>
    )
}

export default AppRoutes