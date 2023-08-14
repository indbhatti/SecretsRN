import Link from 'next/link';
// import { options } from '../api/auth/[...nextauth]/options'
// import { getServerSession } from 'next-auth/next'
import Users from './Users'
export default function Secrets() {
  // const session = await getServerSession(options);
  return (
    <div className="jumbotron text-center mt-5">
      <i className="fas fa-user-secret fa-6x"></i>
      <div className="container box mt-5">
        <Link className="btn btn-dark btn-lg" href="/submit" role="button">Submit a Secret</Link>
        <hr />
        <h1 className="display-3 my-4">I hope you don't find out it was me!</h1>
        <Users />
      </div>
    </div>
  );
}
// {session
//   &&
//   <Link className="btn btn-light btn-lg" href="/logout" role="button">Log Out</Link>}
