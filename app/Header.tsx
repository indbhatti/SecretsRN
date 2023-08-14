import Link from 'next/link';

export default function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <i className="fas fa-key fa-3x"></i>
          <div className="px-4">
            <span className="fs-4">Secrets</span><span className="fs-5 px-1 text-secondary">shhhh</span>
          </div>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link href="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link href="/secrets" className="nav-link">Secrets</Link></li>
          <li className="nav-item"><Link href="/submit" className="nav-link">Submit</Link></li>
        </ul>
      </header>
    </div>
  );
}
