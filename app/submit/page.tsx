import UserSecret from './usersecret'
import Form from './form'
import { options } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'

export default async function Submit() {
  const data = await getServerSession(options)
  if (data) {
    return (
      <div className="container">
        <div className="jumbotron centered">
          <h1 className="display-3">Secrets</h1>
          <p className="secret-text">Don't keep your secrets, share them anonymously!</p>
          <Form data={data} />
          <UserSecret data={data} />
        </div>
      </div>
    );
  }
  return (
  <div><h1>error</h1></div>
      )
}

