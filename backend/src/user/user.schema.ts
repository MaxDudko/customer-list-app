import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  login: {
    type: String,
    unique: true,
  },
  password: String,
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  position: String,
  info: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});
