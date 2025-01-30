"use client"

import { useState, useEffect } from "react"

interface User {
  _id: string
  name: string
  email: string
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users")
        if (!response.ok) {
          throw new Error("Failed to fetch users")
        }
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError("Error fetching users. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user._id} className="bg-white shadow rounded-lg p-4">
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

