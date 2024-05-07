import { Session } from 'next-auth'
const getUser = async (data : Session) => {
  try {
    const response = await fetch(`https://secrets-rn.vercel.app/api/user-secret`, {
      method: "POST",
      body: JSON.stringify(data.user),
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error('Failed to Post');
    }

    const result = await response.json();
    return result.user

  }
  catch (error) {
    console.error('Error Posting:', error);
  }
}
export default async function({ data }: { data: Session }) {
  var user = await getUser(data);
  return (
    <div>
      {
        user && user.secret
        &&
        <p className="secret-text rounded-3">{user.secret}</p>
      }
    </div>
  )
}
