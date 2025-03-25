import { Github } from 'lucide-react';
import Button from '../ui/Button';
import { signInWithGithub } from '@/app/actions/auth';

interface SigninGitProps{
  className?: string
}

export default function SigninGit({ className= '' }: SigninGitProps) {
  return (
    <form action={signInWithGithub}>
      <Button type="submit" className={`gap-2 ${className}`}>
        <Github size={16} className="stroke-background" />
        <span className="capitalize">continue with GitHub</span>
      </Button>
    </form>
  );
}
