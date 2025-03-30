import { getAuthStatus, getUserProfile } from '@/data/users';
import { redirect } from 'next/navigation';
import React from 'react';
import Input from '../components/ui/Input';

export default async function CartPage() {
  const isAuthenticated = await getAuthStatus();

  if (!isAuthenticated) {
    redirect(`/login?redirectUrl=${encodeURIComponent('/cart')}`);
  }

  const user = await getUserProfile();

  return (
    <>
      <section className="flex flex-col gap-6">
        <h2 className="">Your Cart</h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="w-full aspect-[4/3] bg-gradient-to-b from-background to-background-light border border-background-light rounded-2xl flex flex-col gap-4 p-4">
            <div className="w-full aspect-[4/1] border border-background-light rounded-2xl"></div>
            <div className="w-full aspect-[4/1] border border-background-light rounded-2xl"></div>
            <div className="w-full aspect-[4/1] border border-background-light rounded-2xl"></div>
          </div>

          <div className="w-full aspect-[4/3] bg-gradient-to-b from-background to-background-light border border-background-light rounded-2xl flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-2">
              <h4>payment info:</h4>
              <div className="flex flex-col max-w-4/5 pl-4">
                <Input label="Name" name="name" value={user.name as string} />
                <Input
                  label="Email"
                  name="email"
                  value={user.email as string}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
