import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#1f2028' }}
    >
      {/* Soft radial glow behind content */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="hero-animate opacity-0 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-tangerine animate-pulse" />
            <span className="text-white/90 text-xs font-medium tracking-widest uppercase">
              Independent Insurance Brokers
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-animate-delay-1 opacity-0 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Protecting
            <span className="block text-tangerine">What Matters</span>
            <span className="block">Most.</span>
          </h1>

          {/* Subheading */}
          <p className="hero-animate-delay-2 opacity-0 text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            We translate the complexity of insurance into a clear, personalised protection plan — sourced
            from South Africa's top providers.
            Honest advice. Best-fit cover. Peace of mind.
          </p>

          {/* CTAs */}
          <div className="hero-animate-delay-3 opacity-0 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-tangerine hover:bg-tangerine-dark text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-tangerine/40 hover:-translate-y-0.5 text-base"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView()}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-all duration-200 text-base"
            >
              Explore Our Services
            </button>
          </div>

          {/* Stats row */}
          <div className="hero-animate-delay-4 opacity-0 mt-16 flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { value: '50+', label: 'Years Experience' },
              { value: '50+', label: 'Leading Providers' },
              { value: '100%', label: 'Independent Advice' },
              { value: 'Award\u2011Winning', label: 'IISA Broker of the Year · FIA Excellence Award · Santam Top Broker' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-display text-3xl font-bold text-tangerine">{stat.value}</span>
                <span className="text-white/60 text-sm mt-0.5 text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
