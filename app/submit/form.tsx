'use client'
import { useState } from 'react'
import { Session } from 'next-auth'

export default function Form({ data }: { data: Session }) {
  const [secret, setSecret] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement
    setSecret(value)
  }
  const submit = async () => {
    if (data && data.user) {
      const dataToSend = {
        secret: secret,
        email: data.user.email
      }
      try {
        const response = await fetch('http://localhost:3000/api/submit-secret', {
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
  return (
    <form>
      <div className="form-group">
        <input onChange={handleChange} value={secret} type="text" className="form-control text-center" name="secret" placeholder="What's your secret?" />
      </div>
      <button onClick={submit} className="btn btn-dark my-4" name="submit" type="button">Submit</button>
    </form>
  )
}
