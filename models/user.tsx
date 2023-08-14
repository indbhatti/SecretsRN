import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  googleId: String,
  facebookId: String,
  secret: String
});

mongoose.models = {};
var User = mongoose.model('User', userSchema);

export default User;
