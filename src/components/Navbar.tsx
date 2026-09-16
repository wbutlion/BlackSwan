import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView();
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: '#f7f8fa',
        boxShadow: scrolled ? '0 2px 12px rgba(31,32,40,0.10)' : 'none',
        paddingTop: scrolled ? '8px' : '12px',
        paddingBottom: scrolled ? '8px' : '12px',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo({ top: 0 }); }}
          className="flex items-center group"
        >
          <img
            src="/Black_Swan_Insurance_Brokers_Logo.svg"
            alt="Black Swan Insurance Brokers"
            className="h-11 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className="text-charcoal hover:text-navy text-sm font-medium tracking-wide transition-colors duration-200 relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-tangerine after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-navy p-1.5"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="border-t border-navy/10 px-6 py-4 flex flex-col gap-1" style={{ backgroundColor: '#f7f8fa' }}>
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className="text-charcoal hover:text-navy text-sm font-medium py-2.5 text-left tracking-wide transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
