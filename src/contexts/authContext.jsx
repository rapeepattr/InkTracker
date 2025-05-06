import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import { createContext } from "react"
import { useContext } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userEmail, setUserEmail] = useState(null)

    useEffect(() => {
        const checkToken = () => {
            const token = localStorage.getItem('token')
            if (token) {
                try {
                    const decoded = jwtDecode(token)
                    setIsLoggedIn(true)
                    setUserEmail(decoded.email)
                } catch {
                    setIsLoggedIn(false)
                    setUserEmail(null)
                    localStorage.removeItem('token')
                }
            } else {
                setIsLoggedIn(false)
                setUserEmail(null)
            }
        }

        checkToken()

        window.addEventListener('storage', checkToken)
        return () => window.removeEventListener('storage', checkToken)
    }, [])


    const login = (token) => {
        localStorage.setItem('token', token)
        const decoded = jwtDecode(token)
        setIsLoggedIn(true)
        setUserEmail(decoded.email)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
        setUserEmail(null)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
