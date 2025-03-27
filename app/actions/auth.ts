'use server';

import { signIn, signOut } from '@/auth';
import { redirect } from 'next/navigation';

export async function signInWithGithub() {
  await signIn('github');
}

export async function logOut() {
  await signOut();
  redirect('/')
}