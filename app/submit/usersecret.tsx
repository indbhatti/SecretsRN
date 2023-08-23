import { Session } from 'next-auth'
export default async function({ data }: { data: Session }) {
  const getUser = async () => {
    if (data != null) {
      try {
        const response = await fetch("http://localhost:3000/api/user-secret", {
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
  }
  var user = await getUser();
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
