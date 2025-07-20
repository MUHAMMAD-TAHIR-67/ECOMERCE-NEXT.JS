import { clerkClient } from '@clerk/nextjs/server';

const authSeller = async (userId) => {
  try {
    const user = await clerkClient.users.getUser(userId);

    return user.publicMetadata?.role === 'seller';
  } catch (error) {
    // Handle or log error, then return false or rethrow depending on your use case
    console.error('AuthSeller error:', error);
    return false;
  }
};

export default authSeller;
