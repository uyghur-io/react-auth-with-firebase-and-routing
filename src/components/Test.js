import React from 'react'
import { useAuth } from "../contexts/AuthContext"

export default function Test() {
  const { loginWithGoogle } = useAuth()

  async function handle() {
    try {
      await loginWithGoogle()
    } catch {
      console.log('err')
    }
  }

  return (
    <div>
      <button onClick={ () => handle() }>Login</button>
    </div>
  )
}
