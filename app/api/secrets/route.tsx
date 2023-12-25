import { NextResponse, NextRequest } from "next/server";
import User from '../../../models/user';
import connectMongo from '../../../middleware/mongooseconnect'

export async function GET(request: NextRequest) {
  try {
    const connect = await connectMongo();
    const users = await User.find({ 'secret': { $ne: null } })
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.error();
  }
}

