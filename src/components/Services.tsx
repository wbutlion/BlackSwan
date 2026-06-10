import { Home, Car, Briefcase, Heart, Stethoscope, TrendingUp, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Home,
    title: 'Household Insurance',
    description:
      'Comprehensive cover for your home, contents, and valuables — tailored to your property\'s unique risks and replacement values.',
    detail: 'Buildings, contents, all-risk, valuables & more',
  },
  {
    icon: Car,
    title: 'Vehicle Insurance',
    description:
      'From comprehensive motor cover to third-party liability, we find the right policy for your car, bakkie, motorbike, or fleet.',
    detail: 'Comprehensive, third-party, fleet & commercial',
  },
  {
    icon: Briefcase,
    title: 'Business Insurance',
    description:
      'Protect your enterprise with commercial cover that accounts for property, liability, business interruption, and employee risk.',
    detail: 'Commercial property, liability, BOP & cyber',
  },
  {
    icon: Heart,
    title: 'Life Insurance',
    description:
      'Life, disability, and critical illness cover structured around your family\'s income needs, debts, and long-term goals.',
    detail: 'Life, disability, dread disease & income protection',
  },
  {
    icon: Stethoscope,
    title: 'Medical Insurance',
    description:
      'We compare medical aids and health insurance options across leading schemes to match your health needs and budget.',
    detail: 'Medical aid, gap cover & health insurance',
  },
  {
    icon: TrendingUp,
    title: 'Investments',
    description:
      'Grow and protect your wealth with tailored investment solutions including retirement annuities, unit trusts, and savings plans.',
    detail: 'RA, unit trusts, endowments & offshore',
  },
];

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 md:py-32 bg-navy-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-navy/10 text-navy text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5">
            <span>What We Cover</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight mb-5">
            Stop Guessing.{' '}
            <span className="text-tangerine">Know What You're Covered For.</span>
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            Hidden exclusions, rising premiums, and confusing jargon shouldn't stand between you and
            genuine protection. We compare options across every major provider, translate the fine
            print into plain decisions, and place your cover where it actually counts — so you never
            again wonder whether you're underinsured or paying for something you don't need.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className={`mt-16 bg-navy rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-700 delay-500`}
        >
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Not sure where to start?
            </h3>
            <p className="text-white/65 max-w-lg">
              Our advisors will assess your full risk profile — personal and business — and recommend
              the right combination of cover at competitive terms.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView()}
            className="group flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-tangerine hover:bg-tangerine-dark text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-tangerine/30 hover:-translate-y-0.5"
          >
            Get a Free Assessment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`group bg-white rounded-2xl p-8 border border-slate/10 hover:border-tangerine/20 hover:shadow-2xl hover:shadow-navy/8 transition-all duration-300 cursor-default ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-navy-50 group-hover:bg-navy transition-colors duration-300 flex items-center justify-center mb-6">
        <service.icon className="w-6 h-6 text-navy group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-navy text-xl mb-3 group-hover:text-navy transition-colors duration-200">
        {service.title}
      </h3>
      <p className="text-charcoal/65 text-sm leading-relaxed mb-5">{service.description}</p>

      {/* Detail tag */}
      <div className="pt-4 border-t border-slate/10">
        <span className="text-xs text-slate font-medium">{service.detail}</span>
      </div>
    </div>
  );
}
