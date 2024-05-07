import { NextResponse, NextRequest } from "next/server";
import User from '../../../models/user';
import connectMongo from '../../../middleware/mongooseconnect'

export async function GET(request: NextRequest) {
  try {
    const connect = await connectMongo();
    if (connect) {
      const users = await User.find({ 'secret': { $ne: null } })
      console.log(users);
      return NextResponse.json({ users });
    } else {
      console.log('FAILED TO CONNECT TO MONGO');

      // Return an error response
      return NextResponse.json({ error: "Failed to connect to the database." }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.error();
  }
}

