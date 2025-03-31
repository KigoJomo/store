'use client';

import { useState } from 'react';
import { logOut } from '@/app/actions/auth';
import Button from '@/shared/components/ui/Button';
import { LoaderIcon, LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SignoutProps {
  className?: string;
}

export default function Signout({ className = '' }: SignoutProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logOut();
      router.refresh()
    } catch (error) {
      setIsLoading(false);
      console.error('Logout error:', error);
    }
  };

  return (
    <form onSubmit={handleLogout}>
      <Button
        type="submit"
        variant="outline"
        className={`gap-2 ${isLoading && 'opacity-40'} ${className}`}
        disabled={isLoading}>
        {isLoading ? (
          <>
            <LoaderIcon size={16} className="animate-spin" />
            <span>Logging out...</span>
          </>
        ) : (
          <>
            <LogOutIcon size={16} />
            <span>Log Out</span>
          </>
        )}
      </Button>
    </form>
  );
}
