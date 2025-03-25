'use client';

import React, { useState } from 'react';
import { ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

export default function CartPage() {
  // Placeholder cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 49.99, quantity: 2 },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 5.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gradient-foreground mb-6">
          Your Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-background-light rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">
                  Cart Items ({cartItems.length})
                </h2>

                <div className="divide-y divide-background">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="py-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-16 w-16 bg-gradient-background rounded"></div>
                        <div className="ml-4">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-foreground-light">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-background rounded">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-3 py-1 text-foreground-light hover:text-foreground">
                            -
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-3 py-1 text-foreground-light hover:text-foreground">
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-background-light rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-foreground-light">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-foreground-light">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-foreground-light">Tax (7%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t border-background pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button
                  href="/checkout"
                  variant="primary"
                  className="w-full flex items-center justify-center">
                  Proceed to Checkout
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>

                <Button
                  href="/products"
                  variant="outline"
                  className="w-full mt-4">
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-background-light rounded-lg shadow-md">
            <ShoppingCart className="h-16 w-16 mx-auto text-foreground-light opacity-50 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-foreground-light mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button href="/products" variant="primary">
              Start Shopping
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
