'use client'
import Card from "../Card"
import Form from "../Form"
import Link from 'next/link'
import { signIn } from 'next-auth/react'


export default function Login() {
  async function submit({ username, password }: { username: string, password: string }) {
    const status = await signIn('credentials', {
      redirect: true,
      email: username,
      password: password,
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
            <Form submit={submit} formType="Login" />
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
