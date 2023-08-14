'use client'
import { signIn } from 'next-auth/react';

interface CardProps {
  href: string
  auth: string
}

export default function Card({ href, auth }: CardProps) {
  return (
    <div className="card social-block">
      <div className="card-body">
        <button className="btn btn-block" onClick={() => signIn(auth.toLowerCase())} role="button">
          <i className="fab fa-facebook"></i>
          Sign Up with {auth}
        </button>
      </div>
    </div>

  );
}
