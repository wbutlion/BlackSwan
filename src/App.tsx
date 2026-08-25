import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PolicyPage from './components/PolicyPage';
import { policies } from './data/policies';

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash.replace(/^#\/?/, ''));
  useEffect(() => {
    const onChange = () => setHash(window.location.hash.replace(/^#\/?/, ''));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash;
}

export default function App() {
  const route = useHashRoute();
  const policySlug = policies.find((p) => p.slug === route)?.slug;

  if (policySlug) {
    return (
      <div className="font-sans text-charcoal antialiased">
        <PolicyPage slug={policySlug} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans text-charcoal antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
