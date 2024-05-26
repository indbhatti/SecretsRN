import mongoose, { Document } from 'mongoose';

export interface UserType extends Document {
  username: string,
  password: string,
  googleId?: string,
  facebookId?: string,
  secret: string,
}
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  googleId: String,
  facebookId: String,
  secret: String
});

// mongoose.models = {};
const User = mongoose.models.User || mongoose.model('User', userSchema);
// var User = mongoose.model('User', userSchema);

export default User;
