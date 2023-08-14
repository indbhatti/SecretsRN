'use client'

import { useState } from 'react';


export default function Form() {
  const [user, setUser] = useState({ username: '', password: '' })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
    console.log(user);
  };

  async function submit() {
    try {
      const response = await fetch('http://localhost:3000/api/user', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to submit user data');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="card-body">
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} type="email" className="form-control" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input onChange={handleChange} type="password" className="form-control" name="password" />
        </div>
        <button onClick={submit} type="button" className="btn btn-dark mt-3">Login</button>
      </form>
    </div>
  );
}
