import { UserType } from "../../models/user"

const getUsers = async () => {
  const uri = process.env.NEXTAUTH_URL as string;
  const response = await fetch(`${uri}/api/secrets`, {
    method: "POST",
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await response.json();
  return data.users;
}

export default async function Users() {
  const users : Array<UserType> = await getUsers();
  return (<div>
    {users.map((user: UserType) => {
      return <p key={user._id} className="secret-text rounded-3">{user.secret}</p>
    })}
  </div>
  );
}
