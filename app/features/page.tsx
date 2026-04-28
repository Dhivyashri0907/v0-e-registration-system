'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Zap,
  Lock,
  FileText,
  Shield,
  Users,
  CheckCircle2,
  Database,
  Clock,
  DollarSign,
  Smartphone,
  Award,
  Globe,
} from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Powerful Features for Seamless Registration</h1>
          <p className="text-lg text-foreground/70">
            Everything you need to register your property digitally with confidence and security.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-secondary py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Core Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast Registration',
                description: 'Complete your registration in minutes with our streamlined 10-step process.',
              },
              {
                icon: Lock,
                title: 'Bank-Grade Security',
                description: 'Military-grade AES-256 encryption for all your sensitive documents.',
              },
              {
                icon: FileText,
                title: 'Digital Deeds Generation',
                description: 'Automatically generate legal property deeds with pre-filled information.',
              },
              {
                icon: Shield,
                title: 'Legal Compliance',
                description: 'Fully compliant with Indian property registration laws and regulations.',
              },
              {
                icon: Users,
                title: 'Multi-Party Support',
                description: 'Support for multiple buyers, sellers, and witnesses in one transaction.',
              },
              {
                icon: CheckCircle2,
                title: 'Instant Verification',
                description: 'Real-time document verification with automated checks and validations.',
              },
              {
                icon: Database,
                title: 'Cloud Storage',
                description: 'Secure cloud storage with automatic backups and disaster recovery.',
              },
              {
                icon: Clock,
                title: '24/7 Accessibility',
                description: 'Access your registration anytime, anywhere from any device.',
              },
              {
                icon: Smartphone,
                title: 'Mobile Friendly',
                description: 'Fully responsive design optimized for mobile and tablet devices.',
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

      {/* Advanced Features */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Advanced Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Award,
                title: 'Blockchain Verification',
                description: 'All documents are verified and stored using blockchain technology for immutable records.',
              },
              {
                icon: DollarSign,
                title: 'Transparent Pricing',
                description: 'No hidden charges. See exactly what you are paying for at each step.',
              },
              {
                icon: Globe,
                title: 'Multi-Language Support',
                description: 'Available in English, Hindi, Kannada, Tamil, Telugu, and Malayalam.',
              },
              {
                icon: Users,
                title: 'Expert Support Team',
                description: '24/7 customer support via chat, email, and phone in multiple languages.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-secondary p-8 rounded-lg border border-border">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Experience These Features?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Start your property registration today and experience the future of digital documentation.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
