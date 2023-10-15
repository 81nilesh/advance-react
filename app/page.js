'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

const page = () => {
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(data)
  }

  useEffect(() => {
    getUsers()

  }, [])

  return (
    <>
      <button onClick={getUsers} className='bg-green-400 text-white 
      px-4 py-2
       rounded font-bold'>Get Data</button>
      <div className='p-8 bg-slate-100 mt-5'>
        {users.map((e) => {
          return <li>{e.username} --- <a href={`/${e.id}`}>Explore</a></li>
        })}
      </div>
    </>
  )
}

export default page;
