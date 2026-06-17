
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
              src="/Black_Swan_Logo.jpg"
              alt="Black Swan Insurance Brokers"
              className="h-11 w-auto rounded"
              style={{ backgroundColor: '#f7f8fa', mixBlendMode: 'luminosity' }}
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
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            &copy; {new Date().getFullYear()} Black Swan Insurance Brokers. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <button className="text-white/35 hover:text-white/60 text-xs transition-colors duration-200">Privacy Policy</button>
            <button className="text-white/35 hover:text-white/60 text-xs transition-colors duration-200">Terms of Service</button>
            <button className="text-white/35 hover:text-white/60 text-xs transition-colors duration-200">FAIS Disclosure</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
