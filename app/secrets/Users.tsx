const getUsers = async () => {

  const apiUrl = process.env.API_URL || "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/secrets`, {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await response.json();
  return data.users;
}

export default async function Users() {
  const users = await getUsers();
  return (<div>
    {users.map((user: { _id: string, secret: string }) => {
      return <p key={user._id} className="secret-text rounded-3">{user.secret}</p>
    })}
  </div>
  );
}
