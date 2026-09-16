import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PolicyPage from './components/PolicyPage';
import BlogPostPage from './components/BlogPostPage';

function HomePage() {
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

function PolicyRoute() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="font-sans text-charcoal antialiased">
      <PolicyPage slug={slug!} />
      <Footer />
    </div>
  );
}

function BlogPostRoute() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="font-sans text-charcoal antialiased">
      <BlogPostPage slug={slug!} />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy/:slug" element={<PolicyRoute />} />
        <Route path="/blog/:slug" element={<BlogPostRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
