import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }
  
  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI).then(mongoose => {
      return mongoose;
    });
  }
  
  cached.conn = await cached.promise;
  console.log("MongoDB connected:", cached.conn.connection.host);
  return cached.conn;
}
