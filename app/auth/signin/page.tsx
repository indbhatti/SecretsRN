'use client'
import Card from "../Card"
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { FormEvent } from "react"


export default function Login() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const status = await signIn('credentials', {
      redirect: true,
      email: formData.get("username"),
      password: formData.get("password"),
      callbackUrl: '/secrets'
    });
    console.log(status);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>

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
          <Link className="btn btn-dark mt-3" href="/auth/register">Sign Up</Link>
        </div>

        <div className="col-sm-4">
          <Card auth="Facebook" />
          <Card auth="Github" />
          <Card auth="Google" />
        </div>

      </div>
    </div>

  );
}
