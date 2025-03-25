import { Package } from 'lucide-react';
import { FC } from 'react';
import Button from '../ui/Button';

const Orders: FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      <p className="text-foreground-light mb-6">
        View and track your order history.
      </p>

      <div className="text-center py-8">
        <Package className="h-16 w-16 mx-auto text-foreground-light opacity-50 mb-4" />
        <p className="text-foreground-light">
          You haven&apos;t placed any orders yet.
        </p>
        <Button href="/products" variant="primary" className="mt-4">
          Start Shopping
        </Button>
      </div>
    </div>
  );
};

export default Orders
