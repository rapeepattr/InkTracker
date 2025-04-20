import React, { useEffect } from 'react'

const Toast = ({ message, type = 'success', duration = 2000, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, duration)

        return () => clearTimeout(timer)
    }, [duration, onClose])

    return (
        <div className="toast toast-top toast-center z-50">
            <div className={`alert alert-${type}`}>
                <span>{message}</span>
            </div>
        </div>
    )
}

export default Toast
