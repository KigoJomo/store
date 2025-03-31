'use client';

import { useEffect } from 'react';
import Button from '@shared/components/ui/Button';
import { AlertCircle } from 'lucide-react';

export default function CollectionError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <div className="p-4 rounded-full bg-background-light/40 border border-foreground-light/20">
        <AlertCircle size={32} className="stroke-accent" />
      </div>
      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <p className="text-foreground-light">
        Failed to load collection details.
      </p>
      <div className="flex gap-4 mt-4">
        <Button onClick={reset} variant="primary">
          Try again
        </Button>
        <Button href="/collections" variant="outline">
          Back to Collections
        </Button>
      </div>
    </div>
  );
}
