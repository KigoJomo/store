'use server';

import { signIn, signOut } from '@/auth';
import { redirect } from 'next/navigation';

export async function signInWithGithub() {
  console.log(`Auth _ Server: authorizing ...`)
  await signIn('github');
  // await signIn('github', { redirectTo: callbackUrl });
}

export async function logOut() {
  await signOut();
  redirect('/login')
}