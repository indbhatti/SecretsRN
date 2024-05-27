'use client'
import { useEffect, useState } from 'react'

const submit = async (user: { email: string }, secret: string) => {
  if (user) {
    const dataToSend = {
      secret: secret,
      email: user.email
    }
    try {
      const response = await fetch(`/api/submit-secret`, {
        method: 'POST',
        body: JSON.stringify(dataToSend),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error submitting:', error);
    }
  }
}

export default function Form({ user }: { user: { email: string } }) {
  const [secret, setSecret] = useState(' ');
  const [secretRender, setSecretRender] = useState(' ');

  const getSecret = async (user: { email: string }) => {
    try {
      const uri = process.env.NEXTAUTH_URL as string;
      const response = await fetch(`${uri}/api/user-secret`, {
        method: "POST",
        body: JSON.stringify(user),
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if (!response.ok) {
        throw new Error('Failed to Post');
      }

      const result = await response.json();
      if (result.user && result.user.secret) {
        setSecretRender(result.user.secret);
      } else {
        setSecretRender(" ");
      }

    }
    catch (error) {
      console.error('Error Posting:', error);
    }
  }

  useEffect(() => {
    getSecret(user);
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement
    setSecret(value)
  }

  return (
    <div>
      <div className="form-group">
        <input onChange={handleChange} value={secret} type="text" className="form-control text-center" name="secret" placeholder="What's your secret?" />
      </div>
      <button onClick={async () => {
        await submit(user, secret);
        getSecret(user);
      }} className="btn btn-dark my-4" name="submit" type="button">Submit</button>
      <div>
        {
          (secretRender != ' ')
          &&
          <p className="secret-text rounded-3">{secretRender}</p>
        }
      </div>
    </div>
  )
}
