'use client'
import Card from "../Card"
import Form from "../Form"
import { signIn } from 'next-auth/react'


export default function Login() {
  async function submit(user: { username: string, password: string }) {
    const result = await signIn('credentials', {
      username,
      password,
      // You can add other fields here
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>

      <div className="row">
        <div className="col-sm-8">
          <div className="card">
            <Form submit={submit} formType="Login" />
          </div>
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
