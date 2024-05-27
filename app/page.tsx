import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { options } from './api/auth/[...nextauth]/options';
import Logout from './logout';

export default async function Home() {
  const data = await getServerSession(options)
  return (
    <div className="jumbotron centered">
      <div className="container bg-body-tertiary rounded-3 py-5 box">
        <i className="fas fa-archive fa-6x"></i>
        <h1 className="display-3">Secrets</h1>
        <p className="lead">Don't keep your secrets, share them anonymously!</p>
        <hr />
        {data.user ? (
          <div>
            <Link className="btn btn-dark btn-lg" href="/secrets" role="button">Secrets</Link>
            <Logout />
          </div>
        ) : (
          <div>
            <Link className="btn btn-light btn-lg" href="/auth/register" role="button">Register</Link>
            <Link className="btn btn-dark btn-lg" href="/auth/signin" role="button">Login</Link>
          </div>
        )
        }

      </div>
    </div>
  );
}
