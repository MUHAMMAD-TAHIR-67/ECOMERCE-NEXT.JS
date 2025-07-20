import { Inngest } from "inngest";
import { connectDB } from './mongoDB.js';
import userModel from '../models/userModel.js';

// Create a client to send and receive events
export const inngest = new Inngest({ id: "next.js" });

export const syncUser = inngest.createFunction(
  {
    id: 'sync-user-from-clerk'
  },
  {
    event: 'clerk/user.created'
  },
  async ({ event }) => {
    try {
      const { id, first_name, last_name, email_addresses, image_url } = event.data;
      const userData = {
        _id: id,
        email: email_addresses[0].email_address,
        name: `${first_name} ${last_name}`,
        image_url
      };
      await connectDB();
      await userModel.create(userData);
    } catch (error) {
      console.error("syncUser error:", error);
      throw error;
    }
  }
);

export const syncuserupdate = inngest.createFunction(
  {
    id: 'update-user-from-clerk'
  },
  {
    event: "clerk/user.updated"
  },
  async ({ event }) => {
    try {
      const { id, first_name, last_name, email_addresses, image_url } = event.data;
      const userData = {
        _id: id,
        email: email_addresses[0].email_address,
        name: `${first_name} ${last_name}`,
        image_url
      };
      await connectDB();
      await userModel.findByIdAndUpdate(id, userData);
    } catch (error) {
      console.error("syncuserupdate error:", error);
      throw error;
    }
  }
);

export const deleteUser = inngest.createFunction(
  {
    id: "delete-user-with-clerk"
  },
  {
    event: "clerk/user.deleted"
  },
  async ({ event }) => {
    try {
      const { id } = event.data;  // Only id is available in deleted event
      await connectDB();
      await userModel.findByIdAndDelete(id);
    } catch (error) {
      console.error("deleteUser error:", error);
      throw error;
    }
  }
);
