import { Heart } from 'lucide-react';
import { FC } from 'react';
import Button from '../ui/Button';

const WishList: FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      <p className="text-foreground-light mb-6">
        Products you&apos;ve saved for later.
      </p>

      <div className="text-center py-8">
        <Heart className="h-16 w-16 mx-auto text-foreground-light opacity-50 mb-4" />
        <p className="text-foreground-light">Your wishlist is empty.</p>
        <Button href="/products" variant="primary" className="mt-4">
          Explore Products
        </Button>
      </div>
    </div>
  );
};

export default WishList