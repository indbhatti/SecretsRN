"use server"

import connectMongo from "@/middleware/mongooseconnect"
import User, { UserType } from "@/models/user";
import { hash } from "bcryptjs";
import { revalidatePath } from "next/cache";

export async function upSecret(email: string, formData: FormData) {
  try {
    const connect = await connectMongo();
    if (connect) {
      let user: UserType | null = await User.findOne({ username: email });
      const secret = formData.get("secret") as string;
      if (user) {
        user.secret = secret;
        await user.save();
        revalidatePath("/submit")
      }
    }
    else {
      console.log("error: Connecting to the MongoDB");
    }
  } catch (err) {
    console.log(err);
  }
}

export const getSecret = async (email: string) => {
  try {
    const connect = await connectMongo();
    if (connect) {
      var user: UserType | null = await User.findOne({ username: email })
      if (user) {
        return user.secret;
      }
      return null;
    } else {
      console.log('FAILED TO CONNECT TO MONGO');
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getUsers() {
  try {
    const connect = await connectMongo();
    if (connect) {
      const users: Array<UserType> = await User.find({ 'secret': { $ne: null } })
      console.log(users);
      return users;
    } else {
      console.log('FAILED TO CONNECT TO MONGO');
    }
  } catch (error) {
    console.log(error);
  }
};

export async function register(e: FormData) {
  try {
    console.log(e);
    const connect = await connectMongo();

    const username = e.get("username") as string;
    const password = e.get("password") as string;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return { status: 504, message: "User Already Exists" }
    }

    const newUser = new User({
      username,
      password: await hash(password, 12),
    });

    const userCreated = await newUser.save();
    return { status: 200, message: "User Registered" }
  } catch (error) {
    return { message: "An error occurred", status: 500 };
  }

}
