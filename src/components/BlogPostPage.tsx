import { useEffect } from 'react';
import { ArrowLeft, Clock, Tag, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPostPage({ slug }: { slug: string }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="font-display text-3xl font-bold text-navy mb-3">Article not found</h1>
          <p className="text-charcoal/70 mb-6">
            The article you are looking for could not be located.
          </p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}
            className="inline-flex items-center gap-2 text-tangerine font-semibold text-sm hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero header */}
      <header className="bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </a>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3.5 py-1.5 mb-5">
            <Tag className="w-3.5 h-3.5 text-tangerine" />
            <span className="text-xs font-semibold tracking-widest uppercase text-white/80">{post.category}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-white/45 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>
        </div>
      </header>

      {/* Cover image */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 md:-mt-14 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy/15">
          <img src={post.image} alt={post.title} className="w-full h-64 md:h-80 object-cover" />
        </div>
      </div>

      {/* Body */}
      <article className="max-w-4xl mx-auto px-6 py-14 md:py-20">
        {post.intro && (
          <p className="text-charcoal/80 text-lg leading-relaxed mb-12 pb-10 border-b border-slate/15">
            {post.intro}
          </p>
        )}

        <div className="space-y-12">
          {post.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.body.map((para, i) => (
                  <p key={i} className="text-charcoal/75 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Back to home */}
        <div className="mt-16 pt-8 border-t border-slate/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-slate text-sm">
            Have a question about this article? Contact us at{' '}
            <a href="mailto:info@blackswaninsurance.co.za" className="text-tangerine font-medium hover:underline">
              info@blackswaninsurance.co.za
            </a>
            .
          </p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}
            className="inline-flex items-center gap-2 px-5 py-3 bg-navy hover:bg-navy-dark text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </a>
        </div>
      </article>
    </div>
  );
}
