'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/app/context/RegistrationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Step9Page() {
  const router = useRouter();
  const { formData, updateFormData } = useRegistration();
  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const totalAmount = (
    parseInt(formData.stampFee || '0') +
    parseInt(formData.registrationFee || '0') +
    parseInt(formData.serviceCharge || '0')
  ).toLocaleString('en-IN');

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setIsLoading(true);
    setTimeout(() => {
      router.push('/registration/success');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/registration/step8">
              <Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4" /></Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">Property Registration</h1>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: '90%' }}></div>
          </div>
          <p className="text-sm text-foreground/60 mt-2">Step 9 of 10: Payment & Submission</p>
        </div>

        <Card className="max-w-2xl">
          <div className="p-8">
            <h2 className="text-xl font-bold text-primary mb-6">Payment & Final Submission</h2>

            <form onSubmit={handleNext} className="space-y-6">
              {/* Payment Summary */}
              <div className="bg-muted rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-foreground mb-4">Payment Summary</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/70">Stamp Fee:</span>
                  <span className="font-semibold">₹{parseInt(formData.stampFee || '0').toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/70">Registration Fee:</span>
                  <span className="font-semibold">₹{parseInt(formData.registrationFee || '0').toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/70">Service Charge:</span>
                  <span className="font-semibold">₹{parseInt(formData.serviceCharge || '0').toLocaleString('en-IN')}</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">Total Amount:</span>
                  <span className="text-xl font-bold text-primary">₹{totalAmount}</span>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Payment Method</label>
                <select
                  value={formData.paymentMethod || ''}
                  onChange={(e) => updateFormData({ paymentMethod: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select payment method</option>
                  <option value="netbanking">Net Banking</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="upi">UPI</option>
                  <option value="wallet">Digital Wallet</option>
                </select>
              </div>

              {/* Agreement */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
                <h3 className="font-semibold text-blue-900">Declaration</h3>
                <p className="text-sm text-blue-900 leading-relaxed">
                  I hereby declare that all the information provided in this registration form is true and accurate to the best of my knowledge. I understand that providing false information may result in legal consequences.
                </p>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 rounded border-border"
                  />
                  <span className="text-sm text-blue-900">
                    I agree to all terms and conditions and declare that all information is correct.
                  </span>
                </label>
              </div>

              {/* Submission Preview */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex gap-2 text-green-900">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Ready to Submit</p>
                    <p className="text-sm">Click submit to send your application to the authorities</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Link href="/registration/step8" className="flex-1"><Button variant="outline" className="w-full">Back</Button></Link>
                <Button
                  type="submit"
                  disabled={isLoading || !agreed}
                  className="flex-1 bg-primary text-white hover:bg-primary/90 flex items-center justify-center gap-2"
                >
                  {isLoading ? 'Processing...' : 'Submit Application'}
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
