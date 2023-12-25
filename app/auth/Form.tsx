'use client'

import { useState } from 'react';

interface Props {
  formType: string,
  submit(user: { username: string, password: string }): void;
}

export default function Form({ submit, formType }: Props) {
  const [user, setUser] = useState({ username: '', password: '' })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
    // console.log(user);
  };


  return (
    <div className="card-body">
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} id="email" type="email" autoComplete="on" className="form-control" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input onChange={handleChange} id="password" type="password" autoComplete="on" className="form-control" name="password" />
        </div>
        <button onClick={() => {
          submit(user);
        }} type="button" className="btn btn-dark mt-3">{formType}</button>
      </form>
    </div>
  );
}
