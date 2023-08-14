import { getServerSession } from "next-auth/next"
import { options } from "../../[...nextauth]/options"
import { NextResponse } from "next/server";

export default async function Page() {
  const session = await getServerSession(options)
  return NextResponse.json({session});
}
