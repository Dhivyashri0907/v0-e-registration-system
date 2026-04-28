'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function OTPVerificationPage() {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const router = useRouter();

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(value);
    if (value.length === 6) {
      verifyOTP(value);
    }
  };

  const verifyOTP = async (otpCode: string) => {
    setIsLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      router.push('/registration/step1');
    }, 1000);
  };

  const handleResendOTP = async () => {
    setIsResending(true);
    setTimeLeft(120);
    setCanResend(false);
    // Simulate resend
    setTimeout(() => {
      setIsResending(false);
    }, 1000);
  };

  // Timer effect
  React.useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setCanResend(true);
    }
  }, [timeLeft]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center px-4">
      <div className="absolute top-4 left-4">
        <Link href="/auth/signup">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
      </div>

      <Card className="w-full max-w-md">
        <div className="p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">📱</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-primary mb-2 text-center">Verify Your Number</h1>
          <p className="text-foreground/60 text-center mb-8">Enter the OTP sent to your mobile number</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">OTP Code</label>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={handleOTPChange}
                maxLength="6"
                className="bg-background border-border text-center text-2xl tracking-widest"
                autoFocus
                required
              />
            </div>

            <div className="text-center">
              <p className="text-sm text-foreground/60">
                OTP expires in:{' '}
                <span className="font-semibold text-primary">
                  {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
                </span>
              </p>
            </div>

            {canResend ? (
              <Button
                onClick={handleResendOTP}
                disabled={isResending}
                variant="outline"
                className="w-full"
              >
                {isResending ? 'Resending...' : 'Resend OTP'}
              </Button>
            ) : (
              <Button disabled variant="outline" className="w-full">
                Resend OTP ({timeLeft}s)
              </Button>
            )}

            <p className="text-xs text-foreground/60 text-center">
              Didn&apos;t receive the code?{' '}
              <button className="text-primary hover:text-primary/80 font-semibold">Request a new one</button>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
