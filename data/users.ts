/* -- reference used for DAL and DOTs:
      https://nextjs.org/blog/security-nextjs-server-components-actions#data-access-layer
*/
// -- ideally only send the minimal required data - DTO
// -- probably safe to pass around a fetched data object to client components via props ONLY AFTER fetching it in a server component, knowing that it wouldn't contain anything sensitive and would've gone through auth checks.

// --

import 'server-only';
import { User } from 'next-auth';
import { redirect } from 'next/navigation';
import { getCurrentUser } from './auth';

export async function getAuthStatus(){
  const { isAuthenticated } = await getCurrentUser()

  return isAuthenticated
}

export async function getProfileDTO(user: User, isAuthenticated: boolean) {
  const userProfile = {
    name: user.name,
    image: user.image,
    email: user.email,
    isAuthenticated,
  };

  return userProfile;
}

export async function getUserProfile() {
  const { isAuthenticated, user } = await getCurrentUser();

  if (!isAuthenticated) {
    redirect('/login');
  }

  if (!user) {
    redirect('/login');
  }

  return getProfileDTO(user, isAuthenticated);
}
