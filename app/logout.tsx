'use client'
import { signOut } from 'next-auth/react'

export default function() {
  return (
    <button className="btn btn-light btn-lg" onClick={() => { signOut(); }}>Log Out</button>
  )
}
