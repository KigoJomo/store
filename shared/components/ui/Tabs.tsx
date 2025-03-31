'use client';

import React, { ReactNode, useState, useEffect, useCallback } from 'react';
import { Ellipsis, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TabProps {
  title: string;
  icon: ReactNode;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
  orientation?: 'horizontal' | 'vertical';
  defaultTab?: number;
  className?: string;
  id?: string; // Optional ID for multiple tab instances on the same page
}

export function Tabs({
  tabs,
  orientation = 'horizontal',
  defaultTab = 0,
  className,
  id = 'default',
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isVertical = orientation === 'vertical';

  // Create a unique storage key based on path and optional ID
  const getStorageKey = useCallback(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return `tabs-active-${path}-${id}`;
    }
    return `tabs-active-${id}`;
  }, [id]);

  // Load the active tab from localStorage on component mount
  useEffect(() => {
    const storageKey = getStorageKey();
    const storedTabIndex = localStorage.getItem(storageKey);

    if (storedTabIndex !== null) {
      const parsedIndex = parseInt(storedTabIndex, 10);
      // Only set if the stored index is valid
      if (
        !isNaN(parsedIndex) &&
        parsedIndex >= 0 &&
        parsedIndex < tabs.length
      ) {
        setActiveTab(parsedIndex);
      }
    }
  }, [tabs.length, id, getStorageKey]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    // Save to localStorage
    localStorage.setItem(getStorageKey(), index.toString());

    if (isVertical) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div
      className={cn(
        'w-full',
        isVertical
          ? 'flex flex-row gap-6 border-t border-background-light pt-6'
          : 'flex flex-col gap-4 sm:gap-6',
        className
      )}>
      {/* Floating menu button for mobile devices */}
      {isVertical && (
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed bottom-4 right-4 md:hidden z-50 bg-background-light border border-foreground-light rounded-full p-3 shadow-lg"
          aria-label="Toggle tabs menu">
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Ellipsis className="h-6 w-6" />
          )}
        </button>
      )}

      {/* Tab List */}
      <div
        className={cn(
          'flex border-background-light transition-all duration-300',
          isVertical
            ? [
                'flex-col border-r',
                // Mobile styles
                'md:w-full md:max-w-[250px]',
                'fixed md:relative top-0 bottom-0 m-auto md:m-0 py-12 md:p-0 left-0 right-0 h-fit md:h-full bg-background z-40 shadow-lg md:shadow-none border md:border-none',
                isMobileMenuOpen
                  ? 'translate-x-0'
                  : '-translate-x-full mx-0 md:translate-x-0',
                'w-4/5 max-w-[300px]',
              ].join(' ')
            : 'flex-row justify-center sm:justify-start gap-4 sm:gap-0 overflow-x-auto border-b'
        )}>
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;

          return (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={cn(
                'group flex flex-col sm:flex-row items-center gap-2 px-4 py-3 text-sm font-medium cursor-pointer transition-all duration-200',
                isVertical ? 'border-l-2' : 'border-b-2',
                isActive
                  ? isVertical
                    ? 'border-l-primary text-primary bg-primary/5'
                    : 'border-b-primary text-primary'
                  : isVertical
                  ? 'border-l-transparent hover:border-l-primary/40 hover:bg-primary/5'
                  : 'border-b-transparent hover:border-b-primary/40',
                isVertical
                  ? 'w-full justify-start gap-3'
                  : 'justify-center whitespace-nowrap'
              )}>
              {tab.icon}
              <span
                className={cn(
                  'capitalize',
                  isVertical ? '' : 'text-xs sm:text-sm'
                )}>
                {tab.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Backdrop overlay when mobile menu is open */}
      {isVertical && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Tab Content */}
      <div className="flex-1 mt-4 relative">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={cn(
              'absolute w-full transition-all duration-300 ease-in-out',
              activeTab === index
                ? 'opacity-100 translate-x-0 relative'
                : 'opacity-0 translate-x-4 absolute pointer-events-none'
            )}>
            {activeTab === index && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
