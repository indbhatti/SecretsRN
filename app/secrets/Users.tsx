import { UserType } from "../../models/user"

const getUsers = async () => {
  try {
    const uri = process.env.NEXTAUTH_URL as string;
    console.log(uri);
    const response = await fetch(`${uri}/api/secrets`, {
      method: "POST",
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch users');
  }
};


export default async function Users() {
  try {
    const users: Array<UserType> = await getUsers();
    return (
      <div>
        {users.map((user: UserType) => {
          return <p key={user._id} className="secret-text rounded-3">{user.secret}</p>
        })}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error: Failed to load users</div>;
  }
} 
