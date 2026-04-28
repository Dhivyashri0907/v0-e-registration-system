'use client';

import { useRegistration } from '@/app/context/RegistrationContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { CheckCircle2, Download, FileText, ArrowRight } from 'lucide-react';

export default function SuccessPage() {
  const { formData } = useRegistration();

  const generateApplicationNumber = () => {
    return `ELAND${Date.now().toString().slice(-8)}`;
  };

  const applicationNumber = formData.applicationNumber || generateApplicationNumber();
  const submissionDateTime = formData.submissionDateTime || new Date().toLocaleString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-2xl border-2 border-green-500">
        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-20 h-20 text-green-500" />
          </div>

          <h1 className="text-3xl font-bold text-green-600 mb-2">Registration Submitted Successfully!</h1>
          <p className="text-lg text-foreground/70 mb-8">
            Your property registration application has been submitted to the authorities.
          </p>

          {/* Application Details */}
          <div className="bg-muted rounded-lg p-6 mb-8 text-left">
            <h2 className="font-bold text-primary mb-4">Application Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-foreground/60">Application Number</p>
                <p className="text-lg font-bold text-primary">{applicationNumber}</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Submission Date & Time</p>
                <p className="text-lg font-bold text-foreground">{submissionDateTime}</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Property Type</p>
                <p className="text-lg font-bold text-foreground capitalize">{formData.propertyType || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Applicant Name</p>
                <p className="text-lg font-bold text-foreground">{formData.fullName || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
            <h2 className="font-bold text-blue-900 mb-4">What Happens Next?</h2>
            <ol className="space-y-3 text-sm text-blue-900">
              <li className="flex gap-3">
                <span className="font-bold">1.</span>
                <span>Our team will verify your documents within 2-3 business days.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">2.</span>
                <span>You&apos;ll receive an email confirmation once verification is complete.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">3.</span>
                <span>The property deed will be registered with the authorities (3-5 business days).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">4.</span>
                <span>A digital certificate will be issued and sent to your registered email.</span>
              </li>
            </ol>
          </div>

          {/* Documents Section */}
          <div className="bg-muted rounded-lg p-6 mb-8">
            <h2 className="font-bold text-primary mb-4 text-left">Important Documents</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 bg-white border border-border rounded-lg hover:border-primary transition">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="font-medium">Application Receipt</span>
                </div>
                <Download className="w-5 h-5 text-foreground/60" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-white border border-border rounded-lg hover:border-primary transition">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="font-medium">Property Deed</span>
                </div>
                <Download className="w-5 h-5 text-foreground/60" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-white border border-border rounded-lg hover:border-primary transition">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="font-medium">Declaration Form</span>
                </div>
                <Download className="w-5 h-5 text-foreground/60" />
              </button>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-yellow-900">
              <strong>Need help?</strong> Contact our support team at{' '}
              <a href="mailto:support@elandregister.com" className="text-primary hover:text-primary/80 font-semibold">
                support@elandregister.com
              </a>
              {' '}or call{' '}
              <a href="tel:+919876543210" className="text-primary hover:text-primary/80 font-semibold">
                +91 98765 43210
              </a>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="flex-1">
              <Button variant="outline" className="w-full">
                Back to Home
              </Button>
            </Link>
            <Link href="/" className="flex-1">
              <Button className="w-full bg-primary text-white hover:bg-primary/90 flex items-center justify-center gap-2">
                View Dashboard
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Reference Number */}
          <p className="text-xs text-foreground/50 mt-8">
            Please save your application number: <strong>{applicationNumber}</strong> for future reference.
          </p>
        </div>
      </Card>
    </div>
  );
}
