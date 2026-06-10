import { ArrowRight, Clock, Tag } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const posts = [
  {
    image:
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=700',
    category: 'Business Insurance',
    readTime: '5 min read',
    date: 'May 2025',
    title: 'Why Your Business Needs More Than Just a Basic Policy',
    excerpt:
      'Many SME owners underestimate the gaps in their commercial cover until a claim reveals the truth. Here\'s how a full risk assessment can prevent costly surprises and ensure your business is properly protected at every stage of growth.',
  },
  {
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=700',
    category: 'Personal Finance',
    readTime: '4 min read',
    date: 'April 2025',
    title: 'The Real Cost of Underinsurance — and How to Avoid It',
    excerpt:
      'Underinsurance is one of the most common and avoidable financial risks in South Africa. We break down what average clause means, how it applies to your home and vehicle, and the practical steps you can take today to make sure you\'re never left short.',
  },
  {
    image:
      'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=700',
    category: 'Claims Guidance',
    readTime: '6 min read',
    date: 'March 2025',
    title: 'How to Navigate a Claim — and Why Your Broker Matters Most',
    excerpt:
      'The claims process is where the value of a good broker becomes crystal clear. From lodgement to settlement, we walk you through exactly what to expect, what documentation you\'ll need, and how having an independent advocate in your corner can make a significant difference to your outcome.',
  },
];

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
          {posts.map((post, i) => (
            <BlogCard key={post.title} post={post} index={i} parentVisible={isVisible} />
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
  post: (typeof posts)[0];
  index: number;
  parentVisible: boolean;
}) {
  return (
    <article
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`group bg-white rounded-2xl overflow-hidden border border-slate/10 hover:border-tangerine/20 hover:shadow-2xl hover:shadow-navy/8 transition-all duration-300 ${
        parentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
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
      </div>

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

        <button className="inline-flex items-center gap-1.5 text-tangerine font-semibold text-sm hover:gap-2.5 transition-all duration-200 group/link">
          Read More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </article>
  );
}
