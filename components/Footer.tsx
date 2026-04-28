import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">eLand Register</h3>
            <p className="text-sm text-primary-foreground/80">
              Simplifying property registration through digital innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-center text-primary-foreground/80">
            © 2026 eLand Register. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
