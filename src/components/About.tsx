import { CheckCircle2, Award, Users, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const differentiators = [
  {
    icon: Award,
    title: 'Independent & Unbiased',
    description:
      'As an independent broker, we compare products across multiple leading insurers — giving you honest advice untainted by quotas or commissions.',
  },
  {
    icon: Users,
    title: 'Family-Owned, Client-Focused',
    description:
      'We are a boutique, family-run business. That means you deal directly with people who care — not a call centre.',
  },
  {
    icon: TrendingUp,
    title: '50+ Years of Experience',
    description:
      'Our team brings over five decades of combined expertise in South African insurance across personal, commercial, and life risk.',
  },
  {
    icon: CheckCircle2,
    title: 'Superior Claims Advocacy',
    description:
      'When it matters most, we stand in your corner — managing and advocating on your behalf through every step of the claims process.',
  },
];


export default function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: founderRef, isVisible: founderVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-navy-50 text-navy text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5">
            <span>About Us</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight mb-5">
            More Than a Broker.{' '}
            <span className="text-tangerine">A Trusted Partner.</span>
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            Black Swan Insurance Brokers was founded on a simple belief: every South African deserves
            access to honest, personalised insurance advice that actually serves their interests.
          </p>
        </div>

        {/* What we do + differentiators grid */}
        <div
          className={`grid md:grid-cols-2 gap-6 mb-24 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Mission card */}
          <div className="md:col-span-2 bg-navy rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
              To be a trusted advisor that provides peace of mind by securing a clear, cost-effective
              set of insurance and investment solutions that protect your business and your family —
              while always placing your best interests first.
            </p>
          </div>

          {/* Differentiator cards */}
          {differentiators.map((d, i) => (
            <div
              key={d.title}
              style={{ transitionDelay: `${(i + 3) * 100}ms` }}
              className={`group bg-white border border-slate/10 rounded-2xl p-7 hover:border-tangerine/30 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-navy-50 group-hover:bg-tangerine/10 flex items-center justify-center mb-5 transition-colors duration-300">
                <d.icon className="w-5 h-5 text-navy group-hover:text-tangerine transition-colors duration-300" />
              </div>
              <h4 className="font-display font-semibold text-navy text-lg mb-2">{d.title}</h4>
              <p className="text-charcoal/65 text-sm leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>

        {/* Founder section */}
        <div
          ref={founderRef as React.RefObject<HTMLDivElement>}
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
            founderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Photo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto md:mx-0">
              <img
                src="/Butlion.jpg"
                alt="Founder of Black Swan Insurance Brokers"
                className="w-full h-full object-cover object-top grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 md:right-auto md:-left-5 bg-tangerine text-white rounded-2xl px-6 py-4 shadow-xl shadow-tangerine/30">
              <span className="font-display font-bold text-3xl block">50+</span>
              <span className="text-white/90 text-xs font-medium uppercase tracking-wider">Years Experience</span>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-navy-50 text-navy text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5">
              <span>Our Founder</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight mb-5">
              Built on Decades of{' '}
              <span className="text-tangerine">Real-World Experience</span>
            </h3>
            <p className="text-charcoal/70 leading-relaxed mb-5">
              Black Swan Insurance Brokers traces its roots back over 50 years, originally trading as
              Insurance Unlimited before being rebranded in 2026. After witnessing how often clients
              were underserved by generic products and single-provider brokers, the decision was made
              to build something different.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-5">
              The result is a boutique, family-run brokerage that treats every client as an individual —
              taking the time to understand your full risk picture and building a protection plan that
              genuinely reflects your needs and your budget.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              What began as a single-broker practice has grown organically into one of South Africa's oldest
              and largest independent brokerage firm, yet its founding commitment to tailored advice and
              genuinely personalized service has never wavered.
            </p>
            <div className="space-y-3">
              {[
                'Fully registered and regulated broker',
                'Access to all major South African insurers',
                'Personalised risk assessment included',
                'Proactive annual policy reviews',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-tangerine flex-shrink-0" />
                  <span className="text-charcoal/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
