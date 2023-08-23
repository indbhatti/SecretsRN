import { NextResponse, NextRequest } from "next/server";
import User from '../../../models/user';
import connectMongo from '../../../middleware/mongooseconnect'

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email } = body;
  try {
    console.log('CONNECTING TO MONGO');

    const connect = await connectMongo();

    if (connect) {
      console.log('CONNECTED TO MONGO');
      var user = await User.findOne({ username: email })
      return NextResponse.json({ user });
    } else {
      console.log('FAILED TO CONNECT TO MONGO');

      // Return an error response
      return NextResponse.json({ error: "Failed to connect to the database." }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.error();
  }
}

