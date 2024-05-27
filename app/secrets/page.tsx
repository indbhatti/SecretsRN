import Link from 'next/link';
import { options } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import Users from './Users'
import Logout from '../logout'
import { Suspense } from 'react';

export default async function Secrets() {
  const data = await getServerSession(options)
  const email = " ";
  if (data && data.user && data.user.email) {
    const email = JSON.stringify(data.user.email);
  }

  return (
    <div className="jumbotron text-center mt-5">
      <i className="fas fa-user-secret fa-6x"></i>
      <div className="container box mt-5">
        {data && data.user && data.user.email &&
          <div>
            <h1>Email: {data.user.email}</h1>
            <Logout />
          </div>
        }
        <Link className="btn btn-dark btn-lg mx-1" href="/submit" role="button">Submit a Secret</Link>
        <hr />
        <h1 className="display-3 my-4">I hope you don't find out it was me!</h1>
        <Suspense fallback={<p className="secret-text rounded-3">loading...</p>}>
          <Users />
        </Suspense >
      </div>
    </div>
  );
}

