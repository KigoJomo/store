import React from 'react';
import { UserIcon, Package, Heart, SettingsIcon } from 'lucide-react';
import Profile from './components/Profile';
import Orders from './components/Orders';
import WishList from './components/WishList';
import Settings from './components/Settings';
import { Tabs } from '@/shared/components/ui/Tabs';
import { redirect } from 'next/navigation';
import { getAuthStatus } from '@/data/users';

export default async function AccountPage() {
  const isAuthenticated = await getAuthStatus();

  if (!isAuthenticated) {
    redirect(`/auth/login?redirectUrl=${encodeURIComponent('/account')}`);
  }

  const pageTabs = [
    {
      title: 'profile',
      icon: <UserIcon size={16} />,
      content: <Profile />,
    },
    {
      title: 'orders',
      icon: <Package size={16} />,
      content: <Orders />,
    },
    {
      title: 'wishlist',
      icon: <Heart size={16} />,
      content: <WishList />,
    },
    {
      title: 'settings',
      icon: <SettingsIcon size={16} />,
      content: <Settings />,
    },
  ];

  return (
    <>
      <section className="flex flex-col gap-4">
        <h3 className="">your account</h3>
        <Tabs
          tabs={pageTabs}
          orientation="horizontal"
          className="md:orientation-vertical"
        />
      </section>
    </>
  );
}
