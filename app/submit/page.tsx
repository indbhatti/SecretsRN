import { options } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { getSecret, upSecret } from "@/actions/actions";
import { redirect } from 'next/navigation';

export default async function Submit() {
  const data = await getServerSession(options)
  if (data) {
    const secret = await getSecret(data.user.email);
    const upSecretWithEmail = upSecret.bind(null, data.user.email);
    return (
      <div className="container">
        <div className="jumbotron centered">
          <h1 className="display-3">Secrets</h1>
          <p className="secret-text">Don't keep your secrets, share them anonymously!</p>
          <form action={upSecretWithEmail}>
            <div className="form-group">
              <input
                type="text"
                className="form-control text-center"
                name="secret"
                placeholder="What's your secret?" />
            </div>

            <button
              className="btn btn-dark my-4"
              name="submit"
              type="submit">
              Submit
            </button>
          </form>

          <div>
            {
              secret &&
              <p className="secret-text rounded-3">{secret}</p>
            }
          </div>
        </div>
      </div>
    );
  }
  redirect("/secrets")
}

