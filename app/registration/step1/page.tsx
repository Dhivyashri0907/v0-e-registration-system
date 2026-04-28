'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/app/context/RegistrationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';

export default function Step1Page() {
  const router = useRouter();
  const { formData, updateFormData } = useRegistration();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.accountNumber) newErrors.accountNumber = 'Account number is required';
    if (!formData.ifscCode) newErrors.ifscCode = 'IFSC code is required';
    if (!formData.bankName) newErrors.bankName = 'Bank name is required';
    if (!formData.branch) newErrors.branch = 'Branch is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      router.push('/registration/step2');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step Indicator */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-primary">Bank Passbook Details</h1>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-sm font-medium text-muted-foreground">Step 1 of 10</div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: '10%' }}></div>
          </div>
        </div>

        {/* Form Card */}
        <Card className="p-8 border-border">
          <form onSubmit={handleNext} className="space-y-6">
            {/* Account Information Section */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4 border-b pb-2">Account Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Account Number */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Account Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    name="accountNumber"
                    placeholder="Enter account number"
                    value={formData.accountNumber || ''}
                    onChange={handleChange}
                    className={`border rounded-md px-3 py-2 w-full focus:ring-primary ${
                      errors.accountNumber ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.accountNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.accountNumber}</p>
                  )}
                </div>

                {/* IFSC Code */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    IFSC Code <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    name="ifscCode"
                    placeholder="Enter IFSC code"
                    value={formData.ifscCode || ''}
                    onChange={handleChange}
                    className={`border rounded-md px-3 py-2 w-full focus:ring-primary ${
                      errors.ifscCode ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.ifscCode && (
                    <p className="text-red-500 text-sm mt-1">{errors.ifscCode}</p>
                  )}
                </div>

                {/* Bank Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Bank Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    name="bankName"
                    placeholder="Enter bank name"
                    value={formData.bankName || ''}
                    onChange={handleChange}
                    className={`border rounded-md px-3 py-2 w-full focus:ring-primary ${
                      errors.bankName ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.bankName && (
                    <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>
                  )}
                </div>

                {/* Branch */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Branch <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    name="branch"
                    placeholder="Enter branch"
                    value={formData.branch || ''}
                    onChange={handleChange}
                    className={`border rounded-md px-3 py-2 w-full focus:ring-primary ${
                      errors.branch ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.branch && (
                    <p className="text-red-500 text-sm mt-1">{errors.branch}</p>
                  )}
                </div>

                {/* Account Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Account Type
                  </label>
                  <Input
                    type="text"
                    name="accountType"
                    placeholder="e.g., Savings, Current"
                    value={formData.accountType || ''}
                    onChange={handleChange}
                    className="border border-border rounded-md px-3 py-2 w-full focus:ring-primary"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mobile Number
                  </label>
                  <Input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Enter mobile number"
                    value={formData.mobileNumber || ''}
                    onChange={handleChange}
                    className="border border-border rounded-md px-3 py-2 w-full focus:ring-primary"
                  />
                </div>

                {/* MICR Code */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    MICR Code
                  </label>
                  <Input
                    type="text"
                    name="micrCode"
                    placeholder="Enter MICR code"
                    value={formData.micrCode || ''}
                    onChange={handleChange}
                    className="border border-border rounded-md px-3 py-2 w-full focus:ring-primary"
                  />
                </div>

                {/* Account Holder Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Account Holder Name
                  </label>
                  <Input
                    type="text"
                    name="accountHolderName"
                    placeholder="Enter account holder name"
                    value={formData.accountHolderName || ''}
                    onChange={handleChange}
                    className="border border-border rounded-md px-3 py-2 w-full focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-8 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push('/')}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="ml-auto bg-primary text-white hover:bg-primary/90 gap-2"
              >
                {isLoading ? 'Loading...' : 'Next'} <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
