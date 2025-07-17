
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image_url: { type: String, required: true },
  cart_items: { type: Object, default: {} },
});

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;