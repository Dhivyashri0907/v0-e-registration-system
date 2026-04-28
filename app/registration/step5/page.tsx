'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/app/context/RegistrationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Step5Page() {
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
    if (!formData.sellerFullName) newErrors.sellerFullName = 'Seller name is required';
    if (!formData.buyerFullName) newErrors.buyerFullName = 'Buyer name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      router.push('/registration/step6');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/registration/step4">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">Property Registration</h1>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: '50%' }}></div>
          </div>
          <p className="text-sm text-foreground/60 mt-2">Step 5 of 10: Party Details</p>
        </div>

        <Card className="max-w-2xl">
          <div className="p-8">
            <h2 className="text-xl font-bold text-primary mb-6">Seller Details</h2>

            <form onSubmit={handleNext} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Seller Full Name</label>
                <Input
                  type="text"
                  name="sellerFullName"
                  placeholder="Enter seller name"
                  value={formData.sellerFullName || ''}
                  onChange={handleChange}
                  className={`bg-background border-border ${errors.sellerFullName ? 'border-red-500' : ''}`}
                />
                {errors.sellerFullName && <p className="text-xs text-red-500 mt-1">{errors.sellerFullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Seller Address</label>
                <Input
                  type="text"
                  name="sellerAddress"
                  placeholder="Enter seller address"
                  value={formData.sellerAddress || ''}
                  onChange={handleChange}
                  className="bg-background border-border"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">ID Proof Type</label>
                  <select
                    value={formData.sellerIdProofType || ''}
                    onChange={(e) => updateFormData({ sellerIdProofType: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select ID type</option>
                    <option value="aadhar">Aadhar</option>
                    <option value="pan">PAN</option>
                    <option value="passport">Passport</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">ID Number</label>
                  <Input
                    type="text"
                    name="sellerIdNumber"
                    placeholder="Enter ID number"
                    value={formData.sellerIdNumber || ''}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <hr className="my-6" />

              <h2 className="text-xl font-bold text-primary mb-6">Buyer Details</h2>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Buyer Full Name</label>
                <Input
                  type="text"
                  name="buyerFullName"
                  placeholder="Enter buyer name"
                  value={formData.buyerFullName || ''}
                  onChange={handleChange}
                  className={`bg-background border-border ${errors.buyerFullName ? 'border-red-500' : ''}`}
                />
                {errors.buyerFullName && <p className="text-xs text-red-500 mt-1">{errors.buyerFullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Buyer Address</label>
                <Input
                  type="text"
                  name="buyerAddress"
                  placeholder="Enter buyer address"
                  value={formData.buyerAddress || ''}
                  onChange={handleChange}
                  className="bg-background border-border"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">ID Proof Type</label>
                  <select
                    value={formData.buyerIdProofType || ''}
                    onChange={(e) => updateFormData({ buyerIdProofType: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select ID type</option>
                    <option value="aadhar">Aadhar</option>
                    <option value="pan">PAN</option>
                    <option value="passport">Passport</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">ID Number</label>
                  <Input
                    type="text"
                    name="buyerIdNumber"
                    placeholder="Enter ID number"
                    value={formData.buyerIdNumber || ''}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Link href="/registration/step4" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Back
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
