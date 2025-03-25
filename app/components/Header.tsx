'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ShoppingCart, Loader } from 'lucide-react';
import Button from './ui/Button';
import { Logo } from './ui/Logo';
import { useSession } from 'next-auth/react';
import Tooltip from './ui/Tooltip';
import Image from 'next/image';

const NAV_ITEMS = [
  { href: '/products', label: 'Products' },
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const NavLink: React.FC<{
  href: string;
  className?: string;
  children: React.ReactNode;
}> = ({ href, className = '', children }) => (
  <Link
    href={href}
    className={`text-sm text-foreground-light hover:text-foreground ${className}`}>
    {children}
  </Link>
);

const Header: React.FC = () => {
  const { data: session, status } = useSession();

  const ACTION_ICONS = [
    { href: '/search', icon: Search, label: 'Search' },
    { href: '/cart', icon: ShoppingCart, label: 'Cart' },
    // { href: '/account', icon: User, label: 'Account' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full z-10 border-b border-background-light backdrop-blur-3xl px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo and Navigation Links (left side) */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 mr-10">
            <Logo />
            <span className="text-xl font-bold">tappeli</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* CTA Buttons (right side) */}
        <div className="hidden md:flex items-center gap-4">
          {ACTION_ICONS.map((item) => (
            <NavLink key={item.href} href={item.href}>
              <item.icon className="" size={18} />
            </NavLink>
          ))}
          {status === 'unauthenticated' ? (
            <Button href="/login" size="sm">
              Sign in
            </Button>
          ) : status === 'loading' ? (
            <Button size="sm" variant="outline">
              <Loader className="animate-spin" size={12} />
            </Button>
          ) : status === 'authenticated' ? (
            <Tooltip
              content={`Logged in as ${session.user?.email}`}
              position="left">
              <Button
                variant="outline"
                size="sm"
                href="/account"
                className="flex items-center gap-2">
                {session.user && (
                  <>
                    <Image
                      src={session.user.image!}
                      alt={session.user.name!}
                      width={24}
                      height={24}
                      className="rounded my-1"
                    />
                    <span>{session.user.name}</span>
                  </>
                )}
              </Button>
            </Tooltip>
          ) : null}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-foreground-light hover:text-foreground focus:outline-none"
          aria-label="Toggle menu">
          {isMenuOpen ? (
            <X className="" size={18} />
          ) : (
            <Menu className="" size={18} />
          )}
        </button>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="h-full md:hidden mt-4 pt-4 border-t border-background-light">
          <nav className="flex flex-col gap-4 pb-4">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col gap-4 pt-4 border-t border-background-light">
            {ACTION_ICONS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="flex items-center">
                <item.icon className="mr-2" size={18} />
                {item.label}
              </NavLink>
            ))}

            {status === 'unauthenticated' ? (
              <Button href="/login" size="sm">
                Sign in
              </Button>
            ) : status === 'loading' ? (
              <Button size="sm" variant="outline">
                <Loader className="animate-spin" size={12} />
              </Button>
            ) : status === 'authenticated' ? (
              <Tooltip
                content={`Logged in as ${session.user?.email}`}
                position="left">
                <Button
                  variant="outline"
                  size="sm"
                  href="/account"
                  className="flex items-center gap-2 w-full">
                  {session.user && (
                    <>
                      <Image
                        src={session.user.image!}
                        alt={session.user.name!}
                        width={24}
                        height={24}
                        className="rounded my-1"
                      />
                      <span>{session.user.name}</span>
                    </>
                  )}
                </Button>
              </Tooltip>
            ) : null}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
