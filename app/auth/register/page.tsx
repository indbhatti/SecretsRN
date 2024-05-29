"use client"
import { register } from '@/actions/actions';
import Card from '../Card';
import { FormEvent, FormEventHandler } from 'react';
import { signIn } from 'next-auth/react';

export default function Register() {

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await register(formData);
    if (response.status == 200) {
      const res = await signIn('credentials', {
        redirect: true,
        email: formData.get("username"),
        password: formData.get("password"),
        callbackUrl: '/secrets'
      });
    }
  }

  return (
    <div className="container mt-5">
      <h1>Register</h1>

      <div className="row">
        <div className="col-sm-8">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}
                className="form-group">
                <label htmlFor="email">Email</label>

                <input
                  type="email"
                  autoComplete="on"
                  className="form-control"
                  name="username" />

                <label htmlFor="password">Password</label>

                <input
                  type="password"
                  autoComplete="on"
                  className="form-control"
                  name="password" />

                <button
                  type="submit"
                  className="btn btn-dark mt-3">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <Card auth="Facebook" />
          <Card auth="Google" />
        </div>

      </div>
    </div>
  );
}
