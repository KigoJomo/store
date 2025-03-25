// 'use client';

import { redirect } from "next/navigation";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { UserPlus } from 'lucide-react';
// import Button from '../components/ui/Button';
// import Input from '../components/ui/Input';

export default function SignupPage() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   agreeToTerms: false,
  // });

  // const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value, type } = e.target;
  //   const checked = (e.target as HTMLInputElement).checked;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: type === 'checkbox' ? checked : value,
  //   }));

  //   // Clear error when field is edited
  //   if (errors[name]) {
  //     setErrors((prev) => {
  //       const newErrors = { ...prev };
  //       delete newErrors[name];
  //       return newErrors;
  //     });
  //   }
  // };

  // const validateForm = () => {
  //   const newErrors: { [key: string]: string } = {};

  //   if (!formData.name.trim()) {
  //     newErrors.name = 'Name is required';
  //   }

  //   if (!formData.email.trim()) {
  //     newErrors.email = 'Email is required';
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     newErrors.email = 'Email is invalid';
  //   }

  //   if (!formData.password) {
  //     newErrors.password = 'Password is required';
  //   } else if (formData.password.length < 8) {
  //     newErrors.password = 'Password must be at least 8 characters';
  //   }

  //   if (formData.password !== formData.confirmPassword) {
  //     newErrors.confirmPassword = 'Passwords do not match';
  //   }

  //   if (!formData.agreeToTerms) {
  //     newErrors.agreeToTerms = 'You must agree to the terms and conditions';
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     console.log('Signup attempt with:', formData);

  //     const { name, email, password } = formData

  //     console.log(name, email, password)
  //   }
  // };

  // return (
  //   <>
  //     <div className="container mx-auto px-4 py-8">
  //       <div className="max-w-lg mx-auto border border-background-light rounded-lg shadow-md p-12">
  //         <div className="text-center mb-6">
  //           <h3 className="">Create an Account</h3>
  //           <p className="text-foreground-light mt-2">
  //             Join us to start shopping with ease!
  //           </p>
  //         </div>

  //         <hr className="border-background-light" />

  //         <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
  //           <Input
  //             type="text"
  //             label="Full Name"
  //             name="name"
  //             value={formData.name}
  //             onChange={handleChange}
  //             placeholder="Enter your name"
  //             error={errors.name}
  //             required
  //           />

  //           <Input
  //             type="email"
  //             label="Email Address"
  //             name="email"
  //             value={formData.email}
  //             onChange={handleChange}
  //             placeholder="Enter your email"
  //             error={errors.email}
  //             required
  //           />

  //           <Input
  //             type="password"
  //             label="Password"
  //             name="password"
  //             value={formData.password}
  //             onChange={handleChange}
  //             placeholder="Create a password"
  //             error={errors.password}
  //             required
  //           />

  //           <Input
  //             type="password"
  //             label="Confirm Password"
  //             name="confirmPassword"
  //             value={formData.confirmPassword}
  //             onChange={handleChange}
  //             placeholder="Confirm your password"
  //             error={errors.confirmPassword}
  //             required
  //           />

  //           <Input
  //             type="checkbox"
  //             label={
  //               <>
  //                 I agree to the{' '}
  //                 <Link href="/terms" className="text-foreground hover:underline">
  //                   Terms of Service
  //                 </Link>{' '}
  //                 and{' '}
  //                 <Link
  //                   href="/privacy"
  //                   className="text-foreground hover:underline">
  //                   Privacy Policy
  //                 </Link>
  //               </>
  //             }
  //             name="agreeToTerms"
  //             checked={formData.agreeToTerms}
  //             onChange={handleChange}
  //             error={errors.agreeToTerms}
  //             className="mb-6"
  //             value=""
  //           />

  //           <Button
  //             type="submit"
  //             variant="primary"
  //             className="w-full flex items-center justify-center">
  //             <UserPlus className="h-4 w-4 mr-2" />
  //             Create Account
  //           </Button>
  //         </form>

  //         <div className="mt-6 text-center">
  //           <p className="text-foreground-light">
  //             Already have an account?{' '}
  //             <Link href="/login" className="text-foreground hover:underline">
  //               Log in
  //             </Link>
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  redirect('/login')
}
