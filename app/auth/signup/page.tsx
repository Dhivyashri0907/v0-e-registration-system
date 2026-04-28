'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phoneNumber') {
      setFormData({
        ...formData,
        [name]: value.replace(/\D/g, '').slice(0, 10),
      });
    } else {
      setFormData({ ...formData, [name]: value });
      if (name === 'confirmPassword' || name === 'password') {
        const pwd = name === 'password' ? value : formData.password;
        const confirm = name === 'confirmPassword' ? value : formData.confirmPassword;
        setPasswordsMatch(pwd === confirm && pwd.length > 0);
      }
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passwordsMatch || formData.password.length < 8) {
      return;
    }
    setIsLoading(true);
    // Simulate signup
    setTimeout(() => {
      router.push('/auth/otp');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center px-4">
      <div className="absolute top-4 left-4">
        <Link href="/">
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
              <span className="text-white text-xl">🏛️</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-primary mb-2 text-center">Create Account</h1>
          <p className="text-foreground/60 text-center mb-8">Start your property registration journey</p>

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Mobile Number</label>
              <Input
                type="tel"
                name="phoneNumber"
                placeholder="Enter 10-digit mobile number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="bg-background border-border"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-background border-border pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50 hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-foreground/60 mt-1">Minimum 8 characters recommended</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`bg-background border-border pr-10 ${
                    formData.confirmPassword && !passwordsMatch ? 'border-red-500' : ''
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/50 hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {formData.confirmPassword && !passwordsMatch && (
                <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
              )}
            </div>

            <div className="text-sm text-foreground/60">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-border" required />
                <span>
                  I agree to the{' '}
                  <Link href="#" className="text-primary hover:text-primary/80">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="#" className="text-primary hover:text-primary/80">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <Button
              type="submit"
              disabled={isLoading || !passwordsMatch || formData.password.length < 8 || !formData.phoneNumber}
              className="w-full bg-primary text-white hover:bg-primary/90"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-foreground/60">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-primary font-semibold hover:text-primary/80 transition">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
