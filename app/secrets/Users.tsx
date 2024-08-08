import { getUsers } from "@/actions/actions";
import { UserType } from "../../models/user";

export default async function Users() {
  try {
    const users: Array<UserType> | undefined = await getUsers();
    return (
      <div>
        {users &&
          users.map((user: UserType) => {
            return (
              <p key={user._id} className="secret-text rounded-3">
                {user.secret}
              </p>
            );
          })}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error: Failed to load users</div>;
  }
}
