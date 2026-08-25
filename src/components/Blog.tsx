import { ArrowRight, Clock, Tag } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="blog" className="py-24 md:py-32 bg-navy-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-navy/10 text-navy text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5">
              <span>Insights & Advice</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight">
              Insurance, Demystified.
            </h2>
          </div>
          <p className="text-charcoal/65 max-w-sm md:text-right leading-relaxed">
            Practical guides and expert commentary to help you make confident, informed insurance decisions.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} parentVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({
  post,
  index,
  parentVisible,
}: {
  post: (typeof blogPosts)[0];
  index: number;
  parentVisible: boolean;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = `#/blog/${post.slug}`;
  };

  return (
    <article
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`group bg-white rounded-2xl overflow-hidden border border-slate/10 hover:border-tangerine/20 hover:shadow-2xl hover:shadow-navy/8 transition-all duration-300 ${
        parentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image */}
      <a href={`#/blog/${post.slug}`} onClick={handleClick} className="relative overflow-hidden h-52 block">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-navy text-xs font-semibold px-3 py-1 rounded-full">
          <Tag className="w-3 h-3" />
          {post.category}
        </span>
      </a>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-center gap-3 text-slate text-xs mb-4">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-slate/40" />
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        <h3 className="font-display font-bold text-navy text-lg leading-snug mb-3 group-hover:text-tangerine transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-charcoal/60 text-sm leading-relaxed line-clamp-3 mb-5">{post.excerpt}</p>

        <a
          href={`#/blog/${post.slug}`}
          onClick={handleClick}
          className="inline-flex items-center gap-1.5 text-tangerine font-semibold text-sm hover:gap-2.5 transition-all duration-200 group/link"
        >
          Read More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </article>
  );
}
