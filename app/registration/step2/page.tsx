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

export default function Step2Page() {
  const router = useRouter();
  const { formData, updateFormData } = useRegistration();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step Indicator */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/registration/step1">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-primary">Personal Information</h1>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-sm font-medium text-muted-foreground">Step 2 of 10</div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: '20%' }}></div>
          </div>
        </div>

        {/* Form Card */}
        <Card className="p-8 border-border">
            <form onSubmit={handleNext} className="space-y-6">
            {/* Contact Information Section */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4 border-b pb-2">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mobile Number <span className="text-red-500">*</span>
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

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email || ''}
                    onChange={handleChange}
                    className={`border rounded-md px-3 py-2 w-full focus:ring-primary ${
                      errors.email ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Personal Details Section */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4 border-b pb-2">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Enter full name"
                    value={formData.fullName || ''}
                    onChange={handleChange}
                    className={`border rounded-md px-3 py-2 w-full focus:ring-primary ${
                      errors.fullName ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth || ''}
                    onChange={handleChange}
                    className={`border rounded-md px-3 py-2 w-full focus:ring-primary ${
                      errors.dateOfBirth ? 'border-red-500' : 'border-border'
                    }`}
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
                  )}
                </div>

                {/* Age */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Age
                  </label>
                  <Input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age || ''}
                    onChange={handleChange}
                    className="border border-border rounded-md px-3 py-2 w-full focus:ring-primary"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender || ''}
                    onChange={handleChange}
                    className="border border-border rounded-md px-3 py-2 w-full focus:ring-primary"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Father/Mother Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Father&apos;s/Mother&apos;s Name
                  </label>
                  <Input
                    type="text"
                    name="fatherMotherName"
                    placeholder="Enter father's or mother's name"
                    value={formData.fatherMotherName || ''}
                    onChange={handleChange}
                    className="border border-border rounded-md px-3 py-2 w-full focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4 border-b pb-2">Address Information</h2>
              <div className="grid grid-cols-1 gap-6">
                {/* Current Address */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Current Address
                  </label>
                  <Input
                    type="text"
                    name="currentAddress"
                    placeholder="Enter current address"
                    value={formData.currentAddress || ''}
                    onChange={handleChange}
                    className="border border-border rounded-md px-3 py-2 w-full focus:ring-primary"
                  />
                </div>

                {/* Permanent Address */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Permanent Address
                  </label>
                  <Input
                    type="text"
                    name="permanentAddress"
                    placeholder="Enter permanent address"
                    value={formData.permanentAddress || ''}
                    onChange={handleChange}
                    className="border border-border rounded-md px-3 py-2 w-full focus:ring-primary"
                  />
                </div>

                {/* State, District, PIN */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Taluk/District
                    </label>
                    <Input
                      type="text"
                      name="taluk"
                      placeholder="Taluk"
                      value={formData.taluk || ''}
                      onChange={handleChange}
                      className="border border-border rounded-md px-3 py-2 w-full focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      State
                    </label>
                    <Input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state || ''}
                      onChange={handleChange}
                      className="border border-border rounded-md px-3 py-2 w-full focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      PIN Code
                    </label>
                    <Input
                      type="text"
                      name="pinCode"
                      placeholder="PIN code"
                      value={formData.pinCode || ''}
                      onChange={handleChange}
                      className="border border-border rounded-md px-3 py-2 w-full focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-8 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push('/registration/step1')}
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
