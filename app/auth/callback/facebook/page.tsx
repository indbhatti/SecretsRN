import { options } from '../../../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'

export default async function Page() {
  const session = await getServerSession(options)
  return <h1>{JSON.stringify(session, null, 2)}</h1>
}
