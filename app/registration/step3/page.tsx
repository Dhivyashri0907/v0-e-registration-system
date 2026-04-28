'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/app/context/RegistrationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Upload } from 'lucide-react';
import Link from 'next/link';

export default function Step3Page() {
  const router = useRouter();
  const { formData, updateFormData } = useRegistration();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>({});

  const documentTypes = [
    { key: 'panCardFile', label: 'PAN Card', icon: '🆔' },
    { key: 'aadhaarCardFile', label: 'Aadhaar Card', icon: '🎫' },
    { key: 'accountNumberFile', label: 'Account Number', icon: '🏦' },
    { key: 'incomeCertificateFile', label: 'Income Certificate', icon: '📜' },
    { key: 'birthCertificateFile', label: 'Birth Certificate', icon: '👶' },
    { key: 'communityCertificateFile', label: 'Community Certificate', icon: '📋' },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const file = e.target.files?.[0];
    if (file) {
      updateFormData({ [key]: file });
      setUploadedFiles({ ...uploadedFiles, [key]: file.name });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    // At least one document should be uploaded
    const hasDocument = documentTypes.some((doc) => formData[doc.key as keyof typeof formData]);
    if (!hasDocument) {
      newErrors.documents = 'Please upload at least one document';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      router.push('/registration/step4');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/registration/step2">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-primary">Property Registration</h1>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: '30%' }}></div>
          </div>
          <p className="text-sm text-foreground/60 mt-2">Step 3 of 10: ID Verification Documents</p>
        </div>

        <Card className="max-w-2xl">
          <div className="p-8">
            <h2 className="text-xl font-bold text-primary mb-6">Upload Verification Documents</h2>

            <form onSubmit={handleNext} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documentTypes.map((doc) => (
                  <div
                    key={doc.key}
                    className="border-2 border-dashed border-border rounded-lg p-4 hover:border-primary transition"
                  >
                    <label htmlFor={doc.key} className="cursor-pointer">
                      <div className="text-center">
                        <div className="text-3xl mb-2">{doc.icon}</div>
                        <h3 className="text-sm font-semibold text-foreground mb-2">{doc.label}</h3>
                        {uploadedFiles[doc.key] ? (
                          <p className="text-xs text-primary font-semibold">✓ {uploadedFiles[doc.key]}</p>
                        ) : (
                          <p className="text-xs text-foreground/60 flex items-center justify-center gap-1">
                            <Upload className="w-3 h-3" />
                            Click to upload
                          </p>
                        )}
                      </div>
                      <input
                        id={doc.key}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png,.tiff"
                        onChange={(e) => handleFileChange(e, doc.key)}
                        className="hidden"
                      />
                    </label>
                  </div>
                ))}
              </div>

              {errors.documents && <p className="text-sm text-red-500">{errors.documents}</p>}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>💡 Tip:</strong> Upload clear, legible scans or photos of your documents. Maximum file size: 10MB
                  per document.
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <Link href="/registration/step2" className="flex-1">
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
