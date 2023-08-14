import { NextResponse } from "next/server";
import User from '../../../models/user';
import connectMongo from '../../../middleware/mongooseconnect'

export async function GET(request) {
  try {
    console.log('CONNECTING TO MONGO');
    const connect = await connectMongo();
    if (connect)
      console.log('CONNECTED TO MONGO');
    const users = await User.find({ 'secret': { $ne: null } })
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.error(error.message);
  }
}

