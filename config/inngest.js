import { Inngest } from "inngest";
import { connectDB } from './mongoDB.js';
import userModel from '../models/userModel.js';
// Create a client to send and receive events
export const inngest = new Inngest({ id: "next.js" });
export const syncUser = inngest.createFunction({
    id:'sync-user-from-clerk'
},
{
    event:'clerk/user.created'
},
async ({event})=>{
    const {id,first_name,last_name,email_addresses,image_url}=event.data
    const userData={
        _id:id,
        email:email_addresses[0].email_address,
        name:first_name+' '+last_name,
        image_url:image_url
        }
        await connectDB()
        await userModel.create(userData)
}
)
// function to update  user data 
export const syncuserupdate=inngest.createFunction({
id:'update-user-from-clerk'
},
{
    event:"clerk/user.updated"
},
async({event})=>{
        const {id,first_name,last_name,email_addresses,image_url}=event.data
    const userData={
        _id:id,
        email:email_addresses[0].email_address,
        name:first_name+' '+last_name,
        image_url:image_url
        }
        await connectDB()
        await userModel.findByIdAndUpdate(id,userData)
}
)
// inngesst gunction delete 
export const deleteUser=inngest.createFunction({
    id:"delete-user-with-cleark"
},
{
    event:"clerk/user.deleted"
},
async({event})=>{
           const {id,first_name,last_name,email_addresses,image_url}=event.data
           await connectDB()
           await userModel.findByIdAndDelete(id)
}
)