import { useEffect } from 'react';
import { FileText, ArrowLeft, Calendar, Download } from 'lucide-react';
import { policies } from '../data/policies';

export default function PolicyPage({ slug }: { slug: string }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  const policy = policies.find((p) => p.slug === slug);

  if (!policy) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="font-display text-3xl font-bold text-navy mb-3">Document not found</h1>
          <p className="text-charcoal/70 mb-6">
            The document you are looking for could not be located.
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
            <FileText className="w-3.5 h-3.5 text-tangerine" />
            <span className="text-xs font-semibold tracking-widest uppercase text-white/80">Legal Document</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            {policy.title}
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
            {policy.subtitle}
          </p>
          <div className="flex items-center gap-2 mt-6 text-white/45 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Last updated: {policy.lastUpdated}</span>
          </div>
          {policy.documentUrl && (
            <a
              href={policy.documentUrl}
              download
              className="mt-8 inline-flex items-center gap-2.5 px-5 py-3 bg-tangerine hover:bg-tangerine-dark text-navy font-semibold rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-tangerine/30 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              Download {policy.documentLabel ?? policy.title}
            </a>
          )}
        </div>
      </header>

      {/* Body */}
      <article className="max-w-4xl mx-auto px-6 py-14 md:py-20">
        {policy.intro && (
          <p className="text-charcoal/80 text-lg leading-relaxed mb-12 pb-10 border-b border-slate/15">
            {policy.intro}
          </p>
        )}

        <div className="space-y-12">
          {policy.sections.map((section, idx) => (
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

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-slate/15">
          <p className="text-slate text-sm">
            For questions regarding this document, please contact us at{' '}
            <a href="mailto:info@blackswaninsurance.co.za" className="text-tangerine font-medium hover:underline">
              info@blackswaninsurance.co.za
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
