import { Github } from 'lucide-react';
import Button from '../ui/Button';
import { signInWithGithub } from '@/app/actions/auth';

interface SigninGitProps{
  className?: string
  callbackUrl: string;
}

export default function SigninGit({ className= '', callbackUrl }: SigninGitProps) {
  const handleSignIn = () => {
    signInWithGithub()
    // signInWithGithub(callbackUrl)
  }

  return (
    <form onSubmit={handleSignIn}>
      <Button type="submit" className={`gap-2 ${className}`}>
        <Github size={16} className="stroke-background" />
        <span className="capitalize">continue with GitHub</span>
      </Button>
    </form>
  );
}
