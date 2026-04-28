'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/app/context/RegistrationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Step6Page() {
  const router = useRouter();
  const { formData, updateFormData } = useRegistration();
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push('/registration/step7');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/registration/step5">
              <Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4" /></Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">Property Registration</h1>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: '60%' }}></div>
          </div>
          <p className="text-sm text-foreground/60 mt-2">Step 6 of 10: Document Details</p>
        </div>

        <Card className="max-w-2xl">
          <div className="p-8">
            <h2 className="text-xl font-bold text-primary mb-6">Document Type & Fees</h2>
            <form onSubmit={handleNext} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Document Type</label>
                <select
                  value={formData.documentType || ''}
                  onChange={(e) => updateFormData({ documentType: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select document</option>
                  <option value="sales">Sales Deed</option>
                  <option value="lease">Lease Deed</option>
                  <option value="gift">Gift Deed</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Stamp Fee</label>
                  <Input
                    type="number"
                    placeholder="₹"
                    value={formData.stampFee || ''}
                    onChange={(e) => updateFormData({ stampFee: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Registration Fee</label>
                  <Input
                    type="number"
                    placeholder="₹"
                    value={formData.registrationFee || ''}
                    onChange={(e) => updateFormData({ registrationFee: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Charge</label>
                  <Input
                    type="number"
                    placeholder="₹"
                    value={formData.serviceCharge || ''}
                    onChange={(e) => updateFormData({ serviceCharge: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold text-foreground">Total Amount: ₹{(parseInt(formData.stampFee || '0') + parseInt(formData.registrationFee || '0') + parseInt(formData.serviceCharge || '0')).toLocaleString('en-IN')}</p>
              </div>

              <div className="flex gap-3 pt-4">
                <Link href="/registration/step5" className="flex-1"><Button variant="outline" className="w-full">Back</Button></Link>
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
