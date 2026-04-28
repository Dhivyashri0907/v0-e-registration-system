'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/app/context/RegistrationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/registration/step1">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">Property Registration</h1>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: '10%' }}></div>
          </div>
          <p className="text-sm text-foreground/60 mt-2">Step 1 of 10: Bank Details</p>
        </div>

        <Card className="max-w-2xl">
          <div className="p-8">
            <h2 className="text-xl font-bold text-primary mb-6">Bank Passbook Details</h2>

            <form onSubmit={handleNext} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Account Number</label>
                  <Input
                    type="text"
                    name="accountNumber"
                    placeholder="Enter account number"
                    value={formData.accountNumber || ''}
                    onChange={handleChange}
                    className={`bg-background border-border ${errors.accountNumber ? 'border-red-500' : ''}`}
                  />
                  {errors.accountNumber && <p className="text-xs text-red-500 mt-1">{errors.accountNumber}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">IFSC Code</label>
                  <Input
                    type="text"
                    name="ifscCode"
                    placeholder="Enter IFSC code"
                    value={formData.ifscCode || ''}
                    onChange={handleChange}
                    className={`bg-background border-border ${errors.ifscCode ? 'border-red-500' : ''}`}
                  />
                  {errors.ifscCode && <p className="text-xs text-red-500 mt-1">{errors.ifscCode}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Bank Name</label>
                  <Input
                    type="text"
                    name="bankName"
                    placeholder="Enter bank name"
                    value={formData.bankName || ''}
                    onChange={handleChange}
                    className={`bg-background border-border ${errors.bankName ? 'border-red-500' : ''}`}
                  />
                  {errors.bankName && <p className="text-xs text-red-500 mt-1">{errors.bankName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Branch</label>
                  <Input
                    type="text"
                    name="branch"
                    placeholder="Enter branch name"
                    value={formData.branch || ''}
                    onChange={handleChange}
                    className={`bg-background border-border ${errors.branch ? 'border-red-500' : ''}`}
                  />
                  {errors.branch && <p className="text-xs text-red-500 mt-1">{errors.branch}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Account Type</label>
                  <select
                    name="accountType"
                    value={formData.accountType || ''}
                    onChange={(e) => updateFormData({ accountType: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select account type</option>
                    <option value="savings">Savings</option>
                    <option value="checking">Checking</option>
                    <option value="business">Business</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">MICR Code</label>
                  <Input
                    type="text"
                    name="micrCode"
                    placeholder="Enter MICR code"
                    value={formData.micrCode || ''}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Account Holder Name</label>
                <Input
                  type="text"
                  name="accountHolderName"
                  placeholder="Enter account holder name"
                  value={formData.accountHolderName || ''}
                  onChange={handleChange}
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mobile Number</label>
                <Input
                  type="tel"
                  name="mobileNo"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.mobileNo || ''}
                  onChange={(e) => updateFormData({ mobileNo: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                  className="bg-background border-border"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Link href="/" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Cancel
                  </Button>
                </Link>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-primary text-white hover:bg-primary/90 flex items-center justify-center gap-2"
                >
                  {isLoading ? 'Loading...' : 'Next'}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
