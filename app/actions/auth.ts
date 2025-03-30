'use server';

import { signIn, signOut } from '@/auth';
import { redirect } from 'next/navigation';

export async function signInWithGithub(redirectUrl: string) {
  await signIn('github', { redirectTo: redirectUrl });
}

export async function logOut() {
  await signOut();
  redirect('/login');
}
