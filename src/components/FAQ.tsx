import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: 'What insurance services do you provide?',
    answer:
      'We provide a full-spectrum advisory and placement service covering household, vehicle, business, life, and medical insurance — as well as investments such as retirement annuities and savings plans. Our goal is to be your single point of contact for all things risk and protection, so you always have a complete and coordinated picture of your cover.',
  },
  {
    question: 'What are the advantages of using an independent broker like Black Swan?',
    answer:
      'As an independent broker, we are not tied to any single insurer, which means our advice is unbiased. We can access products from all major South African insurers, compare them side by side, and recommend the one that genuinely suits your needs and budget. You benefit from real choice, transparent pricing, and an advisor whose only obligation is to you — not to hit a product quota.',
  },
  {
    question: 'Who is the independent broker model most suitable for?',
    answer:
      'Our model works best for individuals and families with multiple insurance needs (home, car, life, medical) who want everything managed in one place, as well as small and medium business owners who need commercial and personal risk addressed holistically. If you\'re frustrated by dealing with multiple providers, struggling to understand what you\'re actually covered for, or simply want a trusted advisor in your corner, this model is for you.',
  },
  {
    question: 'How do you partner and engage with your clients?',
    answer:
      'We start with a comprehensive risk assessment to understand your current cover and any gaps. We then present a consolidated, plain-language plan with clear trade-offs and pricing from multiple insurers. Once policies are in place, we schedule annual reviews to ensure your cover keeps pace with your life changes. Whenever you need us — for a claim, a quote update, or just a question — we are a phone call or email away.',
  },
  {
    question: 'How does Black Swan handle claims on my behalf?',
    answer:
      'Claims are where an independent broker truly earns its value. When you submit a claim, we manage the entire process with the insurer on your behalf — from lodgement to settlement. We hold providers to their agreed service levels, challenge unfair rejections, and keep you informed at every step. You should never feel alone or confused during a claim.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faqs" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-navy-50 text-navy text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5">
            <span>FAQs</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy leading-tight mb-5">
            Common Questions,{' '}
            <span className="text-tangerine">Clear Answers</span>
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            Insurance shouldn't be confusing. Here are the questions we hear most often.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              parentVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
  parentVisible,
}: {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  parentVisible: boolean;
}) {
  return (
    <div
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`border rounded-2xl overflow-hidden transition-all duration-500 ${
        isOpen ? 'border-tangerine/30 shadow-lg shadow-navy/5' : 'border-slate/15 hover:border-slate/30'
      } ${parentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
        onClick={onToggle}
      >
        <span
          className={`font-display font-semibold text-base md:text-lg leading-snug transition-colors duration-200 ${
            isOpen ? 'text-tangerine' : 'text-navy group-hover:text-tangerine'
          }`}
        >
          {faq.question}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-tangerine' : 'bg-navy-50 group-hover:bg-tangerine/10'
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-navy" />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-6 text-charcoal/70 leading-relaxed text-sm md:text-base">{faq.answer}</p>
      </div>
    </div>
  );
}
