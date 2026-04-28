'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/app/context/RegistrationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Step7Page() {
  const router = useRouter();
  const { formData, updateFormData } = useRegistration();
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push('/registration/step8');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/registration/step6">
              <Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4" /></Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">Property Registration</h1>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: '70%' }}></div>
          </div>
          <p className="text-sm text-foreground/60 mt-2">Step 7 of 10: Witness Details</p>
        </div>

        <Card className="max-w-2xl">
          <div className="p-8">
            <h2 className="text-xl font-bold text-primary mb-6">Witness Details</h2>
            <form onSubmit={handleNext} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <Input
                    type="text"
                    placeholder="Enter witness name"
                    value={formData.witness1Name || ''}
                    onChange={(e) => updateFormData({ witness1Name: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Father's Name</label>
                  <Input
                    type="text"
                    placeholder="Enter father's name"
                    value={formData.witness1FatherName || ''}
                    onChange={(e) => updateFormData({ witness1FatherName: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mobile Number</label>
                  <Input
                    type="tel"
                    placeholder="Enter mobile number"
                    value={formData.witness1Mobile || ''}
                    onChange={(e) => updateFormData({ witness1Mobile: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="Enter email"
                    value={formData.witness1Email || ''}
                    onChange={(e) => updateFormData({ witness1Email: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Gender</label>
                  <select value={formData.witness1Gender || ''} onChange={(e) => updateFormData({ witness1Gender: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">State</label>
                  <Input type="text" placeholder="State" value={formData.witness1State || ''} onChange={(e) => updateFormData({ witness1State: e.target.value })} className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">District</label>
                  <Input type="text" placeholder="District" value={formData.witness1District || ''} onChange={(e) => updateFormData({ witness1District: e.target.value })} className="bg-background border-border" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Taluk</label>
                  <Input type="text" placeholder="Taluk" value={formData.witness1Taluk || ''} onChange={(e) => updateFormData({ witness1Taluk: e.target.value })} className="bg-background border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">PIN Code</label>
                  <Input type="text" placeholder="PIN" value={formData.witness1Pincode || ''} onChange={(e) => updateFormData({ witness1Pincode: e.target.value })} className="bg-background border-border" />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Link href="/registration/step6" className="flex-1"><Button variant="outline" className="w-full">Back</Button></Link>
                <Button type="submit" disabled={isLoading} className="flex-1 bg-primary text-white hover:bg-primary/90 flex items-center justify-center gap-2">
                  {isLoading ? 'Loading...' : 'Next'}<ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
