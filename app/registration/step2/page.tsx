'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/app/context/RegistrationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Step2Page() {
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
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      router.push('/registration/step3');
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
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: '20%' }}></div>
          </div>
          <p className="text-sm text-foreground/60 mt-2">Step 2 of 10: Personal Information</p>
        </div>

        <Card className="max-w-2xl">
          <div className="p-8">
            <h2 className="text-xl font-bold text-primary mb-6">Personal Information</h2>

            <form onSubmit={handleNext} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName || ''}
                    onChange={handleChange}
                    className={`bg-background border-border ${errors.fullName ? 'border-red-500' : ''}`}
                  />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email || ''}
                    onChange={handleChange}
                    className={`bg-background border-border ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Father/Mother Name</label>
                  <Input
                    type="text"
                    name="fatherMotherName"
                    placeholder="Enter father/mother name"
                    value={formData.fatherMotherName || ''}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Date of Birth</label>
                  <Input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth || ''}
                    onChange={handleChange}
                    className={`bg-background border-border ${errors.dateOfBirth ? 'border-red-500' : ''}`}
                  />
                  {errors.dateOfBirth && <p className="text-xs text-red-500 mt-1">{errors.dateOfBirth}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Age</label>
                  <Input
                    type="number"
                    name="age"
                    placeholder="Enter age"
                    value={formData.age || ''}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender || ''}
                    onChange={(e) => updateFormData({ gender: e.target.value })}
                    className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.gender ? 'border-red-500' : 'border-border'
                    }`}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p className="text-xs text-red-500 mt-1">{errors.gender}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Current Address</label>
                <Input
                  type="text"
                  name="currentAddress"
                  placeholder="Enter current address"
                  value={formData.currentAddress || ''}
                  onChange={handleChange}
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Permanent Address</label>
                <Input
                  type="text"
                  name="permanentAddress"
                  placeholder="Enter permanent address"
                  value={formData.permanentAddress || ''}
                  onChange={handleChange}
                  className="bg-background border-border"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Taluk</label>
                  <Input
                    type="text"
                    name="taluk"
                    placeholder="Enter taluk"
                    value={formData.taluk || ''}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">District</label>
                  <Input
                    type="text"
                    name="district"
                    placeholder="Enter district"
                    value={formData.district || ''}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">State</label>
                  <Input
                    type="text"
                    name="state"
                    placeholder="Enter state"
                    value={formData.state || ''}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">PIN Code</label>
                <Input
                  type="text"
                  name="pinCode"
                  placeholder="Enter PIN code"
                  value={formData.pinCode || ''}
                  onChange={(e) => updateFormData({ pinCode: e.target.value.replace(/\D/g, '').slice(0, 6) })}
                  className="bg-background border-border"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Link href="/registration/step1" className="flex-1">
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
