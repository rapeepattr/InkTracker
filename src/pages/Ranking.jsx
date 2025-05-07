import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Ranking = () => {
    const [ranks, setRanks] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/api/users/pages-ranking`)
            .then(res => {
                setRanks(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="overflow-x-auto w-[75%] mx-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Name</th>
                        <th>Pages Read</th>
                    </tr>
                </thead>
                <tbody>
                    {ranks.map((rank, index) => {
                        return (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar avatar-placeholder">
                                        <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                            <span className="text-md font-black uppercase">{rank.email[0]}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p className='font-bold capitalize'>{rank.email.split('@')[0]}</p>
                                        <p className='text-xs text-gray-500'>{rank.email}</p>
                                    </div>
                                </td>
                                <td className='text-3xl text-gray-500 font-black'>{rank.total_pages_read}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Ranking