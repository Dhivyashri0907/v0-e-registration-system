'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, FileText, Lock, Zap, Users, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            Digital Property Registration Made Simple
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 mb-8 text-balance">
            Experience seamless property registration with secure digital documentation, instant verification, and hassle-free submission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 w-full sm:w-auto">
                Start Registration
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-secondary py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 text-center">Why Choose eLand Register?</h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Powered by cutting-edge technology for secure and efficient property registration
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Complete your property registration in minutes with our streamlined process',
              },
              {
                icon: Lock,
                title: 'Bank-Grade Security',
                description: 'Your documents are encrypted and stored with military-grade security protocols',
              },
              {
                icon: FileText,
                title: 'Digital Deeds',
                description: 'Generate and sign property deeds digitally with blockchain verification',
              },
              {
                icon: Shield,
                title: 'Legal Compliance',
                description: 'Fully compliant with Indian property registration laws and regulations',
              },
              {
                icon: Users,
                title: 'Multi-Party Support',
                description: 'Support for multiple buyers, sellers, and witnesses in a single transaction',
              },
              {
                icon: CheckCircle2,
                title: 'Instant Verification',
                description: 'Real-time document verification with automated checks and validations',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg border border-border hover:border-primary transition">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 text-center">How It Works</h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Simple 10-step process to complete your property registration
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              'Bank Details',
              'Personal Info',
              'ID Verification',
              'Property Details',
              'Party Details',
              'Documents',
              'Witness Details',
              'Digital Signature',
              'Payment',
              'Success',
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-2">
                  {index + 1}
                </div>
                <p className="text-sm font-medium text-foreground text-center">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-secondary py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'Is my property registration legally valid online?',
                a: 'Yes, all property registrations completed through eLand Register are fully legally valid and recognized by all Indian government authorities.',
              },
              {
                q: 'How secure is my document storage?',
                a: 'We use military-grade encryption (AES-256) and store all documents on secure cloud servers with automatic backups and disaster recovery.',
              },
              {
                q: 'How long does the registration process take?',
                a: 'On average, the entire process takes 15-30 minutes. Actual registration approval by authorities typically takes 3-5 business days.',
              },
              {
                q: 'What document formats are accepted?',
                a: 'We accept PDF, JPG, PNG, and TIFF formats for all document uploads. File size limit is 10MB per document.',
              },
              {
                q: 'Can I edit documents after submission?',
                a: 'Yes, you can edit and update your documents until final submission. Once submitted to authorities, editing requires formal amendment.',
              },
              {
                q: 'What if I need help during registration?',
                a: 'Our 24/7 customer support team is available via chat, email, and phone to assist with any questions or issues.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-border">
                <h3 className="text-lg font-bold text-primary mb-2">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Register Your Property?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join thousands of satisfied customers who have successfully registered their properties online.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Your Registration Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
