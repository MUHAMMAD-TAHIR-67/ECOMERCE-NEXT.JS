import { serve } from "inngest/next";
import { deleteUser, inngest, syncUser, syncuserupdate } from "../../../../config/inngest";


// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
   syncUser,
   syncuserupdate,
   deleteUser,
  ],
});