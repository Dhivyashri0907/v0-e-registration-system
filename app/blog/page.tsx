'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Property Registration: A Complete Guide',
    excerpt: 'Learn the basics of property registration and why digital registration is the future.',
    author: 'Rajesh Kumar',
    date: 'April 15, 2026',
    category: 'Guide',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Digital Signatures: Security and Legal Validity',
    excerpt: 'Everything you need to know about digital signatures and their legal status in India.',
    author: 'Priya Singh',
    date: 'April 10, 2026',
    category: 'Security',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Common Mistakes to Avoid During Property Registration',
    excerpt: 'Discover the most common mistakes people make and how to avoid them.',
    author: 'Amit Patel',
    date: 'April 5, 2026',
    category: 'Tips',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Property Rights and Legal Protection',
    excerpt: 'A detailed overview of your rights and protections when registering property.',
    author: 'Neha Sharma',
    date: 'March 28, 2026',
    category: 'Legal',
    readTime: '8 min read',
  },
  {
    id: 5,
    title: 'The Future of Real Estate Technology',
    excerpt: 'Explore how blockchain and AI are transforming property registration.',
    author: 'Vikram Desai',
    date: 'March 20, 2026',
    category: 'Technology',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'Tax Benefits in Property Registration',
    excerpt: 'Learn about tax benefits and exemptions available during property registration.',
    author: 'Anita Gupta',
    date: 'March 15, 2026',
    category: 'Finance',
    readTime: '7 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Blog & Resources</h1>
          <p className="text-lg text-foreground/70">
            Stay informed with latest insights, tips, and guides on property registration.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg border border-border overflow-hidden hover:border-primary transition group"
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary h-40"></div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground/60">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-primary/80 transition">
                    {post.title}
                  </h3>

                  <p className="text-foreground/70 text-sm mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-foreground/60">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>

                  <button className="mt-4 text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-secondary py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-foreground/70 mb-8">
            Get the latest updates, tips, and guides delivered to your inbox every week.
          </p>

          <form className="flex gap-3 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
