import { Link } from 'react-router-dom';
import { policyFooterLinks } from '../data/policies';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView();
  };

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-10">
          {/* Brand column */}
          <div>
            <img
              src="/Black_Swan_Insurance_Brokers_Logo_reversed.svg"
              alt="Black Swan Insurance Brokers"
              className="h-11 w-auto"
            />
          </div>

          {/* Navigation — horizontal */}
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className="text-white/65 hover:text-white text-sm transition-colors duration-200"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs">
            &copy; {new Date().getFullYear()} Black Swan Insurance Brokers. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {policyFooterLinks.map((link, idx) => (
              <li key={link.slug} className="flex items-center gap-x-3">
                <Link
                  to={`/policy/${link.slug}`}
                  className="text-white/35 hover:text-white/70 text-xs transition-colors duration-200"
                >
                  {link.label}
                </Link>
                {idx < policyFooterLinks.length - 1 && (
                  <span className="text-white/20 text-xs select-none" aria-hidden="true">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
