'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/app/context/RegistrationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Step4Page() {
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
    if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
    if (!formData.plotNumber) newErrors.plotNumber = 'Plot number is required';
    if (!formData.totalArea) newErrors.totalArea = 'Total area is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      router.push('/registration/step5');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/registration/step3">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">Property Registration</h1>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: '40%' }}></div>
          </div>
          <p className="text-sm text-foreground/60 mt-2">Step 4 of 10: Property Details</p>
        </div>

        <Card className="max-w-2xl">
          <div className="p-8">
            <h2 className="text-xl font-bold text-primary mb-6">Property Details</h2>

            <form onSubmit={handleNext} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Property Type</label>
                <select
                  value={formData.propertyType || ''}
                  onChange={(e) => updateFormData({ propertyType: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.propertyType ? 'border-red-500' : 'border-border'
                  }`}
                >
                  <option value="">Select property type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="agricultural">Agricultural</option>
                  <option value="industrial">Industrial</option>
                </select>
                {errors.propertyType && <p className="text-xs text-red-500 mt-1">{errors.propertyType}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Plot Number</label>
                  <Input
                    type="text"
                    name="plotNumber"
                    placeholder="Enter plot number"
                    value={formData.plotNumber || ''}
                    onChange={handleChange}
                    className={`bg-background border-border ${errors.plotNumber ? 'border-red-500' : ''}`}
                  />
                  {errors.plotNumber && <p className="text-xs text-red-500 mt-1">{errors.plotNumber}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Total Area (Sq. Ft.)</label>
                  <Input
                    type="number"
                    name="totalArea"
                    placeholder="Enter total area"
                    value={formData.totalArea || ''}
                    onChange={handleChange}
                    className={`bg-background border-border ${errors.totalArea ? 'border-red-500' : ''}`}
                  />
                  {errors.totalArea && <p className="text-xs text-red-500 mt-1">{errors.totalArea}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Build Up Area (Sq. Ft.)</label>
                <Input
                  type="number"
                  name="buildUpArea"
                  placeholder="Enter build-up area"
                  value={formData.buildUpArea || ''}
                  onChange={handleChange}
                  className="bg-background border-border"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Village</label>
                  <Input
                    type="text"
                    name="village"
                    placeholder="Enter village"
                    value={formData.village || ''}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Taluk</label>
                  <Input
                    type="text"
                    name="taluk2"
                    placeholder="Enter taluk"
                    value={formData.taluk2 || ''}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Boundaries</label>
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    type="text"
                    placeholder="North"
                    value={formData.northSide || ''}
                    onChange={(e) => updateFormData({ northSide: e.target.value })}
                    className="bg-background border-border"
                  />
                  <Input
                    type="text"
                    placeholder="South"
                    value={formData.southSide || ''}
                    onChange={(e) => updateFormData({ southSide: e.target.value })}
                    className="bg-background border-border"
                  />
                  <Input
                    type="text"
                    placeholder="East"
                    value={formData.eastSide || ''}
                    onChange={(e) => updateFormData({ eastSide: e.target.value })}
                    className="bg-background border-border"
                  />
                  <Input
                    type="text"
                    placeholder="West"
                    value={formData.westSide || ''}
                    onChange={(e) => updateFormData({ westSide: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">PIN Code</label>
                  <Input
                    type="text"
                    name="pincode2"
                    placeholder="Enter PIN"
                    value={formData.pincode2 || ''}
                    onChange={(e) => updateFormData({ pincode2: e.target.value.replace(/\D/g, '').slice(0, 6) })}
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">District</label>
                  <Input
                    type="text"
                    name="district2"
                    placeholder="Enter district"
                    value={formData.district2 || ''}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Link href="/registration/step3" className="flex-1">
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
