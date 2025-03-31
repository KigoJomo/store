import { CreditCard } from 'lucide-react';
import { FC } from 'react';
import Button from '@/shared/components/ui/Button';

const PaymentMethods: FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
      <p className="text-foreground-light mb-6">
        Manage your payment information.
      </p>

      <div className="text-center py-8">
        <CreditCard className="h-16 w-16 mx-auto text-foreground-light opacity-50 mb-4" />
        <p className="text-foreground-light">No payment methods added yet.</p>
        <Button variant="primary" className="mt-4">
          Add Payment Method
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethods;
