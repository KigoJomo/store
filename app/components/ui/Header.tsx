'use client';

import Link from 'next/link';
import { Menu, X, Search, ShoppingCart, Loader } from 'lucide-react';
import Button from './Button';
import { Logo } from './Logo';
import Tooltip from './Tooltip';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import SideMenu from './SideMenu';

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
  onClick?: () => void;
}> = ({ href, className = '', children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`text-sm text-foreground-light hover:text-foreground ${className}`}>
    {children}
  </Link>
);

const Header: React.FC = () => {
  const { data: session, status } = useSession();

  const [sessionData, setSessionData] = useState(session);
  const [authStatus, setAuthStatus] = useState(status);

  useEffect(() => {
    setSessionData(session);
    setAuthStatus(status);
  }, [session, status]);

  const ACTION_ICONS = [
    { href: '/search', icon: Search, label: 'Search' },
    { href: '/cart', icon: ShoppingCart, label: 'Cart' },
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
            <span className="text-xl font-bold">aqutte</span>
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

          {authStatus === 'unauthenticated' ? (
            <Button href="/login" size="sm">
              Sign in
            </Button>
          ) : authStatus === 'loading' ? (
            <Button size="sm" variant="outline">
              <Loader className="animate-spin" size={12} />
            </Button>
          ) : authStatus === 'authenticated' ? (
            <Tooltip
              content={`Logged in as ${sessionData?.user?.email}`}
              position="left">
              <Button
                variant="outline"
                size="sm"
                href="/account"
                className="flex items-center gap-2">
                {sessionData?.user && (
                  <>
                    <Image
                      src={sessionData.user.image!}
                      alt={sessionData.user.name!}
                      width={24}
                      height={24}
                      className="rounded my-1"
                    />
                    <span>{sessionData.user.name}</span>
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

      <SideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        position="left"
        className="md:hidden">
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}>
            <Logo />
            <h4 className="!lowercase">aqutte</h4>
          </Link>

          <hr className="border-background-light" />

          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="text-base"
                onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <hr className="border-background-light" />

            {ACTION_ICONS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="flex items-center text-base"
                onClick={() => setIsMenuOpen(false)}>
                <item.icon className="mr-2" size={18} />
                {item.label}
              </NavLink>
            ))}

            <hr className="border-background-light" />

            {status === 'unauthenticated' ? (
              <Button
                href="/login"
                size="sm"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}>
                Sign in
              </Button>
            ) : status === 'loading' ? (
              <Button size="sm" variant="outline" className="w-full">
                <Loader className="animate-spin" size={12} />
              </Button>
            ) : status === 'authenticated' ? (
              <Button
                variant="outline"
                size="sm"
                href="/account"
                className="flex items-center gap-2 w-full"
                onClick={() => setIsMenuOpen(false)}>
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
            ) : null}
          </div>
        </div>
      </SideMenu>
    </header>
  );
};

export default Header;
