'use client'
import { useState } from 'react'
import { Session } from 'next-auth'
import { useRouter } from 'next/navigation'

const submit = async (data: Session, secret: string) => {
  if (data && data.user) {
    const dataToSend = {
      secret: secret,
      email: data.user.email
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

export default function Form({ data }: { data: Session }) {
  const router = useRouter();
  const [secret, setSecret] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement
    setSecret(value)
  }

  return (
    <div>
      <div className="form-group">
        <input onChange={handleChange} value={secret} type="text" className="form-control text-center" name="secret" placeholder="What's your secret?" />
      </div>
      <button onClick={() => {
        submit(data, secret);
        router.refresh()
      }} className="btn btn-dark my-4" name="submit" type="button">Submit</button>
    </div>
  )
}
