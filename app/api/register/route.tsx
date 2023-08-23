import { NextResponse, NextRequest } from "next/server";
import User from '../../../models/user';
import connectMongo from '../../../middleware/mongooseconnect'

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username, password } = body;
  try {
    console.log('CONNECTING TO MONGO');
    const connect = await connectMongo();
    console.log('CONNECTED TO MONGO');
    const check = await User.find({ username: username })
    if (check) {
      console.log(check)
      return NextResponse.error();
    }
    var user = new User({
      username,
      password,
    });
    // Create new user
    var usercreated = await user.save();
    return NextResponse.json({ usercreated });
  } catch (error) {
    return NextResponse.error();
  }
}

