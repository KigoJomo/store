import { logOut } from '@/app/actions/auth';
import Button from '../ui/Button';
import { LogOutIcon } from 'lucide-react';

interface SignoutProps {
  className?: string;
}

export default function Signout({ className = '' }: SignoutProps) {
  return (
    <form action={logOut}>
      <Button type="submit" variant="outline" className={`${className}`}>
        <LogOutIcon size={16} />
        <span>Log Out</span>
      </Button>
    </form>
  );
}
