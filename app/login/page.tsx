'use client';

import React, { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '../components/ui/Logo';
import SigninGit from '../components/auth/SigninGit';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginContent() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  useEffect(() => {
    if (status === 'authenticated') {
      router.push(callbackUrl);
    }
  }, [router, status, callbackUrl]);

  if (status === 'loading') {
    return (
      <>
        <section className="text-center">Loading...</section>
      </>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <>
        <section className="">
          <div className="max-w-lg mx-auto border border-background-light rounded-lg shadow-md p-12 flex flex-col gap-6">
            <div className="w-full flex flex-col items-center justify-center gap-2">
              <Logo size={64} />
              <span className="text-xl font-bold">tappeli</span>
            </div>

            <hr className="border-background-light" />

            <h4 className="text-center">Let&apos;s get you signed in!</h4>

            <div className="w-full flex items-center justify-center">
              <SigninGit className="" />
            </div>

            <hr className="border-background-light" />

            <div className="text-center text-sm text-foreground-light">
              <p>
                We prioritize your data privacy and security. By logging in, you
                agree to our{' '}
                <Link
                  href="/terms"
                  className="text-foreground underline underline-offset-1 hover:underline-offset-2 transition-all duration-300">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy"
                  className="text-foreground underline underline-offset-1 hover:underline-offset-2 transition-all duration-300">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return null;
}

export default function LoginPage(){
  return(
    <Suspense fallback={<section className="text-center">Loading...</section>}>
      <LoginContent />
    </Suspense>
  )
}