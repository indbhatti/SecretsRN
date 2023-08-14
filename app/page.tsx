import Link from 'next/link';

export default function Home() {
  return (
    <div className="jumbotron centered">
      <div className="container bg-body-tertiary rounded-3 py-5 box">
        <i className="fas fa-archive fa-6x"></i>
        <h1 className="display-3">Secrets</h1>
        <p className="lead">Don't keep your secrets, share them anonymously!</p>
        <hr />
        <Link className="btn btn-light btn-lg" href="/auth/register" role="button">Register</Link>
        <Link className="btn btn-dark btn-lg" href="/auth/signin" role="button">Login</Link>

      </div>
    </div>
  );
}
